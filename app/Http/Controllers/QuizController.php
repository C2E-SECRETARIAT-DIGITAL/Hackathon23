<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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

            $qsession =  Auth::user()->etudiant->getEquipe()->qsession;
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

    public function statequiz(Request $request)
    {
        $user = Auth::user();
        $canpasstest = true;

        if (!$user->etudiant->getEquipe()->niveau->quiz_available) {
            $canpasstest = false;
        } else {

            if ($user->etudiant->getEquipe()->qsession->quiz->state == 0) {
                $canpasstest = false;
            } else {
                if ($user->etudiant->getEquipe()->qsession->state == 1) {
                    $canpasstest = false;
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
}
