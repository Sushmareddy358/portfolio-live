import React, { useState, useEffect } from "react";
import profilePic from "../assets/profile.png";

// SVG ICONS
const LinkedInIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.271c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.271h-3v-5.604c0-1.336-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.969v5.694h-3v-10h2.885v1.367h.041c.403-.765 1.388-1.566 2.858-1.566 3.055 0 3.623 2.011 3.623 4.627v5.572z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.338.7-4-1.6-4-1.6-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.1-3.2-.1-.2-.5-1.2.1-2.5 0 0 1-.3 3.2 1.2a10.7 10.7 0 015.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.3.2 2.3.1 2.5.7.8 1.1 1.9 1.1 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.9v2.9c0 .3.2.7.8.6A12 12 0 0012 .3"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 4H4c-1.3 0-2 .8-2 2v12c0 1.2.8 2 2 2h16c1.2 0 2-.8 2-2V6c0-1.2-.8-2-2-2zm0 2v.5l-8 5.4-8-5.4V6h16zm0 12H4V8.1l8 5.4 8-5.4V18z"/>
  </svg>
);

export default function HeaderAbout() {
  // ROTATING ROLES
  const roles = [
    "Engineer - Building Scalable & Reliable Solutions",
    "Analyst - Turning Complex Data into Strategy & Impact",
    "Developer - Solving Problems with Precision & Purpose",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []); // roles length is constant

  // Smooth scroll to ContactFooter
  const handleConnectClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="header" className="bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0] pb-10 min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 pt-8 md:pt-12 gap-8 md:gap-20">
        {/* Profile photo (left) */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={profilePic}
            alt="Portrait of Sushma Reddy Vutla"
            className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg bg-white"
            loading="eager"
          />
        </div>

        {/* Content (right) */}
        <div className="flex flex-col justify-center max-w-2xl w-full mt-6 md:mt-0 items-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-900 mb-1 md:mb-3 text-center w-full">
            Sushma Reddy
            
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#22713e] opacity-80 mb-2 min-h-[30px] transition-all duration-500 text-center w-full">
            {roles[currentRole]}
          </p>

          {/* Buttons (unchanged) */}
          <div className="flex flex-row gap-4 mb-4 w-full justify-center">
            <button
              onClick={handleConnectClick}
              className="bg-green-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-800 hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-green-300 border border-green-900 text-base"
            >
              Connect
            </button>
          <a
  href={`${import.meta.env.BASE_URL}Sushma-Resume.pdf`}
  download="Resume.pdf"
  className="bg-green-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-800 hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-green-300 border border-green-900 text-base"
  aria-label="Download resume PDF"
>
  Resume
</a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl mb-4 justify-center w-full">
            <a
              href="https://www.linkedin.com/in/sushma-r126/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Sushmareddy358"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black hover:scale-110 transition"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:sushmavootla.1999@gmail.com"
              className="hover:text-red-700 hover:scale-110 transition"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="mt-4 flex justify-center w-full px-2">
        <div className="border border-green-200 bg-white/60 backdrop-blur-[1px] px-4 sm:px-8 py-2 rounded-2xl shadow-md max-w-3xl w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-900 mb-2">Hi, I’m Sushma</h2>
          <p className="text-gray-800 mb-2 text-sm sm:text-base">
            A curious problem solver at the intersection of software engineering and data. I focus on building robust
            systems, automating workflows, and transforming complex data into solutions that drive measurable impact.
          </p>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            With hands-on experience in application development, analytics, and cloud engineering, I enjoy working across
            the stack to turn ideas into well-engineered, data-powered products. Whether leading projects or
            collaborating in teams, I bring a blend of technical expertise, creativity, and continuous learning to every
            challenge.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            If you’re looking for someone who connects the dots between code and data while always asking “How can we make this better?”
          </p>
          <p className="text-gray-700 text-sm sm:text-base">- Let's Connect</p>
        </div>
      </div>
    </section>
  );
}
