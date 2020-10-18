<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ItemsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::group(['middleware' => 'api'], function ($router) {

    // Auth with User Model
    Route::prefix('auth')->group(function () {
        Route::post('login', [AuthController::class, 'login']);
        Route::post('register', [AuthController::class, 'register']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);
        Route::get('user-profile', [AuthController::class, 'userProfile']);
    });

    // Items Model
    Route::get('items/all', [ItemsController::class, 'withDeleted']);
    Route::get('items/all/{items}', [ItemsController::class, 'list']);
    Route::get('items/trash', [ItemsController::class, 'deleted']);
    Route::delete('items/{id}/force', [ItemsController::class, 'hardDestroy']);
    Route::patch('items/{id}/restore', [ItemsController::class, 'restore']);
    Route::apiResource('items', ItemsController::class);
});
