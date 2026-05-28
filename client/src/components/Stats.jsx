function Stats() {

  const stats = [

    {
      number: "10K+",
      title: "Resumes Analyzed",
    },

    {
      number: "95%",
      title: "ATS Accuracy",
    },

    {
      number: "500+",
      title: "Recruiters",
    },

    {
      number: "24/7",
      title: "AI Analysis",
    },

  ];


  return (
    <section className="bg-black text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {
            stats.map((item, index) => (

              <div
                key={index}
                className="bg-zinc-950 border border-zinc-900 rounded-3xl p-10 text-center hover:border-green-500/30 transition"
              >

                <h1 className="text-5xl font-bold text-green-400">
                  {item.number}
                </h1>

                <p className="text-zinc-400 mt-4 text-lg">
                  {item.title}
                </p>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Stats;