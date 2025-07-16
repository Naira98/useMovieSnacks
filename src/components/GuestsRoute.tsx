import type { ReactNode } from "react";
import { Navigate } from "react-router";

const GuestOnlyRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = localStorage.getItem("is_logged_in") === "true";

  return !isLoggedIn ? children : <Navigate to="/" replace />;
};

export default GuestOnlyRoute;
