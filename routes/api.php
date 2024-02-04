<?php

use App\Http\Controllers\InscripController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [InscripController::class, 'welcome']);

Route::post('/auth/login', [InscripController::class, 'login']);
Route::get('/auth/logout', [InscripController::class, 'logout']);

Route::get('/inscriptions', [InscripController::class, 'inscription']);
Route::get('/inscription-terminer', [InscripController::class, 'inscriptionterminer']);

Route::post('/enregistrement-participants', [InscripController::class, 'participants_enregistrement_createEquipe']);

// get list of classes
Route::post('/data-for-enregistrement-participants', [InscripController::class, 'enregistrement_render']);