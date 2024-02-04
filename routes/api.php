<?php

use App\Http\Controllers\InscripController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\pdfController;
use App\Http\Controllers\VideoController;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\GroupeController;
use App\Http\Controllers\Api\ParametrageController;
use App\Http\Controllers\Api\ParticipantsController;
use App\Http\Controllers\Api\RestaurationController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [InscripController::class, 'welcome']);

Route::post('/auth/login', [AuthController::class, 'login']);
Route::get('/auth/logout', [AuthController::class, 'logout']);

Route::get('/inscriptions', [InscripController::class, 'inscription']);
Route::get('/inscription-terminer', [InscripController::class, 'inscriptionterminer']);

Route::post('/enregistrement-participants', [InscripController::class, 'participants_enregistrement_createEquipe']);

Route::post('/goupe-render', [GroupeController::class, 'selection_render']);
Route::post('/goupe-selection', [GroupeController::class, 'selection_selection']);
Route::post('/goupe-autoSelect', [GroupeController::class, 'selection_autoSelct']);
Route::get('/goupe-resetSelect', [GroupeController::class, 'selection_resetSelection']);

Route::get('/parametrage/hackaton-render', [ParametrageController::class, 'hackaton_render']);
Route::post('/parametrage/hackaton-createHackaton', [ParametrageController::class, 'hackaton_createHackaton']);
Route::post('/parametrage/hackaton-activation', [ParametrageController::class, 'hackaton_activation']);

Route::get('/parametrage/niveau-render', [ParametrageController::class, 'niveau_render']);
Route::post('/parametrage/niveau-createClasse', [ParametrageController::class, 'niveau_createClasse']);
Route::post('/parametrage/niveau-editClasse', [ParametrageController::class, 'niveau_editClasse']);
Route::post('/parametrage/niveau-updateClasse', [ParametrageController::class, 'niveau_updateClasse']);
Route::post('/parametrage/niveau-deleteClasse', [ParametrageController::class, 'niveau_deleteClasse']);

Route::get('/parametrage/preselection-render', [ParametrageController::class, 'preselection_render']);
Route::post('/parametrage/preselection-updateQuiz', [ParametrageController::class, 'preselection_updateQuiz']);
Route::get('/parametrage/preselection-storeNewQuestion', [ParametrageController::class, 'preselection_storeNewQuestion']);
Route::post('/parametrage/preselection-updateQuestion', [ParametrageController::class, 'preselection_updateQuestion']);
Route::post('/parametrage/preselection-deleteQuestion', [ParametrageController::class, 'preselection_deleteQuestion']);
Route::post('/parametrage/preselection-storeNewResponse', [ParametrageController::class, 'preselection_storeNewResponse']);
Route::post('/parametrage/preselection-updateResponse', [ParametrageController::class, 'preselection_updateResponse']);
Route::post('/parametrage/preselection-deleteResponse', [ParametrageController::class, 'preselection_deleteResponse']);
Route::post('/parametrage/preselection-openCloseQuiz', [ParametrageController::class, 'preselection_openCloseQuiz']);
Route::post('/parametrage/preselection-openCloseQvideo', [ParametrageController::class, 'preselection_openCloseQvideo']);


Route::get('/parametrage/repartition-render', [ParametrageController::class, 'repartition_render']);
Route::post('/parametrage/repartition-linkRepartition', [ParametrageController::class, 'repartition_linkRepartition']);
Route::post('/parametrage/repartition-deleteRepartition', [ParametrageController::class, 'repartition_deleteRepartition']);

Route::post('/participants/enregistrement-render', [ParticipantsController::class, 'enregistrement_render']);
Route::post('/participants/enregistrement-createEquipe', [ParticipantsController::class, 'enregistrement_createEquipe']);

Route::get('/participants/part-render', [ParticipantsController::class, 'enregistrement_createEquipe']);
Route::post('/participants/part-add', [ParticipantsController::class, 'enregistrement_createEquipe']);
Route::post('/participants/part-putChef', [ParticipantsController::class, 'enregistrement_createEquipe']);
Route::post('/participants/part-create', [ParticipantsController::class, 'enregistrement_createEquipe']);
Route::post('/participants/part-openSession', [ParticipantsController::class, 'enregistrement_createEquipe']);
