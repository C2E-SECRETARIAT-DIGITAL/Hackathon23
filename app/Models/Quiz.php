<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'time',
        'score',
        'niveau_id',
        'hackaton_id'
    ];

    public function niveau(){
        return $this->belongsTo(Niveau::class);
    }

    public function questions(){
        return $this->hasMany(Question::class);
    }

    public function qsessions(){
        return $this->hasMany(Qsession::class);
    }
}
