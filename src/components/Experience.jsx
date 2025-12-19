import React from "react";

// IMPORT ALL LOGOS FROM src/assets (note: .PNG is uppercase to match your files)
import speshLogo     from "../assets/spesh-talent-logo.png";
import cognizantLogo from "../assets/cognizant-logo.png";
import hrhnextLogo   from "../assets/hrhnext-logo.png";
//import pateamLogo    from "../assets/pateam-logo.png";

const experiences = [
  {
    company: "Spesh Talent",
    role: "Software Engineer Intern",
    logo: speshLogo, // ✅ use imported image
    date: "Aug 2024 - Dec 2024",
    points: [
      "Contributed to developing and enhancing web application features using ReactJS, Java, and modern frontend best practices",
      "Supported REST API development and integration using Spring Boot, ensuring reliable communication between application modules",
      "Assisted in writing and optimizing SQL queries, gaining hands-on experience with database design, performance tuning, and data handling",
      "Participated in debugging, defect resolution, and UAT support, helping improve application stability and user experience",
      "Actively engaged in Agile Scrum ceremonies including daily stand-ups, sprint planning, and reviews, contributing to collaborative delivery",
      "Worked closely with senior engineers, gaining practical exposure to CI/CD pipelines (Git, Jenkins, Maven, Docker) and industry development standards"
    ],
  },
  {
    company: "Cognizant",
    role: "Software Engineer",
    logo: cognizantLogo,
    date: "Mar 2021 – Jun 2023",
    points: [
       "Developed and maintained scalable web applications using Java, Spring Boot, REST APIs, and ReactJS",
       "Designed, consumed, and integrated APIs with enterprise backend systems",
       "Worked with SQL Server to write queries, joins, and stored procedures for application functionality",
       "Supported defect resolution, production support, and ongoing maintenance activities",
       "Collaborated with QA, Business Analysts, and cross-functional teams in Agile Scrum environment",
       "Contributed to deployments across Dev, QA, UAT, and Production environments using CI/CD tools"
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center px-2 md:px-10 py-6 bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0] min-h-screen"
    >
      <h2 className="text-3xl font-bold text-green-900 mb-8 tracking-tight text-center">Experience</h2>
      <div className="relative flex flex-col max-w-2xl w-full">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 to-green-900 opacity-30 rounded-lg" />
        <ul className="space-y-16">
          {experiences.map((exp, idx) => (
            <li key={exp.company} className="relative flex items-start group">
              {/* Logo circle */}
              <span className="absolute left-0 top-0 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 via-green-200 to-green-700 p-1 shadow-xl border-2 border-transparent transition-all group-hover:scale-105 group-hover:shadow-green-300/70">
                <span className="flex items-center justify-center w-full h-full rounded-full bg-white shadow-lg">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="w-20 h-20 object-contain rounded-full"
                    loading="lazy"
                  />
                </span>
              </span>

              {/* Card */}
              <div
                className={`ml-28 bg-white/90 border border-green-100 p-6 rounded-xl shadow-lg transition-all group-hover:scale-[1.03] border-l-4 ${
                  idx % 2 === 0 ? "border-green-700" : "border-green-400"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center mb-1">
                  <h3 className="text-xl font-semibold text-green-900">{exp.role}</h3>
                  <span className="ml-2 text-green-700 font-medium">– {exp.company}</span>
                </div>
                <div className="text-sm text-green-900/80 mb-2">{exp.date}</div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-[#31543a] text-[15px]">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
