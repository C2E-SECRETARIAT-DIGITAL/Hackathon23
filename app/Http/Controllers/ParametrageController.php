<?php

namespace App\Http\Controllers;

use App\Models\Hackaton as ModelsHackaton;
use App\Models\Niveau as ModelsNiveau;
use App\Models\Salle as ModelsSalle;
use App\Models\Collation;
use App\Models\RepSalle;
use App\Models\Classe;
use App\Models\Equipe;
use App\Models\Salle;
use App\Models\Repa;


use Illuminate\Http\Request;

class ParametrageController extends Controller
{

    // ----- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ----- //
    public function renderhackathon()
    {
        $data = [
            'data' => ModelsHackaton::orderBy('created_at', 'DESC')->get(),
        ];

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createhackathon(Request $request)
    {
        if (!$request->pco_1 || !$request->pco_2 || !$request->annee) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            if (ModelsHackaton::where('annee', $request->annee)->first()) {

                $response = [
                    'status' => false,
                    'message' => "Un hackathon est déja crée pour cette année",
                ];

            } else {

                ModelsHackaton::create([
                    'pco_1' => $request->pco_1,
                    'pco_2' => $request->pco_2,
                    'annee' => $request->annee,
                ]);

                $response = [
                    'status' => true,
                    'message' => "Hackathon crée avec succès",
                ];
            }
        }

        return response()->json($response);
    }

    public function tooglehackathon(Request $request)
    {
        if (!$request->hackathonId) {
            $response = [
                'status' => false,
                'message' => "Fournissez l'id de l'hackathon",
            ];
        } else {

            $hackaton = ModelsHackaton::find($request->hackathonId);
            $hackaton->inscription = !$hackaton->inscription;
            $hackaton->save();

            if ($hackaton->inscription == 1) {
                ModelsHackaton::where('inscription', 1)->where('id', '!=', $hackaton->id)->update(['inscription' => 0]);
            }

            $response = [
                'status' => true,
                'message' => $hackaton->inscription == 1 ? "Hackathon activé" : "Hackathon desactivé",
            ];
        }

        return response()->json($response);
    }

    // --------------------------------------------------------------------------------------------- //

    // ----- CLASSES TAB ---------- CLASSES TAB ---------- CLASSES TAB ---------- CLASSES TAB ----- //
    public function renderclasse()
    {
        $data = [
            'niveaux' => ModelsNiveau::all(),
            'classes' => Classe::orderBy('created_at', 'DESC')->with('niveau')->get()
        ];

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createclasse(Request $request)
    {
        if (!$request->libelle || !$request->niveau_id || $request->isEsatic) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            Classe::create([
                'libelle' => $request->libelle,
                'niveau_id' => $request->niveau_id,
                'esatic' => $request->isEsatic,
            ]);

            $response = [
                'status' => true,
                'message' => "Classe crée avec succès",
            ];
        }

        return response()->json($response);
    }

    public function updateclasse(Request $request)
    {
        $classe = Classe::find($request->classeId);

        if (!$classe) {
            $response = [
                'status' => false,
                'message' => "Classe non trouvée",
            ];
        } else {

            if ($request->libelle)
                $classe->libelle = $request->libelle;
            if ($request->niveau_id)
                $classe->niveau_id = $request->niveau_id;
            if ($request->isEsatic)
                $classe->isEsatic = $request->isEsatic;

            $classe->save();

            $response = [
                'status' => true,
                'message' => "Classe modifiée avec succès",
            ];
        }

        return response()->json($response);
    }

    public function deleteclasse(Request $request)
    {
        $classe = Classe::find($request->classeId);

        if (!$classe) {
            $response = [
                'status' => false,
                'message' => "Classe non trouvée",
            ];
        } else {
            $classe->delete();
            $response = [
                'status' => true,
                'message' => "Classe supprimée avec succès",
            ];
        }

        return response()->json($response);
    }

    // --------------------------------------------------------------------------------------------- //
    // ----- SALLES TAB ---------- SALLES TAB ---------- SALLES TAB ---------- SALLES TAB ----- //


    public function rendersalle()
    {
        $data = [
            'salles' => ModelsSalle::orderBy('created_at', 'DESC')->get(),
        ];

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createsalle(Request $request)
    {
        if (!$request->libelle || !$request->nb_equipe) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            ModelsSalle::create([
                'libelle' => $request->libelle,
                'nb_equipe' => $request->nb_equipe,
            ]);

            $response = [
                'status' => true,
                'message' => "Salle crée avec succès",
            ];
        }

        return response()->json($response);
    }


