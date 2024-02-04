<?php

// use App\Http\Controllers\AdminController;
// use App\Http\Controllers\pdfController;
// use App\Http\Controllers\VideoController;

// use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

// /*
// |--------------------------------------------------------------------------
// | API Routes
// |--------------------------------------------------------------------------
// |
// | Here is where you can register API routes for your application. These
// | routes are loaded by the RouteServiceProvider within a group which
// | is assigned the "api" middleware group. Enjoy building your API!
// |
// */
// Route::get('/', [AdminController::class, 'welcome'])->name('welcome');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::middleware(['auth:sanctum', 'verified'])->group(function () {
//     Route::get('/restauration', [AdminController::class, 'restauration']);
//     Route::post('/commander', [AdminController::class, 'getCommandes']);

//     Route::group(['middleware' => ['role:Super@Administrateur']], function () {
//         Route::get('/admin/groupes/down', [VideoController::class, 'downloadVideo']);
//         Route::get('/admin/restauration', [AdminController::class, 'gestionRestaurant']);

//         Route::get('/pdf/listeEquipe/niveau1', [pdfController::class, 'listeEquipeN1']);
//         Route::get('/pdf/listeEquipe/niveau2', [pdfController::class, 'listeEquipeN2']);
//         Route::get('/pdf/listeEquipe/niveau3t', [pdfController::class, 'listeEquipeN3T']);
//         Route::get('/pdf/listeEquipe/niveau3i', [pdfController::class, 'listeEquipeN3I']);
//         Route::get('/pdf/listeEquipe/niveau3s', [pdfController::class, 'listeEquipeN3S']);

//         Route::get('/pdf/listeEquipe/selection/niveau1', [pdfController::class, 'listeselectEquipeN1']);
//         Route::get('/pdf/listeEquipe/selection/niveau2', [pdfController::class, 'listeselectEquipeN2']);
//         Route::get('/pdf/listeEquipe/selection/niveau3t', [pdfController::class, 'listeselectEquipeN3T']);
//         Route::get('/pdf/listeEquipe/selection/niveau3i', [pdfController::class, 'listeselectEquipeN3I']);
//         Route::get('/pdf/listeEquipe/selection/niveau3s', [pdfController::class, 'listeselectEquipeN3S']);

//         Route::get('/pdf/repartitions/equipes', [pdfController::class, 'repartition']);
//         Route::get('/pdf/salles/commandes', [pdfController::class, 'commandes']);

//         // qrcode
//         Route::post('/admin/restauration/soumission', [AdminController::class, 'Soumission'])->name('qrcode.Soumission');
//         Route::post('/admin/sendMail', [AdminController::class, 'ContacterLesChefs'])->name('selection.sendmail');
    
//         Route::get('/selection/render', [GroupeController::class, 'selection_render']);
//     });
// });

// Route::get('/inscriptions', [AdminController::class, 'inscription'])->name('Participants.inscription');
// Route::get('/inscription-terminer', [AdminController::class, 'inscriptionterminer'])->name('terminer');






// ////////////////////////



// Route::post('/auth/login', [InscripController::class, 'login']);

// Route::post('/auth/login', [AuthController::class, 'logout']);

// Route::get('/inscriptions', [AdminController::class, 'inscription']);
// Route::get('/inscription-terminer', [AdminController::class, 'inscriptionterminer']);

// Route::get('/enregistrement-participants', [AdminController::class, 'participants_enregistrement_createEquipe']);



use App\Http\Controllers\InscripController;
use App\Http\Controllers\AdminController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', [AdminController::class, 'welcome'])->name('welcome');

Route::post('/auth/login', [InscripController::class, 'login']);
Route::get('/auth/logout', [InscripController::class, 'logout']);

Route::get('/inscriptions', [InscripController::class, 'inscription']);
Route::get('/inscription-terminer', [InscripController::class, 'inscriptionterminer']);

Route::post('/enregistrement-participants', [InscripController::class, 'participants_enregistrement_createEquipe']);
