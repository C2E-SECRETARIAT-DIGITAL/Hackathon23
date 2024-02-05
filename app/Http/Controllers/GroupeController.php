<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Equipe;
use App\Models\Hackaton as ModelsHackaton;
use App\Models\Niveau;


class GroupeController extends Controller
{
    //
    public function rendergroupe(Request $request)
    {
        $hackaton = ModelsHackaton::where('inscription', 1)->first();
        if (!$hackaton) {
            $data = [
                'equipes' => [],
                'niveaux' => Niveau::all()
            ];
        } else {
            $data = [
                'equipes' => Equipe::where('hackaton_id', $hackaton->id)
                    ->where('niveau_id', $request->niveauId)
                    ->where('statut', $request->statut)
                    ->get(),

                'niveaux' => Niveau::all()
            ];
        }

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }
}
