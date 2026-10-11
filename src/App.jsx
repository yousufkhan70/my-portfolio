
import React, { useState } from "react";
import { img1 } from "./assets/Images";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const cardStyle = darkMode
    ? "rounded-2xl bg-gray-800 p-7"
    : "rounded-2xl bg-gray-100 p-7";

  const inputStyle = `w-full rounded-xl border px-4 py-3.5 outline-none transition focus:ring-2 focus:ring-purple-500 ${
    darkMode
      ? "border-gray-700 bg-gray-900 text-white placeholder:text-gray-500"
      : "border-gray-200 bg-white text-gray-900 placeholder:text-gray-400"
  }`;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <nav className="flex flex-wrap items-center justify-between gap-5 p-5 shadow-md">
        <a href="#home" className="text-2xl font-bold">
          YK Portfolio<span className="text-purple-500">.</span>
        </a>

        <div className="flex flex-wrap gap-5 text-sm sm:text-base">
          <a href="#about" className="transition hover:text-blue-500">
            About
          </a>
          <a href="#portfolio" className="transition hover:text-blue-500">
            Portfolio
          </a>
          <a href="#faq" className="transition hover:text-blue-500">
            FAQ
          </a>
          <a href="#pricing" className="transition hover:text-blue-500">
            Pricing
          </a>
          <a href="#contact" className="transition hover:text-blue-500">
            Contact
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <button
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed={darkMode}
          onClick={() => setDarkMode((prev) => !prev)}
          className={`flex h-8 w-16 items-center rounded-full p-1 transition ${
            darkMode ? "bg-blue-500" : "bg-gray-400"
          }`}
        >
          <span
            className={`h-6 w-6 rounded-full bg-white shadow transition-transform ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[650px] flex-col items-center overflow-hidden px-5 pt-20 md:pt-28"
      >
        <span className="absolute left-2 top-32 rotate-[-10deg] text-xs md:left-16 md:top-44 md:text-sm">
          Web Developer
        </span>

        <span className="absolute right-2 top-16 rotate-[8deg] text-xs md:right-20 md:top-24 md:text-sm">
          Frontend Developer
        </span>

        <h1
          className={`pointer-events-none absolute left-1/2 top-36 z-0 -translate-x-1/2 whitespace-nowrap text-[20vw] font-bold leading-none tracking-[-0.08em] md:top-40 md:text-[17vw] ${
            darkMode ? "text-white/10" : "text-black/10"
          }`}
        >
          Developer
        </h1>

        {/* Profile Image */}
        <div className="relative z-10 mt-10 flex h-[350px] w-[280px] items-end justify-center md:mt-0 md:h-[440px] md:w-[300px]">
          <img
            src={img1}
            alt="Yousuf's profile"
            className="h-full w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Introduction */}
        <div className="relative z-20 -mt-1 w-full pb-16">
          <p className="mb-2 text-3xl text-gray-500 sm:text-5xl">
            Hey, I'm Yousuf
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-5xl md:text-7xl">
            &amp; Frontend Developer
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
            I build modern, responsive websites with React, Tailwind CSS,
            and JavaScript. I turn creative ideas into clean digital
            experiences.
          </p>

          <a
            href="#portfolio"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#20202b] px-6 py-3 text-sm text-white transition hover:bg-indigo-600"
          >
            Explore My Work <span>↗</span>
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className={`border-t px-5 py-16 ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <p className="text-sm text-gray-500">A part of my work</p>

        <h2 className="mt-3 text-4xl font-bold md:text-6xl">
          My Portfolio
        </h2>

        <h3 className="mt-8 text-2xl font-bold sm:ml-10 sm:text-3xl">
          I Build Following Things
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className={cardStyle}>
            <span className="text-sm text-indigo-500">01 / React</span>
            <h3 className="mt-4 text-xl font-bold">Web Applications</h3>
            <p className="mt-2 text-sm text-gray-500">
              Modern applications built with React.
            </p>
          </div>

          <div className={cardStyle}>
            <span className="text-sm text-indigo-500">02 / UI Design</span>
            <h3 className="mt-4 text-xl font-bold">Landing Pages</h3>
            <p className="mt-2 text-sm text-gray-500">
              Attractive and responsive landing pages.
            </p>
          </div>

          <div className={cardStyle}>
            <span className="text-sm text-indigo-500">03 / Frontend</span>
            <h3 className="mt-4 text-xl font-bold">Responsive Websites</h3>
            <p className="mt-2 text-sm text-gray-500">
              Websites that work across screen sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-purple-500">
            Simple Plans
          </p>

          <h2 className="mt-3 text-center text-4xl font-bold md:text-6xl">
            Pricing
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-gray-500">
            Choose the plan that works best for your needs.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className={`${cardStyle} flex flex-col`}>
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="mt-2 text-gray-500">For beginners</p>

              <p className="mt-6 text-4xl font-bold">
                $49
                <span className="text-base font-normal text-gray-500">
                  /project
                </span>
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                <li>✓ 1 Website</li>
                <li>✓ Responsive Design</li>
                <li>✓ Basic Support</li>
                <li>✓ Modern UI</li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>

            {/* Pro Plan */}
            <div className="relative flex flex-col rounded-2xl border-2 border-purple-500 bg-gradient-to-b from-purple-600 to-blue-700 p-7 text-white shadow-xl shadow-purple-500/10">
              <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-bold text-purple-700">
                POPULAR
              </span>

              <h3 className="mt-8 text-2xl font-bold">Pro</h3>
              <p className="mt-2 text-purple-100">
                For growing businesses
              </p>

              <p className="mt-6 text-4xl font-bold">
                $59
                <span className="text-base font-normal text-purple-100">
                  /project
                </span>
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                <li>✓ Up to 5 Pages</li>
                <li>✓ Responsive Design</li>
                <li>✓ Priority Support</li>
                <li>✓ Modern Animations</li>
                <li>✓ Advanced UI</li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block rounded-lg bg-white py-3 text-center font-semibold text-purple-700 transition hover:bg-purple-100"
              >
                Get Started
              </a>
            </div>

            {/* Premium Plan */}
            <div className={`${cardStyle} flex flex-col`}>
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="mt-2 text-gray-500">For larger projects</p>

              <p className="mt-6 text-4xl font-bold">
                $100
                <span className="text-base font-normal text-gray-500">
                  /project
                </span>
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                <li>✓ Up to 10 Pages</li>
                <li>✓ Responsive Design</li>
                <li>✓ Advanced Animations</li>
                <li>✓ Custom UI</li>
                <li>✓ Project Support</li>
              </ul>

              <a
                href="#contact"
                className="mt-8 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`relative overflow-hidden px-5 py-20 md:px-12 md:py-24 lg:px-20 ${
          darkMode
            ? "bg-slate-950 text-white"
            : "bg-slate-50 text-slate-900"
        }`}
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="rounded-full border border-purple-400/40 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-500">
              GET IN TOUCH
            </span>

            <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Amazing.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500 sm:text-lg">
              Have a project in mind? Let's work together to create
              something beautiful, meaningful, and unforgettable.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-semibold">
                Let's talk about your project
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-gray-500">
                I'm open to discussing new projects, creative ideas,
                and opportunities to work together.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-500/20 bg-purple-500/10 text-2xl">
                    ✉
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Me</p>
                    <a
                      href="mailto:yourname@example.com"
                      className="mt-1 break-all font-medium transition hover:text-purple-500"
                    >
                      yourname@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-500/20 bg-purple-500/10 text-2xl">
                    📍
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="mt-1 font-medium">Kabul, Afghanistan</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-500/20 bg-purple-500/10 text-2xl">
                    💻
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Availability</p>
                    <p className="mt-1 font-medium text-green-500">
                      Open to new projects
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-sm text-gray-500">Find me on</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-gray-500/20 px-5 py-3 text-sm transition hover:border-purple-500 hover:text-purple-500"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-gray-500/20 px-5 py-3 text-sm transition hover:border-purple-500 hover:text-purple-500"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(data.get("subject"));
                const body = encodeURIComponent(
                  `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
                );

                window.location.href =
                  `mailto:yourname@example.com?subject=${subject}&body=${body}`;
              }}
              className={`rounded-3xl border p-6 shadow-xl backdrop-blur-xl sm:p-8 ${
                darkMode
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-gray-200 bg-white shadow-gray-200/50"
              }`}
            >
              <h3 className="mb-7 text-2xl font-semibold">
                Send Me a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project Collaboration"
                    required
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={`${inputStyle} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Send Message
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Your email app will open to send your message.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t px-6 py-8 md:px-12 lg:px-20 ${
          darkMode
            ? "border-white/10 bg-slate-950 text-white"
            : "border-gray-200 bg-white text-slate-900"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="text-2xl font-bold">
            YK<span className="text-purple-500">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <a href="#home" className="transition hover:text-purple-500">
              Home
            </a>
            <a href="#about" className="transition hover:text-purple-500">
              About
            </a>
            <a href="#portfolio" className="transition hover:text-purple-500">
              Projects
            </a>
            <a href="#pricing" className="transition hover:text-purple-500">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-purple-500">
              Contact
            </a>
          </nav>

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} YK Portfolio. All rights reserved.
          </p>
        </div>

        
      </footer>
    </div>
  );
}

export default App;


