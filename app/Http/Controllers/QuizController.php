<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Qsession;
use App\Models\Quiz;



class QuizController extends Controller
{

    public function renderquiz(Request $request)
    {
        $quiz = Quiz::with('questions.responses')->where('id', Auth::user()->etudiant->getEquipe()->qsession->quiz_id)->first();

        if ($quiz) {

            $data = [];
            foreach ($quiz->questions as $question) {

                $choices = [];
                $correctanswer = '';

                foreach ($question->responses as $res) {
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
            }

            $qsession = Auth::user()->etudiant->getEquipe()->qsession;
            $qsession->state = 1;
            $qsession->save();

            $response = [
                'status' => true,
                'questions' => $data,
            ];

        } else {
            $response = [
                'status' => false,
                'message' => "Quiz introuveable pour ce niveau",
            ];
        }

        return response()->json($response);
    }

    /**
     * canpasstest
     * 0 => peut faire le quiz
     * 1 => quiz non disponible pour le niveau
     * 2 => quiz fermé
     * 3 => a déjà fait le quiz
     */

    public function statequiz(Request $request)
    {
        $user = Auth::user();
        $canpasstest = 0;

        if (!$user->etudiant->getEquipe()->niveau->quiz_available) {
            $canpasstest = 1;
        } else {

            if ($user->etudiant->getEquipe()->qsession->quiz->state == 0) {
                $canpasstest = 2;
            } else {
                if ($user->etudiant->getEquipe()->qsession->state == 1) {
                    $canpasstest = 3;
                }
            }
        }

        $data = [
            'canpasstest' => $canpasstest
        ];

        $response = [
            'status' => true,
            'data' => $data
        ];

        return response()->json($response);

    }

    /*
    {
        'score' => score obtenue après le quiz
    }
    */
    public function submitquiz(Request $request)
    {
        if ($request->score == null) {

            $response = [
                'status' => false,
                'message' => "Remplissez tout les champs correctement",
            ];

        } else {

            $session = Qsession::find(Auth::user()->etudiant->getEquipe()->qsession->id);
            $session->score = $request->score;
            $session->save();

            $response = [
                'status' => true,
                'message' => "ok",
            ];
        }

        return response()->json($response);

    }
}
