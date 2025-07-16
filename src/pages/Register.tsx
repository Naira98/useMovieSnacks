import { useState } from "react";
import { useNavigate, Link } from "react-router";
import type { IUser } from "../types/IUser";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  localStorage.setItem("favoriteMovieIds", JSON.stringify([]));
  localStorage.removeItem("favoriteMovieIds");
  localStorage.removeItem("ratings");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (existingUsers.some((u: IUser) => u.email === email)) {
      alert("Email already registered.");
      return;
    }

    const hashedPassword = btoa(password);

    const newUser = { name, email, password: hashedPassword };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    navigate("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 text-white">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-bold">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="mb-3 w-full rounded bg-gray-700 p-2 text-white"
        />

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
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-red-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
