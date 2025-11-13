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
<<<<<<< HEAD
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
=======
        {/* Public Website */}
        <Route path="/*" element={<WebsiteRouter />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Single Admin Layout for All Roles */}
        <Route
          path="/:role/*"
          element={
            <ProtectedRoute>
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;

=======
export default App;
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
