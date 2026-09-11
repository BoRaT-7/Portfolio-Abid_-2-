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

  return (
    <section
      id="skills"
      className="relative bg-slate-900/40 px-6 py-24 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Technologies I work with
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            A practical set of technologies I use to build responsive,
            scalable and user-friendly web applications.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <span className="text-lg text-cyan-400">
                      {skill.icon}
                    </span>

                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-6"
        >
          <h3 className="mb-5 text-lg font-semibold text-white">
            Additional Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
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
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-800 px-4 py-2 text-sm text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;