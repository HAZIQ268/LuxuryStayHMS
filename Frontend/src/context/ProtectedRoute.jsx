import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, token, isGuest } = useContext(AuthContext);
  const location = useLocation();

  // 🚫 Guest users should not access protected/admin routes
  if (isGuest) {
    return <Navigate to="/" replace />;
  }

  // 🚫 Unauthenticated users redirect to login
  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 🔒 Role-based restriction
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    // Redirect user to their own dashboard if unauthorized
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  // ✅ Authorized → render children
  return children;
}
