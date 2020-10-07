@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">New Log </h3>
                </div>
                <div class="col-4 text-right">
                </div>
              </div>
               @if(session('success'))
              <font color="green">{{ session('success') }}</font>

              @endif

              @if(session('error'))
              <font color="red">{{ session('errror') }}</font>

              @endif

              @foreach ($errors->all() as $message) 
               <font color="red">{{ $message }}</font><br>
              
              @endforeach
              
                                            </div>
            <div class="card-body">
                  <form action="{{ route('logs.create') }}" method="post">
                    @csrf
                
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Create Bank Log</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Bank</label>
                    <select class="form-control" name="bank">
                        @foreach ($banks as $bank )
                        <option value="{{ $bank->id }}">{{ $bank->name }}</option>                             
                        @endforeach
                       
                    </select>    
                    </div>
                    </div>
                  </div>
                   <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Balance</label>
                        <input id="input-address" name="balance"  class="form-control" value="" type="text" required>
                      </div>
                    </div>
                  </div>
                   <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Price</label>
                        <input id="input-address" name="price"  class="form-control" value="" type="text" required>
                      </div>
                    </div>
                  </div>
                   <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Btc Compatible</label>
                    <select name="btc_compatible" id="" class="form-control">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>    
                    </select>   
                    </div>
                    </div>
                  </div>
                  
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <div class="pl-lg-4">
                 
                                            <button class="btn btn-primary" type="submit" name="password" >Submit</button>  
                </div>
              </form>
            </div>
          </div>
        </div>
</div>

@endsection