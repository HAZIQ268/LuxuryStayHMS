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
              <AdminRoutes />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;