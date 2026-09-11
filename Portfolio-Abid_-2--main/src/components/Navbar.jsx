import { useState } from "react";
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
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold tracking-wide"
          >
            <span className="text-white">Abid</span>
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-slate-200 transition hover:text-cyan-400 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-800 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-slate-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={handleNavClick}
                className="w-fit rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;