    /*
    {
        'salleId' => id de la salle
        'libelle' => nouveau libellé
        'nb_equipe' => nouveau nombre max d'équipe dans la salle
    }
    */
    public function updatesalle(Request $request)
    {
        $salle = ModelsSalle::find($request->salleId);

        if (!$salle) {
            $response = [
                'status' => false,
                'message' => "Salle non trouvée",
            ];
        } else {

            if ($request->libelle)
                $salle->libelle = $request->libelle;
            if ($request->nb_equipe)
                $salle->nb_equipe = $request->nb_equipe;

            $salle->save();

            $response = [
                'status' => true,
                'message' => "Salle modifiée avec succès",
            ];
        }

        return response()->json($response);
    }

    public function deletesalle(Request $request)
    {
        $salle = ModelsSalle::find($request->salleId);

        if (!$salle) {
            $response = [
                'status' => false,
                'message' => "Salle non trouvée",
            ];
        } else {
            $salle->delete();
            $response = [
                'status' => true,
                'message' => "Salle supprimée avec succès",
            ];
        }

        return response()->json($response);
    }


    // --------------------------------------------------------------------------------------------- //
    // ----- REPARTITIONS TAB ---------- REPARTITIONS TAB ---------- REPARTITIONS TAB ---------- REPARTITIONS TAB ----- //

    public function renderrepartition()
    {

        $hackaton = ModelsHackaton::where('inscription', 1)->first();

        $data = [
            'equipes' => Equipe::where('statut', 1)
                ->where('hackaton_id', $hackaton->id),

            'salles' => ModelsSalle::all(),

            'repartitions' => RepSalle::where('hackaton_id', $hackaton->id)
                ->orderBy('created_at', 'DESC')
        ];

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    /*
    {
        'salleId' => id de la salle
        'equipeId' => id de l'equipe
    }
    */
    public function createrepartition(Request $request)
    {

        if (!$request->salleId || !$request->equipeId) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            $salle = Salle::find($request->salleId);
            if ($salle->canRecieve()) {
                $hackaton = ModelsHackaton::where('inscription', 1)->first();

                RepSalle::create([
                    'equipe_id' => $request->equipeId,
                    'salle_id' => $request->salleId,
                    'hackaton_id' => $hackaton->id
                ]);

                $response = [
                    'status' => true,
                    'message' => "Salle crée avec succès",
                ];

            } else {

                $response = [
                    'status' => true,
                    'message' => "Nombre maximum de salle atteint",
                ];

            }
        }

        return response()->json($response);

    }

    /*
    {
        'repartitionId' => id de la repartition à supprimer
    }
    */
    public function deleterepartition(Request $request)
    {
        if (!$request->repartitionId) {

            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];

        } else {
            $rep = RepSalle::find($request->repartitionId);
            if (!$rep) {

                $response = [
                    'status' => false,
                    'message' => "Repartition non trouvée",
                ];

            } else {

                $rep->delete();
                $response = [
                    'status' => true,
                    'message' => "Repartition supprimée avec succès",
                ];

            }
        }

        return response()->json($response);
    }


    // --------------------------------------------------------------------------------------------- //
    // ----- RESTAURATIONS TAB ---------- RESTAURATIONS TAB ---------- RESTAURATIONS TAB ---------- RESTAURATIONS TAB ----- //


    public function renderrestauration()
    {
        $data = [
            'repas' => Repa::orderBy('created_at', 'DESC'),
            'collations' => Collation::orderBy('created_at', 'DESC')
        ];

        $response = [
            'data' => $data,
            'status' => true,
        ];

        return response()->json($response);
    }

    /*
    {
        'libelle' => libellé du repas
    }
    */
    public function createrepas(Request $request)
    {

        if (!$request->libelle) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {

            Repa::create([
                'libelle' => $request->libelle,
            ]);

            $response = [
                'status' => true,
                'message' => "Repas crée avec succès",
            ];

        }

        return response()->json($response);

    }

    /*
    {
        'libelle' => libellé de la collation
    }
    */
    public function createcollation(Request $request)
    {

        if (!$request->libelle) {
            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {

            Collation::create([
                'libelle' => $request->libelle,
            ]);

            $response = [
                'status' => true,
                'message' => "Collation créee avec succès",
            ];

        }

        return response()->json($response);

    }

}
