import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import {
  FiArrowDown,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 md:px-10 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Intro */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Bocktear
              <span className="block text-cyan-400">
                Abid Borat
              </span>
            </h1>

            {/* Profession */}
            <div className="mt-5">
              <h2 className="text-2xl font-semibold text-slate-200 md:text-3xl">
                MERN Stack Developer
              </h2>

              <p className="mt-2 text-lg text-slate-500">
                Frontend Developer
              </p>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              I build modern, responsive and user-friendly web applications
              using React.js, JavaScript, Node.js, Express.js and MongoDB.
              I focus on clean UI, reusable components and practical solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                View My Work
                <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume
                <FiDownload />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/BoRaT-7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 text-xl text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/abid-borat-030469216"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 text-xl text-slate-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <div className="h-px w-16 bg-slate-800" />

              <span className="text-sm text-slate-500">
                Available for opportunities
              </span>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-600">
                Tech I work with
              </p>

              <div className="flex flex-wrap items-center gap-5 text-2xl text-slate-600">
                <FaReact
                  title="React.js"
                  className="transition hover:text-cyan-400"
                />

                <SiJavascript
                  title="JavaScript"
                  className="transition hover:text-yellow-400"
                />

                <FaNodeJs
                  title="Node.js"
                  className="transition hover:text-green-400"
                />

                <SiMongodb
                  title="MongoDB"
                  className="transition hover:text-green-500"
                />

                <SiTailwindcss
                  title="Tailwind CSS"
                  className="transition hover:text-cyan-400"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 scale-90 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

              {/* Border */}
              <div className="absolute -inset-3 rounded-[2rem] border border-cyan-400/10" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-900 p-2 shadow-2xl shadow-black/40">
                <img
                  src="/images/profile.jpeg"
                  alt="Bocktear Abid Borat"
                  className="h-[420px] w-[330px] object-cover object-top sm:h-[500px] sm:w-[390px] md:h-[560px] md:w-[430px]"
                />

                <div className="absolute inset-x-2 bottom-2 h-32 rounded-b-[1.7rem] bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>

              {/* React Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10">
                    <FaReact className="text-xl text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Specializing in
                    </p>

                    <p className="text-sm font-semibold text-white">
                      React Development
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-4 top-8 rounded-xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-8"
              >
                <p className="text-xs text-slate-500">
                  Experience
                </p>

                <p className="text-lg font-bold text-cyan-400">
                  Frontend
                </p>

                <p className="text-xs text-slate-500">
                  Developer
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 md:flex"
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll
        </span>

        <FiArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;