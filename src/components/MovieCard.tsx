import { Link } from "react-router";
import type { IMovie } from "../types/IMovie";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="w-full max-w-xs overflow-hidden rounded-xl bg-gray-800 text-white shadow-md gap-3">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="h-[400px] w-full object-cover"
        />

        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-lg font-semibold">{movie.title}</h2>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{movie.vote_average.toFixed(1)} ★</span>
            <span>📅 {movie.release_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
