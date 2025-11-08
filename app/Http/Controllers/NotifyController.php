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

            // 必须校验哈希唯一
            throw_if(Trade::where('tx_hash', $request->hash)->exists(), "交易哈希 {$request->hash} 已存在");
            throw_if(Log::where('tx_hash', $request->hash)->exists(), "日志哈希 {$request->hash} 已存在");

            // 确保创建用户
            $user = User::firstOrCreate([
                'address' => $request->address,
            ], [
                'name' => substr($request->address, 0, 6).'...'.substr($request->address, -4),
            ]);

            // 确保创建上级用户
            $parent = User::firstOrCreate([
                'address' => $request->parent_address,
            ], [
                'name' => substr($request->parent_address, 0, 6).'...'.substr($request->parent_address, -4),
            ]);

            // 确保绑定上级
            if (! $user->parent()->exists()) {
                $user->bindParent($parent);
            }

            throw_if(! $request->event_name, '事件名称不能为空');

            // 处理数量 默认是16
            $amount = Utils::fromWei($request->amount, 16);

            // 匹配日志记录
            $logType = match ($request->event_name) {
                'purchase' => LogType::PURCHASE,
                'claim' => LogType::CLAIM,
                'AddDirectReferralWhiteList' => LogType::ADD_WHITELIST,
                'RemoveDirectReferralWhiteList' => LogType::REMOVE_WHITELIST,
                default => throw new \Exception("未知的事件名称: {$request->event_name}"),
            };

            $content = match ($request->event_name) {
                'purchase' => "用户 {$user->name} 购买了 {$amount} 数量代币",
                'claim' => "用户 {$user->name} 领取了 {$amount} 数量代币",
                'AddDirectReferralWhiteList' => "管理员添加 {$request->params[0]} 为10%收益地址",
                'RemoveDirectReferralWhiteList' => "管理员移除了 {$request->params[0]} 的10%收益地址",
                default => throw new \Exception("未知的事件名称: {$request->event_name}"),
            };

            // 创建日志记录
            Log::create([
                'type' => $logType,
                'tx_hash' => $request->hash,
                'data' => $request->all(),
                'content' => $content,
            ]);

            // 创建交易记录
            if ($request->event_name === TradeType::PURCHASE->value) {
                $user->increment('aesc', $amount); // 记录余额
                $user->increment('self_performance', $amount); // 记录个人业绩
                User::whereIn('id', $user->parent_ids ?? [])->increment('team_performance', $amount);

                $user->trades()->create([
                    'amount' => $amount,
                    'type' => TradeType::PURCHASE,
                    'block_number' => $request->block_number,
                    'tx_hash' => $request->hash,
                ]);
            } elseif ($request->event_name === TradeType::CLAIM->value) {
                $user->decrement('aesc', $amount); // 记录余额

                $user->trades()->create([
                    'amount' => $amount,
                    'type' => TradeType::CLAIM,
                    'block_number' => $request->block_number,
                    'tx_hash' => $request->hash,
                ]);
            }
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
