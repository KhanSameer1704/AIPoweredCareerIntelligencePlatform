import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="flex min-h-[calc(100vh-96px)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-gray-900 shadow-2xl">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="mt-2 text-gray-500">
            Enter your email and we will send reset instructions.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-white text-gray-900"
              />
            </div>

            <button
              type="submit"
              className="btn w-full bg-indigo-600 text-white border-none hover:bg-indigo-700"
            >
              Send Reset Link
            </button>
          </form>

          <Link
            href="/login"
            className="mt-6 block text-center text-sm text-indigo-600 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </main>
    </div>
  );
}
