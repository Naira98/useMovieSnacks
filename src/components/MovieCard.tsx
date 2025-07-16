import { Link } from "react-router";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { IMovie } from "../types/IMovie";
import useFavorites from "../hooks/useFavorites";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(movie.id);
  };

  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="relative w-full max-w-xs gap-3 overflow-hidden rounded-xl bg-gray-800 text-white shadow-md">
        {/* Favorite Button */}

        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/50 p-2 hover:bg-black/70"
        >
          {favorite ? (
            <FaHeart className="text-red-500" size={18} />
          ) : (
            <FaRegHeart className="text-white" size={18} />
          )}
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="h-[400px] w-full object-cover"
        />

        <div className="flex flex-col gap-2 p-4">
          <h2 className="line-clamp-2 text-lg font-semibold">{movie.title}</h2>

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
