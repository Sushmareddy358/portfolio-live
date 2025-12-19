import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const RESUME_PATH = `${import.meta.env.BASE_URL}Resume.pdf`;

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

        {/* Resume Download + View */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={RESUME_PATH}
            download="Resume.pdf"
            onClick={(e) => e.stopPropagation()}
            className="bg-green-900 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-800 hover:scale-105 transition-all duration-200 focus:ring-4 focus:ring-green-300 border border-green-900 text-base inline-block"
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>

          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-gray-500 text-base hover:bg-gray-800 transition-all duration-200"
          >
            View Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="https://www.linkedin.com/in/sushma-r126/"
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
          <a href="mailto:sushmavootla.1999@gmail.com" className="hover:text-blue-400">
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
