import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path: string) =>
    `text-md font-medium transition-colors hover:text-primary ${
      location.pathname === path ? "text-primary" : "text-theme"
    }`;

  return (
    <nav className="bg-theme flex items-center justify-between px-10 py-4 shadow-sm">

      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-64 object-contain" />
      </Link>


      <div className="flex items-center gap-6">
        <Link to="/" className={navLinkClass("/")}>
          Home
        </Link>
        <Link to="/movies" className={navLinkClass("/movies")}>
          Movies
        </Link>
        <Link to="/favorites" className={navLinkClass("/favorites")}>
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
