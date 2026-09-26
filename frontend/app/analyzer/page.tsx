"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "Data Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "UI/UX Designer",
];

export default function AnalyzerPage() {
  const router = useRouter();

  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [error, setError] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const validateLinkedInUrl = (url: string) => {
    const pattern =
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+\/?$/;

    return pattern.test(url.trim());
  };

  const handleAnalyze = async () => {
    setError("");

    if (!linkedinUrl.trim()) {
      setError("Please enter your LinkedIn profile URL.");
      return;
    }

    if (!validateLinkedInUrl(linkedinUrl)) {
      setError("Please enter a valid LinkedIn profile URL.");
      return;
    }

    if (!targetRole) {
      setError("Please select your target career role.");
      return;
    }

    setIsAnalyzing(true);

    /*
      Backend/API integration will be added here.

      Example data that will eventually be sent to the backend:

      {
        linkedinUrl,
        targetRole
      }
    */

    setTimeout(() => {
      setIsAnalyzing(false);

      // Move to the report page after analysis.
      router.push(
        `/report?role=${encodeURIComponent(
          targetRole
        )}&linkedin=${encodeURIComponent(linkedinUrl)}`
      );
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-white px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            AI-Powered Career Intelligence
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            LinkedIn Profile Analyzer
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Analyze your professional profile, discover your strengths,
            identify skill gaps, and get personalized career recommendations.
          </p>
        </div>

        {/* Analyzer Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur md:p-8">

          {/* LinkedIn URL */}
          <div className="mb-7">
            <label
              htmlFor="linkedin"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              LinkedIn Profile URL
            </label>

            <div className="flex items-center rounded-xl border border-white/10 bg-black/30 transition focus-within:border-purple-500">
              <span className="px-4 text-gray-500">
                🔗
              </span>

              <input
                id="linkedin"
                type="url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://www.linkedin.com/in/your-profile"
                className="w-full bg-transparent px-2 py-4 text-sm text-white outline-none placeholder:text-gray-600"
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Enter your public LinkedIn profile URL.
            </p>
          </div>

          {/* Target Role */}
          <div className="mb-7">
            <label
              htmlFor="role"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Target Career Role
            </label>

            <select
              id="role"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-purple-500"
            >
              <option value="" className="bg-zinc-900">
                Select your target role
              </option>

              {roles.map((role) => (
                <option
                  key={role}
                  value={role}
                  className="bg-zinc-900"
                >
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full rounded-xl bg-purple-600 px-6 py-4 font-semibold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center gap-3">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Analyzing Profile...
              </span>
            ) : (
              "Analyze My Profile"
            )}
          </button>

          {/* Privacy Message */}
          <p className="mt-5 text-center text-xs text-gray-500">
            🔒 Your profile information is processed securely.
          </p>
        </div>

        {/* How It Works */}
        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold">
            How It Works
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-400">
            Our analysis workflow converts professional profile information
            into structured career insights.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">

            {/* Step 1 */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                01
              </div>

              <h3 className="font-semibold">
                Profile Input
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Provide your LinkedIn profile and target career role.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                02
              </div>

              <h3 className="font-semibold">
                AI/NLP Processing
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Professional information is processed to identify relevant
                skills and keywords.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                03
              </div>

              <h3 className="font-semibold">
                Skill Gap Analysis
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Your skills are compared with requirements for the selected
                career role.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                04
              </div>

              <h3 className="font-semibold">
                Career Insights
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Receive strengths, skill gaps, and profile improvement
                recommendations.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}