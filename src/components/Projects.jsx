import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaGithub } from "react-icons/fa";

// You can add or modify your projects here
const projects = [
  {
    title: "AWS Data Lakehouse for Real-Time Analytics",
    skills: "AWS S3, Glue, Lambda, Athena, QuickSight, SQL",
    description:
      "Designed and implemented a scalable ETL pipeline in AWS to automate the processing and analysis of YouTube trending data. Used AWS Glue for data cataloging and transformation, optimized query performance with Athena, and delivered interactive QuickSight dashboards for real-time analytics and business insights.",
    github: "https://github.com/Sushmareddy358/aws-capstone",
  },
  {
    title: "Truck Fleet Risk Analysis & Visualization",
    skills: "Hadoop, Spark, Impala, Hive, Tableau, JDBC",
    description:
      "Analyzed 7+ real-world fleet datasets using big data tools to identify high-risk drivers, vehicle violation hotspots, and insurance risks for AZ National Trucking. Built and automated 15+ interactive Tableau dashboards connected live to a Hadoop cluster via JDBC, uncovering key safety patterns and enabling data-driven decisions to improve fleet safety.",
    github: "https://github.com/Sushmareddy358/Bigdata_Analysis",
  },
  {
    title: "COVID-19 Analytics & Insights",
    skills: "Tableau, SQL, Python, Data Cleaning, EDA, Data Visualization, Public Health Analytics",
    description:
      "Analyzed county-level CDC data to identify geographic, demographic, and socioeconomic factors influencing COVID-19 vaccine hesitancy across the US. Built automated data cleaning workflows in Python and created interactive Tableau dashboards to visualize trends and support targeted public health recommendations.",
    github: "https://github.com/Sushmareddy358/COVID-19-Vaccine-Hesitancy-Analysis",
  },
  {
    title: "Socioeconomic Profiling through Census Data Analysis",
    skills: "R, tidyverse, caret, rpart, neuralnet, ggplot2",
    description:
      "Built Decision Tree, Logistic Regression, and Neural Network models in R to predict income levels (>50K or ≤50K) using the UCI Adult Census dataset, achieving ~81% accuracy. Delivered interpretable insights to inform policy and guide resource allocation.",
    github: "https://github.com/Sushmareddy358/Socioeconomic_Profiling_Census_Data",
  },
  {
    title: "Causal Effects of Education & Occupation on Income",
    skills: "R, Econometrics (OLS, 2SLS, IV Regression), Hausman Test, Data Visualization, Inequality Analysis",
    description:
      "Applied advanced econometric techniques in R—including OLS, 2SLS, and instrumental variable regression—to estimate the causal impact of education and occupation on income. Addressed endogeneity using settlement size as an instrument, and conducted statistical testing and subgroup analysis to generate robust, policy-relevant insights on income inequality.",
    github: "https://github.com/Sushmareddy358/Causal-Effects-of-Education-Occupation-on-Income",
  },
  {
    title: "Courier Delivery Service – Food Order & Delivery Optimization",
    skills: "SQL (MySQL), Tableau, Data Modeling, BI",
    description:
      "Designed a normalized database for a courier delivery service, developed advanced SQL queries to track key operational KPIs, and built interactive Tableau dashboards to optimize delivery times, improve courier allocation, and enhance customer experience.",
    github: "https://github.com/Sushmareddy358/Courier-Delivery-Optimization",
  },
];

// Skills as badges
const SkillBadges = ({ skills }) => (
  <div className="flex flex-wrap gap-2 mb-1">
    {skills.split(",").map((skill) => (
      <span
        key={skill.trim()}
        className="bg-green-100 text-[#22713e] px-3 py-0.5 rounded-full text-xs font-medium border border-green-200"
      >
        {skill.trim()}
      </span>
    ))}
  </div>
);

const ProjectCard = ({ title, skills, description, github }) => (
  <motion.div
    className="rounded-3xl bg-gradient-to-br from-[#f8fbf7] to-[#e5efdc] border border-green-200 shadow-md hover:shadow-2xl transition-all px-8 py-7 flex flex-col gap-3 min-w-[320px] max-w-[350px] md:min-w-[360px] md:max-w-[400px] h-full hover:-translate-y-2 hover:scale-[1.025]"
    whileHover={{ boxShadow: "0 12px 48px 0 rgba(50,150,60,0.15)" }}
    transition={{ type: "spring", stiffness: 180, damping: 16 }}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="flex items-center gap-3 mb-2">
      <FaProjectDiagram className="text-3xl text-[#6b7754]" aria-hidden="true" />
      <h3 className="text-2xl font-bold tracking-tight text-green-900">{title}</h3>
    </div>
    <SkillBadges skills={skills} />
    <div className="text-base text-green-900/90">{description}</div>
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title} on GitHub`}
        className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 bg-[#e0e0c0]/80 border border-green-300 rounded-xl font-semibold text-[#22713e] shadow hover:bg-green-100 hover:text-green-900 transition-all duration-200 hover:shadow-green-200 focus:outline-none focus:ring-2 focus:ring-green-200"
      >
        <FaGithub className="text-lg" aria-hidden="true" />
        View on GitHub
      </a>
    )}
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="w-full px-4 py-3 bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-extrabold text-[#22713e] mb-8 text-center tracking-tight drop-shadow">
          Academic Projects
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
          {projects.map((proj) => (
            <div key={proj.title} className="snap-center flex-shrink-0">
              <ProjectCard {...proj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
