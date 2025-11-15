<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Auth\PasswordValidationRules;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Gravatar;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Panel;

class User extends Resource
{
    use PasswordValidationRules;

    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\User>
     */
    public static $model = \App\Models\User::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'name',
        'address',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '用户列表';
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @return array<int, \Laravel\Nova\Fields\Field|\Laravel\Nova\Panel|\Laravel\Nova\ResourceTool|\Illuminate\Http\Resources\MergeValue>
     */
    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),

            // Gravatar::make()->maxWidth(50),

            Panel::make('上级关系', [
                BelongsTo::make('上级用户', 'parent', User::class)
                    ->nullable()
                    ->searchable()
                    ->readonly(),

                Text::make('所有上级ID', 'parent_ids')
                    ->onlyOnDetail()
                    ->readonly(),
            ]),

            Text::make('用户名', 'name')
                ->sortable()
                ->rules('required', 'max:255')
                ->filterable(),

            Text::make('邮箱', 'email')
                ->sortable()
                ->rules('nullable', 'email', 'max:254')
                ->readonly()
                ->creationRules('unique:users,email')
                ->updateRules('unique:users,email,{{resourceId}}'),

            Text::make('钱包地址', 'address')
                ->sortable()
                ->rules('required', 'string', 'max:255')
                ->creationRules('unique:users,address')
                ->readonly()
                ->copyable()
                ->updateRules('unique:users,address,{{resourceId}}')
                ->filterable(),

            // Password::make('密码', 'password')
            //     ->onlyOnForms()
            //     ->creationRules($this->passwordRules())
            //     ->updateRules($this->optionalPasswordRules()),

            Number::make('AESC余额', 'aesc')
                ->sortable()
                ->step(0.01)
                ->readonly()
                ->filterable()
                ->readonly(),

            Number::make('奖励数量', 'reward_amount')
                ->sortable()
                ->step(0.01)
                ->readonly()
                ->filterable()
                ->readonly(),

            Panel::make('业绩统计', [
                Number::make('个人业绩', 'self_performance')
                    ->sortable()
                    ->step(0.01)
                    ->readonly()
                    ->filterable(),

                Number::make('直推人数', 'direct_count')
                    ->sortable()
                    ->readonly()
                    ->filterable(),

                Number::make('直推业绩', 'direct_performance')
                    ->sortable()
                    ->step(0.01)
                    ->readonly()
                    ->filterable(),

                Number::make('团队人数', 'team_count')
                    ->sortable()
                    ->readonly()
                    ->filterable(),

                Number::make('团队业绩', 'team_performance')
                    ->sortable()
                    ->step(0.01)
                    ->readonly()
                    ->filterable(),
            ]),

            Boolean::make('10%收益地址', 'is_10_performance')
                ->sortable()
                ->readonly(),

            Boolean::make('管理员', 'is_admin')
                ->sortable(),

            DateTime::make('创建时间', 'created_at')
                ->sortable()
                ->readonly(),
            DateTime::make('更新时间', 'updated_at')
                ->sortable()
                ->readonly(),
        ];
    }

    /**
     * Get the cards available for the request.
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
