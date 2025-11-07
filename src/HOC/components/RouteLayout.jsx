import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithAuth from "../WithAuth";
const Dashboard =  lazy(()=>import( "./Dashboard"))

const RouteLayout = () => {
    const AuthenticatedDashboard = WithAuth(Dashboard)
    const AuthenticatedProfile = WithAuth(Profile)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher order component</h1>
                <div>Login page for unauthenticated users</div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteLayout;
