import React from "react";
import {
  Code,
  Layers,
  Database,
  BarChart2,
  Cloud,
  ListChecks,
  GitBranch,
  Settings,
} from "lucide-react";

const badgeClasses =
  "bg-[#ebf9ed] text-[#22713e] font-semibold px-3 py-1 rounded-full text-sm cursor-pointer shadow-sm hover:bg-green-100 hover:text-green-900 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200";

const skills = [
  {
    category: "Languages",
    icon: <Code className="text-[#22713e]" size={17} />,
    items: [
      { name: "Java (8/11)" },
      { name: "J2EE" },
      { name: "SQL" },
      { name: "JSON" },
      { name: "JDBC" },
      { name: "Servlets" },
    ],
  },

  {
    category: "Frameworks",
    icon: <Layers className="text-[#22713e]" size={17} />,
    items: [
      { name: "Spring Boot" },
      { name: "Spring MVC" },
      { name: "Hibernate" },
      { name: "Spring Core" },
      { name: "Spring Web Services" },
      { name: "REST APIs" },
      { name: "SOAP APIs" },
    ],
  },

  {
    category: "Web Technologies",
    icon: <Settings className="text-[#22713e]" size={17} />,
    items: [
      { name: "ReactJS" },
      { name: "React Hooks" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Bootstrap" },
      { name: "Responsive UI" },
    ],
  },

  {
    category: "Databases",
    icon: <Database className="text-[#22713e]" size={17} />,
    items: [
      { name: "SQL Server" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Oracle" },
    ],
  },

  {
    category: "Cloud",
    icon: <Cloud className="text-[#22713e]" size={17} />,
    items: [
      { name: "AWS (EC2, S3, RDS, IAM)" },
      { name: "CI/CD Integration" },
    ],
  },

  {
    category: "DevOps & Build",
    icon: <GitBranch className="text-[#22713e]" size={17} />,
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bitbucket" },
      { name: "Maven" },
      { name: "Jenkins" },
      { name: "Docker" },
    ],
  },

  {
    category: "Tools & Platforms",
    icon: <Settings className="text-[#22713e]" size={17} />,
    items: [
      { name: "IntelliJ IDEA" },
      { name: "VS Code" },
      { name: "Eclipse" },
      { name: "Postman" },
      { name: "JIRA" },
      { name: "Apache Tomcat" },
      { name: "IBM WebSphere" },
    ],
  },

  {
    category: "Testing & Quality",
    icon: <ListChecks className="text-[#22713e]" size={17} />,
    items: [
      { name: "JUnit" },
      { name: "Postman API Testing" },
      { name: "Debugging" },
      { name: "Performance Troubleshooting" },
    ],
  },

  {
    category: "Development Practices",
    icon: <GitBranch className="text-[#22713e]" size={17} />,
    items: [
      { name: "Agile / Scrum" },
      { name: "TDD" },
      { name: "Unit & Integration Testing" },
      { name: "Monitoring & Logging" },
      { name: "Root Cause Analysis (RCA)" },
      { name: "Code Reviews" },
      { name: "Clean Code" },
    ],
  },

  {
    category: "Analytics & Visualization",
    icon: <BarChart2 className="text-[#22713e]" size={17} />,
    items: [
      { name: "Python" },
      { name: "Tableau" },
      { name: "Hadoop" },
    ],
  },

  {
    category: "Operating Systems",
    icon: <Settings className="text-[#22713e]" size={17} />,
    items: [
      { name: "Windows" },
      { name: "Linux" },
      { name: "UNIX" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-4 px-2 md:px-10 w-full min-h-screen bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0]"
    >
      <div className="flex justify-center w-full mt-0">
        <div className="border border-green-200 bg-white/60 backdrop-blur-[1px] px-6 sm:px-10 py-2 rounded-2xl shadow-md max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center tracking-tight text-green-900">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skills.map(({ category, icon, items }) => (
              <div
                key={category}
                className="rounded-2xl shadow bg-white/90 border border-green-100 p-3 min-h-[120px] transition-all duration-300
                hover:scale-[1.02] hover:shadow-xl hover:border-green-400 group"
              >
                <div className="flex items-center gap-2 text-lg font-semibold text-[#22713e] mb-3 group">
                  <span className="group-hover:animate-bounce">{icon}</span>
                  <span className="font-medium">{category}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item.name} className={badgeClasses}>
                      {item.name}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
