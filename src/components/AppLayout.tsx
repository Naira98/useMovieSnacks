import { Outlet } from "react-router";
import useTheme from "../context/ThemeContext/useTheme";
import Navbar from "./Navbar";

const AppLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
