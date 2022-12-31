<?php

namespace App\Http\Livewire\Participants;

use Livewire\Component;
use Illuminate\Support\Facades\Auth;

class Quiz extends Component
{

    public $current_index = 0;

    public $next = true;

    public $pre = false;

    public $sponses;

    public $score = 0;

    public function render()
    {
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $ss->state = 0;
        $ss->save();

        return view('livewire.participants.quiz', [
            'quiz' => Auth::user()->etudiant->getEquipe()->qsession->quiz
        ]);
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
        $qq = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions[$this->current_index];
        $ss = Auth::user()->etudiant->getEquipe()->qsession;
        $sc = 0;

        foreach ($qq->responses as $response) {

            if ($this->sponses) {
                if (array_key_exists($response->id, $this->sponses)) {

                    if ($this->sponses[$response->id] == true) {
                        $response->state = 1;
                        $response->save();
                        $sc += $response->score;
                    } else{
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
        $ss->score = $this->sc;
        $ss->save();
    }

    public function storeAndMove($n){

        $this->storeAnswers();
        $this->moveQuestion($n);

    }


    public function see()
    {
        dd($this->sponses);
    }
}
