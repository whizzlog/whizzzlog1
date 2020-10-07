<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BankLog extends Model
{
    protected $fillable = ['balance','price','btc_compatible','bank_id'];

    public function bank(){
        return $this->belongsTo('App\Bank');
    }

    public function orders(){
    return $this->hasMany('App\Order');
    }
}
