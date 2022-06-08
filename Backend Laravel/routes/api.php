<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('users', UserController::class);

Route::controller(UserController::class)->group(function () {
    // Route::get('/orders/{id}', 'show');
    Route::post('/login', 'login');
});
Route::apiResource('products', ProductController::class);
Route::get('/search/{key}', [ProductController::class, 'productSearch']);