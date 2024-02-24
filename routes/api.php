<?php


use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\ParametrageController;
use App\Http\Controllers\GroupeController;
use App\Http\Controllers\QuizController;

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;




// ------------- ROUTES PROTECTED BY AUTH MIDDLEWWARE ---------- //

Route::group(['middleware' => 'auth:sanctum'], function () {

    // Log out
    Route::get('/auth/logout', [InscriptionController::class, 'logout']);

    // Hackathon
    Route::post('/hackathon/tooglestate', [ParametrageController::class, 'tooglehackathon']);
    Route::post('/hackathon/create', [ParametrageController::class, 'createhackathon']);
    Route::get('/hackathon/render', [ParametrageController::class, 'renderhackathon']);

    // Classe
    Route::post('/classe/create', [ParametrageController::class, 'createclasse']);
    Route::post('/classe/update', [ParametrageController::class, 'updateclasse']);
    Route::post('/classe/delete', [ParametrageController::class, 'deleteclasse']);
    Route::get('/classe/render', [ParametrageController::class, 'renderclasse']);

    // Salle
    Route::post('/salle/create', [ParametrageController::class, 'createsalle']);
    Route::post('/salle/update', [ParametrageController::class, 'updatesalle']);
    Route::post('/salle/delete', [ParametrageController::class, 'deletesalle']);
    Route::get('/salle/render', [ParametrageController::class, 'rendersalle']);

    // Répartition
    Route::post('/repartition/create', [ParametrageController::class, 'createrepartition']);
    Route::post('/repartition/delete', [ParametrageController::class, 'deleterepartition']);
    Route::get('/repartition/render', [ParametrageController::class, 'renderrepartition']);

    // Restauration
    Route::get('/restauration/render', [ParametrageController::class, 'renderrestauration']);
    Route::post('/collation/create', [ParametrageController::class, 'createcollation']);
    Route::post('/collation/delete', [ParametrageController::class, 'deletecollation']);
    Route::post('/repas/create', [ParametrageController::class, 'createrepas']);
    Route::post('/repas/delete', [ParametrageController::class, 'deleterepas']);

    // Préselections
    Route::post('/preselection/render', [ParametrageController::class, 'renderpreselection']);
    Route::post('/question/create', [ParametrageController::class, 'createquestion']);
    Route::post('/question/update', [ParametrageController::class, 'updatequestion']);
    Route::post('/question/delete', [ParametrageController::class, 'deletequestion']);
    Route::post('/response/create', [ParametrageController::class, 'createresponse']);
    Route::post('/response/delete', [ParametrageController::class, 'deleteresponse']);

    // Quiz
    Route::post('/quiz/toogle', [ParametrageController::class, 'tooglequiz']);
    Route::post('/quiz/selected', [QuizController::class, 'selectedquiz']); // new
    Route::post('/quiz/submit', [QuizController::class, 'submitquiz']);
    Route::post('/quiz/render', [QuizController::class, 'renderquiz']);
    Route::post('/quiz/state', [QuizController::class, 'statequiz']);

    // Groupe
    Route::post('/groupe/autoselect', [GroupeController::class, 'autoselectgroupe']); // new
    Route::post('/groupe/render', [GroupeController::class, 'rendergroupe']);
    Route::post('/equipe/toogle', [GroupeController::class, 'toogleequipe']);
    Route::post('/quiz/reset', [GroupeController::class, 'resetquiz']);

});

// ------------- ROUTES NOT PROTECTED BY AUTH MIDDLEWWARE ---------- //

// Log in
Route::post('/auth/login', [InscriptionController::class, 'login']);

// Before loging in
Route::post('/enregistrement-participants', [InscriptionController::class, 'participants_enregistrement_createEquipe']);
Route::post('/data-for-enregistrement-participants', [InscriptionController::class, 'enregistrement_render']);
Route::get('/inscription/state', [InscriptionController::class, 'inscriptionstate']);