"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Check password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Check terms
    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5001/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      setSuccess("Account created successfully! You can now login.");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    } catch (error) {
      console.error("Signup error:", error);
      setError("Unable to connect to the backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900">

      {/* Navbar */}
      <Navbar />

      {/* Signup Section */}
      <main className="min-h-screen flex items-center justify-center px-4 pt-24 pb-6">

        {/* Signup Card */}
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-7">

          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="text-gray-500 mt-1">
              Join LinkedIn Analyzer and improve your profile
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-3">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input input-bordered w-full bg-white text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="input input-bordered w-full bg-white text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="input input-bordered w-full bg-white text-gray-900"
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-600 pt-1">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="checkbox checkbox-primary checkbox-sm"
              />

              <span>
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-indigo-600 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </span>
            </label>

            {/* Error */}
            {error && (
              <p className="text-red-600 text-sm text-center">
                {error}
              </p>
            )}

            {/* Success */}
            {success && (
              <p className="text-green-600 text-sm text-center">
                {success}
              </p>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          <div className="divider text-gray-400 my-3">
            OR
          </div>

          {/* Google */}
          <button className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            Continue with Google
          </button>

          {/* Login */}
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Home */}
          <Link
            href="/"
            className="block text-center mt-4 text-sm text-gray-500 hover:text-indigo-600"
          >
            ← Back to Home
          </Link>

        </div>
      </main>
    </div>
  );
}