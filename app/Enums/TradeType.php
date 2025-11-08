<?php

namespace App\Enums;

enum TradeType: string
{
    case PURCHASE = 'purchase'; // 购买
    case CLAIM = 'claim'; // 领取

    /**
     * 获取交易类型的可读名称
     *
     * 使用 Laravel Nova 的翻译功能，支持多语言显示
     *
     * @return string 交易类型的可读名称
     */
    public function name(): string
    {
        return match ($this) {
            self::PURCHASE => (string) __('Purchase'),
            self::CLAIM => (string) __('Claim'),
        };
    }

    /**
     * 获取默认值
     */
    public static function default(): string
    {
        return self::PURCHASE->value;
    }
}
