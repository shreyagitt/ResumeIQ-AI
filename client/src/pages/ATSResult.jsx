import {
  useEffect,
  useState,
} from "react";

import { Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";

import {
  getLatestAnalysis,
} from "../services/analysisService";

function ATSResult() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const fetchAnalysis =
      async () => {

        try {

          const res =
            await getLatestAnalysis();

          console.log(res);

          setData(res);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchAnalysis();

  }, []);


  // BLOCK RECRUITER
  if (user?.role === "Recruiter") {

    return (
      <Navigate to="/recruiter-dashboard" />
    );

  }


  // LOADING
  if (loading) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        Loading...

      </div>
    );

  }


  // NO DATA
  if (!data) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">

        No Analysis Found

      </div>
    );

  }


  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          ATS Analysis
        </h1>


        {/* ATS SCORE */}

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 mb-10">

          <h2 className="text-zinc-400 text-lg">
            ATS Score
          </h2>

          <h1 className="text-7xl font-bold mt-5 text-green-400">
            {data?.atsScore}%
          </h1>

        </div>


        {/* MATCHED + MISSING */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* MATCHED */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-green-400">
              Matched Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {
                data?.matchedSkills?.length > 0
                ? (
                  data.matchedSkills.map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl"
                      >
                        {skill}
                      </span>
                    )
                  )
                ) : (
                  <p className="text-zinc-500">
                    No matched skills
                  </p>
                )
              }

            </div>

          </div>


          {/* MISSING */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-red-400">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {
                data?.missingSkills?.length > 0
                ? (
                  data.missingSkills.map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="bg-red-500/10 text-red-400 px-4 py-2 rounded-xl"
                      >
                        {skill}
                      </span>
                    )
                  )
                ) : (
                  <p className="text-zinc-500">
                    No missing skills
                  </p>
                )
              }

            </div>

          </div>

        </div>


        {/* AI */}

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 mt-10">

          <h2 className="text-3xl font-bold mb-6">
            AI Suggestions
          </h2>

          <div className="bg-black border border-zinc-800 rounded-2xl p-6 whitespace-pre-wrap text-zinc-300">

            {data?.aiSuggestions}

          </div>

        </div>


        {/* RESUME TEXT */}

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Extracted Resume Text
          </h2>

          <div className="bg-black border border-zinc-800 rounded-2xl p-6 max-h-[500px] overflow-y-auto whitespace-pre-wrap text-zinc-300">

            {data?.extractedText}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ATSResult;