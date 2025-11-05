<?php

use Illuminate\Http\JsonResponse;

if (! function_exists('ok')) {
    /**
     * JSON 返回普通数据
     *
     * @param  mixed  $data  返回数据
     * @param  string  $message  返回消息
     * @param  int  $code  返回状态码
     *
     * @throws JsonResponse
     */
    function ok($data = null, $message = 'ok', $code = 200): JsonResponse
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ]);
    }
}

if (! function_exists('success')) {
    /**
     * JSON 返回成功数据
     *
     * @param  string  $message  返回消息
     * @param  array  $data  返回数据
     *
     * @throws JsonResponse
     */
    function success($message = '操作成功', $data = []): JsonResponse
    {
        return response()->json([
            'code' => 10000,
            'message' => $message,
            'data' => $data,
        ]);
    }
}

if (! function_exists('fail')) {
    /**
     * JSON 返回失败数据
     *
     * @param  string  $message  返回消息
     * @param  array  $data  返回数据
     *
     * @throws JsonResponse
     */
    function fail($message = '操作失敗', $data = []): JsonResponse
    {
        return response()->json([
            'code' => 20000,
            'message' => $message,
            'data' => $data,
        ]);
    }
}
