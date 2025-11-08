<?php

use Web3\Utils;

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
     */
    function formatUints(string $value, string $unit = 'milli'): string
    {
        $result = Utils::fromWei($value, $unit);

        // $result 是数组: [整数部分, 小数部分]
        // 索引 0: 整数部分 = 1
        // 索引 1: 小数部分 = 200000000000000000 (代表 .2)

        $integerPart = $result[0]->toString(); // "1"
        $decimalPart = $result[1]->toString(); // "200000000000000000"

        $fullValue = $integerPart.'.'.$decimalPart;

        return $fullValue;
    }
}
