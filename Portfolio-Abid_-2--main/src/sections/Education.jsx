const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            My Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400"></div>
        </div>

        {/* Education Card */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400 md:p-8">

            <div className="flex flex-col justify-between gap-4 md:flex-row">

              <div>
                <p className="mb-2 text-sm font-medium text-cyan-400">
                  2021 - 2025
                </p>

                <h3 className="text-2xl font-bold">
                  Bachelor of Science in Computer Science & Engineering
                </h3>

                <p className="mt-2 text-lg text-slate-300">
                  Daffodil International University
                </p>
              </div>

              <div className="flex h-fit w-fit rounded-full bg-cyan-400/10 px-4 py-2">
                <span className="text-sm font-semibold text-cyan-400">
                  BSc in CSE
                </span>
              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              Completed my Bachelor of Science in Computer Science and
              Engineering with a strong interest in web development,
              software engineering, and modern JavaScript technologies.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;