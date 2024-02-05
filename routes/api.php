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


// ------------- PARAMETRAGES ROUTES ---------- //

// Hackathon tab
Route::post('/hackathon/tooglestate', [ParametrageController::class, 'tooglehackathon']);
Route::post('/hackathon/create', [ParametrageController::class, 'createhackathon']);
Route::get('/hackathon/render', [ParametrageController::class, 'renderhackathon']);

// Classe tab
Route::post('/classe/create', [ParametrageController::class, 'createclasse']);
Route::post('/classe/update', [ParametrageController::class, 'updateclasse']);
Route::post('/classe/delete', [ParametrageController::class, 'deleteclasse']);
Route::get('/classe/render', [ParametrageController::class, 'renderclasse']);

// ------------- PARAMETRAGES ROUTES ---------- //

Route::group(['middleware' => 'auth:sanctum'], function () {

    // Log out
    Route::get('/auth/logout', [InscriptionController::class, 'logout']);
});
