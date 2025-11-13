import React, { useContext } from "react";
<<<<<<< HEAD
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
=======
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, token } = useContext(AuthContext);
  const { role: routeRole } = useParams();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (routeRole && user.role !== routeRole) {
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return children;
}
