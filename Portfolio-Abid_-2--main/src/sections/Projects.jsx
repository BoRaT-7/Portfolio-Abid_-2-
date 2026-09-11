import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "MapMark",
    category: "Production Rental Marketplace",
    image: "/images/mapmark.jpg",
    description:
      "A production rental marketplace admin dashboard built with React.js, Tailwind CSS, and REST APIs for managing rental data and operations.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "REST API",
      "CRUD",
      "File Upload",
    ],
    features: [
      "Admin Dashboard",
      "CRUD Operations",
      "REST API Integration",
      "Dynamic Forms",
    ],
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.rony29.renttechapp",
    live: "https://admin.mapmark.live/",
    featured: true,
  },

  {
    title: "Smart Travel",
    category: "Full-Stack Web Application",
    image: "/images/smart-travel.jpg",
    description:
      "A MERN stack travel management platform with role-based authentication, travel packages, bookings, users, and an admin dashboard.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    features: [
      "Role-Based Authentication",
      "Admin Dashboard",
      "Travel Package Management",
      "Booking System",
    ],
    github: "https://github.com/BoRaT-7/Smart-Travel",
  },

  {
    title: "CarePet",
    category: "Pet Care Management Platform",
    image: "/images/carepet.jpg",
    description:
      "A pet care web application built with the MERN stack featuring pet adoption, services, reviews, authentication, and payment functionality.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    features: [
      "Pet Adoption",
      "Service Requests",
      "Firebase Authentication",
      "MongoDB Integration",
    ],
    github: "https://github.com/BoRaT-7/Carepet",
  },

  {
    title: "ZapShift",
    category: "Parcel Management Platform",
    image: "/images/zapshift.jpg",
    description:
      "A parcel management and delivery tracking application with role-based features, Firebase authentication, and interactive coverage mapping.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Leaflet",
    ],
    features: [
      "Delivery Management",
      "Tracking System",
      "Interactive Map",
      "Role-Based Features",
    ],
    github: "https://github.com/BoRaT-7",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A selection of web applications and projects I have built using
            modern frontend and full-stack technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <div key={project.title} className="mb-10">
              <ProjectCard project={project} featured />
            </div>
          ))}

        {/* Other Projects */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-slate-400">
            Want to see more of my projects?
          </p>

          <a
            href="https://github.com/BoRaT-7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-cyan-400/40 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            View More on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
// 📱 Mobile responsive Navbar
// 📱 Mobile layout ঠিক করা
// ✨ Scroll animation
// 🔵 Active Navbar section highlight
// ⬆️ Scroll-to-top button
// 🎨 Hover effects
// 🧹 Spacing / typography / color final polish
// 📱 320px–768px responsive testing
// 💻 Desktop final polish
// 🚀 Final production-ready portfolio