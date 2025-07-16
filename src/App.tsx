import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./components/AppLayout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";

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
        { path: "/movies/:id", element: <MovieDetails /> },
        { path: "/favorites", element: <Favorites /> },
        { path: "*", element: <div>404</div> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
