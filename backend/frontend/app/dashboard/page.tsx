import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BarChart3, FileText, UserRoundCheck } from "lucide-react";

const stats = [
  { label: "Profile Score", value: "85%", icon: BarChart3 },
  { label: "Profile Status", value: "Strong", icon: UserRoundCheck },
  { label: "Reports", value: "1 Ready", icon: FileText },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">Your Profile Overview</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            Track your LinkedIn profile score, review recommendations, and open
            your latest analysis report.
          </p>
        </div>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <Icon className="text-indigo-300" size={28} />
                <p className="mt-5 text-sm text-gray-400">{stat.label}</p>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/report"
            className="btn bg-indigo-600 text-white border-none hover:bg-indigo-700"
          >
            View Report
          </Link>
          <Link
            href="/profile"
            className="btn btn-outline border-white/30 text-white hover:bg-white/10"
          >
            Edit Profile
          </Link>
        </div>
      </main>
    </div>
  );
}
