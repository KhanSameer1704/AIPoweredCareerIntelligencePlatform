
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignupPage() {
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
          <form className="space-y-3">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
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
                className="input input-bordered w-full bg-white text-gray-900"
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-600 pt-1">
              <input
                type="checkbox"
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

            {/* Signup Button */}
            <button
              type="submit"
              className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none"
            >
              Create Account
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
