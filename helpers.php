<?php

if (! function_exists('simple')) {
    /**
     * 简单例子
     */
    function simple(): string
    {
        return __FUNCTION__;
    }
}

if (! function_exists('formatUints')) {
    /**
     * 格式化以太坊数量
     *
     * @param  string  $value  原始值
     * @param  int  $decimals  小数位数 (例如: 18 表示 ether, 6 表示 USDT)
     * @return string 格式化后的数值字符串
     */
    function formatUints(string $value, int $decimals = 18): string
    {
        // 使用 bcmath 处理大数
        $divisor = bcpow('10', (string) $decimals);
        $result = bcdiv($value, $divisor, $decimals);

        // 去除尾部的零
        $result = rtrim($result, '0');
        $result = rtrim($result, '.');

        return $result;
    }
}
