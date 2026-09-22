import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center flex-1">
      
      {/* Left Column */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Analyze Your <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            LinkedIn Profile
          </span>
        </h1>

        <p className="text-slate-400 text-lg max-w-md">
          Get a detailed profile score, personalized recommendations,
          and actionable insights to improve your professional presence.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/signup"
            className="btn btn-primary bg-indigo-600 hover:bg-indigo-500 text-white border-none shadow-lg shadow-indigo-500/25 px-6"
          >
            Get Started
          </Link>

          <Link
            href="/features"
            className="btn btn-outline border-white/20 text-white hover:bg-white/10 px-6"
          >
            View Demo
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
        <h3 className="text-xl font-bold mb-6 text-white">
          Profile Score
        </h3>

        <div className="flex items-center gap-6 mb-6">
          <div
            className="radial-progress text-indigo-400 font-bold text-lg"
            style={
              {
                "--value": 85,
                "--size": "5.5rem",
                "--thickness": "8px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            85%
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              Overall Score
            </div>
            <div className="text-2xl font-bold text-white">
              85 / 100
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 my-4"></div>

        <ul className="space-y-3 text-sm font-medium">
          <li className="flex items-center gap-2 text-emerald-400">
            <span className="font-bold">✓</span>
            Strong Headline
          </li>

          <li className="flex items-center gap-2 text-emerald-400">
            <span className="font-bold">✓</span>
            Good Skills
          </li>

          <li className="flex items-center gap-2 text-amber-400">
            <span>⚠️</span>
            Improve About Section
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
