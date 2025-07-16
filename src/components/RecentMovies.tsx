import useMovies from "../context/useMovies/useMovies";
import MovieCard from "./MovieCard";

const RecentMovies = () => {
  const { movies } = useMovies();

  return (
    <section className="bg-gray-900 text-white px-4 py-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Most Recent Movies</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {movies?.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentMovies;
