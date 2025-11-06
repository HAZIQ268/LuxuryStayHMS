import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {/* Dashboard */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text ">Dashboard</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/dashboard/show">Show</Link>
              </li>
              <li>
                <Link to="/dashboard/add">Add</Link>
              </li>
            </ul>
          </li>

          {/* Users */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-user-7"></i>
              <span className="nav-text">Users</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/users">All Users</Link>
              </li>
              <li>
                <Link to="/admin/users">Add User</Link>
              </li>
            </ul>
          </li>

          {/* Rooms */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-home-2"></i>
              <span className="nav-text">Rooms</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/rooms">Room List</Link>
              </li>
              <li>
                <Link to="/admin/rooms">Add Room</Link>
              </li>
            </ul>
          </li>

          {/* Bookings */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-calendar"></i>
              <span className="nav-text">Bookings</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/bookings">All Bookings</Link>
              </li>
              <li>
                <Link to="/admin/bookings/">Add Booking</Link>
              </li>
            </ul>
          </li>

          {/* Billing */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-credit-card"></i>
              <span className="nav-text">Billing</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin//billing">All Bills</Link>
              </li>
              <li>
                <Link to="/admin/billing/">New Bill</Link>
              </li>
            </ul>
          </li>

          {/* Housekeeping */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-broom"></i>
              <span className="nav-text">Housekeeping</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/housekeeping">View Tasks</Link>
              </li>
              <li>
                <Link to="/admin/housekeeping/">Add Task</Link>
              </li>
            </ul>
          </li>

          {/* Maintenance */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-settings-2"></i>
              <span className="nav-text">Maintenance</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/maintenance">All Reports</Link>
              </li>
              <li>
                <Link to="/admin/maintenance/">Add Report</Link>
              </li>
            </ul>
          </li>

          {/* Feedback */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-chat"></i>
              <span className="nav-text">Feedback</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/feedback">View Feedback</Link>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-gift"></i>
              <span className="nav-text">Services</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/services">All Services</Link>
              </li>
              <li>
                <Link to="/admin/services">Add Service</Link>
              </li>
            </ul>
          </li>

          {/* Reports */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-file"></i>
              <span className="nav-text">Reports</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/reports">View Reports</Link>
              </li>
            </ul>
          </li>

          {/* Settings */}
          <li>
            <a
              className="has-arrow ai-icon"
              href="javascript:void(0)"
              aria-expanded="false"
            >
              <i className="flaticon-381-settings-1"></i>
              <span className="nav-text">Settings</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <Link to="/admin/settings">Profile</Link>
              </li>
              <li>
                <Link to="/admin/settings/">Preferences</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
