<?php

namespace App\Nova;

use Laravel\Nova\Fields\Badge;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class EcosystemContactResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\EcosystemContact>
     */
    public static $model = \App\Models\EcosystemContact::class;

    /**
     * 资源名称
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * 导航分组
     *
     * @var string
     */
    public static $group = '客户管理';

    /**
     * 导航图标
     */
    public static string $icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" /></svg>';

    /**
     * 可搜索字段
     *
     * @var array
     */
    public static $search = [
        'id',
        'company',
        'name',
        'email',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '生态合作';
    }

    /**
     * 单个资源显示名称
     */
    public static function singularLabel(): string
    {
        return '生态合作';
    }

    /**
     * 获取资源展示字段
     *
     * @return array<int, \Laravel\Nova\Fields\Field>
     */
    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Text::make('机构名称', 'company')
                ->sortable()
                ->rules('required', 'max:255')
                ->readonly(),

            Text::make('姓名', 'name')
                ->sortable()
                ->rules('required', 'max:255')
                ->readonly(),

            Text::make('职务', 'position')
                ->hideFromIndex()
                ->readonly(),

            Text::make('邮箱', 'email')
                ->sortable()
                ->rules('required', 'email', 'max:255')
                ->readonly(),

            Badge::make('合作类别', 'category')
                ->map([
                    'research' => 'info',
                    'business' => 'success',
                    'tech' => 'warning',
                    'capital' => 'danger',
                    'other' => 'default',
                ])
                ->labels([
                    'research' => '研究合作',
                    'business' => '商业与市场合作',
                    'tech' => '技术与开发合作',
                    'capital' => '资本合作',
                    'other' => '其他',
                ])
                ->sortable(),

            Textarea::make('合作构想', 'description')
                ->hideFromIndex()
                ->readonly(),

            Text::make('IP地址', 'ip')
                ->hideFromIndex()
                ->readonly(),

            DateTime::make('提交时间', 'created_at')
                ->sortable()
                ->readonly(),
        ];
    }
}
