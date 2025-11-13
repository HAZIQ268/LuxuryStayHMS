<<<<<<< HEAD
import React, { createContext, useState, useEffect } from "react";
=======
import React, { createContext, useState } from "react";
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
<<<<<<< HEAD

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [isGuest, setIsGuest] = useState(() => localStorage.getItem("guest") === "true");
=======
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366

  const login = (data) => {
    setUser(data.user);
    setToken(data.token);
<<<<<<< HEAD
    setIsGuest(false);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.removeItem("guest");
=======
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
  };

  const logout = () => {
    setUser(null);
    setToken(null);
<<<<<<< HEAD
    setIsGuest(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("guest");
  };

  const continueAsGuest = () => {
    setUser(null);
    setToken(null);
    setIsGuest(true);
    localStorage.setItem("guest", "true");
  };

  useEffect(() => {
    if (isGuest) localStorage.setItem("guest", "true");
  }, [isGuest]);

  return (
    <AuthContext.Provider value={{ user, token, isGuest, login, logout, continueAsGuest }}>
=======
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
>>>>>>> 8827b4a2a5941c255419ff885ed9608508ea0366
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
