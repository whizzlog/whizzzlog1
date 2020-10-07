<?php

namespace App\Http\Controllers;

use App\Bank;
use App\BankLog;
use App\Http\Requests\BankLogRequest;
use App\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogsController extends Controller
{
    public function verified(){
        $banklogs = BankLog::all();
        return view('banklogs.verifiedlogs',array(
            'banklogs' => $banklogs
        ));
    }

    public function myorders(){
        $orders = Order::where(array(
            'user_id' => Auth::user()->id
        ))->get();
      //  dd($orders);
     
        return view('myorders.list',array(
            'orders' => $orders
        ));
    }

    public function getByBank($bankId){
        $banks = Bank::all();
        $bank = Bank::where('id',$bankId)->first();
        $banklogs = BankLog::where('bank_id', $bankId)->get();
        if(!$bank){
            abort('404','Unable to get Data');
        }
        return view('banklogs.logs',array(
            'banks' => $banks,
            'banklogs' => $banklogs
        ));

    }

    public function mylogs(){
        return view('banklogs.mylogs');
    }

    public function create(){
        $banks = Bank::all();
        return view('banklogs.create',array(
            'banks'=> $banks
        ));
    }

    public function add(BankLogRequest $request){
        $bank = $request->bank;
        $balance = $request->balance;
        $price = $request->price;
        $btc_compatible = $request->btc_compatible; 
        
        $newBankLog = BankLog::create(array(
            'bank_id' => $bank,
            'balance' => $balance,
            'price' => $price,
            'btc_compatible' => $btc_compatible
        ));

        if($newBankLog){
            return redirect()->back()->with('success','Bank log created successfully');

        }
        return redirect()->back()->with('error','Unable to create new bank log');
    }

    public function pay(Request $request){
        $id = $request->logid;
        $log = BankLog::where('id', $id)->first();
        $orderExists = Order::where(array(
            'user_id' => Auth::user()->id,
            'bank_log_id' => $id
        ))->first();
        if(!$orderExists){
           //dd($orderExists);
            $newOrder = Auth::user()->orders()->create(
                array(
                    'bank_log_id' => $log->id,
                    'amount' => $log->price,
                    'btc_address' => '1A96qq3xUf3o7yMZiMqoP9xEHiY4Qazfj7',
                    'reference' => uniqid()
                )
            );
        }
        if(!$log){
            abort('404', 'This bank log cannot be found');
        }
        return view('banklogs.logpay',array(
            'log' => $log,
            
        ));
    }
}
