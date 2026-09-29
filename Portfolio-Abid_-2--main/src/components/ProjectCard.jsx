import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaPlay,
} from "react-icons/fa";

function ProjectCard({ project, featured = false }) {
  // Safety check
  if (!project) {
    return null;
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-black/20 ${
        featured ? "lg:flex" : ""
      }`}
    >
      {/* ================= MEDIA ================= */}
      <div
        className={`relative overflow-hidden bg-black ${
          featured ? "lg:w-1/2" : "w-full"
        }`}
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

            {/* Video Badge */}
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-cyan-400 backdrop-blur-md">
              <FaPlay className="text-[9px]" />
              Dashboard Preview
            </div>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="block min-h-[240px] w-full object-cover transition duration-500 group-hover:scale-105 sm:min-h-[300px]"
          />
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 lg:p-8 ${
          featured ? "lg:w-1/2" : ""
        }`}
      >
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-white">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-white">
            Key Features
          </h4>

          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features?.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaExternalLinkAlt />
              Live Project
            </a>
          )}

          {project.googlePlay && (
            <a
              href={project.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-green-400/30 px-4 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-400 hover:text-slate-950"
            >
              <FaGooglePlay />
              Google Play
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;