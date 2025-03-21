import React from "react";
import { NavLink } from "react-router-dom";
import { useglobalContext } from "../context/AuthContext";
import Button from "../../Day-4Components/Button";


const Navigation = () => {
  const links = [
    {
      path: "/",
      text: "Homepage",
      id: 1,
    },
    {
      path: "/about",
      text: "About",
      id: 2,
    },
    {
      path: "/cart",
      text: "Cart",
      id: 3,
    },
    {
      path: "/users",
      text: "Users",
      id: 4,
    },
  ];

  const { isAuth, login, logout } = useglobalContext();
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {links.map((link) => {
        return (
          <NavLink to={link.path}>
            <h2>{link.text}</h2>
          </NavLink>
        );
      })}

      <p>User logged in : {isAuth ? "Yes" : "No"}</p>
      {isAuth ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Navigation;
