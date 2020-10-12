<!DOCTYPE HTML>
<head>
<title>Owl Shop</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link href="https://fonts.googleapis.com/css?family=Ubuntu+Condensed" rel='stylesheet' type='text/css'>
<link href="{{ asset('assetss/css/style.css?v=1.02') }}" rel="stylesheet" type="text/css" media="all"/>
<link href="{{ asset('assetss/css/plugins.css') }}" rel="stylesheet" type="text/css" media="all"/>
<link href="{{ asset('assetss/css/tooltipster.css') }}" rel="stylesheet" type="text/css">
<script type="text/javascript" src="{{ asset('assetss/js/jquery-1.9.0.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('assetss/js/functions.js?ver=2.7.84') }}"></script>
<script type="text/javascript" src="{{ asset('assetss/js/jquery.cookie.js') }}"></script>
<script type="text/javascript" src="{{ asset('assetss/js/bootstrap.js') }}"></script>
@yield('css')
 
	
</head>
<body>
<div id="wrapper" style="min-height:100%;">
	<div class="content">
		<div class="header">


				<div class="wrap">
					<div class="header_top">
						<div class="logo">
							<a href="/home.php"><img src="{{asset('assetss/images/logo.png')}}" alt="" /></a>
							<p style="color: white"> Welcome, {{ auth()->user()->email }}</p>
						</div>
							<div class="header_top_right">
							<div class="search_box">
									<span>Balance: $0.00</span><a href="{{url('/en/deposit') }}" class="deposit-buttom"></a>
								
									<div class="clear"></div>
								</div>
						</div>
					<div class="clear"></div>
				</div>     
				@include('layouts.header')
				<div class="header_bottom">
					

				<div class="clear"></div>
			</div>
		</div>
				
		<div id="mini-cart"><a href="cart.php">My cart(<span>0</span>)</a></div>   </div>

		<div class="wrap">
			@yield('content')
		</div>

	</div>
</div>
	<div class="footer">
   	  <div class="wrap">	
			 <div class="copy_right">
				<p>Copy rights (c). All rights Reseverd </p>
		   </div>	
		   <div class="footer-nav">
				<ul>
					
					
					
					<!--<li><a href="#">JID: wells-fargo@exploit.im</a></li>-->
				<!-- <li><a href="#">ICQ: 695285868</a></li>-->
				</ul>
		   </div>		
        </div>
    </div> 
	
	<script type="text/javascript" src="{{ asset('assetss/js/navigation.js?ver=1.07') }}"></script>
	@yield('js')
	   
</body>
</html>
