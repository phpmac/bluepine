<?php

namespace App\Nova\Metrics;

use App\Models\Log;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;

/**
 * 日志趋势统计
 */
class LogTrend extends Value
{
    /**
     * Calculate the value of the metric.
     *
     * @param  NovaRequest  $request  当前请求
     * @return mixed 结果
     */
    public function calculate(NovaRequest $request)
    {
        return $this->count($request, Log::class)->suffix(' 条');
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
        return 'log-trend';
    }

    /**
     * 名称
     */
    public function name()
    {
        return '日志趋势';
    }
}
