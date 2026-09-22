
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Sparkles,
  Brain,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Use intelligent analysis to understand the strengths and improvement areas of your professional profile.",
    },
    {
      icon: Target,
      title: "Career Focused",
      description:
        "Get personalized recommendations based on your skills, experience, education, and career goals.",
    },
    {
      icon: TrendingUp,
      title: "Profile Growth",
      description:
        "Improve your LinkedIn presence and build a stronger professional identity that attracts recruiters.",
    },
    {
      icon: Users,
      title: "Recruiter Ready",
      description:
        "Understand what can make your profile more effective and relevant for your desired job roles.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Analyze Your Profile",
      description:
        "Provide your professional profile information and let LinkedIn Analyzer examine the important sections.",
    },
    {
      number: "02",
      title: "Discover Your Strengths",
      description:
        "Understand which parts of your profile are strong and which areas need improvement.",
    },
    {
      number: "03",
      title: "Get AI Insights",
      description:
        "Receive intelligent recommendations and career-focused suggestions tailored to your profile.",
    },
    {
      number: "04",
      title: "Improve & Grow",
      description:
        "Apply the recommendations to create a stronger professional presence and move closer to your career goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="pt-28">

        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 mb-6">
              <Sparkles size={18} />
              AI-Powered Career Intelligence
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              About{" "}
              <span className="text-indigo-400">
                LinkedIn Analyzer
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 leading-8">
              LinkedIn Analyzer is an AI-powered career intelligence platform
              designed to help students and professionals understand,
              improve, and optimize their LinkedIn profiles.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

              <Link
                href="/signup"
                className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-7"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/features"
                className="btn btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white px-7"
              >
                Explore Features
              </Link>

            </div>
          </div>
        </section>


        {/* Mission Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Left Content */}
              <div>

                <div className="inline-flex items-center gap-2 text-indigo-400 mb-4">
                  <Lightbulb size={20} />
                  <span className="font-semibold">
                    OUR MISSION
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Turning Your Professional Profile Into a Career Advantage
                </h2>

                <p className="text-gray-400 mt-5 leading-7">
                  Building a strong professional profile can be challenging.
                  LinkedIn Analyzer helps simplify this process by combining
                  profile analysis, AI-powered insights, and career
                  recommendations in one platform.
                </p>

                <p className="text-gray-400 mt-4 leading-7">
                  Our goal is to help users identify their strengths,
                  discover skill gaps, improve their professional presence,
                  and make more informed career decisions.
                </p>

                <div className="mt-7 space-y-4">

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300">
                      Understand your professional strengths
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300">
                      Identify areas for improvement
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300">
                      Discover relevant career opportunities
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300">
                      Build a stronger professional identity
                    </span>
                  </div>

                </div>
              </div>


              {/* Right Glass Card */}
              <div className="relative">

                <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-400/20">
                    <Brain
                      size={32}
                      className="text-indigo-400"
                    />
                  </div>

                  <h3 className="text-2xl font-bold mt-6">
                    Intelligence Meets Career Growth
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7">
                    We combine AI-driven insights with professional profile
                    analysis to help you understand where you are and what
                    you can do next.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-7">

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-2xl font-bold text-indigo-400">
                        AI
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Powered Insights
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-2xl font-bold text-indigo-400">
                        360°
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Profile Review
                      </p>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Highlights Section */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">

              <p className="text-indigo-400 font-semibold">
                WHY LINKEDIN ANALYZER
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Built to Help You Move Forward
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Everything you need to understand your professional profile
                and make smarter career decisions.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300 hover:-translate-y-2"
                  >

                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20 group-hover:bg-indigo-500/25 transition">

                      <Icon
                        size={28}
                        className="text-indigo-400"
                      />

                    </div>

                    <h3 className="text-xl font-semibold mt-5">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-6 mt-3">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="px-4 py-16">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">

              <p className="text-indigo-400 font-semibold">
                HOW IT WORKS
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Your Career Improvement Journey
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                A simple process designed to turn profile analysis into
                actionable career growth.
              </p>

            </div>


            <div className="grid md:grid-cols-4 gap-6">

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300"
                >

                  <div className="text-indigo-400 text-4xl font-bold opacity-60">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-semibold mt-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mt-3">
                    {step.description}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* Vision Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">

            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/20 p-8 md:p-12 text-center">

              <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />

              <div className="relative">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-400/30">
                  <Target
                    size={32}
                    className="text-indigo-300"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mt-6">
                  Our Vision
                </h2>

                <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-7">
                  We envision a future where every student and professional
                  can understand their career potential, identify the skills
                  they need, and confidently build a professional identity
                  that represents their goals.
                </p>

              </div>

            </div>
          </div>
        </section>


        {/* Trust Section */}
        <section className="px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">

            <ShieldCheck
              size={36}
              className="text-indigo-400 mx-auto"
            />

            <h2 className="text-2xl md:text-3xl font-bold mt-5">
              Your Career, Your Growth, Your Future
            </h2>

            <p className="text-gray-400 mt-3 leading-7">
              LinkedIn Analyzer is designed to provide clear, practical,
              and personalized career insights so you can focus on improving
              what matters most.
            </p>

          </div>
        </section>


        {/* CTA */}
        <section className="px-4 py-16 text-center">

          <h2 className="text-3xl font-bold">
            Ready to Take the Next Step?
          </h2>

          <p className="text-gray-400 mt-3">
            Start analyzing your professional profile today.
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 mt-6 btn bg-white text-indigo-900 hover:bg-gray-100 border-none px-8"
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>

        </section>

      </main>
    </div>
  );
}

