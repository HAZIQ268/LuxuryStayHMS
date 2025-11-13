import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
  FaCog,
} from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

function Sidebar() {
  const { user } = useContext(AuthContext);
  const { role: routeRole } = useParams(); // URL se role fetch
  const role = user?.role || routeRole || "user";

  const menuConfig = {
    admin: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${role}/dashboard` },
      { icon: <FaUsers />, label: "Users", path: `/${role}/users` },
      { icon: <FaBed />, label: "Rooms", path: `/${role}/rooms` },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${role}/bookings` },
      { icon: <FaCreditCard />, label: "Billing", path: `/${role}/billing` },
      { icon: <FaBroom />, label: "Housekeeping", path: `/${role}/housekeeping` },
      { icon: <FaTools />, label: "Maintenance", path: `/${role}/maintenance` },
      { icon: <FaComments />, label: "Feedback", path: `/${role}/feedback` },
      { icon: <FaConciergeBell />, label: "Services", path: `/${role}/services` },
      { icon: <FaFileAlt />, label: "Reports", path: `/${role}/reports` },
      { icon: <FaCog />, label: "Settings", path: `/${role}/settings` },
    ],
    manager: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${role}/dashboard` },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${role}/bookings` },
      { icon: <FaBed />, label: "Rooms", path: `/${role}/rooms` },
      { icon: <FaComments />, label: "Feedback", path: `/${role}/feedback` },
      { icon: <FaFileAlt />, label: "Reports", path: `/${role}/reports` },
    ],
    housekeeping: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${role}/dashboard` },
      { icon: <FaBroom />, label: "Tasks", path: `/${role}/housekeeping` },
      { icon: <FaTools />, label: "Maintenance", path: `/${role}/maintenance` },
    ],
    receptionist: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${role}/dashboard` },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${role}/bookings` },
      { icon: <FaUsers />, label: "Guests", path: `/${role}/users` },
      { icon: <FaConciergeBell />, label: "Services", path: `/${role}/services` },
    ],
    user: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${role}/dashboard` },
      { icon: <FaCalendarAlt />, label: "My Bookings", path: `/${role}/bookings` },
      { icon: <FaComments />, label: "Feedback", path: `/${role}/feedback` },
      { icon: <FaCog />, label: "Profile", path: `/${role}/profile` },
    ],
  };

  const userMenu = menuConfig[role] || menuConfig.user;

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {userMenu.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className="ai-icon" aria-expanded="false">
                {item.icon}
                <span className="nav-text ms-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="copyright">
          <p><strong>LuxuryStay HMS</strong> © 2025 All Rights Reserved</p>
          <p className="fs-12">Made with ❤️ by Haziq</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
