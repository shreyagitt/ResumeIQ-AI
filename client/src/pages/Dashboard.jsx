import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import {
  getAnalysisHistory,
} from "../services/analysisService";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => {

    const fetchHistory =
      async () => {

        try {

          const data =
            await getAnalysisHistory();

          setHistory(data);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);

        }

      };

    fetchHistory();

  }, []);


  return (
    <div className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        {/* HEADER */}

        <div className="mb-12">

          <h1 className="text-5xl font-bold">
            Welcome, {user?.name}
          </h1>

          <p className="text-zinc-400 mt-3">
            Track and optimize your resumes using AI.
          </p>

        </div>


        {/* DASHBOARD STATS */}

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* TOTAL ANALYSIS */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-lg">
              Total Analysis
            </h2>

            <h1 className="text-5xl font-bold mt-4">
              {history.length}
            </h1>

          </div>


          {/* AVERAGE ATS */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-lg">
              Average ATS
            </h2>

            <h1 className="text-5xl font-bold mt-4">

              {
                history.length > 0
                ? Math.round(
                    history.reduce(
                      (acc, item) =>
                        acc + item.atsScore,
                      0
                    ) / history.length
                  )
                : 0
              }%

            </h1>

          </div>


          {/* BEST SCORE */}

          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

            <h2 className="text-zinc-400 text-lg">
              Best ATS Score
            </h2>

            <h1 className="text-5xl font-bold mt-4">

              {
                history.length > 0
                ? Math.max(
                    ...history.map(
                      (item) =>
                        item.atsScore
                    )
                  )
                : 0
              }%

            </h1>

          </div>

        </div>


        {/* RECENT ANALYSIS */}

        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Recent Analysis
          </h2>


          {
            loading ? (

              <p className="text-zinc-500">
                Loading...
              </p>

            ) : history.length === 0 ? (

              <p className="text-zinc-500">
                No analysis found.
              </p>

            ) : (

              <div className="space-y-4">

                {
                  history.map(
                    (item) => (

                      <div
                        key={item._id}
                        className="flex justify-between items-center border border-zinc-900 rounded-2xl p-5"
                      >

                        <div>

                          <h3 className="font-semibold">
                            Resume Analysis
                          </h3>

                          <p className="text-zinc-500 text-sm mt-1">

                            {
                              new Date(
                                item.createdAt
                              ).toLocaleString()
                            }

                          </p>

                        </div>


                        <div
                          className="
                          text-green-400
                          font-bold
                          text-2xl
                          "
                        >
                          {item.atsScore}%
                        </div>

<p
  className={
    item.shortlisted
    ? "text-green-400"
    : "text-yellow-400"
  }
>
  {
    item.shortlisted
    ? "Shortlisted"
    : "Pending"
  }
</p>
                      </div>

                    )
                  )
                }

              </div>

            )
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;