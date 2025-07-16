import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import MoviesProvider from "./context/useMovies/MoviesProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestOnlyRoute from "./components/GuestsRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <GuestOnlyRoute>
              <Register />
            </GuestOnlyRoute>
          ),
        },
        {
          path: "/login",
          element: (
            <GuestOnlyRoute>
              <Login />
            </GuestOnlyRoute>
          ),
        },
        {
          path: "/movies",
          element: (
            <ProtectedRoute>
              {" "}
              <Movies />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "/movies/:movieId",
          element: (
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/favorites",
          element: (
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          ),
        },
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
