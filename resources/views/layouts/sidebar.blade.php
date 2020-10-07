 <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <!-- Brand -->
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="index.php">
          <img src="{{ asset('assets/img/brand/blue.png') }}" class="navbar-brand-img" alt="Whizzlog">
        </a>
      </div>
                  <span class="nav-item d-xl-none">
              <!-- Sidenav toggler -->
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main" title="Menu" style="float:right;">
                <div class="sidenav-toggler-inner">
                <i class="ni ni-bold-left text-primary"></i>
                </div>
              </div><br />
            </span>
      <div class="navbar-inner">
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
          <!-- Nav items -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="{{ url('/en') }}">
                <i class="ni ni-bullet-list-67 text-primary"></i>
                <span class="nav-link-text">Verified Bank Logs</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/myorders') }}">
                <i class="ni ni-ui-04"></i>
                <span class="nav-link-text">My Orders</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/mylogs') }}">
                <i class="ni ni-key-25 text-info"></i>
                <span class="nav-link-text">My Bank Logs</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/settings') }}">
                <i class="ni ni-settings-gear-65 text-yellow"></i>
                <span class="nav-link-text">Account Settings</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/help') }}">
                <i class="ni ni-support-16 text-default"></i>
                <span class="nav-link-text">Help</span>
              </a>
            </li>
            @if(auth()->user()->hasRole('admin'))
             <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/banklogs/create') }}">
                <i class="ni ni-support-16 text-default"></i>
                <span class="nav-link-text">New Log</span>
              </a>
            </li>

             <li class="nav-item">
              <a class="nav-link" href="{{ url('/en/bank/create') }}">
                <i class="ni ni-support-16 text-default"></i>
                <span class="nav-link-text">New Bank</span>
              </a>
            </li>
            @endif
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">
                <i class="ni ni-fat-remove text-orange"></i>
                <span class="nav-link-text">Logout</span>
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST">
                  @csrf
              </form>
            </li>
          </ul>
          <!-- Divider -->
          <!-- Heading -->
          <!-- Navigation -->
          <ul class="navbar-nav mb-md-3">
          </ul>
        </div>
      </div>
    </div>
  </nav>