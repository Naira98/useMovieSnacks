import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import type { IUser } from "../types/IUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("is_logged_in") === "true";
    if (isLoggedIn) navigate("/");
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const hashedPassword = btoa(password);
    const user = users.find(
      (u: IUser) => u.email === email && u.password === hashedPassword
    );

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name: user.name, email: user.email }));
    localStorage.setItem("is_logged_in", "true");

    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-bold">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mb-3 w-full rounded bg-gray-700 p-2 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded bg-gray-700 p-2 text-white"
        />

        <button
          type="submit"
          className="w-full rounded bg-red-500 py-2 transition-colors hover:bg-red-600"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-red-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
