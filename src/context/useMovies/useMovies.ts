import { useContext } from "react";
import { moviesContext } from "./MoviesContext";

const useMovies = () => {
  const context = useContext(moviesContext);
  if (context == null) {
    throw new Error("Can't use movies context outside of MoviesProvider");
  }
  return context;
};

export default useMovies;
