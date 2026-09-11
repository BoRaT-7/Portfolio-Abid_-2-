import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      company: "SysMatrix Technologies Ltd.",
      role: "Media Intelligence Executive",
      period: "June 2026 – Present",
      type: "Full-time",
      description:
        "Monitor and analyze online media coverage, brand mentions, and digital media data while maintaining accurate reporting and data organization.",
      responsibilities: [
        "Monitor and analyze online media coverage and brand mentions.",
        "Collect, verify, and organize media data for accurate reporting.",
        "Prepare concise media intelligence reports using Microsoft Excel.",
      ],
    },
    {
      company: "TechViUs",
      role: "Frontend Developer",
      period: "January 2026 – April 2026",
      type: "Internship",
      description:
        "Worked on frontend development using modern web technologies, focusing on responsive interfaces, reusable components, and practical UI implementation.",
      responsibilities: [
        "Developed responsive web interfaces using React.js and Tailwind CSS.",
        "Integrated REST APIs and implemented reusable UI components.",
        "Worked on frontend improvements, UI development, and bug fixing.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My professional journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            My experience across frontend development and digital media
            operations.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-800 md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative md:pl-16"
              >

                {/* Timeline Icon */}
                <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-lg text-cyan-400 md:flex">
                  <FiBriefcase />
                </div>

                {/* Experience Card */}
                <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-950/20 md:p-8">

                  {/* Top */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-base font-medium text-cyan-400">
                        {experience.company}
                      </p>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FiCalendar className="text-cyan-400" />
                      {experience.period}
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6 border-t border-slate-800 pt-6">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                      Key Responsibilities
                    </h4>

                    <div className="space-y-3">
                      {experience.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >
                          <FiCheckCircle className="mt-1 shrink-0 text-cyan-400" />

                          <p className="text-sm leading-6 text-slate-500">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;