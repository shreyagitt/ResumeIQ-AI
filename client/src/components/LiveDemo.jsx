function LiveDemo() {

  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold">
            Live ATS Resume Analysis
          </h1>

          <p className="text-zinc-400 mt-5 text-lg max-w-2xl mx-auto">
            Experience how ResumeIQ AI analyzes resumes,
            calculates ATS scores, and helps recruiters
            shortlist candidates efficiently.
          </p>

        </div>

        

{/* FLOW SECTION */}

<div className="grid md:grid-cols-3 gap-8 mb-20">

  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

    <h1 className="text-5xl mb-5">
      📄
    </h1>

    <h2 className="text-2xl font-bold mb-3">
      Upload Resume
    </h2>

    <p className="text-zinc-400">
      Candidates upload resumes and job descriptions securely.
    </p>

  </div>


  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

    <h1 className="text-5xl mb-5">
      🤖
    </h1>

    <h2 className="text-2xl font-bold mb-3">
      AI ATS Analysis
    </h2>

    <p className="text-zinc-400">
      ResumeIQ AI evaluates ATS score and keyword matching instantly.
    </p>

  </div>


  <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">

    <h1 className="text-5xl mb-5">
      ✅
    </h1>

    <h2 className="text-2xl font-bold mb-3">
      Recruiter Shortlisting
    </h2>

    <p className="text-zinc-400">
      Recruiters shortlist top candidates using AI-driven insights.
    </p>

  </div>

</div>

        {/* ATS PREVIEW */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Candidate ATS Report
            </h2>


            {/* SCORE */}

            <div className="mb-10">

              <p className="text-zinc-500">
                ATS Score
              </p>

              <h1 className="text-7xl font-bold text-green-400 mt-3">
                82%
              </h1>

            </div>


            {/* MATCHED */}

            <div className="mb-8">

              <h3 className="text-green-400 text-xl font-semibold mb-4">
                Matched Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {
                  [
                    "React",
                    "Node.js",
                    "MongoDB",
                    "JWT",
                    "REST API",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl"
                    >
                      {skill}
                    </span>

                  ))
                }

              </div>

            </div>


            {/* MISSING */}

            <div>

              <h3 className="text-red-400 text-xl font-semibold mb-4">
                Missing Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {
                  [
                    "Docker",
                    "AWS",
                    "Redis",
                  ].map((skill) => (

                    <span
                      key={skill}
                      className="bg-red-500/10 text-red-400 px-4 py-2 rounded-xl"
                    >
                      {skill}
                    </span>

                  ))
                }

              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Recruiter Dashboard
            </h2>


            <div className="space-y-5">

              {
                [
                  {
                    name: "Shreya Shree",
                    score: "82%",
                    status: "Shortlisted",
                  },

                  {
                    name: "Rahul Verma",
                    score: "74%",
                    status: "Pending",
                  },

                  {
                    name: "Aman Gupta",
                    score: "91%",
                    status: "Shortlisted",
                  },

                ].map((candidate, index) => (

                  <div
                    key={index}
                    className="flex justify-between items-center border border-zinc-900 rounded-2xl p-5"
                  >

                    <div>

                      <h3 className="font-semibold text-lg">
                        {candidate.name}
                      </h3>

                      <p className="text-zinc-500 text-sm mt-1">
                        Full Stack Developer
                      </p>

                    </div>


                    <div className="text-right">

                      <h2 className="text-green-400 font-bold text-2xl">
                        {candidate.score}
                      </h2>

                      <p
                        className={
                          candidate.status ===
                          "Shortlisted"
                          ? "text-green-400 text-sm"
                          : "text-yellow-400 text-sm"
                        }
                      >
                        {candidate.status}
                      </p>

                    </div>

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiveDemo;