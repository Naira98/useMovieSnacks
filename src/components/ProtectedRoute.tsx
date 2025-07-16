import type { ReactNode } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn = localStorage.getItem("is_logged_in") === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
