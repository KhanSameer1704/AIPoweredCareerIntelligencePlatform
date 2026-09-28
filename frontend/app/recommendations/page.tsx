"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
Lightbulb,
Target,
UserRound,
Code2,
BriefcaseBusiness,
CheckCircle2,
ArrowRight,
AlertCircle,
} from "lucide-react";

const profileRecommendations = [
{
title: "Improve your headline",
description:
"Make your headline more specific by highlighting your role, technical skills, and career focus.",
priority: "High",
},
{
title: "Strengthen your About section",
description:
"Add a concise summary of your technical background, projects, interests, and career goals.",
priority: "High",
},
{
title: "Add measurable achievements",
description:
"Where possible, describe project and experience outcomes using measurable results.",
priority: "Medium",
},
];

const skillRecommendations = [
{
skill: "TypeScript",
reason:
"Adding TypeScript can strengthen your frontend development profile and complement your React skills.",
priority: "High",
},
{
skill: "Next.js",
reason:
"Developing Next.js skills can improve your ability to build modern full-stack React applications.",
priority: "High",
},
{
skill: "Unit Testing",
reason:
"Testing knowledge can demonstrate your ability to build more reliable and maintainable applications.",
priority: "Medium",
},
{
skill: "System Design",
reason:
"Basic system design knowledge can help you understand how applications scale and communicate.",
priority: "Medium",
},
];

const careerRecommendations = [
"Continue building practical frontend projects.",
"Highlight your strongest projects on your LinkedIn profile.",
"Keep your technical skills aligned with your target role.",
"Add relevant certifications or learning achievements.",
];

function PriorityBadge({ priority }: { priority: string }) {
const isHigh = priority === "High";

return (
<span
className={`rounded-full px-3 py-1 text-xs font-semibold ${
        isHigh
          ? "bg-red-500/10 text-red-300"
          : "bg-yellow-500/10 text-yellow-300"
      }`}
>
{priority} Priority </span>
);
}

export default function RecommendationsPage() {
return ( <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white"> <Navbar />

  <main className="mx-auto max-w-6xl px-4 py-16">
    {/* Header */}
    <div className="pt-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
        Career Recommendations
      </p>

      <h1 className="mt-3 text-4xl font-bold">
        Improve Your LinkedIn Profile
      </h1>

      <p className="mt-4 max-w-3xl text-gray-300">
        Personalized suggestions based on your profile analysis, skills,
        and identified improvement areas.
      </p>
    </div>

    {/* Quick Summary */}
    <section className="mt-10 grid gap-5 md:grid-cols-3">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-indigo-300">
          <Target size={23} />
          <span className="font-semibold">Focus Area</span>
        </div>

        <p className="mt-4 text-2xl font-bold">
          Profile Optimization
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Improve how your professional profile represents your skills.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-indigo-300">
          <Code2 size={23} />
          <span className="font-semibold">Skill Development</span>
        </div>

        <p className="mt-4 text-2xl font-bold">
          4 Skills
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Technical areas identified for further development.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3 text-indigo-300">
          <BriefcaseBusiness size={23} />
          <span className="font-semibold">Career Focus</span>
        </div>

        <p className="mt-4 text-2xl font-bold">
          Frontend Development
        </p>

        <p className="mt-2 text-sm text-gray-400">
          Recommendations are aligned with your current technical profile.
        </p>
      </div>
    </section>

    {/* Profile Recommendations */}
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <UserRound className="text-indigo-300" size={24} />

        <div>
          <h2 className="text-xl font-semibold">
            Profile Improvements
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Improve the presentation and completeness of your LinkedIn
            profile.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {profileRecommendations.map((recommendation) => (
          <div
            key={recommendation.title}
            className="rounded-2xl border border-white/10 bg-black/10 p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-semibold text-gray-100">
                  {recommendation.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {recommendation.description}
                </p>
              </div>

              <PriorityBadge priority={recommendation.priority} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Skill Recommendations */}
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <Code2 className="text-indigo-300" size={24} />

        <div>
          <h2 className="text-xl font-semibold">
            Recommended Skills
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Technical skills that can strengthen your professional profile.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skillRecommendations.map((recommendation) => (
          <div
            key={recommendation.skill}
            className="rounded-2xl border border-white/10 bg-black/10 p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-100">
                {recommendation.skill}
              </h3>

              <PriorityBadge priority={recommendation.priority} />
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {recommendation.reason}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/skill-gap"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200"
      >
        View detailed skill gap
        <ArrowRight size={16} />
      </Link>
    </section>

    {/* Career Recommendations */}
    <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <BriefcaseBusiness className="text-indigo-300" size={24} />

        <div>
          <h2 className="text-xl font-semibold">
            Career Recommendations
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Practical steps to strengthen your professional presence.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {careerRecommendations.map((recommendation) => (
          <div
            key={recommendation}
            className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-5"
          >
            <CheckCircle2
              className="mt-0.5 shrink-0 text-green-400"
              size={21}
            />

            <p className="text-sm leading-6 text-gray-200">
              {recommendation}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Priority Section */}
    <section className="mt-8 rounded-3xl border border-yellow-400/20 bg-yellow-500/5 p-7">
      <div className="flex items-start gap-4">
        <AlertCircle
          className="mt-1 shrink-0 text-yellow-300"
          size={24}
        />

        <div>
          <h2 className="text-xl font-semibold">
            Start With High-Priority Improvements
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
            Focus first on strengthening your profile presentation and
            developing the technical skills that are most relevant to your
            target role.
          </p>
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="mt-8 flex flex-col justify-between gap-5 rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7 md:flex-row md:items-center">
      <div>
        <h2 className="text-xl font-semibold">
          Ready to continue improving?
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Review your analysis or run another LinkedIn profile analysis.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/report"
          className="btn border-white/10 bg-white/5 text-white hover:bg-white/10"
        >
          View Report
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
