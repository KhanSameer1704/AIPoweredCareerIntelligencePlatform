"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  Search,
  TrendingUp,
  Target,
  UserRound,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  Loader2,
  BriefcaseBusiness,
  GraduationCap,
  FolderKanban,
  Award,
} from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

type Profile = {
  fullName?: string;
  headline?: string;
  about?: string;
  skills?: string[];
  education?: unknown[];
  experience?: unknown[];
  projects?: unknown[];
  certifications?: unknown[];
  targetRole?: string;
  careerGoals?: string;
};

type ScoreResponse = {
  score: number;
  breakdown?: {
    skills?: number;
    education?: number;
    projects?: number;
    experience?: number;
    certifications?: number;
    profileQuality?: number;
  };
};

type SkillGapResponse = {
  analysis?: {
    targetRole?: string;
    requiredSkills?: string[];
    strongSkills?: string[];
    missingSkills?: string[];
    matchPercentage?: number;
  };
};

type Recommendation = {
  role: string;
  matchPercentage: number;
  matchedSkills?: string[];
  missingSkills?: string[];
};

type RecommendationResponse = {
  recommendations?: Recommendation[];
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const [score, setScore] = useState<ScoreResponse | null>(null);

  const [skillGap, setSkillGap] = useState<
    SkillGapResponse["analysis"] | null
  >(null);

  const [recommendations, setRecommendations] = useState<
    Recommendation[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Get JWT token saved during login
        const token = localStorage.getItem("authToken");

        // If token does not exist, redirect to login
        if (!token) {
          window.location.href = "/login";
          return;
        }

        // Get stored user information
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          try {
            const user = JSON.parse(storedUser);

            setUserName(user.name || "User");
          } catch {
            setUserName("User");
          }
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const [
          profileRes,
          scoreRes,
          skillGapRes,
          recommendationsRes,
        ] = await Promise.all([
          fetch(`${API_URL}/api/profile`, {
            headers,
          }),

          fetch(`${API_URL}/api/career/score`, {
            headers,
          }),

          fetch(`${API_URL}/api/career/skill-gap`, {
            headers,
          }),

          fetch(`${API_URL}/api/career/recommendations`, {
            headers,
          }),
        ]);

        /*
         * Handle authentication errors
         */
        if (
          profileRes.status === 401 ||
          scoreRes.status === 401 ||
          skillGapRes.status === 401 ||
          recommendationsRes.status === 401
        ) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("user");

          window.location.href = "/login";
          return;
        }

        /*
         * Profile
         */
        if (profileRes.ok) {
          const profileData = await profileRes.json();

          setProfile(profileData.profile);

          // Prefer the profile name if available
          if (profileData.profile?.fullName) {
            setUserName(profileData.profile.fullName);
          }
        }

        /*
         * Profile Score
         */
        if (scoreRes.ok) {
          const scoreData = await scoreRes.json();

          setScore(scoreData);
        }

        /*
         * Skill Gap
         */
        if (skillGapRes.ok) {
          const skillGapData = await skillGapRes.json();

          setSkillGap(skillGapData.analysis);
        }

        /*
         * Career Recommendations
         */
        if (recommendationsRes.ok) {
          const recommendationData =
            await recommendationsRes.json();

          setRecommendations(
            recommendationData.recommendations || []
          );
        }

        /*
         * Handle other API errors
         */
        if (
          !profileRes.ok ||
          !scoreRes.ok ||
          !skillGapRes.ok ||
          !recommendationsRes.ok
        ) {
          console.error("Dashboard API responses:", {
            profile: profileRes.status,
            score: scoreRes.status,
            skillGap: skillGapRes.status,
            recommendations: recommendationsRes.status,
          });
        }
      } catch (err) {
        console.error("Dashboard error:", err);

        setError(
          "Unable to load your dashboard. Please make sure the backend is running."
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  /*
   * Calculate profile completeness
   */
  const calculateProfileCompleteness = () => {
    if (!profile) return 0;

    const fields = [
      profile.fullName,
      profile.headline,
      profile.about,
      profile.targetRole,
      profile.careerGoals,
      profile.skills?.length,
      profile.education?.length,
      profile.experience?.length,
      profile.projects?.length,
      profile.certifications?.length,
    ];

    const completed = fields.filter((field) => {
      if (typeof field === "number") {
        return field > 0;
      }

      return Boolean(field);
    }).length;

    return Math.round((completed / fields.length) * 100);
  };

  const profileCompleteness =
    calculateProfileCompleteness();

  const skills = profile?.skills || [];

  const missingSkills =
    skillGap?.missingSkills || [];

  const strongSkills =
    skillGap?.strongSkills || [];

  const topRecommendations =
    recommendations.slice(0, 3);

  const profileScore =
    score?.score ?? 0;

  const skillMatch =
    skillGap?.matchPercentage ?? 0;

  const getProfileStatus = () => {
    if (profileScore >= 80) return "Excellent";

    if (profileScore >= 60) return "Strong";

    if (profileScore >= 40)
      return "Needs Improvement";

    return "Getting Started";
  };

  /*
   * Loading screen
   */
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">
            <Loader2
              className="mx-auto animate-spin text-indigo-400"
              size={40}
            />

            <p className="mt-4 text-gray-400">
              Loading your career dashboard...
            </p>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Error screen
   */
  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <main className="mx-auto max-w-5xl px-4 py-20">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-8 text-center">
            <AlertCircle
              className="mx-auto text-red-400"
              size={40}
            />

            <h2 className="mt-4 text-xl font-semibold">
              Dashboard unavailable
            </h2>

            <p className="mt-2 text-gray-400">
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 font-medium hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <section className="pt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            Career Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome back, {userName} 👋
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
            Analyze your LinkedIn profile, identify skill gaps,
            and get personalized recommendations to improve your
            career profile.
          </p>

          {profile?.headline && (
            <p className="mt-3 text-sm text-indigo-300">
              {profile.headline}
            </p>
          )}
        </section>

        {/* ================= ANALYZER CTA ================= */}

        <section className="mt-10 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-900 p-7 shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600">
                <Search size={28} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Analyze Your LinkedIn Profile
                </h2>

                <p className="mt-2 max-w-2xl text-gray-300">
                  Get an AI-powered analysis of your skills,
                  profile strength, career gaps, and personalized
                  recommendations.
                </p>
              </div>
            </div>

            <Link
              href="/analyzer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold transition hover:bg-indigo-500"
            >
              Start Analysis
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* ================= STATS ================= */}

        <section className="mt-8 grid gap-5 md:grid-cols-3">

          {/* Profile Score */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <Target size={25} />
              </div>

              <TrendingUp
                className="text-emerald-400"
                size={22}
              />
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Overall Score
            </p>

            <p className="mt-1 text-4xl font-bold">
              {profileScore}%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {getProfileStatus()} profile strength
            </p>
          </div>

          {/* Skill Match */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <TrendingUp size={25} />
              </div>

              <span className="text-sm text-emerald-400">
                Target role
              </span>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Skill Match
            </p>

            <p className="mt-1 text-4xl font-bold">
              {skillMatch}%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {skillGap?.targetRole ||
                profile?.targetRole ||
                "No target role set"}
            </p>
          </div>

          {/* Profile Completeness */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <UserRound size={25} />
              </div>

              <CheckCircle2
                className={
                  profileCompleteness >= 80
                    ? "text-emerald-400"
                    : "text-yellow-400"
                }
                size={22}
              />
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Profile Completeness
            </p>

            <p className="mt-1 text-4xl font-bold">
              {profileCompleteness}%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Based on your profile information
            </p>
          </div>
        </section>

        {/* ================= PROFILE BREAKDOWN ================= */}

        {score?.breakdown && (
          <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Profile Score Breakdown
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  See how your profile contributes to your
                  overall score.
                </p>
              </div>

              <span className="text-2xl font-bold text-indigo-400">
                {profileScore}/100
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  label: "Skills",
                  value: score.breakdown.skills || 0,
                  max: 25,
                  icon: Target,
                },
                {
                  label: "Education",
                  value: score.breakdown.education || 0,
                  max: 15,
                  icon: GraduationCap,
                },
                {
                  label: "Projects",
                  value: score.breakdown.projects || 0,
                  max: 20,
                  icon: FolderKanban,
                },
                {
                  label: "Experience",
                  value: score.breakdown.experience || 0,
                  max: 20,
                  icon: BriefcaseBusiness,
                },
                {
                  label: "Certifications",
                  value: score.breakdown.certifications || 0,
                  max: 10,
                  icon: Award,
                },
                {
                  label: "Profile Quality",
                  value: score.breakdown.profileQuality || 0,
                  max: 10,
                  icon: UserRound,
                },
              ].map((item) => {
                const Icon = item.icon;

                const percentage =
                  item.max > 0
                    ? Math.round(
                        (item.value / item.max) * 100
                      )
                    : 0;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/5 bg-slate-800/60 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={19}
                        className="text-indigo-400"
                      />

                      <span className="text-sm text-gray-300">
                        {item.label}
                      </span>

                      <span className="ml-auto text-sm font-semibold">
                        {item.value}/{item.max}
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
                      <div
                        className="h-full rounded-full bg-indigo-500 transition-all"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================= SKILLS + SKILL GAPS ================= */}

        <section className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Skills */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Your Skills
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Skills saved in your profile
                </p>
              </div>

              <CheckCircle2
                className="text-emerald-400"
                size={23}
              />
            </div>

            {skills.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-white/10 p-5 text-center">
                <p className="text-sm text-gray-400">
                  No skills added yet.
                </p>

                <Link
                  href="/profile"
                  className="mt-3 inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  Complete your profile →
                </Link>
              </div>
            )}
          </div>

          {/* Skill Gaps */}

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Skill Gaps
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  Skills to improve for your target role
                </p>
              </div>

              <AlertCircle
                className="text-yellow-400"
                size={23}
              />
            </div>

            {missingSkills.length > 0 ? (
              <div className="mt-6 space-y-3">
                {missingSkills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-slate-800/60 px-4 py-3"
                  >
                    <span className="text-sm text-gray-200">
                      {skill}
                    </span>

                    <span className="text-xs text-yellow-400">
                      Improve
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-dashed border-white/10 p-5 text-center">
                <CheckCircle2
                  className="mx-auto text-emerald-400"
                  size={30}
                />

                <p className="mt-3 text-sm text-gray-400">
                  {profile?.targetRole
                    ? "No skill gaps detected."
                    : "Set a target role to see your skill gaps."}
                </p>
              </div>
            )}

            {strongSkills.length > 0 && (
              <p className="mt-5 text-xs text-gray-500">
                {strongSkills.length} required skill
                {strongSkills.length !== 1 ? "s" : ""} already matched.
              </p>
            )}

            <Link
              href="/skill-gap"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View full skill gap
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* ================= CAREER RECOMMENDATIONS ================= */}

        <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Career Recommendations
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Career paths matched to your current skills
              </p>
            </div>

            <Link
              href="/recommendations"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          {topRecommendations.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {topRecommendations.map((recommendation) => (
                <div
                  key={recommendation.role}
                  className="rounded-xl border border-white/5 bg-slate-800/60 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {recommendation.role}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {recommendation.matchedSkills?.length || 0} matching skills
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
                      {recommendation.matchPercentage}%
                    </span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{
                        width: `${recommendation.matchPercentage}%`,
                      }}
                    />
                  </div>

                  {recommendation.missingSkills &&
                    recommendation.missingSkills.length > 0 && (
                      <p className="mt-4 text-xs text-gray-500">
                        Missing:{" "}
                        {recommendation.missingSkills
                          .slice(0, 3)
                          .join(", ")}
                      </p>
                    )}
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-xl border border-dashed border-white/10 p-8 text-center">
              <Lightbulb
                className="mx-auto text-indigo-400"
                size={32}
              />

              <p className="mt-3 text-sm text-gray-400">
                Add some skills to your profile to receive
                career recommendations.
              </p>

              <Link
                href="/profile"
                className="mt-4 inline-block text-sm font-medium text-indigo-400"
              >
                Update profile →
              </Link>
            </div>
          )}
        </section>

        {/* ================= QUICK ACTIONS ================= */}

        <section className="mt-8 grid gap-4 sm:grid-cols-3">

          <Link
            href="/profile"
            className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-indigo-500/40"
          >
            <UserRound className="text-indigo-400" />

            <h3 className="mt-4 font-semibold">
              Update Profile
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Keep your professional information up to date.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400">
              Edit profile
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="/report"
            className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-indigo-500/40"
          >
            <TrendingUp className="text-indigo-400" />

            <h3 className="mt-4 font-semibold">
              View Analysis Report
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Review your latest profile analysis.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400">
              Open report
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="/skill-gap"
            className="group rounded-2xl border border-white/10 bg-slate-900/80 p-5 transition hover:border-indigo-500/40"
          >
            <Target className="text-indigo-400" />

            <h3 className="mt-4 font-semibold">
              Improve Skills
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Work on the skills needed for your target role.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-400">
              View skill gaps
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </span>
          </Link>

        </section>

      </main>
    </div>
  );
}