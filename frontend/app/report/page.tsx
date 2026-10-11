"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Target,
  UserRound,
  AlertCircle,
  Brain,
  LoaderCircle,
} from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

type Data = Record<string, any>;

async function fetchApi(endpoint: string, token: string) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message || `Request failed (${response.status})`
    );
  }

  return data;
}

function getList(value: any, preferredKeys: string[] = []): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item;

        if (item && typeof item === "object") {
          return (
            item.skill ||
            item.name ||
            item.title ||
            item.recommendation ||
            item.description ||
            ""
          );
        }

        return "";
      })
      .filter(Boolean);
  }

  if (value && typeof value === "object") {
    for (const key of preferredKeys) {
      if (value[key] !== undefined) {
        const result = getList(value[key], preferredKeys);
        if (result.length) return result;
      }
    }
  }

  return [];
}

function getPercentage(value: any): number | null {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0
    ? Math.min(100, Math.round(number))
    : null;
}

export default function ReportPage() {
  const router = useRouter();

  const [profile, setProfile] = useState<Data | null>(null);
  const [score, setScore] = useState<Data | null>(null);
  const [skillGap, setSkillGap] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [insights, setInsights] = useState("");
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(true);
  const [error, setError] = useState("");
  const [aiError, setAiError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.replace("/login");
      return;
    }

    let active = true;

    async function loadReport() {
      setLoading(true);
      setError("");

      const results = await Promise.allSettled([
        fetchApi("/api/profile", token!),
        fetchApi("/api/career/score", token!),
        fetchApi("/api/career/skill-gap", token!),
        fetchApi("/api/career/recommendations", token!),
      ]);

      if (!active) return;

      const [profileResult, scoreResult, gapResult, recResult] = results;

      if (profileResult.status === "fulfilled") {
        setProfile(profileResult.value.profile || profileResult.value);
      } else {
        setError(profileResult.reason?.message || "Could not load your profile.");
      }

      if (scoreResult.status === "fulfilled") {
        setScore(scoreResult.value);
      }

      if (gapResult.status === "fulfilled") {
        setSkillGap(gapResult.value.analysis);
      }

      if (recResult.status === "fulfilled") {
        setRecommendations(
          getList(recResult.value.recommendations, [
            "recommendations",
            "items",
            "suggestions",
          ])
        );
      }

      setLoading(false);

      // Fetch AI insights separately so the rest of the report can load first.
      try {
        const aiResult = await fetchApi(
          "/api/career/ai-insights",
          token!
        );

        if (active) {
          setInsights(
            typeof aiResult.insights === "string"
              ? aiResult.insights
              : JSON.stringify(aiResult.insights, null, 2)
          );
        }
      } catch (err: any) {
        if (active) {
          setAiError(
            err.message || "Unable to generate AI career insights."
          );
        }
      } finally {
        if (active) setAiLoading(false);
      }
    }

    loadReport();

    return () => {
      active = false;
    };
  }, [router]);

  const skills = getList(profile?.skills);
  const gaps = getList(skillGap, [
    "missingSkills",
    "skillGaps",
    "gaps",
    "skillsToLearn",
    "missing",
  ]);

  const overallScore = getPercentage(score?.score);

  const profileFields = profile
    ? [
        profile.fullName,
        profile.headline,
        profile.about,
        skills.length > 0,
        profile.education?.length > 0,
        profile.projects?.length > 0,
        profile.experience?.length > 0,
        profile.certifications?.length > 0,
        profile.targetRole,
        profile.careerGoals,
      ]
    : [];

  const completeness = profile
    ? Math.round(
        (profileFields.filter(Boolean).length / profileFields.length) * 100
      )
    : null;

  const rawMatch =
    skillGap?.matchPercentage ??
    skillGap?.matchScore ??
    skillGap?.skillMatch;

  const skillMatch = getPercentage(rawMatch);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
        <Navbar />
        <div className="flex min-h-[70vh] items-center justify-center gap-3">
          <LoaderCircle className="animate-spin" />
          <p>Loading your report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Analysis Report
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            LinkedIn Profile Report
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300">
            Your profile analysis, skills, areas for improvement, and
            personalized AI career guidance.
          </p>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-red-200">
            <AlertCircle className="mr-2 inline" size={18} />
            {error}
            <p className="mt-2 text-sm">
              Check that your backend is running and that you have saved a profile.
            </p>
          </div>
        )}

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <TrendingUp size={24} />
                <span className="font-semibold">Overall Score</span>
              </div>
              <p className="mt-4 text-5xl font-bold">
                {overallScore === null ? "—" : `${overallScore}%`}
              </p>
              <p className="mt-2 text-gray-400">
                Career profile score
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <Target size={24} />
                <span className="font-semibold">Skill Match</span>
              </div>
              <p className="mt-4 text-5xl font-bold">
                {skillMatch === null ? "—" : `${skillMatch}%`}
              </p>
              <p className="mt-2 text-gray-400">
                {profile?.targetRole
                  ? `Target role: ${profile.targetRole}`
                  : "Set a target role in your profile"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-6">
              <div className="flex items-center gap-3 text-indigo-300">
                <UserRound size={24} />
                <span className="font-semibold">Completeness</span>
              </div>
              <p className="mt-4 text-5xl font-bold">
                {completeness === null ? "—" : `${completeness}%`}
              </p>
              <p className="mt-2 text-gray-400">
                Based on saved profile fields
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

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <h2 className="text-xl font-semibold">Skills Detected</h2>
            <p className="mt-2 text-sm text-gray-400">
              Skills saved in your profile.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.length ? (
                skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200"
                  >
                    ✓ {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">No skills have been saved yet.</p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <AlertCircle size={22} className="text-yellow-300" />
              <h2 className="text-xl font-semibold">Skill Gaps</h2>
            </div>

            <p className="mt-2 text-sm text-gray-400">
              Skills identified by the backend analysis.
            </p>

            <div className="mt-6 space-y-3">
              {gaps.length ? (
                gaps.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-4 py-3"
                  >
                    <span className="text-gray-200">{skill}</span>
                    <span className="text-xs text-yellow-300">Improve</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">
                  {skillGap
                    ? "No skill gaps were returned in a recognized list format."
                    : "Skill gap analysis is unavailable."}
                </p>
              )}
            </div>

            <Link
              href="/skill-gap"
              className="mt-6 inline-block text-sm font-semibold text-indigo-300 hover:text-indigo-200"
            >
              View detailed skill gap →
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Lightbulb size={23} className="text-yellow-300" />
            <h2 className="text-xl font-semibold">Recommendations</h2>
          </div>

          <p className="mt-2 text-sm text-gray-400">
            Suggestions returned by the career recommendation service.
          </p>

          <div className="mt-6 grid gap-4">
            {recommendations.length ? (
              recommendations.map((item, index) => (
                <div
                  key={`${index}-${item}`}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black/10 p-5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-semibold text-indigo-300">
                    {index + 1}
                  </div>
                  <p className="text-gray-200">{item}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">
                No recommendations are currently available.
              </p>
            )}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Brain size={25} className="text-indigo-300" />
            <h2 className="text-xl font-semibold">AI Career Insights</h2>
          </div>

          <p className="mt-2 text-sm text-gray-300">
            Personalized guidance generated by your backend AI service.
          </p>

          {aiLoading ? (
            <div className="mt-6 flex items-center gap-3 text-gray-300">
              <LoaderCircle className="animate-spin" size={20} />
              Generating your career insights. This may take a little while...
            </div>
          ) : aiError ? (
            <div className="mt-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-red-200">
              <p>{aiError}</p>
              <p className="mt-2 text-sm text-gray-300">
                Check that Ollama is running and that the backend AI endpoint is available.
              </p>
            </div>
          ) : (
            <div className="mt-6 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/10 p-5 leading-7 text-gray-200">
              {insights || "The AI service returned no insights."}
            </div>
          )}
        </section>

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