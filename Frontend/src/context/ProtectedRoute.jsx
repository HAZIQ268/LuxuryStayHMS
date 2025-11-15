import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function ProtectedRoute({ children, allowedRoles = [], requiredPermission = null }) {
  const { user, token, isGuest } = useContext(AuthContext);
  const location = useLocation();

  // 🚫 Guest can't access admin or protected pages
  if (isGuest) return <Navigate to="/" replace />;

  // 🚫 Not logged in
  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 🔒 Role restriction
  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  // 🔑 Permission restriction
  if (requiredPermission && !user.permissions?.includes(requiredPermission)) {
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return children;
}



// import React, { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import AuthContext from "./AuthContext";

// export default function ProtectedRoute({ children, allowedRoles = [], requiredPermission = null }) {
//   const { user, token, isGuest } = useContext(AuthContext);
//   const location = useLocation();

//   // 🚫 Guest cant enter admin
//   if (isGuest) return <Navigate to="/" replace />;

//   // 🚫 Not logged in
//   if (!token || !user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // 🔒 Role-based restriction
//   if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
//     return <Navigate to={`/${user.role}/dashboard`} replace />;
//   }

//   // 🔑 Permission-based restriction
//   if (requiredPermission && !user.permissions?.includes(requiredPermission)) {
//     return <Navigate to={`/${user.role}/dashboard`} replace />;
//   }

//   return children;
// }
