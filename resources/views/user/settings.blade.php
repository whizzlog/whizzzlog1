@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Change Password </h3>
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
                  <form action="{{ route('settings.password') }}" method="post">
                    @csrf
                <h6 class="heading-small text-muted mb-4">Enter Old Password</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-username">Old Password</label>
                        <input name="old_password" type="password" id="input-username" class="form-control" placeholder="Old Password" value="" required>
                      </div>
                    </div>
                    <div class="col-lg-6">
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Address -->
                <h6 class="heading-small text-muted mb-4">Create New Password</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">New Password</label>
                        <input name="password" type="password" class="form-control" placeholder="********" value=""  required>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Repeat Password</label>
                        <input  name="password_confirmation" type="password" class="form-control" placeholder="********" value="" required>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4" />
                <!-- Description -->
                <div class="pl-lg-4">
                 
                                            <button class="btn btn-primary" type="submit"  >Submit</button>  
                </div>
              </form>
            </div>
          </div>
        </div>
</div>

@endsection