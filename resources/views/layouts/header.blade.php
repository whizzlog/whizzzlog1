    <div class="navigation">
  		    	<a class="toggleMenu" href="#">Menu</a>
					<ul class="nav">
						<li class="meny-hover-parent">
														<a href="#" style="color:green;">BANKS</a>
							
														<ul class="menyhover">
															@foreach ($banks as $bank)
																<li><a href="{{ url('/en/'.$bank->id.'/logs') }}">{{ $bank->name }}</a></li>
															@endforeach							
							
							<li><a href="/schwab.php">Schwab</a></li>
							<li><a href="/key.php">Key</a></li>
							<li><a href="/53com.php">53com</a></li>
							<li><a href="/sccu.php">Sccu</a></li>
							<li><a href="/lmcu.php">LmCU</a></li>
							<li><a href="/td.php" >TD Bank</a></li>
							</ul>
						</li> 
						
					<!--	<li class="meny-hover-parent">
														<a href="/banks_lp.php" style="color:green;">BANKS log:pass</a>
							
														<ul class="menyhover">
							
							</ul>
						</li> 
						<li>
														<a href="/binfo.php" style="color:green;">BANKS INFO</a>
							
													</li> 
						-->
						
						<li class="meny-hover-parent2">
														<a href="#" style="color:green;">Bank Logs</a>
							
														<ul class="menyhover2">
								@foreach ($banks as $bank)
												<li>
							<a href="{{ url('/en/'.$bank->id.'/logs') }}" >{{ $bank->name }}</a>
								</li>						
								@endforeach
							
								
							</ul>
						</li>
						
						
					
						
						<li>
									<a href="/my_item.php">Order history</a>
									
						</li>
											
						<li class="meny-hover-parent2">
							<a href="#">My account</a>
							<ul class="menyhover2">
								
								<li>
									<a href="/deposit_history.php">Deposit history</a>
									
								</li>
								<li>
									<a href="/btc_history.php">BTC wallets history</a>

								</li>
								
								<li>
									<a href="/my_account.php">Settings</a>
									
								</li>
								<li>
									<a href="/">News</a>
								</li>
								<li>
									<a href="#" onclick="event.preventDefault();
									document.getElementById('logout-form').submit();">Logout</a>
									<form id="logout-form" method="POST" action="{{ route('logout') }}">
										@csrf
									</form>
								</li>
							</ul>
						</li>

						
						
						</ul>
					 <span class="left-ribbon"> </span> 
      				 <span class="right-ribbon"> </span>    
  		    </div>