import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/dashboard/Dashboard";
import Analytics from "../pages/dashboard/Analytics";
import Reports_1 from "../pages/dashboard/Reports_1";
import PrivateRoute from "./PrivateRoute";
import SingleReport from "../pages/dashboard/SingleReport";

const Routes_0 = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Reports_1 />}>
          <Route path=":reportId" element={<SingleReport/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routes_0;
