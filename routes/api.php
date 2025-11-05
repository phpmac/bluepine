<?php

use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// 订阅更新
Route::post('/subscribe', [HomeController::class, 'subscribe']);

// 生态合作联系表单
Route::post('/ecosystem-contact', [HomeController::class, 'ecosystemContact']);

// 联系我们表单
Route::post('/contact', [HomeController::class, 'contact']);
