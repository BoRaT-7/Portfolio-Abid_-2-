const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Contact Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea or want to work together?
            Feel free to contact me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                Email
              </h3>

              <a
                href="mailto:your-email@gmail.com"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                your-email@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                Location
              </h3>

              <p className="text-slate-300">
                Uttara, Dhaka, Bangladesh
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                GitHub
              </h3>

              <a
                href="https://github.com/BoRaT-7"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 transition hover:text-cyan-400"
              >
                github.com/BoRaT-7
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form className="rounded-2xl border border-slate-700 bg-slate-950 p-6 md:p-8">

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;