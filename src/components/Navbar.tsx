import { Link, useLocation, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import type { IUser } from "../types/IUser";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const isLoggedIn = localStorage.getItem("is_logged_in") === "true";

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser: IUser = JSON.parse(user);
      setUserName(parsedUser.name || "");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("is_logged_in", "false");
    navigate("/login");
  };

  const navLinkClass = (path: string) =>
    `text-md font-medium transition-colors hover:text-red-500 ${
      location.pathname === path ? "text-red-500" : "text-gray-300"
    }`;

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-10 py-4 text-white shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-64 object-contain" />
      </Link>

      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/movies" className={navLinkClass("/movies")}>
              Movies
            </Link>
            <Link to="/favorites" className={navLinkClass("/favorites")}>
              Favorites
            </Link>
            <span className="text-gray-300">Hi, {userName}</span>
            <button
              onClick={handleLogout}
              className="text-md font-medium text-gray-300 transition-colors hover:text-red-500"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className={navLinkClass("/register")}>
              Register
            </Link>
            <Link to="/login" className={navLinkClass("/login")}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
