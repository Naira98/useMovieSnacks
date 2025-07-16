import { useParams, Link } from "react-router";
import {
  FaStar,
  FaCalendarAlt,
  FaFire,
  FaThumbsUp,
  FaGlobe,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import useMovies from "../context/useMovies/useMovies";
import useRating from "../hooks/useRating";
import useFavorites from "../hooks/useFavorites";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { movies } = useMovies();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [rating, handleRating, tempRating, handleMouseEnter, handleMouseLeave] =
    useRating();

  const movie = movies.find((m) => m.id === Number(movieId));

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <p className="text-lg text-gray-400">Movie not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full rounded-lg object-cover shadow-xl md:w-80"
        />

        {/* Movie Info */}
        <div className="flex-1">
          <div className="flex justify-between">
            <h1 className="mb-3 text-4xl font-bold">{movie.title}</h1>

            <button
              onClick={() => toggleFavorite(movie.id)}
              className="flex items-center gap-2 text-red-400 transition-colors hover:text-red-500"
            >
              {isFavorite(movie.id) ? (
                <FaHeart className="text-xl" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
              
            </button>
          </div>
          <p className="mb-2 flex items-center gap-2 text-sm text-gray-400">
            <FaGlobe className="text-gray-500" /> Language:{" "}
            {movie.original_language.toUpperCase()}
          </p>

          <p className="mb-6 text-base leading-relaxed text-gray-300">
            {movie.overview}
          </p>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 text-sm text-gray-400 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{movie.vote_average.toFixed(1)} / 10</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-400" />
              <span>{movie.release_date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaThumbsUp className="text-green-400" />
              <span>{movie.vote_count} Votes</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFire className="text-red-500" />
              <span>{Math.round(movie.popularity)} Popularity</span>
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="mt-4">
            <p className="mb-2 text-sm text-gray-300">Your Rating:</p>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onMouseEnter={() => handleMouseEnter(num)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleRating(num)}
                    className="focus:outline-none"
                  >
                    <FaStar
                      size={22}
                      className={`transition-colors duration-150 ${
                        (tempRating ?? rating ?? 0) >= num
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating !== undefined && (
                <p className="ml-2 text-sm text-yellow-400">
                  You rated this {rating}/10
                </p>
              )}
            </div>
          </div>

          {/* Back Button */}
          <Link
            to="/movies"
            className="text-primary mt-10 inline-block underline transition-colors hover:text-red-500"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
