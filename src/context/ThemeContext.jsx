import  { createContext } from "react";
import useTheme from "../custome-hooks/useTheme";
// Create a context for theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeContext;
