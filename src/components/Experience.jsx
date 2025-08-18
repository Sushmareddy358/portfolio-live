import React from "react";

// IMPORT ALL LOGOS FROM src/assets (note: .PNG is uppercase to match your files)
import speshLogo     from "../assets/spesh-talent-logo.png";
import cognizantLogo from "../assets/cognizant-logo.png";
import hrhnextLogo   from "../assets/hrhnext-logo.png";
import pateamLogo    from "../assets/pateam-logo.png";

const experiences = [
  {
    company: "Spesh Talent",
    role: "Data Analyst Intern",
    logo: speshLogo, // ✅ use imported image
    date: "Aug 2024 - Dec 2024",
    points: [
      "Collected, cleaned, and integrated large datasets from multiple sources using Python (Pandas, NumPy), SQL and ETL pipelines, improving data accuracy by 15%.",
      "Conducted exploratory data analysis and applied statistical methods using Python (Pandas, Matplotlib, Seaborn, SciPy), generating actionable insights that boosted project efficiency by 10%.",
      "Developed and maintained interactive dashboards and reports with Tableau, reducing reporting time by 30% and facilitating data-driven decision-making.",
      "Automated data workflows and quality monitoring using Python scripting and Excel Macros, increasing process efficiency by 20%.",
      "Collaborated closely with IT consultants and stakeholders via agile workflows (Jira), translating business requirements into data solutions that increased client satisfaction by 20%.",
    ],
  },
  {
    company: "Cognizant",
    role: "Software Engineer",
    logo: cognizantLogo,
    date: "Mar 2021 – Jun 2023",
    points: [
      "Developed, maintained, and optimized Java-based microservices and enterprise applications using Java, Spring Boot, SQL, and REST/SOAP APIs, driving greater system reliability and scalability.",
      "Led application deployments, version upgrades, and patch management across QA, UAT, and production environments, collaborating closely with cross-functional teams and leveraging tools like Git, Maven, ServiceNow, and SoapUI.",
      "Automated routine processes and reporting workflows with SQL and shell scripting, reducing manual effort and improving overall delivery speed and data accuracy.",
      "Enhanced system performance and uptime by tuning SQL queries, refactoring legacy code, managing dependency upgrades, and proactively addressing security and compliance requirements.",
      "Strengthened incident management, root cause analysis, and production support by implementing robust exception handling, centralized logging (SLF4J, Log4j), and detailed Standard Operating Procedures (SOPs).",
      "Collaborated in Agile/Scrum teams to deliver business solutions, support change management, and drive continuous improvement across the full software development lifecycle (SDLC)."
    ],
  },
  {
    company: "HRH Next",
    role: "Data Analyst",
    logo: hrhnextLogo,
    date: "May 2020 – Feb 2021",
    points: [
      "Automated and streamlined reporting by building Power BI and Excel dashboards from SQL-sourced, multi-source data.",
      "Conducted statistical analysis in Python (Pandas, NumPy) to deliver actionable insights and business recommendations.",
      "Improved data accuracy and accessibility through advanced data cleaning, integration, and workflow optimization."
    ],
  },
  {
    company: "PAteam",
    role: "Data Engineer Intern",
    logo: pateamLogo,
    date: "Dec 2019 – Apr 2020",
    points: [
      "Engineered and automated data pipelines using SQL and Python (Pandas), enabling smooth integration and transformation of complex datasets for analytics and reporting.",
      "Elevated data quality standards by developing Python-based validation scripts and troubleshooting discrepancies, ensuring accuracy and reliability in every deliverable.",
      "Optimized data workflows through collaboration with senior engineers, using SQL tuning and performance analysis to accelerate dashboard insights in Power BI and Excel.",
      "Authored clear technical documentation and visual process maps, supporting rapid onboarding and cross-team collaboration for future data and analytics projects."
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
