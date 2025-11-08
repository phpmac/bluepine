<?php

namespace App\Nova\Dashboards;

use App\Nova\Metrics\LogTrend;
use App\Nova\Metrics\NewUsers;
use App\Nova\Metrics\TotalClaims;
use App\Nova\Metrics\TotalPurchases;
use App\Nova\Metrics\TradeTrend;
use Laravel\Nova\Dashboards\Main as Dashboard;

class Main extends Dashboard
{
    /**
     * Get the displayable label of the dashboard.
     *
     * @return string
     */
    public function name()
    {
        return '后台总览';
    }

    /**
     * Get the cards for the dashboard.
     *
     * @return array<int, \Laravel\Nova\Card>
     */
    public function cards(): array
    {
        return [
            new NewUsers,
            new TotalPurchases,
            new TotalClaims,
            (new TradeTrend)->width('1/2'),
            (new LogTrend)->width('1/2'),
        ];
    }
}
