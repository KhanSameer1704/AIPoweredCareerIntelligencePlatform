"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";

const matchedSkills = [
  {
    name: "HTML",
    level: 90,
    status: "Strong",
  },
  {
    name: "CSS",
    level: 85,
    status: "Strong",
  },
  {
    name: "JavaScript",
    level: 82,
    status: "Strong",
  },
  {
    name: "React",
    level: 78,
    status: "Good",
  },
  {
    name: "Git & GitHub",
    level: 80,
    status: "Good",
  },
];

const skillGaps = [
  {
    name: "TypeScript",
    current: 35,
    required: 80,
    priority: "High",
    description:
      "TypeScript is commonly used in modern React and Next.js applications.",
  },
  {
    name: "Next.js",
    current: 30,
    required: 75,
    priority: "High",
    description:
      "Improving your Next.js knowledge can strengthen your modern frontend development skills.",
  },
  {
    name: "Unit Testing",
    current: 25,
    required: 70,
    priority: "Medium",
    description:
      "Testing knowledge can help you build more reliable and maintainable applications.",
  },
  {
    name: "System Design",
    current: 20,
    required: 60,
    priority: "Medium",
    description:
      "Basic system design knowledge can help you understand how larger applications are structured.",
  },
];

export default function SkillGapPage() {
  const overallMatch = 78;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16">

        {/* Header */}
        <div className="pt-16">

          <Link
            href="/report"
            className="inline-flex items-center gap-2 text-sm text-indigo-300 transition hover:text-indigo-200"
          >
            <ArrowLeft size={18} />
            Back to Report
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Career Intelligence
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Skill Gap Analysis
          </h1>

          <p className="mt-4 max-w-3xl text-gray-300">
            Compare your current technical skills with the skills required
            for your target role and identify areas that you can improve.
          </p>
        </div>

        {/* Target Role */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
                <Target
                  size={28}
                  className="text-indigo-300"
                />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Target Career Role
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Frontend Developer
                </h2>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-gray-400">
                Current Skill Match
              </p>

              <p className="mt-1 text-4xl font-bold text-indigo-300">
                {overallMatch}%
              </p>
            </div>

          </div>

          {/* Progress */}
          <div className="mt-7">

            <div className="mb-2 flex justify-between text-sm">
              <span className="text-gray-400">
                Overall compatibility
              </span>

              <span className="font-semibold">
                {overallMatch}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-indigo-500"
                style={{ width: `${overallMatch}%` }}
              />
            </div>

          </div>

        </section>

        {/* Summary Cards */}
        <section className="mt-8 grid gap-5 md:grid-cols-3">

          <SummaryCard
            icon={<CheckCircle2 size={23} />}
            title="Matched Skills"
            value={`${matchedSkills.length}`}
            description="Skills already aligned with the role"
          />

          <SummaryCard
            icon={<AlertTriangle size={23} />}
            title="Skill Gaps"
            value={`${skillGaps.length}`}
            description="Areas that need improvement"
          />

          <SummaryCard
            icon={<TrendingUp size={23} />}
            title="Growth Areas"
            value="4"
            description="Recommended areas for development"
          />

        </section>

        {/* Matched Skills */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

          <div>
            <h2 className="text-xl font-semibold">
              Skills You Already Have
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              These skills are already aligned with your selected target role.
            </p>
          </div>

          <div className="mt-7 space-y-5">

            {matchedSkills.map((skill) => (
              <div key={skill.name}>

                <div className="mb-2 flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="text-green-400"
                    />

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>

                  <span className="text-sm text-gray-400">
                    {skill.level}%
                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  {skill.status}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* Skill Gaps */}
        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

          <div>
            <h2 className="text-xl font-semibold">
              Skills You Should Improve
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              These skills show a gap between your current profile and
              the selected target role.
            </p>
          </div>

          <div className="mt-7 space-y-6">

            {skillGaps.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-white/10 bg-black/10 p-5"
              >

                {/* Skill Header */}
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10">
                      <AlertTriangle
                        size={20}
                        className="text-yellow-300"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {skill.name}
                      </h3>

                      <p className="text-xs text-gray-500">
                        Priority: {skill.priority}
                      </p>
                    </div>

                  </div>

                  <span className="rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                    Needs Improvement
                  </span>

                </div>

                {/* Current */}
                <div className="mt-6">

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Your current level
                    </span>

                    <span className="text-gray-300">
                      {skill.current}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-yellow-400"
                      style={{ width: `${skill.current}%` }}
                    />
                  </div>

                </div>

                {/* Required */}
                <div className="mt-5">

                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-400">
                      Target level
                    </span>

                    <span className="text-gray-300">
                      {skill.required}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-indigo-500"
                      style={{ width: `${skill.required}%` }}
                    />
                  </div>

                </div>

                {/* Difference */}
                <div className="mt-5 border-t border-white/10 pt-5">

                  <p className="text-sm leading-6 text-gray-400">
                    {skill.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-xs text-gray-500">
                      Gap:{" "}
                      <span className="text-yellow-300">
                        {skill.required - skill.current}%
                      </span>
                    </span>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition hover:text-indigo-200">
                      <BookOpen size={17} />
                      Learn More
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </section>

        {/* Development Plan */}
        <section className="mt-8 rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10">
              <TrendingUp
                size={24}
                className="text-indigo-300"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Suggested Development Path
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
                Focus first on high-priority skills such as TypeScript and
                Next.js. After strengthening your frontend fundamentals,
                gradually develop testing and system design knowledge.
              </p>
            </div>

          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">

            <DevelopmentStep
              number="01"
              title="TypeScript"
              description="Strengthen typed JavaScript development."
            />

            <DevelopmentStep
              number="02"
              title="Next.js"
              description="Build production-ready React applications."
            />

            <DevelopmentStep
              number="03"
              title="Testing"
              description="Learn unit and component testing."
            />

            <DevelopmentStep
              number="04"
              title="System Design"
              description="Understand scalable application architecture."
            />

          </div>

        </section>

        {/* Bottom Actions */}
        <section className="mt-8 flex flex-col justify-between gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 md:flex-row md:items-center">

          <div>
            <h2 className="text-xl font-semibold">
              Ready to improve your profile?
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Review the recommendations generated from your analysis.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              href="/report"
              className="btn border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              Back to Report
            </Link>

            <Link
              href="/recommendations"
              className="btn border-none bg-indigo-600 text-white hover:bg-indigo-700"
            >
              View Recommendations
            </Link>

          </div>

        </section>

      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function SummaryCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <div className="flex items-center gap-3 text-indigo-300">
        {icon}

        <span className="font-semibold">
          {title}
        </span>
      </div>

      <p className="mt-4 text-4xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

    </div>
  );
}

function DevelopmentStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/10 p-5">

      <span className="text-xs font-semibold text-indigo-300">
        STEP {number}
      </span>

      <h3 className="mt-3 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-5 text-gray-500">
        {description}
      </p>

    </div>
  );
}
