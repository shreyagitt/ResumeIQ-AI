import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-8 py-28">
      <div className="max-w-5xl mx-auto border border-zinc-900 rounded-3xl bg-zinc-950 text-center p-16">
        
        <h2 className="text-5xl font-bold leading-tight">
          Start Improving Your Resume Today
        </h2>

        <p className="text-zinc-400 mt-6 text-lg">
          Build recruiter-ready resumes with AI-powered analysis.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default CTA;