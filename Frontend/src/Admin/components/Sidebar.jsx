import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTachometerAlt,
  FaUsers,
  FaBed,
  FaCalendarAlt,
  FaCreditCard,
  FaBroom,
  FaTools,
  FaComments,
  FaConciergeBell,
  FaFileAlt,
  FaCog
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a className="has-arrow ai-icon" href="/admin/" aria-expanded="false">
              <FaTachometerAlt className="me-2" />
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaUsers className="me-2" />
              <span className="nav-text">Users</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/users">All Users</Link></li>
            </ul>
          </li>
          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaBed className="me-2" />
              <span className="nav-text">Rooms</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/rooms">Room List</Link></li>
            </ul>
          </li>
          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaCalendarAlt className="me-2" />
              <span className="nav-text">Bookings</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/bookings">All Bookings</Link></li>
            </ul>
          </li>

          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaCreditCard className="me-2" />
              <span className="nav-text">Billing</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/billing">All Bills</Link></li>
            </ul>
          </li>

          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaBroom className="me-2" />
              <span className="nav-text">Housekeeping</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/housekeeping">View Tasks</Link></li>
            </ul>
          </li>

          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaTools className="me-2" />
              <span className="nav-text">Maintenance</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/maintenance">All Reports</Link></li>
            </ul>
          </li>

          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaComments className="me-2" />
              <span className="nav-text">Feedback</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/feedback">View Feedback</Link></li>
            </ul>
          </li>

    
          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaConciergeBell className="me-2" />
              <span className="nav-text">Services</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/services">All Services</Link></li>
            </ul>
          </li>

          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaFileAlt className="me-2" />
              <span className="nav-text">Reports</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/reports">View Reports</Link></li>
            </ul>
          </li>

   
          <li>
            <a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
              <FaCog className="me-2" />
              <span className="nav-text">Settings</span>
            </a>
            <ul aria-expanded="false">
              <li><Link to="/admin/settings">Settings</Link></li>
            </ul>
          </li>
        </ul>

   
        <div className="copyright">
          <p><strong>Innap Hotel Admin</strong> © 2025 All Rights Reserved</p>
          <p className="fs-12">Made with <span className="heart"></span> by DexignZone</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
