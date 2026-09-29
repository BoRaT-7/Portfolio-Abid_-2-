
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5"
    >
      <nav
        className="
          mx-auto max-w-7xl
          rounded-2xl
          border border-white/10
          bg-slate-950/75
          backdrop-blur-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">

          {/* ================= LOGO ================= */}
          <motion.a
            href="#home"
            whileHover={{
              scale: 1.05,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            className="
              group relative
              text-2xl font-bold tracking-wide
              [transform-style:preserve-3d]
            "
          >
            <span className="text-white">Abid</span>

            <motion.span
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-0.5 inline-block text-cyan-400"
            >
              .
            </motion.span>

            {/* Logo glow */}
            <span
              className="
                absolute -bottom-1 left-0
                h-[2px] w-0
                bg-cyan-400
                shadow-[0_0_12px_rgba(34,211,238,0.9)]
                transition-all duration-300
                group-hover:w-full
              "
            />
          </motion.a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-7 lg:flex">

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.08,
                }}
                whileHover={{
                  y: -2,
                }}
                className="
                  group relative
                  text-sm font-medium
                  text-slate-300
                  transition-colors duration-300
                  hover:text-cyan-400
                "
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className="
                    absolute -bottom-2 left-0
                    h-[2px] w-0
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_8px_rgba(34,211,238,0.8)]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}

            {/* Let's Talk Button */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px rgba(34,211,238,0.25)",
              }}
              whileTap={{ scale: 0.95 }}
              className="
                relative overflow-hidden
                rounded-xl
                border border-cyan-300/30
                bg-cyan-400
                px-5 py-2.5
                font-semibold
                text-slate-950
                shadow-[0_5px_20px_rgba(34,211,238,0.15)]
                transition-colors duration-300
                hover:bg-cyan-300
              "
            >
              {/* Shine effect */}
              <motion.span
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  absolute inset-y-0
                  w-1/3
                  -skew-x-12
                  bg-white/30
                "
              />

              <span className="relative z-10">Let's Talk</span>
            </motion.a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-lg
              border border-white/10
              bg-white/5
              p-2
              text-2xl
              text-slate-200
              transition
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-400
              lg:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-white/10 px-4 py-5 sm:px-6">

                <div className="flex flex-col gap-2">

                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={handleNavClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        x: 6,
                        color: "#22d3ee",
                      }}
                      className="
                        rounded-lg
                        px-3 py-2.5
                        text-sm font-medium
                        text-slate-300
                        transition-colors
                      "
                    >
                      {link.name}
                    </motion.a>
                  ))}

                  {/* Mobile Let's Talk */}
                  <motion.a
                    href="#contact"
                    onClick={handleNavClick}
                    whileTap={{ scale: 0.97 }}
                    className="
                      mt-2
                      w-full
                      rounded-xl
                      bg-cyan-400
                      px-5 py-3
                      text-center
                      font-semibold
                      text-slate-950
                      shadow-[0_5px_20px_rgba(34,211,238,0.15)]
                      transition-colors
                      hover:bg-cyan-300
                    "
                  >
                    Let's Talk
                  </motion.a>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Subtle ambient glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-3 -z-10
          h-16 w-1/2
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />
    </motion.header>
  );
};

export default Navbar;
