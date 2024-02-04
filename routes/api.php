<?php


use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\ParametrageController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [InscriptionController::class, 'welcome']);

Route::post('/auth/login', [InscriptionController::class, 'login']);

Route::get('/inscriptions', [InscriptionController::class, 'inscription']);
Route::get('/inscription-terminer', [InscriptionController::class, 'inscriptionterminer']);

Route::post('/enregistrement-participants', [InscriptionController::class, 'participants_enregistrement_createEquipe']);

// get list of classes
Route::post('/data-for-enregistrement-participants', [InscriptionController::class, 'enregistrement_render']);


// PARAMETRAGES ROUTES

Route::post('/hackathon/create', [ParametrageController::class, 'createhackathon']);
Route::get('/hackathon/render', [ParametrageController::class, 'renderhackathon']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/auth/logout', [InscriptionController::class, 'logout']);
});
