import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, token } = useContext(AuthContext);
  const { role: routeRole } = useParams();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (routeRole && user.role !== routeRole) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return children;
}
