<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    protected $fillable = ['name','location','image_url'];

     public function logs(){
     return $this->hasMany('App\BankLog');
     }
}
