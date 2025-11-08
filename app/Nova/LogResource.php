<?php

namespace App\Nova;

use App\Enums\LogType;
use Laravel\Nova\Fields\Code;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class LogResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Log>
     */
    public static $model = \App\Models\Log::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
        'tx_hash',
        'content',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '日志记录';
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @return array<int, \Laravel\Nova\Fields\Field>
     */
    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            Select::make('日志类型', 'type')
                ->options([
                    LogType::PURCHASE->value => '购买',
                    LogType::CLAIM->value => '领取',
                    LogType::ADD_WHITELIST->value => '设置10%收益地址',
                    LogType::REMOVE_WHITELIST->value => '移除10%收益地址',
                ])
                ->displayUsingLabels()
                ->sortable()
                ->readonly()
                ->filterable(),

            Text::make('交易哈希', 'tx_hash')
                ->sortable()
                ->readonly()
                ->copyable(),

            Textarea::make('内容', 'content')
                ->readonly()
                ->alwaysShow(),

            Code::make('数据', 'data')
                ->json()
                ->readonly()
                ->onlyOnDetail(),

            DateTime::make('创建时间', 'created_at')
                ->sortable()
                ->readonly()
                ->filterable(),

            DateTime::make('更新时间', 'updated_at')
                ->onlyOnDetail()
                ->readonly(),
        ];
    }

    /**
     * Get the cards available for the resource.
     *
     * @return array<int, \Laravel\Nova\Card>
     */
    public function cards(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array<int, \Laravel\Nova\Filters\Filter>
     */
    public function filters(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array<int, \Laravel\Nova\Lenses\Lens>
     */
    public function lenses(NovaRequest $request): array
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array<int, \Laravel\Nova\Actions\Action>
     */
    public function actions(NovaRequest $request): array
    {
        return [];
    }
}
