


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Whizzlog - Buy US Bank Logs With Verified Unemployment Benefit Balance</title>
    <meta name="description" content="Buy US bank logs with verified unemployment benefit balance"/>
  <!-- Favicon -->
  <link rel="icon" href="{{ asset('assets/img/brand/favicon.png') }}" type="image/png">
  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <!-- Icons -->
  <link rel="stylesheet" href="{{ asset('assets/vendor/nucleo/css/nucleo.css') }}" type="text/css">
  <link rel="stylesheet" href="{{ asset('assets/vendor/@fortawesome/fontawesome-free/css/all.min.css') }}" type="text/css">
  <!-- Argon CSS -->
  <link rel="stylesheet" href="{{ asset('assets/css/argon.css?v=1.2.0') }}" type="text/css">
@yield('css')
</head>

<body>
  <!-- Sidenav -->
 @include('layouts.sidebar')
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Search form -->
          <!-- Navbar links -->
          <ul class="navbar-nav align-items-center  ml-md-auto ">
            <li class="nav-item d-xl-none">
              <!-- Sidenav toggler -->
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main" title="Menu">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li class="nav-item d-sm-none">
            </li>
            <li class="nav-item dropdown">
              
            </li>
            <li class="nav-item dropdown">

            </li>
          </ul>
          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Welcome</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Header -->
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col">
              <h4 class="text-white d-inline-block mb-0">On Whizzlog, we sell ONLY US bank logs used to claim unemployment benefits. All bank logs balance are verified. Need help? <a href="help.php" title="Quick Guide"><span style="color:yellow;   text-decoration: underline;
">Read this guide</span> </a> </h6>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    @yield('content')
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">Verified Bank Logs</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Balance</th>
                    <th scope="col" class="sort" data-sort="status">BTC Compatible</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="sort" data-sort="completion"></th>
                  </tr>
                </thead>
                                                  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $7,297.34 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $620 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1501" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="7,297.34" hidden>
                                            <input name="logprice" type="text" value="620" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $9,306.50 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $810 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1502" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="9,306.50" hidden>
                                            <input name="logprice" type="text" value="810" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $12,850.58 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $970 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1503" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="12,850.58" hidden>
                                            <input name="logprice" type="text" value="970" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $6,964.92 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $610 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1504" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="6,964.92" hidden>
                                            <input name="logprice" type="text" value="610" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $6,758.81 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $580 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1505" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="6,758.81" hidden>
                                            <input name="logprice" type="text" value="580" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $11,837.78 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $930 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1506" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="11,837.78" hidden>
                                            <input name="logprice" type="text" value="930" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $10,366.32 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $900 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1507" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="10,366.32" hidden>
                                            <input name="logprice" type="text" value="900" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $8,372.08 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $790 USD
                    </td>
                    <td>
                      <div class="d-flex align-items-center">
                                            <input name="logid" type="text" value="1508" hidden>
                                            <input name="banknames" type="text" value="Centennial Bank, Arkansas" hidden>
                                            <input name="accbal" type="text" value="8,372.08" hidden>
                                            <input name="logprice" type="text" value="790" hidden>
                                            <button class="btn btn-sm btn-neutral" type="submit" name="buylog">Buy Log</button>                        <div>
                        </div>
                      </div>
                    </td>

                  </tr>
                  </form>
                </tbody>              </table>
            </div>
          </div>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col">
          <div class="card bg-default shadow">
            <div class="card-header bg-transparent border-0">
              <h3 class="text-white mb-0">Recently Sold Bank Logs</h3>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center table-dark table-flush">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Bank Name</th>
                    <th scope="col" class="sort" data-sort="budget">Balance</th>
                    <th scope="col" class="sort" data-sort="status">BTC Compatible</th>
                    <th scope="col">Price</th>
                    <th scope="col" class="sort" data-sort="completion">Time Sold</th>
                  </tr>
                </thead>
                                                  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $9,128.43 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $805 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $11,694.75 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $924 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="assets/img/theme/cb.jpg">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $8,244.32 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $786 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $8,675.32 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $798 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>  
                <tbody class="list">
                  <form  action="logpay.php" method="post">
                  <tr>
                    <th scope="row">
                      <div class="media align-items-center">
                        <a href="#" class="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="{{ asset('assets/img/theme/cb.jpg') }}">
                        </a>
                        <div class="media-body">
                          <span class="name mb-0 text-sm">Centennial Bank, Arkansas</span>
                        </div>
                      </div>
                    </th>
                    <td class="budget">
                      $12,887.54 USD
                    </td>
                    <td>
                      <span class="badge badge-dot mr-4">
                        <i class="bg-success"></i>
                        <span class="status">Yes</span>
                      </span>
                    </td>
                    <td>
                      $969 USD
                    </td>
                    <td>
                      Few moments ago
                    </td>

                  </tr>
                  </form>
                </tbody>              </table>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Footer -->
      <footer class="footer pt-0">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="copyright text-center  text-lg-left  text-muted">
              &copy; 2020 <a href="#" class="font-weight-bold ml-1">Whizzlog</a>
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
              <li class="nav-item">
                <a href="https://whizzlog.com/en/" class="nav-link" target="_blank">Buy Bank Logs</a>
              </li>
              <li class="nav-item">
                <a href="myorders.php" class="nav-link" target="_blank">My Orders</a>
              </li>
              <li class="nav-item">
                <a href="mylogs.php" class="nav-link" target="_blank">My Bank Logs</a>
              </li>
              <li class="nav-item">
                <a href="help.php" class="nav-link" target="_blank">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="{{ asset('assets/vendor/jquery/dist/jquery.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/js-cookie/js.cookie.js') }}"></script>
  <script src="{{ asset('assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js') }}"></script>
  <script src="{{ asset('assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js') }}"></script>
  <!-- Argon JS -->
  <script src="{{ asset('assets/js/argon.js?v=1.2.0') }}"></script>
  @yiel('js')
</body>

</html>


