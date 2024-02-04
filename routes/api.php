<?php

use App\Http\Controllers\Api\InscriptionController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [InscriptionController::class, 'welcome']);

Route::post('/auth/login', [InscriptionController::class, 'login']);
Route::get('/auth/logout', [InscriptionController::class, 'logout']);

Route::get('/inscriptions', [InscriptionController::class, 'inscription']);
Route::get('/inscription-terminer', [InscriptionController::class, 'inscriptionterminer']);

Route::post('/enregistrement-participants', [InscriptionController::class, 'participants_enregistrement_createEquipe']);

// get list of classes
Route::post('/data-for-enregistrement-participants', [InscriptionController::class, 'enregistrement_render']);