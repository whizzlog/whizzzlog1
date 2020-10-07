<?php


use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','Auth\LoginController@index');

Auth::routes();
Route::group(['prefix' => 'en','middleware'=> ['auth']], function () {

    Route::get('/','LogsController@verified');
    Route::get('/home','HomeController@index');
    Route::get('/{bankId}/logs','LogsController@getByBank');
    Route::get('/myorders','LogsController@myorders');
    Route::get('/mylogs','LogsController@mylogs');
    Route::get('/settings','ChangePasswordController@index');
    Route::post('/settings/password','ChangePasswordController@password')->name('settings.password');
    Route::get('/help','HomeController@help');
    Route::get('/banklogs/create','LogsController@create')->middleware('role:admin');
    Route::post('/banklogs/create','LogsController@add')->name('logs.create')->middleware('role:admin');

    Route::get('/bank/create','BankController@create')->middleware('role:admin');
    Route::post('/bank/create','BankController@add')->name('bank.create')->middleware('role:admin');

    Route::post('/logpay','LogsController@pay')->name('log.pay');

    Route::get('/qrcode',function(){
     return \QrCode::size(200)->generate('damola');
     
              
    });


    
});



Route::get('/home', 'HomeController@index')->name('home');
