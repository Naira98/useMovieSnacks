import { useEffect, useState, type ReactNode } from "react";
import type { IMovie } from "../../types/IMovie";
import { moviesContext } from "./MoviesContext";

const MoviesProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7",
      );
      const data = await res.json();
      setMovies(data.results);
    }
  }, []);
  return (
    <moviesContext.Provider value={{ movies }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesProvider;
