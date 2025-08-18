import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Works in dev and on GitHub Pages (/portfolio-live/)
const RESUME_PATH = `${import.meta.env.BASE_URL}docs/resume.pdf`;

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="mb-4">
          Feel free to reach out at{" "}
          <a
            href="mailto:sushmavootla.1999@gmail.com"
            className="text-blue-400 underline hover:text-blue-300"
          >
            sushmavootla.1999@gmail.com
          </a>
        </p>

        {/* Resume Download */}
        <a
          href={RESUME_PATH}
          download="Sushma-Resume.pdf"
          className="inline-block mb-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Download Resume
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com/in/sushma-reddy-vutla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sushmareddy358"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sushmavootla.1999@gmail.com"
            className="hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sushma Reddy. All rights reserved.
        </p>
      </div>
    </section>
  );
}
