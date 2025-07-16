import HeroSlider from "../components/HeroSlider";
import useMovies from "../context/useMovies/useMovies";
import Spinner from "../components/Spinner";
import RecentMovies from "../components/RecentMovies";

const Home = () => {
  const { movies } = useMovies();
  if (!movies.length) return <Spinner />;

  return (
    <div className="min-h-screen bg-gray-900 text-white gap-3">
      <HeroSlider />
      <RecentMovies />
    </div>
  );
};

export default Home;
