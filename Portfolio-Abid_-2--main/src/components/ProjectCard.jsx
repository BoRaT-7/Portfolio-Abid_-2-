import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-950/20 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div
        className={`relative overflow-hidden bg-slate-800 ${
          featured ? "h-72 md:h-96" : "h-60"
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Featured Badge */}
        {featured && (
          <div className="absolute left-5 top-5 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 backdrop-blur-md">
            Featured Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">

        {/* Category */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="mt-6 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {feature}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3 border-t border-slate-800 pt-6">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Live Project
              <FiExternalLink />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
              <FiGithub />
            </a>
          )}

          {project.googlePlay && (
            <a
              href={project.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Google Play
              <FiExternalLink />
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;