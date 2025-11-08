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
use Web3\Utils;

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

        $apip = new Apip;
        $apip->validate($request);

        logger($request->all());

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

            // 必须校验哈希唯一
            $trade_exists = Trade::where('tx_hash', $request->hash)->exists();
            $log_exists = Log::where('tx_hash', $request->hash)->exists();
            if ($trade_exists || $log_exists) {
                return;
            }

            throw_if(! $request->event_name, '事件名称不能为空');

            // 匹配日志记录
            $logType = match ($request->event_name) {
                'Purchase' => LogType::PURCHASE,
                'Claim' => LogType::CLAIM,
                'AddDirectReferralWhiteList' => LogType::ADD_WHITELIST,
                'RemoveDirectReferralWhiteList' => LogType::REMOVE_WHITELIST,
                default => throw new \Exception("未知的事件名称: {$request->event_name}"),
            };

            // 创建交易记录
            if ($logType === TradeType::PURCHASE) {

                // 解析参数
                $data['buyer'] = $request->params[0];
                $data['tokenAmount'] = Utils::fromWei($request->params[1], 16);
                $data['paymentAmount'] = Utils::fromWei($request->params[2], 16);
                $data['referrer'] = $request->params[3];
                $data['referralAmount'] = Utils::fromWei($request->params[4], 16);

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

                // 确保绑定上级
                if (! $user->parent()->exists()) {
                    $user->bindParent($parent);
                }

                $user->increment('aesc', $data['tokenAmount']); // 记录余额
                $user->increment('self_performance', $data['tokenAmount']); // 记录个人业绩
                User::whereIn('id', $user->parent_ids ?? [])->increment('team_performance', $data['tokenAmount']);

                $user->trades()->create([
                    'amount' => $data['tokenAmount'],
                    'type' => TradeType::PURCHASE,
                    'block_number' => $request->block_number,
                    'tx_hash' => $request->hash,
                ]);
            } elseif ($logType === TradeType::CLAIM) {

                // 解析参数
                $data['account'] = $request->params[0];
                $data['tokenAmount'] = Utils::fromWei($request->params[1], 16);

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
            } elseif ($logType === LogType::REMOVE_WHITELIST) {
                $data['user'] = $request->params[0];
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
