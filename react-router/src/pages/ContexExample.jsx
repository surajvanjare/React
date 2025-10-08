import React, { createContext, useState, useContext } from "react";

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Main Component
const ContextExample = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    transition: "all 0.3s",
  };

  return (
    <div style={style}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

// 4. Wrap with ThemeProvider
const ThemeApp = () => (
  <ThemeProvider>
    <ContextExample />
  </ThemeProvider>
);

export default ThemeApp;
