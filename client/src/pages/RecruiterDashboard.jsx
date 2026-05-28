import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import {

  getCandidates,

  toggleShortlist,

} from "../services/recruiterService";

function RecruiterDashboard() {
    const API_URL =
  import.meta.env.VITE_API_URL;

  const [candidates, setCandidates] =
    useState([]);

  const fetchCandidates =
    async () => {

      try {

        const data =
          await getCandidates();

        setCandidates(data);

      } catch (error) {

        console.log(error);

      }

    };


  useEffect(() => {

    fetchCandidates();

  }, []);


  const shortlistHandler =
    async (id) => {

      try {

        await toggleShortlist(id);

        fetchCandidates();

      } catch (error) {

        console.log(error);

      }

    };


  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Recruiter Dashboard
        </h1>


        {/* TABLE */}

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-zinc-900">

              <tr>

                <th className="p-5 text-left">
                  Candidate
                </th>

                <th className="p-5 text-left">
                  ATS Score
                </th>

                <th className="p-5 text-left">
                  Matched Skills
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {
                candidates.map(
                  (candidate) => (

                    <tr
                      key={candidate._id}
                      className="border-t border-zinc-900"
                    >

                      <td className="p-5">

                        <div>

                          <h3 className="font-semibold">
                            {
                              candidate.user?.name
                            }
                          </h3>

                          <p className="text-zinc-500 text-sm">
                            {
                              candidate.user?.email
                            }
                          </p>

                        </div>

                      </td>


                      <td className="p-5 text-green-400 font-bold">
                        {candidate.atsScore}%
                      </td>


                      <td className="p-5">

                        <div className="flex flex-wrap gap-2">

                          {
                            candidate.matchedSkills
                            ?.slice(0, 3)
                            .map((skill, i) => (

                              <span
                                key={i}
                                className="bg-green-500/10 text-green-400 px-3 py-1 rounded-lg text-sm"
                              >
                                {skill}
                              </span>

                            ))
                          }

                        </div>

                      </td>


                      <td className="p-5">

                        {
                          candidate.shortlisted
                          ? (
                            <span className="text-green-400">
                              Shortlisted
                            </span>
                          ) : (
                            <span className="text-zinc-500">
                              Pending
                            </span>
                          )
                        }

                      </td>


                      <td className="p-5">

                        <button
                          onClick={() =>
                            shortlistHandler(
                              candidate._id
                            )
                          }
                          className="bg-white text-black px-4 py-2 rounded-xl font-semibold"
                        >
                          {
                            candidate.shortlisted
                            ? "Remove"
                            : "Shortlist"
                          }
                        </button>
                        <a
  href={`${API_URL}${candidate.resumeFile}`}
  target="_blank"
  rel="noreferrer"
  className="ml-3 bg-zinc-800 px-4 py-2 rounded-xl"
>
  View Resume
</a>

                      </td>

                    </tr>

                  )
                )
              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default RecruiterDashboard;