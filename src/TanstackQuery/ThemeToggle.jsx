import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { useGlobalContext } from "./Context";

import { GoSun } from "react-icons/go";


const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>{isDarkTheme ? <GoSun className="toggle-icon"/> : <BsMoonStarsFill className="toggle-icon"/>}</button>
    </section>
  );
};

export default ThemeToggle;
