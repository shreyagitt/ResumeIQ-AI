import {
  FileText,
  Brain,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <FileText size={28} />,
      title: "ATS Score Analysis",
      desc: "Analyze resumes against job descriptions with ATS scoring.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Suggestions",
      desc: "Get AI-powered resume improvement recommendations instantly.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Smart Analytics",
      desc: "Visualize skill match percentages and missing keywords.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Secure Platform",
      desc: "Protected authentication and secure resume storage.",
    },
  ];

  return (
    <section
      id="features"
      className="px-8 py-24 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold">
          Powerful Features
        </h2>

        <p className="text-zinc-400 mt-5 text-lg">
          Everything you need to optimize your resume.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-zinc-900 rounded-3xl p-8 bg-zinc-950 hover:border-zinc-700 transition"
          >
            <div className="mb-5 text-white">
              {feature.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;