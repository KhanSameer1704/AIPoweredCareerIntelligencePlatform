"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  FileText,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  UserRound,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Overall Score",
      value: "85%",
      description: "Your current profile score",
      icon: Target,
    },
    {
      title: "Skill Match",
      value: "78%",
      description: "Skills matching your career goals",
      icon: Brain,
    },
    {
      title: "Profile Completeness",
      value: "88%",
      description: "Your LinkedIn profile strength",
      icon: UserRound,
    },
  ];

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
    "Improve your About section",
    "Add measurable achievements",
    "Add relevant projects",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
              <Brain size={20} />
            </div>

            <span className="text-lg font-bold">
              Career<span className="text-indigo-400">Intelligence</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-indigo-400"
            >
              Dashboard
            </Link>

            <Link
              href="/profile"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Profile
            </Link>

            <Link
              href="/analyzer"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Analyzer
            </Link>

            <Link
              href="/report"
              className="text-sm text-slate-300 transition hover:text-white"
            >
              Report
            </Link>
          </div>

          <Link
            href="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600"
          >
            <UserRound size={18} />
          </Link>
        </div>
      </nav>

      {/* Dashboard Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-indigo-400">
            CAREER DASHBOARD
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Welcome back, Aleena 👋
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Analyze your LinkedIn profile, identify skill gaps, and get
            personalized recommendations to improve your career profile.
          </p>
        </div>

        {/* Analyze LinkedIn Card */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-600/20 via-purple-600/10 to-slate-900 p-6 md:p-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
                <Search size={24} />
              </div>

              <h2 className="text-2xl font-bold">
                Analyze Your LinkedIn Profile
              </h2>

              <p className="mt-2 max-w-xl text-slate-300">
                Get an AI-powered analysis of your skills, profile strength,
                career gaps, and personalized recommendations.
              </p>
            </div>

            <Link
              href="/analyzer"
              className="flex w-fit items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-500"
            >
              Start Analysis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/15 text-indigo-400">
                    <Icon size={22} />
                  </div>

                  <TrendingUp
                    size={18}
                    className="text-emerald-400"
                  />
                </div>

                <p className="text-sm text-slate-400">{stat.title}</p>

                <h3 className="mt-1 text-3xl font-bold">{stat.value}</h3>

                <p className="mt-2 text-xs text-slate-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Skills */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Your Skills</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Skills detected from your profile
                </p>
              </div>

              <CheckCircle2 className="text-emerald-400" size={22} />
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Skill Gaps */}
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Skill Gaps</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Skills you should consider improving
                </p>
              </div>

              <Target className="text-orange-400" size={22} />
            </div>

            <div className="space-y-3">
              {skillGaps.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-slate-800/60 p-3"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  <span className="text-sm text-slate-300">{skill}</span>
                </div>
              ))}
            </div>

            <Link
              href="/skill-gap"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View skill gaps
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
              <Lightbulb size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                Recommended Improvements
              </h2>

              <p className="text-sm text-slate-400">
                Personalized suggestions based on your profile analysis
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {recommendations.map((recommendation, index) => (
              <div
                key={recommendation}
                className="rounded-xl border border-white/10 bg-slate-800/50 p-5"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 text-sm font-bold text-indigo-400">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {recommendation}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/recommendations"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 px-4 py-2 text-sm font-medium text-indigo-400 transition hover:bg-indigo-500/10"
          >
            View all recommendations
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/analyzer"
            className="group rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-indigo-500/40"
          >
            <Search className="mb-3 text-indigo-400" size={22} />

            <h3 className="font-semibold">Analyze Profile</h3>

            <p className="mt-1 text-sm text-slate-500">
              Run a new LinkedIn profile analysis.
            </p>

            <ArrowRight
              className="mt-4 text-slate-500 transition group-hover:translate-x-1"
              size={18}
            />
          </Link>

          <Link
            href="/report"
            className="group rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-indigo-500/40"
          >
            <FileText className="mb-3 text-indigo-400" size={22} />

            <h3 className="font-semibold">View Report</h3>

            <p className="mt-1 text-sm text-slate-500">
              Review your complete profile analysis.
            </p>

            <ArrowRight
              className="mt-4 text-slate-500 transition group-hover:translate-x-1"
              size={18}
            />
          </Link>

          <Link
            href="/skill-gap"
            className="group rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-indigo-500/40"
          >
            <BarChart3 className="mb-3 text-indigo-400" size={22} />

            <h3 className="font-semibold">Improve Skills</h3>

            <p className="mt-1 text-sm text-slate-500">
              Explore the skills you should develop.
            </p>

            <ArrowRight
              className="mt-4 text-slate-500 transition group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}