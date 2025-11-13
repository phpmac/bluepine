<?php

namespace App\Http\Controllers;

use Apip\Wallet\Apip;
use App\Enums\LogType;
use App\Enums\TradeType;
use App\Models\Log;
use App\Models\Trade;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotifyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        logger('request', $request->all());

        $apip = new Apip;
        $apip->validate($request);

        // 必须校验哈希唯一
        $trade_exists = Trade::where('tx_hash', $request->hash)->exists();
        $log_exists = Log::where('tx_hash', $request->hash)->exists();
        if ($trade_exists || $log_exists) {
            report("交易哈希 {$request->hash} 已存在");

            return 'fail';
        }

        if ($request->chain_name != 'BNB') {
            report("只支持BNB主网,咱不支持 {$request->chain_name} 主网");

            return 'fail';
        }

        DB::transaction(function () use ($request) {

            $data = [
                'request' => $request->all(),
                // 下面是安全填充
                'buyer' => '-',
                'account' => '-',
                'user' => '-',
                'tokenAmount' => 0,
                'paymentAmount' => 0,
                'referrer' => '-',
                'referralAmount' => 0,
            ];

            throw_if(! $request->event_name, '事件名称不能为空');

            // 匹配日志记录
            $logType = match ($request->event_name) {
                'Purchase' => LogType::PURCHASE,
                'Claim' => LogType::CLAIM,
                'AddDirectReferralWhiteList' => LogType::ADD_WHITELIST,
                'RemoveDirectReferralWhiteList' => LogType::REMOVE_WHITELIST,
                default => throw new \Exception("未知的事件名称: {$request->event_name}"),
            };
            $data['logType'] = $logType;

            logger('data', $data);

            // 创建交易记录
            if ($logType === LogType::PURCHASE) {

                // 解析参数
                $data['buyer'] = $request->params[0];
                $data['tokenAmount'] = formatUints($request->params[1], 16);
                $data['paymentAmount'] = formatUints($request->params[2], 18);
                $data['referrer'] = $request->params[3];
                $data['referralAmount'] = formatUints($request->params[4], 16);

                logger('data2', $data);

                // 确保创建用户
                $user = User::firstOrCreate([
                    'address' => $data['buyer'],
                ], [
                    'name' => substr($data['buyer'], 0, 6).'...'.substr($data['buyer'], -4),
                ]);

                // 确保创建上级用户
                $parent = User::firstOrCreate([
                    'address' => $data['referrer'],
                ], [
                    'name' => substr($data['referrer'], 0, 6).'...'.substr($data['referrer'], -4),
                ]);

                // ! 确保上级余额增加显示
                if (bccomp($data['tokenAmount'], '0', 4) > 0) {
                    $parent->increment('reward_amount', $data['referralAmount']);
                }

                // 确保绑定上级
                if (! $user->parent_id) {
                    $user->bindParent($parent);
                    $user->refresh(); // 重新加载用户数据以获取更新后的 parent_ids
                }

                $user->increment('aesc', $data['tokenAmount']); // 记录余额
                $user->increment('self_performance', $data['tokenAmount']); // 记录个人业绩

                // 更新直属上级的直推业绩
                if ($user->parent_id) {
                    User::where('id', $user->parent_id)->increment('direct_performance', $data['tokenAmount']);
                }

                // 更新所有上级的团队业绩
                // 只会给第一次绑定上级记录团队业绩
                if ($user->parent_ids && $parent->id == $user->parent_id) {
                    User::whereIn('id', $user->parent_ids)->increment('team_performance', $data['tokenAmount']);
                }

                $user->trades()->create([
                    'amount' => $data['tokenAmount'],
                    'type' => TradeType::PURCHASE,
                    'block_number' => $request->block_number,
                    'tx_hash' => $request->hash,
                ]);
            } elseif ($logType === LogType::CLAIM) {

                // 解析参数
                $data['account'] = $request->params[0];
                $data['tokenAmount'] = formatUints($request->params[1], 16);

                $user = User::where('address', $data['account'])->firstOrFail();

                $user->decrement('aesc', $data['tokenAmount']); // 记录余额

                $user->trades()->create([
                    'amount' => $data['tokenAmount'],
                    'type' => TradeType::CLAIM,
                    'block_number' => $request->block_number,
                    'tx_hash' => $request->hash,
                ]);
            } elseif ($logType === LogType::ADD_WHITELIST) {
                $data['user'] = $request->params[0];

                $user = User::updateOrCreate([
                    'address' => $data['user'],
                ], [
                    'name' => substr($data['user'], 0, 6).'...'.substr($data['user'], -4),
                    'is_10_performance' => true,
                ]);

                // 更新用户的10%收益地址标识
                User::where('address', $data['user'])->update(['is_10_performance' => true]);
            } elseif ($logType === LogType::REMOVE_WHITELIST) {
                $data['user'] = $request->params[0];

                $user = User::updateOrCreate([
                    'address' => $data['user'],
                ], [
                    'name' => substr($data['user'], 0, 6).'...'.substr($data['user'], -4),
                    'is_10_performance' => false,
                ]);

                // 移除用户的10%收益地址标识
                User::where('address', $data['user'])->update(['is_10_performance' => false]);
            }

            $content = match ($logType) {
                LogType::PURCHASE => "用户 {$data['buyer']} 购买了 {$data['tokenAmount']} 数量代币",
                LogType::CLAIM => "用户 {$data['account']} 领取了 {$data['tokenAmount']} 数量代币",
                LogType::ADD_WHITELIST => "管理员添加 {$data['user']} 为10%收益地址",
                LogType::REMOVE_WHITELIST => "管理员移除了 {$data['user']} 的10%收益地址",
                default => throw new \Exception("未知的事件名称: {$logType}"),
            };

            // 创建日志记录
            Log::create([
                'type' => $logType,
                'tx_hash' => $request->hash,
                'data' => $data,
                'content' => $content,
            ]);
        });

        return 'success';
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
