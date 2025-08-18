import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  { name: "Agile Fundamentals: Scrum & Kanban", issuer: "Udemy" },
  { name: "AWS Essentials", issuer: "Udemy" },
  { name: "DevOps Essentials", issuer: "Udemy" },
  { name: "Software Engineering 101: Plan & Execute Better Software", issuer: "Udemy" },
  { name: "SQL for Beginners: MySQL & Database Design", issuer: "Udemy" },
  { name: "Responsive Web Design (HTML5, CSS3)", issuer: "Udemy" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen py-20 bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0] px-6 text-[#2f3e2f]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-[#22713e]">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {certifications.map((cert, idx) => (
            <motion.div
              key={`${cert.name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              className="bg-[#f6f7ec]/90 border border-green-200 rounded-2xl shadow-xl p-6 flex items-start gap-3"
            >
              <FaCertificate className="text-[#6b7754] text-2xl mt-1" />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#22713e]">{cert.name}</h3>
                <p className="text-sm text-[#6b7754]">Issued by: {cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
