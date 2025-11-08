<?php

use Web3\Utils;

test('formEther', function () {
    $result = Utils::fromWei('1056580544094325156812102785675286418920122552708', 'ether');

    // $result 是数组: [整数部分, 小数部分]
    // 索引 0: 整数部分 = 1
    // 索引 1: 小数部分 = 200000000000000000 (代表 .2)

    $integerPart = $result[0]->toString(); // "1"
    $decimalPart = $result[1]->toString(); // "200000000000000000"

    $fullValue = $integerPart.'.'.$decimalPart;
    dd($fullValue);
})->skip();
