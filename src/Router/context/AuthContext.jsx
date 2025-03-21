import React, { createContext, useContext, useState } from "react";

export const Authentication = createContext();

export const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <Authentication.Provider value={{ login, logout, isAuth }}>
      {children}
    </Authentication.Provider>
  );
};

export const useglobalContext = () => {
  return useContext(Authentication);
};
