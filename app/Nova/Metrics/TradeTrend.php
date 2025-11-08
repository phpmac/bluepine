<?php

namespace App\Nova\Metrics;

use App\Models\Trade;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;

/**
 * 交易趋势统计
 */
class TradeTrend extends Value
{
    /**
     * Calculate the value of the metric.
     *
     * @param  NovaRequest  $request  当前请求
     * @return mixed 结果
     */
    public function calculate(NovaRequest $request)
    {
        return $this->count($request, Trade::class)->suffix(' 笔');
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
        ];
    }

    /**
     * URI Key
     */
    public function uriKey()
    {
        return 'trade-trend';
    }

    /**
     * 名称
     */
    public function name()
    {
        return '交易趋势';
    }
}
