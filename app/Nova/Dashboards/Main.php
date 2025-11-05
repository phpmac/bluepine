<?php

namespace App\Nova\Dashboards;

use App\Nova\Metrics\NewContacts;
use App\Nova\Metrics\NewEcosystemContacts;
use App\Nova\Metrics\NewSubscribers;
use App\Nova\Metrics\TotalSubscribers;
use Laravel\Nova\Dashboards\Main as Dashboard;

class Main extends Dashboard
{
    /**
     * 仪表板名称
     */
    public function label(): string
    {
        return '数据概览';
    }

    /**
     * Get the cards for the dashboard.
     *
     * @return array<int, \Laravel\Nova\Card>
     */
    public function cards(): array
    {
        return [
            (new TotalSubscribers)->width('1/2'),
            (new NewSubscribers)->width('1/2'),
            (new NewContacts)->width('1/2'),
            (new NewEcosystemContacts)->width('1/2'),
        ];
    }
}
