<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\pdfController;
use App\Http\Controllers\VideoController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::get('/', [AdminController::class, 'welcome'])->name('welcome');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/restauration', [AdminController::class, 'restauration'])->name('restauration');
    Route::post('/commander', [AdminController::class, 'getCommandes'])->name('get.commande');

    Route::group(['middleware' => ['role:Super@Administrateur']], function () {
        Route::get('/admin/groupes/down', [VideoController::class, 'NONEdownloadVideo'])->name('Admin.groupe.downloadvideo');
        Route::get('/admin/restauration', [AdminController::class, 'gestionRestaurant'])->name('Admin.restauration');

        Route::get('/pdf/listeEquipe/niveau1', [pdfController::class, 'listeEquipeN1'])->name('liste.equipe.n1');
        Route::get('/pdf/listeEquipe/niveau2', [pdfController::class, 'listeEquipeN2'])->name('liste.equipe.n2');
        Route::get('/pdf/listeEquipe/niveau3t', [pdfController::class, 'listeEquipeN3T'])->name('liste.equipe.n3t');
        Route::get('/pdf/listeEquipe/niveau3i', [pdfController::class, 'listeEquipeN3I'])->name('liste.equipe.n3i');
        Route::get('/pdf/listeEquipe/niveau3s', [pdfController::class, 'listeEquipeN3S'])->name('liste.equipe.n3s');

        Route::get('/pdf/listeEquipe/selection/niveau1', [pdfController::class, 'listeselectEquipeN1'])->name('liste.equipe.select.n1');
        Route::get('/pdf/listeEquipe/selection/niveau2', [pdfController::class, 'listeselectEquipeN2'])->name('liste.equipe.select.n2');
        Route::get('/pdf/listeEquipe/selection/niveau3t', [pdfController::class, 'listeselectEquipeN3T'])->name('liste.equipe.select.n3t');
        Route::get('/pdf/listeEquipe/selection/niveau3i', [pdfController::class, 'listeselectEquipeN3I'])->name('liste.equipe.select.n3i');
        Route::get('/pdf/listeEquipe/selection/niveau3s', [pdfController::class, 'listeselectEquipeN3S'])->name('liste.equipe.select.n3s');

        Route::get('/pdf/repartitions/equipes', [pdfController::class, 'repartition'])->name('pdf.repartition');
        Route::get('/pdf/salles/commandes', [pdfController::class, 'commandes'])->name('pdf.commandes');

        // qrcode
        Route::post('/admin/restauration/soumission', [AdminController::class, 'Soumission'])->name('qrcode.Soumission');
        Route::post('/admin/sendMail', [AdminController::class, 'ContacterLesChefs'])->name('selection.sendmail');
    });
});

Route::get('/inscriptions', [AdminController::class, 'inscription'])->name('Participants.inscription');
Route::get('/inscription-terminer', [AdminController::class, 'inscriptionterminer'])->name('terminer');
