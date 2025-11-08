<?php

namespace App\Nova;

use App\Enums\TradeType;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class TradeResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Trade>
     */
    public static $model = \App\Models\Trade::class;

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
        'block_number',
        'tx_hash',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '交易记录';
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

            BelongsTo::make('用户', 'user', User::class)
                ->sortable()
                ->searchable()
                ->readonly()
                ->filterable(),

            Number::make('交易数量', 'amount')
                ->sortable()
                ->step(0.01)
                ->readonly()
                ->filterable(),

            Select::make('交易类型', 'type')
                ->options([
                    TradeType::PURCHASE->value => '购买',
                    TradeType::CLAIM->value => '领取',
                ])
                ->displayUsingLabels()
                ->sortable()
                ->readonly()
                ->filterable(),

            Number::make('区块高度', 'block_number')
                ->sortable()
                ->readonly()
                ->filterable(),

            Text::make('交易哈希', 'tx_hash')
                ->sortable()
                ->readonly()
                ->copyable(),

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
