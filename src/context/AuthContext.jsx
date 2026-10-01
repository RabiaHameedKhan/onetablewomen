"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem("ot_auth_user");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        setIsLoggedIn(true);
      } catch (e) {
        localStorage.removeItem("ot_auth_user");
      }
    }
  }, []);

  const login = (userData) => {
    const defaultUser = userData || {
      name: "Sarah Jenkins",
      firstName: "Sarah",
      email: "sarah.jenkins@example.com",
      role: "member",
      tier: "Founding Privileged Member",
      memberId: "OT-2026-0842",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    };
    setUser(defaultUser);
    setIsLoggedIn(true);
    localStorage.setItem("ot_auth_user", JSON.stringify(defaultUser));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("ot_auth_user");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
