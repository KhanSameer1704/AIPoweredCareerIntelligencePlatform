import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Profile
          </p>
          <h1 className="mt-3 text-4xl font-bold">Your LinkedIn Details</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Add the details you want the analyzer to review.
          </p>
        </div>

        <form className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              placeholder="https://www.linkedin.com/in/your-name"
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Target Role
            </label>
            <input
              type="text"
              placeholder="Frontend Developer, Data Analyst, Product Manager..."
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Key Skills
            </label>
            <textarea
              rows={4}
              placeholder="React, Next.js, Python, SQL..."
              className="textarea textarea-bordered w-full bg-white text-gray-900"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/report"
              className="btn bg-indigo-600 text-white border-none hover:bg-indigo-700"
            >
              Analyze Profile
            </Link>
            <Link
              href="/dashboard"
              className="btn btn-outline border-white/30 text-white hover:bg-white/10"
            >
              Dashboard
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
