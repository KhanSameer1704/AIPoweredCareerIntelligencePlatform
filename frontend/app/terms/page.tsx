import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Terms
          </p>
          <h1 className="mt-3 text-4xl font-bold">Terms & Conditions</h1>
          <p className="mt-4 text-gray-300">
            Please use LinkedIn Analyzer responsibly and only submit profile
            information you have permission to review.
          </p>
        </div>

        <section className="mt-10 space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-gray-300 backdrop-blur-xl">
          <p>
            The platform provides AI-powered suggestions for career and profile
            improvement. These suggestions are informational and should be
            reviewed before you apply them.
          </p>
          <p>
            You are responsible for the accuracy of the information you provide
            and for how you use the analysis results.
          </p>
          <p>
            Do not submit sensitive private data or profiles that you are not
            authorized to analyze.
          </p>
        </section>

        <Link
          href="/signup"
          className="btn mt-8 bg-indigo-600 text-white border-none hover:bg-indigo-700"
        >
          Back to Sign Up
        </Link>
      </main>
    </div>
  );
}
