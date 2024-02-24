<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Hackaton as ModelsHackaton;
use App\Models\Qsession;
use App\Models\Classe;
use App\Models\Equipe;
use App\Models\Niveau;
use App\Models\Quiz;



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
            $equipes = Equipe::with('participants.etudiant', 'niveau', 'qsession.quiz')->where('hackaton_id', $hackaton->id)
                ->where('niveau_id', $request->niveauId)
                ->where('statut', $request->statut)
                ->get();

            foreach ($equipes as $eq) {
                if (Classe::where('libelle', $eq->participants[0]->etudiant->classe)->first()->esatic == 0)
                    $eq->is_extern = true;
                else
                    $eq->is_extern = false;
            }
            $data = [
                'equipes' => $equipes,
                'niveaux' => Niveau::all()
            ];
        }

        $response = [
            'status' => true,
            'data' => $data,
        ];

        return response()->json($response);
    }

    /*
    {
        'equipeId' => id de l'équipe
    }
    */
    public function toogleequipe(Request $request)
    {

        if (!$request->equipeId) {

            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];

        } else {
            $equipe = Equipe::find($request->equipeId);
            if (!$equipe) {

                $response = [
                    'status' => false,
                    'message' => "Equipe non trouvée",
                ];

            } else {

                $equipe->statut = !$equipe->statut;
                $equipe->save();

                $response = [
                    'status' => true,
                    'message' => "ok",
                ];

            }
        }

        return response()->json($response);
    }

    /*
    {
        'equipeId' => id de l'equipe dont on veut réinitialiser le quiz
    }
    */
    public function resetquiz(Request $request)
    {
        if (!$request->equipeId) {

            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];

        } else {
            $session = Qsession::where('equipe_id', $request->equipeId)->first();

            if (!$session) {

                $response = [
                    'status' => false,
                    'message' => "Session non trouvé",
                ];

            } else {

                $session->score = 0;
                $session->state = 0;
                $session->save();

                $response = [
                    'status' => true,
                    'message' => "ok",
                ];
            }
        }
        return response()->json($response);

    }
}
