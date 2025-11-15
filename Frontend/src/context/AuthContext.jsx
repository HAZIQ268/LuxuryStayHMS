import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [isGuest, setIsGuest] = useState(() => localStorage.getItem("guest") === "true");

  // ⭐ GUEST LOGIN FUNCTION (FIX)
  const continueAsGuest = () => {
    setUser(null);
    setToken(null);
    setIsGuest(true);

    localStorage.setItem("guest", "true");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // LOGIN
  const login = (data) => {
    setUser(data.user);
    setToken(data.token);
    setIsGuest(false);

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);
    localStorage.setItem("permissions", JSON.stringify(data.user.permissions || []));

    localStorage.removeItem("guest");
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsGuest(false);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("guest");
    localStorage.removeItem("role");
    localStorage.removeItem("permissions");
  };

  // Persist guest mode
  useEffect(() => {
    if (isGuest) localStorage.setItem("guest", "true");
  }, [isGuest]);

  return (
    <AuthContext.Provider value={{ user, token, isGuest, login, logout, continueAsGuest }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;



// import React, { createContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   const [token, setToken] = useState(() => localStorage.getItem("token") || null);
//   const [isGuest, setIsGuest] = useState(() => localStorage.getItem("guest") === "true");

//   // LOGIN
//   const login = (data) => {
//     setUser(data.user);
//     setToken(data.token);
//     setIsGuest(false);

//     localStorage.setItem("user", JSON.stringify(data.user));
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("role", data.user.role);        // ⭐ FIX
//     localStorage.setItem("permissions", JSON.stringify(data.user.permissions || [])); // ⭐ FIX

//     localStorage.removeItem("guest");
//   };

//   // LOGOUT
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     setIsGuest(false);

//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     localStorage.removeItem("guest");
//     localStorage.removeItem("role");        // ⭐ FIX
//     localStorage.removeItem("permissions"); // ⭐ FIX
//   };

//   // Persist guest
//   useEffect(() => {
//     if (isGuest) localStorage.setItem("guest", "true");
//   }, [isGuest]);

//   return (
//     <AuthContext.Provider value={{ user, token, isGuest, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
