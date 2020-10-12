@extends('layouts.app')

@section('content')
 <div class="content-bottom-center" id="page_my_account">

        
				
        <div class="widget">
			@if(session('success'))
              <font color="green">{{ session('success') }}</font>

              @endif

              @if(session('error'))
              <font color="red">{{ session('errror') }}</font>

              @endif

              @foreach ($errors->all() as $message) 
               <font color="red">{{ $message }}</font><br>
              
              @endforeach
            <div class="whead"><h6>Change Password</h6><div class="clear"></div></div>
			<form id="usualValidate" method="post" action="{{ route('settings.password') }}" class="main ui-formwizard">
				@csrf
                <input type="hidden" name="action" value="change_password">
                <div class="formRow">
                    <div class="grid3"><label>Current Password:</label></div>
                    <div class="grid9"><input type="password" name="old_password" id="old_password" placeholder="**************" class="ui-wizard-content required "></div>
                                        <div class="clear"></div>
                </div>
                <div class="formRow">
                    <div class="grid3"><label>New Password:</label></div>
                    <div class="grid9"><input type="password" name="new_password" id="new_password" placeholder="**************" class="ui-wizard-content required "></div>
                                        <div class="clear"></div>
                </div>
                <div class="formRow">
                    <div class="grid3"><label>Confirm New Password:</label></div>
                    <div class="grid9"><input type="password" name="password_confirmation" placeholder="**************" id="confirm_new_password" class="ui-wizard-content required"></div>
                    <div class="clear"></div>
                </div>
                <div class="formRow noBorderB">
                    <div class="formSubmit">
                        <input type="submit" class="mybutton_black" value="Submit">
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>

        
        <div class="widget">
            <div class="whead"><h6>Change Jabber</h6><div class="clear"></div></div>
            <form id="usualValidate" method="post" action="my_account.php" class="main ui-formwizard">
                <input type="hidden" name="action" value="change_jabber">
                <div class="formRow">
                    <div class="grid3"><label>Current Jabber:</label></div>
                    <div class="grid9"><input type="text" name="new_jabber" id="new_jabber" class="ui-wizard-content" value="{{ auth()->user()->email }}"></div>
                    <div class="clear"></div>
                </div>
                <div class="formRow noBorderB">
                    <div class="formSubmit">
                        <input type="submit" class="mybutton_black" value="Submit">
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </form>
        </div>

    </div>

@endsection