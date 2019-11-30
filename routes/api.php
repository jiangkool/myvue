<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['namespace'=>'Api'],function(){

	Route::get('users', 'UsersController@index');
	Route::get('users/{user}', 'UsersController@show');
	Route::post('users', 'UsersController@store')->middleware('auth:api');
	Route::delete('users/{user}', 'UsersController@destroy')->middleware('auth:api');

	Route::post('login', 'UsersController@login');
	Route::get('settings', 'UsersController@settings');
});
