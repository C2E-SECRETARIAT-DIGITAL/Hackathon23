<?php

namespace App\Http\Controllers;

use App\Models\Hackaton as ModelsHackaton;

use Illuminate\Http\Request;

class ParametrageController extends Controller
{
    public function render()
    {

        $data = [
            'hackaton_inscription' => ModelsHackaton::orderBy('created_at', 'DESC')
                ->paginate(4),
        ];

        $response = [
            'statut' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    public function createHackathon(Request $request)
    {
        $validation = $this->validate($request, [
            'pco_1' => 'required',
            'annee' => 'required|min:4'
        ]);

        if ($validation) {

            ModelsHackaton::create([
                'pco_1' => $request->pco_1,
                'pco_2' => $request->pco_2,
                'annee' => $request->annee
            ]);

            $response = [
                'statut' => true,
                'message' => "Hackathon crée avec succès",
            ];

        } else {
            $response = [
                'statut' => false,
                'message' => "Remplissez tout les champs correctement",
            ];
        }

        return response()->json($response);

    }
}
