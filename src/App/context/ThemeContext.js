import { createContext, useState } from "react";
const THEME_KEY = "THEME_KEY";
const DEFAULT = {
  theme: localStorage.getItem(THEME_KEY) || "light",
};
const ThemeContext = createContext(DEFAULT);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DEFAULT.theme);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  localStorage.setItem(THEME_KEY, theme);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
export { ThemeProvider };
