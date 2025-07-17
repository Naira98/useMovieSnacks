import useMovies from "../context/useMovies/useMovies";
import MovieCard from "./MovieCard";

const RecentMovies = () => {
  const { movies } = useMovies();
  console.log(movies);

  return (
    <section className="bg-gray-900 px-4 py-8 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Most Recent Movies</h2>

        <div className="grid justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies?.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentMovies;
