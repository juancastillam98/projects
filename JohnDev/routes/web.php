<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*Download cv*/
Route::get('/download-cv', function () {
    $file = storage_path('app/public/cv/CV_Juan_Castilla_v2_EN.pdf');

    if (Storage::exists('public/cv/CV_Juan_Castilla_v2_EN.pdf')) {
        return response()->download($file, 'CV_Juan_Castilla_v2_EN.pdf', ['Content-Type' => 'application/pdf']);
    } else {
        abort(404);
    }
});

Route::post('/welcome', [WebController::class, 'sendMail'])->name('sendMail');
//Route::post('/welcome', [WebController::class, 'convertToWebp']);
/* Route::post("sendMail", function(){
    return "Message sent successfully";
})->name("sendMail"); */
Route::get("pruebas", [WebController::class, "convertToWebp"]);
