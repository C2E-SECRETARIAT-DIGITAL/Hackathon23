<?php

namespace App\Http\Livewire\Participants;

use App\Models\Equipe;
use App\Models\Etudiant;
use App\Models\Hackaton;
use App\Models\Participant;
use Livewire\Component;

class Part extends Component
{

    public $etudiant_id = 0;
    public $equipe_id = 0;
    public $chef = 0;
    public function render()
    {
        return view('livewire.participants.part', [
            'etudiants' => Etudiant::all(),
            'equipes' => Equipe::all()
        ]);
    }

    public function add(){

        Participant::create([
            'etudiant_id' => $this->etudiant_id,
            'equipe_id' => $this->equipe_id,
            'hackaton_id' => Hackaton::latest()->first()->id,
            'chef' => $this->chef == 1 ? true : false
        ]);

        return redirect()->back();
    }
}
