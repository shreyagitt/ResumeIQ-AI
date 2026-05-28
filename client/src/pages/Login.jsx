import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.removeItem(
  "resumeData"
);

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      if (
  res.data.user.role === "Recruiter"
) {

  navigate(
    "/recruiter-dashboard"
  );

} else {

  navigate("/dashboard");

}

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      
      <div className="w-full max-w-md border border-zinc-900 bg-zinc-950 rounded-3xl p-10 shadow-2xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-zinc-400 mt-3">
            Login to continue analyzing resumes.
          </p>
        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full bg-black border text-zinc-400 border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-zinc-400">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full bg-black border text-zinc-400 border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <button
            className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-zinc-500 text-center mt-8">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-white hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;