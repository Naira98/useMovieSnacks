import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import MoviesProvider from "./context/useMovies/MoviesProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/movies", element: <Movies /> },
        { path: "/movies/:movieId", element: <MovieDetails /> },
        { path: "/favorites", element: <Favorites /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <MoviesProvider>
      <RouterProvider router={router} />
    </MoviesProvider>
  );
};

export default App;
