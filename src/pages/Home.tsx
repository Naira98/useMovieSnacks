import HeroSlider from "../components/HeroSlider";
import Spinner from "../components/Spinner";
import RecentMovies from "../components/RecentMovies";
import { Suspense } from "react";

const Home = () => {

  return (
    <div className="min-h-screen gap-3 bg-gray-900 text-white">
      <HeroSlider />
      <Suspense fallback={<Spinner />}>
        <RecentMovies />
      </Suspense>
    </div>
  );
};

export default Home;
