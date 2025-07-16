import type { FC } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const AppLayout: FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
