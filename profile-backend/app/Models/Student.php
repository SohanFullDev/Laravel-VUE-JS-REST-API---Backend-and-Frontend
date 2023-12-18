<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    public $table = "students";
    protected $fillable = array("*");
    public function courses(){
        return $this->belongsToMany(Course::class,"course_student");

    }
}
