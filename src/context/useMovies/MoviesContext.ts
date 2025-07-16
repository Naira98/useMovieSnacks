import { createContext } from "react";
import type { IMovie } from "../../types/IMovie";

type MoviesContextType = {
  movies: IMovie[];
};

export const moviesContext = createContext<MoviesContextType | null>(null);
