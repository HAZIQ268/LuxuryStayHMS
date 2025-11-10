import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    // Mobile nav toggle logic
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector("#navmenu");

    if (mobileToggle && navMenu) {
      const toggleNav = () => {
        navMenu.classList.toggle("navmenu-active");
        mobileToggle.classList.toggle("bi-list");
        mobileToggle.classList.toggle("bi-x");
      };
      mobileToggle.addEventListener("click", toggleNav);

      return () => mobileToggle.removeEventListener("click", toggleNav);
    }
  }, []);

  return (
    <header id="header" className="header sticky-top">
      {/* 🔹 Top Bar */}
      <div className="topbar d-flex align-items-center dark-background">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:info@luxurystay.com">info@luxurystay.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+1 5589 55488 55</span>
            </i>
          </div>

          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="branding d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="logo d-flex align-items-center text-decoration-none">
            <h1 className="sitename mb-0">LuxuryStay</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
              </li>
              <li>
                <NavLink to="/rooms" className={({ isActive }) => (isActive ? "active" : "")}>Rooms</NavLink>
              </li>
              <li>
                <NavLink to="/amenities" className={({ isActive }) => (isActive ? "active" : "")}>Amenities</NavLink>
              </li>
              <li>
                <NavLink to="/location" className={({ isActive }) => (isActive ? "active" : "")}>Location</NavLink>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>Pages</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><NavLink to="/room-details">Room Details</NavLink></li>
                  <li><NavLink to="/restaurant">Restaurant</NavLink></li>
                  <li><NavLink to="/offers">Offers</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                  <li><NavLink to="/gallery">Gallery</NavLink></li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/feedback" className={({ isActive }) => (isActive ? "active" : "")}>Feedback</NavLink>
              </li>
              <li className="ms-3">
                <Link to="/login" className="btn btn-dark btn-sm px-3 py-2">Login</Link>
              </li>
            </ul>

            {/* Mobile nav toggle button */}
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
