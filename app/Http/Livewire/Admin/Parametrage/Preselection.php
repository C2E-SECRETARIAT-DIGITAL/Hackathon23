<?php

namespace App\Http\Livewire\Admin\Parametrage;

use Livewire\Component;

use App\Models\Quiz;
use App\Models\Question;
use App\Models\Response;

class Preselection extends Component
{

    public $niveau = 1;
    public $newQuestion;
    public $newResponseC;
    public $newResponseS;
    public $editModeR = false;
    public $editModeQ = false;
    public $resp_id;
    public $que_id;
    public $quiz_score;
    public $quiz_time;


    public function render()
    {

        return view('livewire.admin.parametrage.preselection', [
            'quiz' => Quiz::where('niveau_id', $this->niveau)->first(),
            'quizzes' => Quiz::all(),
        ]);
    }

    public function updateQuiz($qid){
        $qi = Quiz::find($qid);

        $qi->score = $this->quiz_score;
        $qi->time = $this->quiz_time;
        $qi->save();

        $this->resetVars();

    }

    public function storeNewQuestion()
    {

        Question::create([
            'content' => $this->newQuestion,
            'quiz_id' => Quiz::where('niveau_id', $this->niveau)->first()->id,
        ]);

        $this->resetVars();
    }

    public function editQuestion($qid)
    {
        $que = Question::find($qid);

        $this->newQuestion = $que->content;
        $this->editModeQ = true;
        $this->que_id = $qid;
    }

    public function updateQuestion()
    {
        $que = Question::find($this->que_id);
        $que->content = $this->newQuestion;
        $que->save();

        $this->resetVars();
    }

    public function deleteQuestion($qid)
    {

        $que = Question::find($qid);
        $que->delete();
    }

    public function storeNewResponse($qid)
    {
        Response::create([
            'content' => $this->newResponseC[$qid],
            'score' => $this->newResponseS[$qid],
            'question_id' => $qid
        ]);

        $this->resetVars();
    }

    public function editResponse($qid, $rid)
    {
        $res = Response::find($rid);

        $this->newResponseC[$qid] = $res->content;
        $this->newResponseS[$qid] = $res->score;
        $this->resp_id = $rid;
        $this->editModeR = true;
    }

    public function updateResponse($qid)
    {
        $res = Response::find($this->resp_id);
        $res->content = $this->newResponseC[$qid];
        $res->score = $this->newResponseS[$qid];
        $res->save();

        $this->resetVars();
    }

    public function deleteResponse($rid)
    {
        $res = Response::find($rid);
        $res->delete();
    }

    public function resetVars()
    {
        // $this->niveau = 1;
        $this->newQuestion = "";
        $this->newResponseC = [];
        $this->newResponseS = [];
        $this->editModeR = false;
        $this->editModeQ = false;
        $this->resp_id = 0;
        $this->quiz_score = "";
        $this->quiz_time = "";
    }
}
