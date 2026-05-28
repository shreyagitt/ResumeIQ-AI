import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import API from "../services/api";

function UploadResume() {

  const navigate = useNavigate();

  const [resume, setResume] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {

    if (!resume) {
      return alert("Please upload resume");
    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);

      formData.append(
        "jobDescription",
        jobDescription
      );

      const res = await API.post(
        "/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
  localStorage.getItem("token"),
          },
        }
      );

      

      navigate("/analysis");

    } catch (error) {

      console.log(error);

      alert("Upload failed");

    } finally {

      setLoading(false);

    }
  };


  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Upload Resume
        </h1>

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10">

          <div className="border-2 border-dashed border-zinc-800 rounded-3xl p-20 text-center">

            <h2 className="text-3xl font-bold">
              Drag & Drop Resume
            </h2>

            <p className="text-zinc-500 mt-4">
              PDF supported
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setResume(e.target.files[0])
              }
              className="mt-8"
            />

          </div>


          <div className="mt-10">

            <label className="block mb-3 text-zinc-400">
              Paste Job Description
            </label>

            <textarea
              rows="8"
              placeholder="Paste job description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
              className="w-full bg-black border border-zinc-800 rounded-2xl p-5 outline-none focus:border-white"
            />

          </div>


          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            {
              loading
              ? "Analyzing..."
              : "Analyze Resume"
            }
          </button>

        </div>

      </div>

    </div>
  );
}

export default UploadResume;