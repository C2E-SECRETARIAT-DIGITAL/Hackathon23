<?php

namespace App\Http\Livewire\Participants;

use Livewire\Component;

class Part extends Component
{
    public function render()
    {
        return view('livewire.participants.part');
    }

    public function add(){
        dd('hello');
    }
}
