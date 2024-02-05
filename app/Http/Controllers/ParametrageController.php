<?php

namespace App\Http\Controllers;

use App\Models\Hackaton as ModelsHackaton;
use App\Models\Niveau as ModelsNiveau;
use App\Models\Classe;


use Illuminate\Http\Request;

class ParametrageController extends Controller
{



    // ----- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ----- //
    public function renderhackathon()
    {
        $data = [
            'data' => ModelsHackaton::orderBy('created_at', 'DESC')
                ->paginate(4),
        ];

        $response = [
            'statut' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createhackathon(Request $request)
    {
        if (!$request->pco_1 || !$request->pco_2 || !$request->annee) {
            $response = [
                'statut' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            ModelsHackaton::create([
                'pco_1' => $request->pco_1,
                'pco_2' => $request->pco_2,
                'annee' => $request->annee,
            ]);

            $response = [
                'statut' => true,
                'message' => "Hackathon crée avec succès",
            ];
        }

        return response()->json($response);
    }

    public function tooglehackathon(Request $request)
    {
        if (!$request->hackathonId) {
            $response = [
                'statut' => false,
                'message' => "Fournissez l'id de l'hackathon",
            ];
        } else {
            $hackaton = ModelsHackaton::find($request->hackathonId);
            $hackaton->inscription = !$hackaton->inscription;
            $hackaton->save();

            $response = [
                'statut' => true,
                'message' => $hackaton->inscription == 1 ? "Hackathon activé" : "Hackathon desactivé",
            ];
        }

        return response()->json($response);
    }

    // ----- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ---------- HACKATHON TAB ----- //

    // ----- CLASSES TAB ---------- CLASSES TAB ---------- CLASSES TAB ---------- CLASSES TAB ----- //
    public function renderclasse()
    {
        $data = [
            'niveaux' => ModelsNiveau::all(),
            'classes' => Classe::orderBy('created_at', 'DESC')->paginate(6)
        ];

        $response = [
            'statut' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createclasse(Request $request)
    {
        if (!$request->libelle || !$request->niveau_id) {
            $response = [
                'statut' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        } else {
            Classe::create([
                'libelle' => $request->libelle,
                'niveau_id' => $request->niveau_id
            ]);

            $response = [
                'statut' => true,
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
                'statut' => false,
                'message' => "Classe non trouvée",
            ];
        } else {

            if ($request->libelle)
                $classe->libelle = $request->libelle;
            if ($request->niveau_id)
                $classe->niveau_id = $request->niveau_id;

            $classe->save();

            $response = [
                'statut' => true,
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
                'statut' => false,
                'message' => "Classe non trouvée",
            ];
        } else {
            $classe->delete();
            $response = [
                'statut' => true,
                'message' => "Classe supprimée avec succès",
            ];
        }

        return response()->json($response);
    }

}
