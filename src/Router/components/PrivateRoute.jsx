import React from "react";
import { useglobalContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useglobalContext();

  if (!isAuth) {
    return <Navigate to="/login"/>;
  } else {
    return children;
  }
};

export default PrivateRoute;
