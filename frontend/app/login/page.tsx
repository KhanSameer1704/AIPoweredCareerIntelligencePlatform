"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Save JWT token
      localStorage.setItem("token", data.token);

      console.log("Login successful:", data);

      // Temporary: go to home after successful login
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to the backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to your LinkedIn Analyzer account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              Remember Me
            </label>

            <Link
              href="/forgot-password"
              className="text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="divider text-gray-400">OR</div>

        <button className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none">
          Continue with Google
        </button>

        <p className="text-center text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

        <Link
          href="/"
          className="block text-center mt-6 text-sm text-gray-500 hover:text-indigo-600"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}