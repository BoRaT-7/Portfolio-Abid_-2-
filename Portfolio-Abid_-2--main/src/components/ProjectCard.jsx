
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaPlay,
} from "react-icons/fa";

function ProjectCard({ project, featured = false }) {
  if (!project) return null;

  // =========================
  // Animation Variants
  // =========================

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.04,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-black/20 backdrop-blur-sm ${
        featured ? "lg:flex" : ""
      }`}
    >
      {/* =========================
          Animated Border Glow
      ========================== */}

      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(34,211,238,0.12), transparent 80%)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =========================
          MEDIA
      ========================== */}

      <div
        className={`relative z-10 overflow-hidden bg-black ${
          featured ? "lg:w-1/2" : "w-full"
        }`}
      >
        <motion.div
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
          className="relative h-full w-full"
        >
          {project.video ? (
            <div className="relative w-full">
              <video
                src={project.video}
                poster={project.image}
                controls
                muted
                playsInline
                preload="metadata"
                className="block h-auto min-h-[240px] w-full object-cover sm:min-h-[300px] lg:min-h-[400px]"
                onError={(event) => {
                  console.error(
                    "Video failed to load:",
                    project.video,
                    event.currentTarget.error
                  );
                }}
              />

              {/* Video Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

              {/* Video Badge */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-cyan-400 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                >
                  <FaPlay className="text-[9px]" />
                </motion.span>

                Dashboard Preview
              </motion.div>
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="block min-h-[240px] w-full object-cover sm:min-h-[300px] lg:min-h-[400px]"
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          )}
        </motion.div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <motion.div
        variants={contentVariants}
        className={`relative z-10 flex flex-1 flex-col p-6 sm:p-7 lg:p-8 ${
          featured ? "lg:w-1/2" : ""
        }`}
      >
        {/* Category */}
        <motion.p
          variants={itemVariants}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400"
        >
          {project.category}
        </motion.p>

        {/* Title */}
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          <span className="transition-colors duration-300 group-hover:text-cyan-50">
            {project.title}
          </span>
        </motion.h3>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm leading-7 text-slate-400 sm:text-base"
        >
          {project.description}
        </motion.p>

        {/* =========================
            Technologies
        ========================== */}

        {project.technologies?.length > 0 && (
          <motion.div variants={itemVariants} className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-white">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.25 + index * 0.04,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="cursor-default rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* =========================
            Features
        ========================== */}

        {project.features?.length > 0 && (
          <motion.div variants={itemVariants} className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-white">
              Key Features
            </h4>

            <ul className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.35 + index * 0.05,
                  }}
                  whileHover={{
                    x: 4,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="group/feature flex cursor-default items-start gap-2 text-sm text-slate-400"
                >
                  <motion.span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    whileHover={{
                      scale: 1.5,
                    }}
                  />

                  <span className="transition-colors duration-300 group-hover/feature:text-slate-200">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* =========================
            Buttons
        ========================== */}

        <motion.div
          variants={itemVariants}
          className="mt-7 flex flex-wrap gap-3"
        >
          {/* GitHub */}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group/btn inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <motion.span
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <FaGithub />
              </motion.span>

              GitHub
            </motion.a>
          )}

          {/* Live Project */}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group/btn inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:bg-cyan-300 hover:shadow-cyan-500/20"
            >
              <FaExternalLinkAlt className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />

              Live Project
            </motion.a>
          )}

          {/* Google Play */}
          {project.googlePlay && (
            <motion.a
              href={project.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group/btn inline-flex items-center gap-2 rounded-lg border border-green-400/30 px-4 py-2.5 text-sm font-semibold text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-slate-950 hover:shadow-lg hover:shadow-green-500/10"
            >
              <FaGooglePlay className="transition-transform duration-300 group-hover/btn:scale-110" />

              Google Play
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default ProjectCard;

