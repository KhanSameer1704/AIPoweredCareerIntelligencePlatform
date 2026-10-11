"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [skills, setSkills] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

  const handleAnalyze = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
      return;
    }

    // Validation
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!targetRole.trim()) {
      setError("Please enter your target role.");
      return;
    }

    if (!skills.trim()) {
      setError("Please enter at least one skill.");
      return;
    }

    setLoading(true);

    try {
      // Convert comma-separated skills into an array
      const skillsArray = skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

      const response = await fetch(`${API_URL}/api/profile`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          fullName: fullName.trim(),
          targetRole: targetRole.trim(),
          skills: skillsArray,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to save profile."
        );
      }

      console.log("Profile saved successfully:", data);

      // Go to report after successful profile creation
      router.push("/report");
    } catch (error) {
      console.error("Profile submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving your profile."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="pt-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
            Profile
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Your LinkedIn Details
          </h1>

          <p className="mt-4 max-w-2xl text-gray-300">
            Add the details you want the analyzer to review.
          </p>
        </div>

        <form
          onSubmit={handleAnalyze}
          className="mt-10 space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          {/* LinkedIn URL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              LinkedIn Profile URL
            </label>

            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="https://www.linkedin.com/in/your-name"
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          {/* Target Role */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Target Role
            </label>

            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="Frontend Developer, Data Analyst, Product Manager..."
              className="input input-bordered w-full bg-white text-gray-900"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Key Skills
            </label>

            <textarea
              rows={4}
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, Next.js, Python, SQL..."
              className="textarea textarea-bordered w-full bg-white text-gray-900"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              disabled={loading}
              className="btn border-none bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Profile"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="btn btn-outline border-white/30 text-white hover:bg-white/10"
            >
              Dashboard
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}