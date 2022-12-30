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

    public function render()
    {
        return view('livewire.participants.quiz', [
            'quiz' => Auth::user()->etudiant->getEquipe()->qsession->quiz
        ]);
    }

    public function moveQuestion($n)
    {
        $qq = Auth::user()->etudiant->getEquipe()->qsession->quiz->questions;

        if($this->current_index + $n == sizeof($qq) - 1){
            $this->next = false;
        } else{
            $this->next = true;
        }

        if($this->current_index + $n == 0){
            $this->pre = false;
        } else{
            $this->pre = true;
        }

        $this->current_index += $n;
    }


    public function see()
    {
        dd($this->sponses);
    }
}
