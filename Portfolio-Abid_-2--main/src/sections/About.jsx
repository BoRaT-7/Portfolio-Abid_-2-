
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
      className="
        relative overflow-hidden
        bg-slate-950
        px-5 py-20
        sm:px-6 sm:py-24
        md:px-10
        lg:px-12 lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -right-40 top-20
          h-96 w-96
          rounded-full
          bg-cyan-500/5
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute -left-40 bottom-0
          h-80 w-80
          rounded-full
          bg-blue-500/5
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.25em",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              mb-3
              text-xs font-semibold uppercase
              text-cyan-400
              sm:text-sm
            "
          >
            About Me
          </motion.p>

          <h2
            className="
              text-3xl font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Building with purpose,
            <span className="block text-cyan-400 sm:inline">
              {" "}creating with code.
            </span>
          </h2>

          {/* Animated line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              mx-auto mt-5
              h-1 rounded-full
              bg-cyan-400
              shadow-[0_0_15px_rgba(34,211,238,0.45)]
            "
          />
        </motion.div>

        {/* =================================================
            MAIN ABOUT GRID
        ================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =================================================
              LEFT — TEXT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Main paragraph */}
            <p
              className="
                text-base
                leading-7
                text-slate-400
                sm:text-lg sm:leading-8
              "
            >
              I'm a{" "}
              <span className="font-semibold text-white">
                MERN Stack Developer
              </span>{" "}
              and Computer Science & Engineering graduate with hands-on
              experience building modern web applications and responsive
              admin dashboards.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              My primary focus is frontend and full-stack web development.
              I work with React.js, JavaScript, Node.js, Express.js,
              MongoDB, REST APIs, Firebase and JWT authentication.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              I enjoy turning ideas into functional, user-friendly
              applications with clean architecture, reusable components
              and responsive interfaces.
            </p>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-800 pt-7 sm:mt-9 sm:gap-6 sm:pt-8">

              {/* Projects */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="
                    text-2xl font-bold
                    text-cyan-400
                    sm:text-3xl
                  "
                >
                  20+
                </motion.h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Projects
                </p>
              </motion.div>

              {/* MERN */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="
                    text-2xl font-bold
                    text-cyan-400
                    sm:text-3xl
                  "
                >
                  MERN
                </motion.h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Stack Focus
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="
                    text-2xl font-bold
                    text-cyan-400
                    sm:text-3xl
                  "
                >
                  2025
                </motion.h3>

                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  BSc Completed
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* =================================================
              RIGHT — HIGHLIGHTS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.015,
                }}
                className="
                  group relative
                  overflow-hidden
                  rounded-2xl
                  border border-slate-800
                  bg-slate-900/50
                  p-5
                  shadow-lg shadow-black/10
                  backdrop-blur-sm
                  transition-colors duration-300
                  hover:border-cyan-400/30
                  hover:bg-slate-900/80
                  hover:shadow-cyan-500/5
                  [transform-style:preserve-3d]
                  sm:p-6
                "
              >
                {/* Card glow */}
                <div
                  className="
                    pointer-events-none
                    absolute -right-10 -top-10
                    h-24 w-24
                    rounded-full
                    bg-cyan-400/5
                    blur-2xl
                    transition-opacity
                    duration-300
                    group-hover:bg-cyan-400/10
                  "
                />

                {/* Top accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    absolute left-0 top-0
                    h-[2px]
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.6)]
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: -5,
                    scale: 1.1,
                    y: -3,
                  }}
                  className="
                    relative
                    mb-5
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    border border-cyan-400/10
                    bg-cyan-400/10
                    text-xl
                    text-cyan-400
                    shadow-inner
                    transition-colors
                    duration-300
                    group-hover:border-cyan-400/30
                    group-hover:bg-cyan-400
                    group-hover:text-slate-950
                    sm:h-12 sm:w-12 sm:text-2xl
                  "
                >
                  {item.icon}
                </motion.div>

                {/* Title */}
                <h3 className="relative text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="relative mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                  {item.text}
                </p>

                {/* Bottom arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="
                    mt-4
                    h-px w-8
                    bg-cyan-400/40
                    transition-all
                    group-hover:w-12
                  "
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
