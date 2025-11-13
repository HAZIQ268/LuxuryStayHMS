import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { user, token, isGuest } = useContext(AuthContext);
  const location = useLocation();

  // Guest users should NOT access admin panels
  if (isGuest || !token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Role restriction check
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return children;
}
