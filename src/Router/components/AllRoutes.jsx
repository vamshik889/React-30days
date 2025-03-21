import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home1 from "../pages/Home1";
import Cart from "../pages/Cart";
import Users1 from "../pages/Users1";
import SingleUserPage from "../pages/SingleUserPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        
       
          <Route path="/users" element={<PrivateRoute><Users1 /></PrivateRoute>} />
          
          <Route path="/users/:id" element={<PrivateRoute><SingleUserPage /></PrivateRoute>} />
          <Route path="*" element={<h2>Incorrect page</h2>}/>  {/* wild card route if no route matched this will be displayed*/ }
       
      </Routes>
    </>
  );
};

export default AllRoutes;
