<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use App\Models\Quiz;



class QuizController extends Controller
{
    /*
    {
        'niveauId' => id du niveau
    }
    */
    public function renderquiz(Request $request)
    {
        $quiz = Quiz::with('questions.responses')->where('id', Auth::user()->etudiant->getEquipe()->qsession->quiz_id)->first();

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

        $response = [
            'status' => true,
            'questions' => $data,
        ];

        return response()->json($response);
    }
}
