import React from "react";
import { Routes, Route } from "react-router-dom";
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

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/housekeeping" element={<Housekeeping />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
