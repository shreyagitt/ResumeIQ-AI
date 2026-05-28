import {
  Upload,
  Brain,
  Users,
} from "lucide-react";

function HowItWorks() {

  const steps = [

    {
      icon: <Upload size={40} />,
      title: "Upload Resume",
      description:
        "Candidates upload resumes and job descriptions for AI-powered ATS analysis.",
    },

    {
      icon: <Brain size={40} />,
      title: "AI ATS Analysis",
      description:
        "ResumeIQ AI calculates ATS scores, matched skills, and missing keywords instantly.",
    },

    {
      icon: <Users size={40} />,
      title: "Recruiter Shortlisting",
      description:
        "Recruiters review candidates, compare ATS scores, and shortlist top applicants.",
    },

  ];


  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

          <h1 className="text-5xl font-bold">
            How ResumeIQ AI Works
          </h1>

          <p className="text-zinc-400 mt-5 text-lg max-w-3xl mx-auto">
            Simplify resume screening and candidate shortlisting using intelligent ATS analysis.
          </p>

        </div>


        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-10">

          {
            steps.map((step, index) => (

              <div
                key={index}
                className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 hover:border-green-500/30 transition"
              >

                <div className="text-green-400 mb-6">
                  {step.icon}
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {step.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;