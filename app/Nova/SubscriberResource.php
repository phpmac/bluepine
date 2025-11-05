<?php

namespace App\Nova;

use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class SubscriberResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Subscriber>
     */
    public static $model = \App\Models\Subscriber::class;

    /**
     * 资源名称
     *
     * @var string
     */
    public static $title = 'email';

    /**
     * 导航分组
     *
     * @var string
     */
    public static $group = '客户管理';

    /**
     * 导航图标
     */
    public static string $icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.981l7.5-4.039a2.25 2.25 0 012.134 0l7.5 4.039a2.25 2.25 0 011.183 1.98V19.5z" /></svg>';

    /**
     * 可搜索字段
     *
     * @var array
     */
    public static $search = [
        'id',
        'email',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '邮件订阅';
    }

    /**
     * 单个资源显示名称
     */
    public static function singularLabel(): string
    {
        return '订阅';
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

            Text::make('邮箱', 'email')
                ->sortable()
                ->rules('required', 'email', 'max:255')
                ->readonly(),

            Boolean::make('激活状态', 'is_active')
                ->sortable(),

            Text::make('IP地址', 'ip')
                ->hideFromIndex()
                ->readonly(),

            DateTime::make('订阅时间', 'created_at')
                ->sortable()
                ->readonly(),
        ];
    }
}
