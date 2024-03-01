<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Joueur;
use App\Models\Question;
use App\Models\Response;


class GameController extends Controller
{
    public function question_aleatoire()
    {
        $questions = Question::all()->toArray();

        $cle = array_rand($questions);

        $question = $questions[$cle];
        $responses = $responses = Question::find($question['id'])->responses;
        $data = [];
        $choices = [];
        $correctanswer = '';

        foreach ($responses as $res) {
            array_push($choices, $res->content);
            if ($res->score > 0)
                $correctanswer = $res->content;
        }

        array_push(
            $data,
            [
                'correctAnswer' => $correctanswer,
                'question' => $question->content,
                'choices' => $choices,
            ]
        );

        $response = [
            "data" => $data,
            "status" => true
        ];

        return response()->json($response);
    }

    public function infos_user(Request $request)
    {
        if ($request->is_connected === true) {
            $joueur = Joueur::where('id_joueur', $request->id_joueur)->first();

            $response = [
                "data" => [
                    "nom" => $joueur->nom,
                    "score" => $joueur->score
                ],
                "status" => true
            ];

            return response()->json($response);
        } else {
            $response = [
                "status" => false
            ];

            return response()->json($response);
        }
    }

    public function validate_response(Request $request)
    {
        $joueur = Joueur::where('id_joueur', $request->id_joueur)->first();

        if (!$joueur) {
            $joueur = Joueur::create([
                'id_joueur' => $request->id_joueur,
                'nom' => $request->nom_joueur,
            ]);
        }

        $question = Question::where('id', $request->id_question)->first();
        $answer = Response::where('id', $request->id_response)->first();

        $joueur->score += $answer->score;
        $joueur->save();

        $response = [
            "messsage" => "Enregistrement effectué !",
            "status" => true
        ];

        return response()->json($response);
    }
}
