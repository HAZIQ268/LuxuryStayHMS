import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Billing from "./pages/Billing";
import Feedback from "./pages/Feedback";
import Housekeeping from "./pages/Housekeeping";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function AdminRoutes() {
  const location = useLocation();

  useEffect(() => {
    document
      .querySelectorAll(
        'link[href*="/website"], script[src*="/website"], link[href*="aos"], link[href*="swiper"], link[href*="glightbox"], script[src*="bootstrap.bundle.min.js"]'
      )
      .forEach((el) => el.remove());
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="billing" element={<Billing />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="housekeeping" element={<Housekeeping />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="reports" element={<Reports />} />
        <Route path="services" element={<Services />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;

