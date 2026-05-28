import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      
      <div className="mb-6 border border-zinc-800 rounded-full px-4 py-1 text-sm text-zinc-400">
        AI-Powered ATS Resume Analyzer
      </div>

      <h1 className="text-6xl md:text-7xl font-bold max-w-5xl leading-tight tracking-tight">
        Optimize Your Resume With AI Insights
      </h1>

      <p className="text-zinc-400 text-lg mt-8 max-w-2xl leading-relaxed">
        Analyze resumes, improve ATS scores, match job descriptions,
        and generate AI-driven suggestions instantly.
      </p>

      <div className="flex gap-4 mt-10">
        <Link
          to="/signup"
          className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>

        <button className="border border-zinc-800 px-6 py-3 rounded-2xl hover:bg-zinc-900 transition">
          Live Demo
        </button>
      </div>

      <div className="mt-24 w-full max-w-5xl border border-zinc-900 rounded-3xl bg-zinc-950 p-6 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="dashboard"
          className="rounded-2xl opacity-90"
        />
      </div>
    </section>
  );
}

export default Hero;