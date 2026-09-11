import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiMonitor,
} from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      text: "Building modern and responsive interfaces with React.js and Tailwind CSS.",
    },
    {
      icon: <FiLayers />,
      title: "Full-Stack Development",
      text: "Developing complete web applications using the MERN stack and REST APIs.",
    },
    {
      icon: <FiDatabase />,
      title: "Backend & Database",
      text: "Working with Node.js, Express.js, MongoDB and Mongoose for scalable applications.",
    },
    {
      icon: <FiMonitor />,
      title: "Admin Dashboards",
      text: "Creating practical admin dashboards with reusable components and CRUD functionality.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 md:px-10 lg:px-12"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Building with purpose,
            <span className="text-cyan-400"> creating with code.</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />
        </motion.div>

        {/* Main About */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-slate-400">
              I'm a{" "}
              <span className="font-semibold text-white">
                MERN Stack Developer
              </span>{" "}
              and Computer Science & Engineering graduate with hands-on
              experience building modern web applications and responsive
              admin dashboards.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              My primary focus is frontend and full-stack web development.
              I work with React.js, JavaScript, Node.js, Express.js,
              MongoDB, REST APIs, Firebase and JWT authentication.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-500">
              I enjoy turning ideas into functional, user-friendly
              applications with clean architecture, reusable components
              and responsive interfaces.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">20+</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">MERN</h3>
                <p className="mt-1 text-xs text-slate-500">
                  Stack Focus
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400">2025</h3>
                <p className="mt-1 text-xs text-slate-500">
                  BSc Completed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;