<?php

namespace App\Http\Controllers;

use App\Bank;
use App\Http\Requests\BankRequest;
use Illuminate\Http\Request;

class BankController extends Controller
{
    public function create(){
        return view('banks.create');
    }

    public function add(BankRequest $request){
        $name= $request->name;
        $location = $request->location;
        $image = $request->file('image');

        $fileName = uniqid(). '.' . $image->extension();
       $path = $image->storeAs('uploads', $fileName,'public');
       if($path){
           $newBank = Bank::create(array(
               'name' => $name,
               'location' => $location,
               'image_url' => 'storage/'.$path
           ));
           return redirect()->back()->with('success','Bank created successfully');
       }
       return redirect()->back()->with('error','Unable to create bank');
    }
}
