import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteRouter from "./website/WebsiteRouter";
import AdminRoutes from "./Admin/AdminRoutes";
import Login from "./authContext/Login";
import Register from "./authContext/Register";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Public Website (Guest + Logged Users) */}
        <Route path="/*" element={<WebsiteRouter />} />

        {/* 🔑 Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🛡️ Protected Admin Layout */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manager/*"
          element={
            <ProtectedRoute allowedRoles={["manager"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receptionist/*"
          element={
            <ProtectedRoute allowedRoles={["receptionist"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/housekeeping/*"
          element={
            <ProtectedRoute allowedRoles={["housekeeping"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/*"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
