"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Target,
  UserRound,
  AlertCircle,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
];

const skillGaps = [
  "TypeScript",
  "Next.js",
  "Unit Testing",
  "System Design",
];

const recommendations = [
  "Add measurable achievements to your experience section.",
  "Strengthen your About section with a clearer career focus.",
  "Pin projects that match your target role.",
  "Add relevant skills such as TypeScript and Next.js.",
];

const strengths = [
  "Good foundation in frontend development",
  "Relevant technical skills",
  "Hands-on project experience",
  "Good use of modern web technologies",
];

export default function ReportPage() {
  const overallScore = 85;
  const skillMatch = 78;
  const profileCompleteness = 88;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Analysis Report
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            LinkedIn Profile Report
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300">
            A focused analysis of your professional profile, skills,
            strengths, and areas that can be improved for your target role.
          </p>
        </div>

        {/* Score Section */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-3">

            {/* Overall Score */}
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <TrendingUp size={24} />
                <span className="font-semibold">
                  Overall Score
                </span>
              </div>

              <p className="mt-4 text-5xl font-bold">
                {overallScore}%
              </p>

              <p className="mt-2 text-gray-400">
                Strong profile foundation
              </p>
            </div>

            {/* Skill Match */}
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <Target size={24} />
                <span className="font-semibold">
                  Skill Match
                </span>
              </div>

              <p className="mt-4 text-5xl font-bold">
                {skillMatch}%
              </p>

              <p className="mt-2 text-gray-400">
                Match with target role
              </p>
            </div>

            {/* Completeness */}
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <UserRound size={24} />
                <span className="font-semibold">
                  Completeness
                </span>
              </div>

              <p className="mt-4 text-5xl font-bold">
                {profileCompleteness}%
              </p>

              <p className="mt-2 text-gray-400">
                Profile information
              </p>
            </div>

          </div>

          <div className="mt-7 flex justify-end">
            <Link
              href="/dashboard"
              className="btn border-none bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Back to Dashboard
            </Link>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Detected Skills */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <h2 className="text-xl font-semibold">
              Skills Detected
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Skills identified from your professional profile.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Gaps */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <AlertCircle
                size={22}
                className="text-yellow-300"
              />

              <h2 className="text-xl font-semibold">
                Skill Gaps
              </h2>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Skills that can be developed for your target role.
            </p>

            <div className="mt-6 space-y-3">
              {skillGaps.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3"
                >
                  <span className="text-gray-200">
                    {skill}
                  </span>

                  <span className="text-xs text-yellow-300">
                    Improve
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/skill-gap"
              className="mt-6 inline-block text-sm font-semibold text-indigo-300 hover:text-indigo-200"
            >
              View detailed skill gap →
            </Link>
          </div>
        </section>

        {/* Strengths */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <h2 className="text-xl font-semibold">
            Profile Strengths
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Positive aspects identified from your profile.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="flex gap-3 rounded-xl border border-white/10 bg-black/10 p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-green-400"
                  size={21}
                />

                <p className="text-gray-200">
                  {strength}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Lightbulb
              className="text-yellow-300"
              size={23}
            />

            <h2 className="text-xl font-semibold">
              Recommendations
            </h2>
          </div>

          <p className="mt-2 text-sm text-gray-400">
            Practical suggestions for improving your professional profile.
          </p>

          <div className="mt-6 grid gap-4">
            {recommendations.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/10 p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-semibold text-indigo-300">
                  {index + 1}
                </div>

                <p className="text-gray-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-8 flex flex-col justify-between gap-5 rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Want to improve your profile?
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Explore your skill gaps and work on the recommended areas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/skill-gap"
              className="btn border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              Skill Gap
            </Link>

            <Link
              href="/analyzer"
              className="btn border-none bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Analyze Again
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
