import { useState } from "react";
import { FaCheckCircle, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success popup
    setShowPopup(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-10 text-white"
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

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea or want to work together?
            Feel free to contact me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="space-y-6">

            {/* Email */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                Email
              </h3>

              <a
                href="mailto:borat-15-6006@diu.edu.bd"
                className="break-all text-slate-300 transition hover:text-cyan-400"
              >
                borat-15-6006@diu.edu.bd
              </a>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">
                Location
              </h3>

              <p className="text-slate-300">
                Uttara, Dhaka, Bangladesh
              </p>
            </div>

            {/* LinkedIn */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-3 flex items-center gap-3 text-xl font-semibold text-cyan-400">
                <FaLinkedin size={22} />
                LinkedIn
              </h3>

              <a
                href="https://linkedin.com/in/abid-borat-030469216"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-slate-300 transition hover:text-cyan-400"
              >
                linkedin.com/in/abid-borat-030469216
              </a>
            </div>

            {/* GitHub */}
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="mb-3 flex items-center gap-3 text-xl font-semibold text-cyan-400">
                <FaGithub size={22} />
                GitHub
              </h3>

              <a
                href="https://github.com/BoRaT-7"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-slate-300 transition hover:text-cyan-400"
              >
                github.com/BoRaT-7
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 md:p-8"
          >

            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />

            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            className="relative w-full max-w-md animate-[popupIn_0.3s_ease-out] rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center shadow-2xl shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              aria-label="Close success popup"
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <FaTimes size={18} />
            </button>

            {/* Success Icon */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
              <FaCheckCircle
                size={48}
                className="text-emerald-400"
              />
            </div>

            {/* Popup Message */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-400">
              Success
            </p>

            <h3
              id="success-title"
              className="mb-3 text-2xl font-bold text-white md:text-3xl"
            >
              Thank You!
            </h3>

            <p className="mb-7 leading-7 text-slate-400">
              Your message has been submitted successfully.
              Thank you for reaching out! I'll get back to you
              as soon as possible.
            </p>

            {/* Close Popup */}
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Continue
            </button>

          </div>
        </div>
      )}

      {/* Popup Animation */}
      <style>{`
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;