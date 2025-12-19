// EducationSection.jsx
import { GraduationCap } from "lucide-react";
import utdLogo from "../assets/utd-logo.png";
import JNTU from "../assets/JNTU.png";
import scholarCertificate from "../assets/utd-scholar-certificate.png";

const educations = [
  {
    logo: utdLogo,
    degree: "M.S. in Business Analytics & Artificial Intelligence",
    school: "Naveen Jindal School of Management, University of Texas at Dallas",
    date: "Aug 2023 – May 2025",
    gpa: "GPA: 3.72",
    highlights: ["Scholar with Recognition", "Dean’s Excellence Scholar"],
    certificateImage: scholarCertificate,
    certificateTitle: "Scholar with Recognition",
    icon: <GraduationCap size={18} className="text-[#22713e]" />,
    showCoursework: true,
  },
  {
    logo: JNTU,
    degree: "Bachelor of Technology",
    school: "Jawaharlal Nehru Technological University, Hyderabad",
    date: "Aug 2016 - May 2020",
    gpa: "GPA: 3.40",
    highlights: [],
    coursework: [],
  },
];

const badgeClass =
  "bg-[#ebf9ed] text-[#22713e] font-semibold px-2 py-0.5 rounded-full text-[11px] mr-1 mb-1 shadow-sm border border-green-100";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full h-screen px-3 md:px-6 py-3 bg-gradient-to-b from-[#f5f5dc] to-[#e0e0c0] overflow-hidden"
    >
      <div className="mx-auto h-full max-w-5xl border border-green-200 bg-white/60 backdrop-blur-[1px] rounded-xl shadow-md flex flex-col">
        <h2 className="text-2xl font-bold py-2 text-center tracking-tight text-green-900">
          Education
        </h2>

        {/* Stack cards vertically; scroll inside if content gets taller than the viewport */}
        <div className="flex-1 overflow-auto px-3 pb-3">
          <div className="flex flex-col items-center gap-3">
            {educations.map((edu) => (
              <div
                key={edu.degree}
                className="w-full max-w-4xl rounded-xl bg-white/95 shadow-sm border border-green-100 px-4 py-3 hover:border-green-200 transition"
              >
                {/* Header row */}
                <div className="flex items-center gap-3">
                  <span className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#ebf9ed] border border-green-200 shadow">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-[76px] h-[76px] object-contain rounded-full"
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {edu.icon}
                      <span className="text-lg font-extrabold text-[#22713e] leading-tight">
                        {edu.degree}
                      </span>
                    </div>
                    <div className="text-[12px] text-[#4a5641] font-medium">
                      {edu.school}
                    </div>
                    <div className="text-[11px] text-[#6a7b5b]">
                      {edu.date} • {edu.gpa}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                {(edu.highlights?.length ?? 0) > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {edu.highlights.map((h, i) => (
                      <span key={`${h}-${i}`} className={badgeClass}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Coursework */}
                {edu.showCoursework && (edu.coursework?.length ?? 0) > 0 && (
                  <div className="mt-2">
                    <span className="font-semibold text-[#22713e] text-[12px]">
                      Relevant Coursework:
                    </span>
                    <div className="flex flex-wrap mt-1 gap-1">
                      {edu.coursework.map((c) => (
                        <span key={c} className={badgeClass}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certificate thumbnail */}
                {edu.certificateImage && (
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={edu.certificateImage}
                      alt={edu.certificateTitle ?? "Certificate"}
                      className="w-[170px] h-[96px] rounded-md border border-green-100 shadow-sm object-contain bg-[#f8f6ed]"
                      loading="lazy"
                    />
                    {edu.certificateTitle && (
                      <div className="text-[12px] font-semibold text-[#22713e]">
                        {edu.certificateTitle}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}