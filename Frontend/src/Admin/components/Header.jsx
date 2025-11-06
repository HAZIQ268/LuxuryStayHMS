import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    // ✅ Ensure Bootstrap dropdowns and tooltips work only inside admin layout
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(() => {
      console.log("✅ Admin Bootstrap initialized safely");
    });


    return () => {
      const dropdowns = document.querySelectorAll(".dropdown-menu.show");
      dropdowns.forEach((dd) => dd.classList.remove("show"));
    };
  }, []);

  return (
    <div className="header admin-header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            {/* 🔹 Left Section */}
            <div className="header-left">
              <div className="dashboard_bar">Dashboard</div>
            </div>

            {/* 🔹 Right Section */}
            <ul className="navbar-nav header-right">
              {/* 🔍 Search Box */}
              <li className="nav-item">
                <div className="input-group search-area">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here"
                  />
                  <span className="input-group-text">
                    <i className="flaticon-381-search-2"></i>
                  </span>
                </div>
              </li>

              {/* ☀️🌙 Theme Switch */}
              <li className="nav-item dropdown notification_dropdown">
                <button className="nav-link bell dz-theme-mode" title="Switch Theme">
                  <i id="icon-light" className="fas fa-sun"></i>
                  <i id="icon-dark" className="fas fa-moon"></i>
                </button>
              </li>

              {/* 💬 Messages */}
              <li className="nav-item dropdown notification_dropdown">
                <button className="nav-link bell-link ai-icon">
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.6667 5.16666C23.6667 2.5895 21.5772 0.5 19 0.5C15.1162 0.5 8.88387 0.5 5.00004 0.5C2.42287 0.5 0.333374 2.5895 0.333374 5.16666V20.3333C0.333374 20.8058 0.618046 21.2305 1.05321 21.4113C1.48955 21.5922 1.99121 21.4918 2.32487 21.1582C2.32487 21.1582 4.59287 18.8902 5.9672 17.517C6.4047 17.0795 6.99739 16.8333 7.61689 16.8333H19C21.5772 16.8333 23.6667 14.7438 23.6667 12.1667V5.16666Z"
                      fill="#1362FC"
                    />
                  </svg>
                  <div className="pulse-css"></div>
                </button>
              </li>

              {/* 🔔 Notifications */}
              <li className="nav-item dropdown notification_dropdown">
                <button
                  className="nav-link ai-icon"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.83333 3.91738V1.50004C8.83333 0.856041 9.356 0.333374 10 0.333374C10.6428 0.333374 11.1667 0.856041 11.1667 1.50004V3.91738C12.9003 4.16704 14.5208 4.97204 15.7738 6.22504C17.3057 7.75687 18.1667 9.8347 18.1667 12V16.3914L19.1105 18.279C19.562 19.1832 19.5142 20.2565 18.9822 21.1164C18.4513 21.9762 17.5122 22.5 16.5018 22.5H3.49817C2.48667 22.5 1.54752 21.9762 1.01669 21.1164C0.484686 20.2565 0.436843 19.1832 0.889509 18.279L1.83333 16.3914V12C1.83333 9.8347 2.69319 7.75687 4.22502 6.22504C5.47919 4.97204 7.0985 4.16704 8.83333 3.91738Z"
                      fill="#1362FC"
                    />
                  </svg>
                  <div className="pulse-css"></div>
                </button>
                <div className="dropdown-menu dropdown-menu-end p-3">
                  <div className="dropdown-header">Notifications</div>
                  <div>No new notifications</div>
                </div>
              </li>

              {/* ❤️ Activity */}
              <li className="nav-item dropdown notification_dropdown">
                <button
                  className="nav-link ai-icon"
                  data-bs-toggle="dropdown"
                >
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.15608 11.6592C0.937571 10.4299 0.253296 8.76839 0.253296 7.03607C0.253296 5.29415 0.944772 3.62306 2.17648 2.39134C3.4082 1.15963 5.0793 0.46814 6.82122 0.46814C8.56315 0.46814 10.2342 1.15963 11.466 2.39134L11.9149 2.84033L12.3639 2.39134C13.5956 1.15963 15.2655 0.46814 17.0075 0.46814C18.7506 0.46814 20.4205 1.15963 21.6522 2.39134C22.8839 3.62306 23.5766 5.29415 23.5766 7.03607C23.5766 8.76839 22.8923 10.4299 21.6726 11.6592L12.7625 21.0939C12.5428 21.3268 12.2355 21.4589 11.9149 21.4589C11.5944 21.4589 11.2871 21.3268 11.0674 21.0939L2.15608 11.6592Z"
                      fill="#1362FC"
                    />
                  </svg>
                  <div className="pulse-css"></div>
                </button>
              </li>

              {/* 👤 Profile Dropdown */}
              <li className="nav-item dropdown header-profile">
                <button
                  className="nav-link d-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <img
                    src="/admin-images/profile/pic1.jpg"
                    alt="User"
                    className="rounded-circle"
                    width="36"
                    height="36"
                  />
                  <div className="header-info ms-2 text-start">
                    <span>John Doe</span>
                    <small>Superadmin</small>
                  </div>
                </button>

                <div className="dropdown-menu dropdown-menu-end">
                  <a href="/app-profile" className="dropdown-item ai-icon">
                    <i className="fas fa-user text-primary"></i>
                    <span className="ms-2">Profile</span>
                  </a>
                  <a href="/email-inbox" className="dropdown-item ai-icon">
                    <i className="fas fa-inbox text-success"></i>
                    <span className="ms-2">Inbox</span>
                  </a>
                  <a href="/login" className="dropdown-item ai-icon">
                    <i className="fas fa-sign-out-alt text-danger"></i>
                    <span className="ms-2">Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
