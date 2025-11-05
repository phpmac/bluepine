<?php

namespace App\Nova\Metrics;

use App\Models\EcosystemContact;
use DateTimeInterface;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Value;
use Laravel\Nova\Metrics\ValueResult;

class NewEcosystemContacts extends Value
{
    /**
     * 指标名称
     *
     * @var string
     */
    public $name = '新增生态合作';

    /**
     * Calculate the value of the metric.
     */
    public function calculate(NovaRequest $request): ValueResult
    {
        return $this->count($request, EcosystemContact::class);
    }

    /**
     * Get the ranges available for the metric.
     *
     * @return array<int|string, string>
     */
    public function ranges(): array
    {
        return [
            30 => '30 天',
            60 => '60 天',
            365 => '365 天',
            'TODAY' => '今天',
            'MTD' => '本月',
            'QTD' => '本季度',
            'YTD' => '今年',
        ];
    }

    /**
     * Determine the amount of time the results of the metric should be cached.
     */
    public function cacheFor(): ?DateTimeInterface
    {
        return now()->addMinutes(5);
    }

    /**
     * Get the URI key for the metric.
     */
    public function uriKey(): string
    {
        return 'new-ecosystem-contacts';
    }
}
