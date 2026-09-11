const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-white">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        <div>
          <h3 className="text-xl font-bold">
            Abid<span className="text-cyan-400">.</span>
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            MERN Stack Developer
          </p>
        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/BoRaT-7"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/abid-borat-030469216"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="mx-auto mt-6 max-w-6xl border-t border-slate-800 pt-5 text-center">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Abid Borat. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;