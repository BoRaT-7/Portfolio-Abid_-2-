
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript ES6+", icon: <SiJavascript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST API", icon: <SiExpress /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Authentication",
      skills: [
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
  ];

  const additionalSkills = [
    "UI/UX Design",
    "Canva",
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Facebook Ads",
    "Shopify",
    "PHP",
    "Python",
    "Computer Networking",
    "Data Structures",
    "Computer Security",
    "Data Communication",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-900/40 px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.25em",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-sm font-semibold uppercase text-cyan-400"
          >
            My Skills
          </motion.p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Technologies I{" "}
            <span className="text-cyan-400">work with</span>
          </h2>

          {/* Animated Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 h-1 rounded-full bg-cyan-400"
          />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            A practical set of technologies I use to build responsive,
            scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* ================= SKILL GROUPS ================= */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
                rotateX: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: -2,
                scale: 1.015,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-black/10 transition-colors duration-300 hover:border-cyan-400/30"
            >
              {/* Top Glow */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Title */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.08 + skillIndex * 0.08,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.04,
                      }}
                      className="flex cursor-default items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-400"
                    >
                      <motion.span
                        whileHover={{
                          rotate: 10,
                          scale: 1.2,
                        }}
                        className="text-lg text-cyan-400"
                      >
                        {skill.icon}
                      </motion.span>

                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= ADDITIONAL SKILLS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="group relative mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-black/10 sm:p-8"
        >
          {/* Animated Top Border */}
          <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full" />

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/5 blur-3xl" />

          <div className="relative z-10">

            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

              <h3 className="text-lg font-semibold text-white">
                Additional Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="cursor-default rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs text-slate-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400 sm:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center text-xs text-slate-600 sm:text-sm"
        >
          Always learning. Always building. Always improving.
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;
