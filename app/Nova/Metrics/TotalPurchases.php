<?php

namespace App\Nova\Metrics;

use App\Enums\TradeType;
use App\Models\Trade;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;

/**
 * 总认购数量统计
 */
class TotalPurchases extends Value
{
    /**
     * Calculate the value of the metric.
     *
     * @param  NovaRequest  $request  当前请求
     * @return mixed 结果
     */
    public function calculate(NovaRequest $request)
    {
        return $this->sum($request, Trade::where('type', TradeType::PURCHASE->value), 'amount')->suffix(' AESC');
    }

    /**
     * 范围列表
     *
     * @return array<int|string, string>
     */
    public function ranges()
    {
        return [
            'TODAY' => __('今天'),
            30 => __('最近30天'),
            'MTD' => __('本月'),
            'QTD' => __('本季度'),
            'YTD' => __('今年'),
            'ALL' => __('所有时间'),
        ];
    }

    /**
     * URI Key
     */
    public function uriKey()
    {
        return 'total-purchases';
    }

    /**
     * 名称
     */
    public function name()
    {
        return '总认购数量';
    }
}
