import { useContext } from "react";
import { themeContext } from "./ThemeContext";

const useTheme = () => {
  const context = useContext(themeContext);
  if (context == null) {
    throw new Error("Can't use theme context outside of ThemeProvider");
  }
  return context;
};

export default useTheme;
