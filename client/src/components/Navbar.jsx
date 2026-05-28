import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-900">
      <h1 className="text-2xl font-bold tracking-tight">
        ResumeIQ AI
      </h1>

      <div className="flex items-center gap-6">
        <a href="#features" className="text-zinc-400 hover:text-white transition">
          Features
        </a>

        <Link
          to="/login"
          className="text-zinc-400 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:opacity-90 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;