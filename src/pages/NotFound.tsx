import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl text-gray-400">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
