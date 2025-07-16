import { useEffect, useState, type ReactNode } from "react";
import { themeContext } from "./ThemeContext";


const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </themeContext.Provider>
  );
};

export default ThemeProvider;
