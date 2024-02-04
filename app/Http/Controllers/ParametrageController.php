<?php

namespace App\Http\Controllers;

use App\Models\Hackaton as ModelsHackaton;

use Illuminate\Http\Request;

class ParametrageController extends Controller
{
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
}
