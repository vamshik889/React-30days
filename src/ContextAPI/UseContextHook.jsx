import React, { createContext, useContext } from "react";

// 1. Create a context outside the component to maintain global state across renders.
const ThemeContext = createContext();

export const UseContextHook = () => {
    
  return (
    // 2. Provide a value to the context so all child components can access it.
    <ThemeContext.Provider value="light">
      <Home />
    </ThemeContext.Provider>
  );
};

export const Home = () => {
  return (
    <div>
      {/* 3. Home component doesn't need direct access to context but passes down children */}
      <Navbar />
    </div>
  );
};

export const Navbar = () => {
  return (
    <div>
      {/* 4. Navbar component serves as an intermediary, passing data down to deeper components */}
      <Product />
    </div>
  );
};

export const Product = () => {
  // 5. Using `useContext` to access the value provided by `ThemeContext.Provider`
  const theme = useContext(ThemeContext);

  return (
    <div>
      {/* 6. The button style changes based on the theme value */}
      <button
        style={{
          border: theme === "light" ? "1px solid blue" : "1px solid red",
        }}
      >
        Theme Button
      </button>
    </div>
  );
};
