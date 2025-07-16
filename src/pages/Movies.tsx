import { useState } from "react";
import useMovies from "../context/useMovies/useMovies";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { movies } = useMovies();
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gray-900 px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredMovies.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No movies found.</p>
        )}
      </div>
    </section>
  );
};

export default Movies;
