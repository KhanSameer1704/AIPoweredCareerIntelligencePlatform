import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Sparkles,
  UserSearch,
  BarChart3,
  Brain,
  Target,
  FileText,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: UserSearch,
      title: "LinkedIn Profile Analysis",
      description:
        "Analyze your LinkedIn profile and get a detailed overview of your professional strengths, weaknesses, and profile quality.",
    },
    {
      icon: BarChart3,
      title: "Profile Strength Score",
      description:
        "Get an AI-powered profile score based on important LinkedIn sections such as headline, about, skills, experience, and projects.",
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description:
        "Receive intelligent recommendations to improve your LinkedIn profile and make it more attractive to recruiters.",
    },
    {
      icon: Target,
      title: "Career Recommendations",
      description:
        "Discover suitable career paths and job roles based on your skills, education, experience, and professional interests.",
    },
    {
      icon: FileText,
      title: "Resume & Profile Optimization",
      description:
        "Get suggestions for improving your headline, About section, skills, projects, and professional descriptions.",
    },
    {
      icon: Lightbulb,
      title: "Skill Gap Analysis",
      description:
        "Identify missing skills for your target job role and understand which technologies you should learn next.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Profile Review",
      description:
        "Get a structured review of your professional profile with actionable suggestions for improving your online presence.",
    },
    {
      icon: Sparkles,
      title: "Personalized Recommendations",
      description:
        "Receive personalized career recommendations generated according to your individual profile and career goals.",
    },
  ];

  const benefits = [
    "Improve your LinkedIn profile",
    "Understand your professional strengths",
    "Identify missing skills",
    "Discover suitable job roles",
    "Get AI-powered career suggestions",
    "Build a stronger professional presence",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="pt-28">

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 mb-6">
              <Sparkles size={18} />
              AI-Powered Career Intelligence
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Powerful Features for Your{" "}
              <span className="text-indigo-400">
                LinkedIn Profile
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
              LinkedIn Analyzer uses AI-powered insights to analyze your
              professional profile, identify improvement areas, and help you
              move closer to your career goals.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <Link
                href="/signup"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-7"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white px-7"
              >
                Analyze Profile
              </Link>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <p className="text-indigo-400 font-semibold">
                WHAT WE OFFER
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Everything You Need to Grow Your Career
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Turn your LinkedIn profile into a powerful career asset with
                intelligent analysis and personalized recommendations.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300 hover:-translate-y-2"
                  >

                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20 group-hover:bg-indigo-500/25 transition">
                      <Icon
                        size={28}
                        className="text-indigo-400"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mt-5">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-6 mt-3">
                      {feature.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* Profile Analysis Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left */}
              <div>

                <div className="inline-flex items-center gap-2 text-indigo-400 mb-4">
                  <BarChart3 size={20} />
                  <span className="font-semibold">
                    Smart Profile Analysis
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Know Exactly How Strong Your LinkedIn Profile Is
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                  Our analyzer evaluates important sections of your profile
                  and provides an easy-to-understand assessment of your
                  professional presence.
                </p>

                <div className="mt-7 space-y-4">

                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-indigo-400 shrink-0"
                      />

                      <span className="text-gray-300">
                        {benefit}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              {/* Right - Score Card */}
              <div className="bg-white rounded-3xl p-7 shadow-2xl text-gray-900">

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm">
                      LinkedIn Profile Score
                    </p>

                    <h3 className="text-3xl font-bold mt-1">
                      Excellent
                    </h3>
                  </div>

                  <div className="w-20 h-20 rounded-full border-8 border-indigo-500 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      87
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-5">

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Headline</span>
                      <span className="font-semibold">92%</span>
                    </div>

                    <progress
                      className="progress progress-primary w-full"
                      value="92"
                      max="100"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>About</span>
                      <span className="font-semibold">85%</span>
                    </div>

                    <progress
                      className="progress progress-primary w-full"
                      value="85"
                      max="100"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Skills</span>
                      <span className="font-semibold">90%</span>
                    </div>

                    <progress
                      className="progress progress-primary w-full"
                      value="90"
                      max="100"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Experience</span>
                      <span className="font-semibold">78%</span>
                    </div>

                    <progress
                      className="progress progress-primary w-full"
                      value="78"
                      max="100"
                    />
                  </div>

                </div>

                <button className="btn w-full mt-7 bg-indigo-600 hover:bg-indigo-700 border-none text-white">
                  View Detailed Analysis
                </button>

              </div>
            </div>
          </div>
        </section>

        {/* AI Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">

            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/20 p-8 md:p-12 text-center">

              <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

              <div className="relative">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30">
                  <Brain
                    size={32}
                    className="text-indigo-300"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mt-6">
                  Let AI Guide Your Career
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-7">
                  Stop guessing what recruiters are looking for. Get
                  personalized AI-powered insights that help you understand
                  your profile and make smarter career decisions.
                </p>

                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 mt-7 btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-7"
                >
                  Start Your Analysis
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>

          </div>
        </section>

        {/* Footer CTA */}
        <section className="px-4 py-16 text-center">

          <h2 className="text-3xl font-bold">
            Ready to Improve Your LinkedIn Profile?
          </h2>

          <p className="text-gray-400 mt-3">
            Start your AI-powered career analysis today.
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 mt-6 btn bg-white text-indigo-900 hover:bg-gray-100 border-none px-8"
          >
            Create Free Account
            <ArrowRight size={18} />
          </Link>

        </section>

      </main>
    </div>
  );
}

