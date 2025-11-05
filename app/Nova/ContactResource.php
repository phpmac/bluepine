<?php

namespace App\Nova;

use Laravel\Nova\Fields\Badge;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\File;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;

class ContactResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Contact>
     */
    public static $model = \App\Models\Contact::class;

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
    public static string $icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>';

    /**
     * 可搜索字段
     *
     * @var array
     */
    public static $search = [
        'id',
        'name',
        'email',
        'company',
        'subject',
    ];

    /**
     * 资源显示名称
     */
    public static function label(): string
    {
        return '联系我们';
    }

    /**
     * 单个资源显示名称
     */
    public static function singularLabel(): string
    {
        return '联系';
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

            Text::make('姓名', 'name')
                ->sortable()
                ->rules('required', 'max:255')
                ->readonly(),

            Text::make('邮箱', 'email')
                ->sortable()
                ->rules('required', 'email', 'max:255')
                ->readonly(),

            Text::make('公司', 'company')
                ->sortable()
                ->hideFromIndex()
                ->readonly(),

            Badge::make('咨询类别', 'category')
                ->map([
                    'investment' => 'info',
                    'partnership' => 'success',
                    'media' => 'warning',
                    'support' => 'danger',
                    'other' => 'default',
                ])
                ->labels([
                    'investment' => '投资咨询',
                    'partnership' => '合作伙伴',
                    'media' => '媒体咨询',
                    'support' => '技术支持',
                    'other' => '其他',
                ])
                ->sortable(),

            Text::make('主题', 'subject')
                ->sortable()
                ->readonly(),

            Textarea::make('消息内容', 'message')
                ->hideFromIndex()
                ->readonly(),

            File::make('附件', 'file')
                ->disk('public')
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
