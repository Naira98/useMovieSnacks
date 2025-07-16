import type { FC } from "react";
import { Link } from "react-router";

const Navbar: FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Navbar;
