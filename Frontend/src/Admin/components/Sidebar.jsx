import React, { useContext } from "react";
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
  FaCog,
} from "react-icons/fa";
import AuthContext from "../../context/AuthContext";

function Sidebar() {
  const { user } = useContext(AuthContext);

  // agar user null ho to crash na ho
  const role = user?.role || "user";
  const permissions = user?.permissions || [];

  // ⭐ Role → Route Folder Mapping
  const rolePath = {
    admin: "admin",
    manager: "manager",
    receptionist: "reception",
    housekeeping: "housekeeping",
    user: "user",
  }[role];

  // ⭐ Menu Config per Role
  const menuConfig = {
    admin: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${rolePath}/dashboard`, perm: "view_dashboard" },
      { icon: <FaUsers />, label: "Users", path: `/${rolePath}/users`, perm: "manage_users" },

      // ⭐ Permissions Page
      { icon: <FaUsers />, label: "Permissions", path: `/${rolePath}/permissions`, perm: "manage_users" },

      { icon: <FaBed />, label: "Rooms", path: `/${rolePath}/rooms`, perm: "manage_rooms" },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${rolePath}/bookings`, perm: "manage_bookings" },
      { icon: <FaCreditCard />, label: "Billing", path: `/${rolePath}/billing`, perm: "manage_billing" },
      { icon: <FaBroom />, label: "Housekeeping", path: `/${rolePath}/housekeeping`, perm: "manage_housekeeping" },
      { icon: <FaTools />, label: "Maintenance", path: `/${rolePath}/maintenance`, perm: "manage_maintenance" },
      { icon: <FaComments />, label: "Feedback", path: `/${rolePath}/feedback`, perm: "manage_feedback" },
      { icon: <FaConciergeBell />, label: "Services", path: `/${rolePath}/services`, perm: "manage_services" },
      { icon: <FaFileAlt />, label: "Reports", path: `/${rolePath}/reports`, perm: "view_reports" },
      { icon: <FaCog />, label: "Settings", path: `/${rolePath}/settings`, perm: "manage_settings" },
    ],

    manager: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${rolePath}/dashboard`, perm: "view_dashboard" },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${rolePath}/bookings`, perm: "manage_bookings" },
      { icon: <FaBed />, label: "Rooms", path: `/${rolePath}/rooms`, perm: "manage_rooms" },
      { icon: <FaComments />, label: "Feedback", path: `/${rolePath}/feedback`, perm: "manage_feedback" },
      { icon: <FaFileAlt />, label: "Reports", path: `/${rolePath}/reports`, perm: "view_reports" },
    ],

    receptionist: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${rolePath}/dashboard`, perm: "view_dashboard" },
      { icon: <FaCalendarAlt />, label: "Bookings", path: `/${rolePath}/bookings`, perm: "manage_bookings" },
      { icon: <FaUsers />, label: "Guests", path: `/${rolePath}/users`, perm: "manage_users" },
      { icon: <FaConciergeBell />, label: "Services", path: `/${rolePath}/services`, perm: "manage_services" },
    ],

    housekeeping: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${rolePath}/dashboard`, perm: "view_dashboard" },
      { icon: <FaBroom />, label: "Tasks", path: `/${rolePath}/housekeeping`, perm: "manage_housekeeping" },
      { icon: <FaTools />, label: "Maintenance", path: `/${rolePath}/maintenance`, perm: "manage_maintenance" },
    ],

    user: [
      { icon: <FaTachometerAlt />, label: "Dashboard", path: `/${rolePath}/dashboard`, perm: "view_dashboard" },
      { icon: <FaCalendarAlt />, label: "My Bookings", path: `/${rolePath}/bookings`, perm: "manage_bookings" },
      { icon: <FaComments />, label: "Feedback", path: `/${rolePath}/feedback`, perm: "manage_feedback" },
      { icon: <FaCog />, label: "Profile", path: `/${rolePath}/profile`, perm: "view_profile" },
    ],
  };

  // ⭐ If Admin → Show ALL menu items
  // ⭐ If Other Roles → Only Allowed Permission Items
  const userMenu =
    role === "admin"
      ? menuConfig[role]
      : menuConfig[role].filter((item) => permissions.includes(item.perm));

  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          {userMenu.map((item, i) => (
            <li key={i}>
              <Link to={item.path} className="ai-icon">
                {item.icon}
                <span className="nav-text ms-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
