import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";

const recommendations = [
  "Add measurable achievements to your experience section.",
  "Strengthen your About section with a clearer career focus.",
  "Pin projects that match your target role.",
];

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Analysis Report
          </p>
          <h1 className="mt-3 text-4xl font-bold">LinkedIn Profile Report</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            A focused summary of your profile strength and practical next steps
            to improve your professional presence.
          </p>
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 text-indigo-300">
                <TrendingUp size={24} />
                <span className="font-semibold">Overall Score</span>
              </div>
              <p className="mt-4 text-5xl font-bold">85%</p>
              <p className="mt-2 text-gray-400">Strong profile foundation</p>
            </div>

            <Link
              href="/dashboard"
              className="btn bg-indigo-600 text-white border-none hover:bg-indigo-700"
            >
              Back to Dashboard
            </Link>
          </div>
        </section>

        <section className="mt-8 grid gap-5">
          {recommendations.map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-indigo-300"
                size={22}
              />
              <p className="text-gray-200">{item}</p>
            </div>
          ))}
        </section>

        <div className="mt-8 flex items-center gap-3 text-gray-300">
          <Lightbulb className="text-indigo-300" size={22} />
          <span>Update your profile, then run another analysis.</span>
        </div>
      </main>
    </div>
  );
}
