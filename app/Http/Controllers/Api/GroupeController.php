<?php

namespace App\Http\Controllers\Api;

use App\Models\Hackaton;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class GroupeController extends Controller
{
    public function selection_render(Request $request)
    {
        $hackaton = Hackaton::latest()->first();

        $data = [
            'equipes' => Equipe::where('hackaton_id', $hackaton->id)
                ->where('niveau_id', 'LIKE', "%{$request->niveauselect}%")
                ->where('statut', 'LIKE', "%{$request->afficher}%")
                ->orderBy('created_at', 'DESC')->paginate(10),

            'niveaux' => Niveau::all(),

            'niveau' => Niveau::where('id', 'LIKE', "%{$request->niveauselect}%")->first()
        ];

        $response = [
            'data' => $data,
            'statut' => true
        ];

        return response()->json($response);
    }

    public function selection_selection(int $id)
    {
        if ($id) {
            $equipe = Equipe::where('id', $id)->first();
            $equipe->update([
                'statut' => !$equipe->statut
            ]);
            $response = [
                'message' => 'ok',
                'statut' => true
            ];
            return response()->json($response);
        }

        $response = [
            'message' => '$id null',
            'statut' => false
        ];
        return response()->json($response); 
    }

    public function selection_autoSelct(Request $request)
    {
        $quiz = Quiz::where('niveau_id', $request->niveauselect)->first();

        $qsW = Qsession::where('quiz_id', $quiz->id)->orderBy('score', 'desc')->get();
        $qS = Qsession::where('quiz_id', $quiz->id)->get();


        if ($request->nb_team >= sizeof($qsW)) {
            foreach ($qsW as $qs) {
                $e = $qs->equipe;
                $e->statut = 1;
                $e->save();
            }
        } else {
            for ($i = 0; $i < $request->nb_team; $i++) {
                $e = $qsW[$i]->equipe;
                $e->statut = 1;
                $e->save();
            }
        }

        foreach ($qS as $qs) {
            $e = $qs->equipe;
            if ($e->statut == 0) {
                $qs->score = $qs->score > 0 ? -$qs->score : $qs->score;
                $qs->save();
            }
        }

        $response = [
            'message' => 'Selection automatique effectuée avec succès !',
            'statut' => true
        ];
        return response()->json($response);
    }

    public function selection_resetSelection()
    {
        $quiz = Quiz::where('niveau_id', $this->niveauselect)->first();
        $qsessions = Qsession::where('quiz_id', $quiz->id)->get();

        foreach ($qsessions as $qs) {
            $e = $qs->equipe;
            $e->statut = 0;
            $e->save();

            $qs->score = $qs->score < 0 ? -$qs->score : $qs->score;
            $qs->save();
        }

        $response = [
            'message' => 'Inscription réussie !',
            'statut' => true
        ];

        return response()->json($response);
    }
}
