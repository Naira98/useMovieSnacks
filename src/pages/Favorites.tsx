import useFavorites from "../hooks/useFavorites";
import useMovies from "../context/useMovies/useMovies";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useFavorites();
  const { movies } = useMovies();

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🎬 Your Favorite Movies</h1>

        {favoriteMovies.length === 0 ? (
          <p className="text-center text-gray-400">You haven’t added any favorite movies yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoriteMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Favorites;
