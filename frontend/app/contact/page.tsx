
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Mail,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-purple-900 text-white">
      <Navbar />

      <main className="pt-28">

        {/* Hero Section */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 mb-6">
              <Sparkles size={18} />
              We&apos;re Here to Help
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Get in{" "}
              <span className="text-indigo-400">
                Touch
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 leading-8">
              Have a question, suggestion, or feedback about LinkedIn
              Analyzer? We would love to hear from you.
            </p>

          </div>
        </section>


        {/* Contact Section */}
        <section className="px-4 py-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">

            {/* Left - Contact Information */}
            <div className="lg:col-span-2">

              <div className="mb-8">
                <p className="text-indigo-400 font-semibold">
                  CONTACT US
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  Let&apos;s Start a Conversation
                </h2>

                <p className="text-gray-400 mt-4 leading-7">
                  Whether you need help using the platform or have an idea
                  that could make LinkedIn Analyzer better, feel free to
                  reach out.
                </p>
              </div>


              {/* Email Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-4 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20">
                    <Mail
                      size={23}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email Us
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Send us your questions or feedback.
                    </p>

                    <p className="text-indigo-300 text-sm mt-2">
                      support@linkedinanalyzer.com
                    </p>
                  </div>

                </div>
              </div>


              {/* Location Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 mb-4 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20">
                    <MapPin
                      size={23}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Our Location
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Built for students and professionals
                    </p>

                    <p className="text-gray-300 text-sm mt-2">
                      India
                    </p>
                  </div>

                </div>
              </div>


              {/* Response Time Card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-indigo-400/40 transition-all duration-300">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20">
                    <Clock
                      size={23}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Response Time
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      We aim to respond as soon as possible.
                    </p>

                    <p className="text-gray-300 text-sm mt-2">
                      Within 24–48 hours
                    </p>
                  </div>

                </div>
              </div>

            </div>


            {/* Right - Contact Form */}
            <div className="lg:col-span-3">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8">

                <div className="flex items-center gap-3 mb-7">

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-400/20">
                    <MessageSquare
                      size={24}
                      className="text-indigo-400"
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">
                      Send Us a Message
                    </h2>

                    <p className="text-gray-400 text-sm">
                      Fill out the form below and we&apos;ll get back to you.
                    </p>
                  </div>

                </div>


                <form className="space-y-5">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-400 focus:bg-white/10 transition"
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-400 focus:bg-white/10 transition"
                    />
                  </div>


                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="What would you like to discuss?"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-400 focus:bg-white/10 transition"
                    />
                  </div>


                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-400 focus:bg-white/10 transition resize-none"
                    />
                  </div>


                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300"
                  >
                    Send Message
                    <Send size={18} />
                  </button>

                </form>

              </div>
            </div>

          </div>
        </section>


        {/* Why Contact Us */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto">

            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-400/20 p-8 md:p-12">

              <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />

              <div className="relative">

                <div className="text-center">
                  <p className="text-indigo-300 font-semibold">
                    WHY REACH OUT?
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Your Feedback Helps Us Grow
                  </h2>

                  <p className="text-gray-300 max-w-2xl mx-auto mt-4 leading-7">
                    Every question, suggestion, and piece of feedback helps
                    us improve LinkedIn Analyzer and create a better career
                    intelligence experience.
                  </p>
                </div>


                <div className="grid md:grid-cols-3 gap-5 mt-8">

                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300 text-sm">
                      Report an issue
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300 text-sm">
                      Share your feedback
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <CheckCircle2
                      size={20}
                      className="text-indigo-400 shrink-0"
                    />
                    <span className="text-gray-300 text-sm">
                      Suggest a new feature
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>


        {/* Bottom CTA */}
        <section className="px-4 py-16 text-center">

          <h2 className="text-3xl font-bold">
            Ready to Improve Your Career Profile?
          </h2>

          <p className="text-gray-400 mt-3">
            Start your AI-powered profile analysis today.
          </p>

          <Link
            href="/signup"
            className="inline-flex items-center gap-2 mt-6 btn bg-white text-indigo-900 hover:bg-gray-100 border-none px-8"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

        </section>

      </main>
    </div>
  );
}
