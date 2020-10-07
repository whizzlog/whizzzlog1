<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id','bank_log_id','amount','status','btc_address','reference'];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function banklog(){
    return $this->belongsTo('App\BankLog','bank_log_id');
    }

    // public function bank(){
    //     return $this->hasOneThrough('App\Bank', 'App\BankLog');
    // }
}
