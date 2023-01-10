<?php

namespace App\Http\Livewire\Participants;

use App\Models\Equipe;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithFileUploads;

class Video extends Component
{

    use WithFileUploads;
    public $video;

    public function render()
    {
        return view('livewire.participants.video');
    }

    public function addVideo()
    {
        $this->validate([
            'video' => 'required'
        ]);

        $equipe_id = Auth::user()->etudiant->getEquipe()->id;
        $path = Storage::disk('public')->put('videos', $this->video);

        $team = Equipe::find($equipe_id);
        $team->video_url = $path;
        $team->save();

        return redirect()->route('dashboard');
    }
}
