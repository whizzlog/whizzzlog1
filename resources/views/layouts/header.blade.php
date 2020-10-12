    <div class="navigation">
  		    	<a class="toggleMenu" href="#">Menu</a>
					<ul class="nav">
						<li class="meny-hover-parent">
														<a href="#">BANKS</a>
							
														<ul class="menyhover">
															@foreach ($banks as $bank)
																<li><a href="{{ url('/en/'.$bank->id.'/logs') }}">{{ $bank->name }}</a></li>
															@endforeach							
							
							
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
														<a href="#" >Bank Logs</a>
							
														<ul class="menyhover2">
								@foreach ($banks as $bank)
												<li>
							<a href="{{ url('/en/'.$bank->id.'/logs') }}" >{{ $bank->name }}</a>
								</li>						
								@endforeach
							
								
							</ul>
						</li>
						
						
					
						
						<li>
									<a href="/my_item.php">Orders</a>
									
						</li>
											
						<li class="meny-hover-parent2">
							<a href="#">My account</a>
							<ul class="menyhover2">
								
								<li>
									<a href="{{ url('/en/deposits') }}">Deposit history</a>
									
								</li>
							
								
								<li>
									<a href="{{ url('/en/settings') }}">Settings</a>
									
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