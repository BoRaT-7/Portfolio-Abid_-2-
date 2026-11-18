
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
  const techStack = [
    {
      icon: FaReact,
      name: "React.js",
      color: "hover:text-cyan-400",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "hover:text-yellow-400",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "hover:text-green-400",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "hover:text-green-500",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-slate-950
        pt-20
      "
    >
      {/* =====================================================
          BACKGROUND 3D EFFECTS
      ====================================================== */}

      {/* Top left glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -left-40 -top-40
          h-96 w-96
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Right glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -right-40 top-1/3
          h-96 w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* Small floating orb */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute left-[45%] top-[20%]
          h-2 w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_rgba(34,211,238,0.9)]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100vh-80px)]
          max-w-7xl items-center
          px-5 py-12
          sm:px-6 sm:py-16
          md:px-10
          lg:px-12
          lg:py-20
        "
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-2 lg:order-1"
          >
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="h-px bg-cyan-400"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                text-4xl font-bold
                leading-[1.1]
                text-white
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
              "
            >
              Bocktear

              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.6,
                }}
                className="block text-cyan-400"
              >
                Abid Borat
              </motion.span>
            </motion.h1>

            {/* Profession */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
              className="mt-5"
            >
              <h2 className="text-xl font-semibold text-slate-200 sm:text-2xl md:text-3xl">
                MERN Stack Developer
              </h2>

              <p className="mt-2 text-base text-slate-500 sm:text-lg">
                Frontend Developer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
              className="
                mt-6 max-w-2xl
                text-sm leading-7
                text-slate-400
                sm:text-base sm:leading-8
                md:text-lg
              "
            >
              I build modern, responsive and user-friendly web applications
              using React.js, JavaScript, Node.js, Express.js and MongoDB.
              I focus on clean UI, reusable components and practical solutions.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
              }}
              className="mt-8 flex flex-wrap gap-3 sm:gap-4"
            >
              {/* View Work */}
              <motion.a
                href="#projects"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  boxShadow: "0 15px 35px rgba(34,211,238,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  group flex items-center gap-2
                  rounded-xl
                  bg-cyan-400
                  px-5 py-3
                  text-sm font-semibold
                  text-slate-950
                  transition-colors
                  hover:bg-cyan-300
                  sm:px-6 sm:py-3.5 sm:text-base
                "
              >
                View My Work

                <FiExternalLink className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex items-center gap-2
                  rounded-xl
                  border border-slate-700
                  bg-white/[0.02]
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  sm:px-6 sm:py-3.5 sm:text-base
                "
              >
                Download Resume
                <FiDownload />
              </motion.a>
            </motion.div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/BoRaT-7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-slate-800
                  bg-slate-900/50
                  text-lg text-slate-400
                  transition-all duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  sm:h-11 sm:w-11 sm:text-xl
                "
              >
                <FaGithub />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/abid-borat-030469216"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.9 }}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-slate-800
                  bg-slate-900/50
                  text-lg text-slate-400
                  transition-all duration-300
                  hover:border-cyan-400
                  hover:text-cyan-400
                  sm:h-11 sm:w-11 sm:text-xl
                "
              >
                <FaLinkedin />
              </motion.a>

              <div className="hidden h-px w-10 bg-slate-800 sm:block sm:w-16" />

              <span className="text-xs text-slate-500 sm:text-sm">
                Available for opportunities
              </span>
            </motion.div>

            {/* =================================================
                TECH STACK
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.2,
                duration: 0.5,
              }}
              className="mt-9 sm:mt-10"
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 sm:text-xs sm:tracking-widest">
                Tech I work with
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.25 + index * 0.08,
                        duration: 0.3,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.15,
                      }}
                      title={tech.name}
                      className={`
                        cursor-pointer
                        text-xl text-slate-600
                        transition-colors duration-300
                        sm:text-2xl
                        ${tech.color}
                      `}
                    >
                      <Icon />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE / 3D AREA
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              order-1
              flex justify-center
              lg:order-2
              lg:justify-end
            "
          >
            <div className="relative">

              {/* Main Glow */}
              <motion.div
                animate={{
                  scale: [0.9, 1.05, 0.9],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-0
                  rounded-[2rem]
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              {/* 3D Outer Ring */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute -inset-4
                  rounded-[2.2rem]
                  border border-cyan-400/10
                  border-dashed
                "
              />

              {/* Secondary Ring */}
              <div
                className="
                  absolute -inset-2
                  rounded-[2rem]
                  border border-white/5
                "
              />

              {/* =================================================
                  IMAGE CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [0, 0.4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 3,
                  rotateX: -2,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-slate-700/80
                  bg-slate-900
                  p-2
                  shadow-2xl
                  shadow-black/50
                  [transform-style:preserve-3d]
                  transition-transform duration-500
                "
              >
                <img
                  src="/images/profile.jpeg"
                  alt="Bocktear Abid Borat"
                  className="
                    h-[380px]
                    w-[290px]
                    object-cover
                    object-top
                    sm:h-[470px]
                    sm:w-[360px]
                    md:h-[530px]
                    md:w-[410px]
                    lg:h-[550px]
                    lg:w-[420px]
                    xl:h-[580px]
                    xl:w-[440px]
                  "
                />

                {/* Image Gradient */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-x-2 bottom-2
                    h-36
                    rounded-b-[1.7rem]
                    bg-gradient-to-t
                    from-slate-950/90
                    via-slate-950/30
                    to-transparent
                  "
                />

                {/* Image shine */}
                <motion.div
                  animate={{
                    x: ["-120%", "120%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute inset-y-0
                    w-1/3
                    -skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />
              </motion.div>

              {/* =================================================
                  REACT FLOATING CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  -bottom-5
                  -left-3
                  rounded-xl
                  border border-slate-700
                  bg-slate-900/95
                  px-3 py-2.5
                  shadow-xl
                  backdrop-blur-xl
                  sm:-left-8
                  sm:px-4 sm:py-3
                "
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 sm:h-9 sm:w-9">
                    <FaReact className="text-lg text-cyan-400 sm:text-xl" />
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Specializing in
                    </p>

                    <p className="text-xs font-semibold text-white sm:text-sm">
                      React Development
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  EXPERIENCE FLOATING CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotateZ: [0, -1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  right-0
                  top-6
                  rounded-xl
                  border border-slate-700
                  bg-slate-900/95
                  px-3 py-2.5
                  shadow-xl
                  backdrop-blur-xl
                  sm:-right-8
                  sm:px-4 sm:py-3
                "
              >
                <p className="text-[10px] text-slate-500 sm:text-xs">
                  Experience
                </p>

                <p className="text-base font-bold text-cyan-400 sm:text-lg">
                  Frontend
                </p>

                <p className="text-[10px] text-slate-500 sm:text-xs">
                  Developer
                </p>
              </motion.div>

              {/* Small 3D floating dot */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-2
                  bottom-20
                  h-3 w-3
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.8)]
                  sm:-right-5
                "
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-600
          transition-colors
          hover:text-cyan-400
          md:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <FiArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;
