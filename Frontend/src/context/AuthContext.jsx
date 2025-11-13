import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [isGuest, setIsGuest] = useState(() => localStorage.getItem("guest") === "true");

  const login = (data) => {
    setUser(data.user);
    setToken(data.token);
    setIsGuest(false);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.removeItem("guest");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
