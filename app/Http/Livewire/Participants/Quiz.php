<?php

namespace App\Http\Livewire\Participants;

use App\Models\QsessionResponse;
use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Quiz extends Component
{

    public $count_down;

    public $current_index = 0;

    public $next = true;

    public $pre = false;

    public $sponses;

    public $score = 0;

    public function render()
    {

        // $this->closeSession();
        return view('livewire.participants.quiz', [
            'quiz' => Auth::user()->etudiant->getEquipe()->qsession->quiz
        ]);
    }

    public function closeSession()
    {
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $ss->state = 0;
        $ss->save();
    }

    public function moveQuestion($n)
    {
        $qq = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions;

        if ($this->current_index + $n == sizeof($qq) - 1) {
            $this->next = false;
        } else {
            $this->next = true;
        }

        if ($this->current_index + $n == 0) {
            $this->pre = false;
        } else {
            $this->pre = true;
        }

        $this->current_index += $n;
    }

    public function storeAnswers()
    {
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $st = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions[$this->current_index];
        $responses = QsessionResponse::where('qsession_id', $ss->id)->where('question_id', $st->id)->get();

        $sc = 0;

        foreach ($responses as $response) {

            if ($this->sponses) {
                if (array_key_exists($response->response_id, $this->sponses)) {

                    if ($this->sponses[$response->response_id] == true) {
                        $response->state = 1;
                        $response->save();
                        $sc += $response->score;
                    } else {
                        $response->state = 0;
                        $response->save();
                    }
                } else {
                    $response->state = 0;
                    $response->save();
                }
            }
        }

        $this->score += $sc;
        $ss->score = $this->score;
        if ($ss->score == 0)
            $ss->score = 1;

        $ss->save();

    }

    public function storeAndMove($n)
    {

        $this->storeAnswers();
        $this->moveQuestion($n);
    }

    public function storeAndExit()
    {
        $this->storeAnswers();
        return redirect()->to('/preselection');
    }


    public function see()
    {
        dd($this->sponses);
    }
}
