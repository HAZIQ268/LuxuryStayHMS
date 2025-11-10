import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { io } from "socket.io-client";

function Header() {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [newNotif, setNewNotif] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notifRef = useRef();
  const profileRef = useRef();
  const navigate = useNavigate();

  // Socket.io connection
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("connect", () => console.log("Socket connected:", socket.id));

    if (user) {
      socket.emit("joinRoom", user.role || user._id);
    }

    // Listen for notifications
    socket.on("new-notification", (data) => {
      console.log("New Notification Received:", data);
      setNotifications((prev) => [data, ...prev]);
      setNewNotif(true);
    });

    return () => socket.disconnect();
  }, [user]);

  // Fetch user and role notifications
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/profile");
        setUser(res.data);

        // fetch existing notifications
        const notifRes = await api.get(`/notifications/role/${res.data.role}`);
        setNotifications(notifRes.data || []);
      } catch (err) {
        navigate("/login",err);
      }
    };
    fetchUser();
  }, [navigate]);

  // Hide dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotif(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="header admin-header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">Dashboard</div>
            </div>

            <ul className="navbar-nav header-right">
              {/* 🔍 Search */}
              <li className="nav-item">
                <div className="input-group search-area">
                  <input type="text" className="form-control" placeholder="Search here" />
                  <span className="input-group-text">
                    <i className="flaticon-381-search-2"></i>
                  </span>
                </div>
              </li>

              {/* Theme */}
              <li className="nav-item dropdown notification_dropdown">
                <button className="nav-link bell dz-theme-mode" title="Switch Theme">
                  <i id="icon-light" className="fas fa-sun"></i>
                  <i id="icon-dark" className="fas fa-moon"></i>
                </button>
              </li>

              {/* Notifications */}
              <li
                className="nav-item dropdown notification_dropdown position-relative"
                ref={notifRef}
                onMouseEnter={() => {
                  setShowNotif(true);
                  setNewNotif(false);
                }}
                onMouseLeave={() => setShowNotif(false)}
              >
                <button className="nav-link ai-icon">
                  <i className="fas fa-bell"></i>
                  {newNotif && (
                    <span
                      style={{
                        position: "absolute",
                        top: "4px",
                        right: "6px",
                        width: "8px",
                        height: "8px",
                        background: "red",
                        borderRadius: "50%",
                      }}
                    ></span>
                  )}
                </button>

                <div
                  className={`dropdown-menu dropdown-menu-end shadow notif-dropdown ${
                    showNotif ? "show" : ""
                  }`}
                >
                  <div className="dropdown-header">Notifications</div>
                  {notifications.length > 0 ? (
                    notifications.slice(0, 10).map((n, i) => (
                      <div key={i} className="p-2 border-bottom small">
                        <strong>{n.title}</strong>
                        <div className="text-muted">{n.message}</div>
                        <small className="text-muted">
                          {new Date(n.createdAt).toLocaleString()}
                        </small>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-muted">No notifications</div>
                  )}
                </div>
              </li>

              {/* Profile */}
              <li
                className="nav-item dropdown header-profile pointer"
                ref={profileRef}
                onMouseEnter={() => setShowProfile(true)}
                onMouseLeave={() => setShowProfile(false)}
              >
                <div className="nav-link d-flex align-items-center">
                  <img
                    src={
                      user?.image
                        ? `http://localhost:5000/${user.image}`
                        : "/admin-images/profile/default-user.png"
                    }
                    alt="User"
                    className="rounded-circle"
                    width="36"
                    height="36"
                  />
                  <div className="header-info ms-2 text-start">
                    <span>{user?.name || "Loading..."}</span>
                    <small>{user?.role || "User"}</small>
                  </div>
                </div>

                <ul
                  className={`dropdown-menu dropdown-menu-end shadow ${
                    showProfile ? "show" : ""
                  }`}
                >
                  <li className="dropdown-header text-center">
                    <strong>{user?.email}</strong>
                    <div className="text-muted">{user?.role}</div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      onClick={() => navigate(`/${user?.role}/profile`)}
                      className="dropdown-item ai-icon"
                    >
                      <i className="fas fa-user text-primary"></i>
                      <span className="ms-2">Profile</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={logout} className="dropdown-item ai-icon">
                      <i className="fas fa-sign-out-alt text-danger"></i>
                      <span className="ms-2">Logout</span>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
