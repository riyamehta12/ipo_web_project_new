import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      setUser({ username: localStorage.getItem('username') });
    } else {
      setUser(null);
    }
  }, [token]);

  const login = (token, username) => {
    setToken(token);
    setUser({ username });
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
