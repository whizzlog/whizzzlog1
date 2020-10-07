<!DOCTYPE HTML>

<!-- Mirrored from darknet-shop.cc/login.php by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 01 Oct 2020 12:15:58 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
<title>DarkNet-Shop.CC</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel='stylesheet' type='text/css'>
<link href="{{ asset('assetss/css/login.css') }}" rel="stylesheet" type="text/css" media="all"/>
</head>
<body>
	<div class="container">
		<img src="{{ asset('assetss/images/logo.png') }}">
		<form action="{{ route('login') }}" id="usualValidate" method="post">
			@csrf
        <h2 class="form-signin-heading">Authorisation</h2>
        @error('email')
        <p>{{ $message }}</p>
        @enderror
		        <input type="text" name="email" id="user_name" placeholder="Your email" class="required loginUsername @error('email') is-invalid @enderror" style="width: 265px;"/>
        <input type="password" name="password" id="user_password" placeholder="Password" class="loginPassword required @error('password') is-invalid @enderror" style="width: 265px; margin-bottom: 0px;"/>
      
	   <input type="text" autocomplete="off" name="cpt" id="cpt" placeholder="Captcha" class="required loginUsername " style="width: 265px;"/>
	    <img src="cpt/indexeb78.html?PHPSESSID=gngu8bfkorhta7i24rmb9m5bg0">
	   <!--<div id="nocaptcha" style="width: 265px; margin-bottom: 15px; margin-left: 20px;"></div>-->
	  
        <div class="logControl">
            
            	<input type="submit" name="submit" value="Login" class="btn_lex" id="btn_lex" style="padding: 20px; font-size:20px;"/>
        </div>
	
		
		 <a href="{{ route('register') }}" ><input type="button" name="registration" value="Registration" class="buttonM bBlue" /></a>
		</form>
    </div>

<!--<script src="https://api-nocaptcha.mail.ru/captcha?public_key=cb9f23f51ae2e4a13b1114f0f1718ab1" type="text/javascript"></script>-->

</body>
<!-- Mirrored from darknet-shop.cc/login.php by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 01 Oct 2020 12:16:01 GMT -->
</html>
       