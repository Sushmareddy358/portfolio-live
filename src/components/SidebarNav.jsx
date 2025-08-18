import {
  User,
  Briefcase,
  ListChecks,
  BookOpen,
  FolderKanban,
  BadgeCheck,
  Mail,
} from "lucide-react";

const navLinks = [
  { href: "#header", icon: <User />, label: "About" }, // NEW
  { href: "#experience", icon: <Briefcase />, label: "Experience" },
  { href: "#skills", icon: <ListChecks />, label: "Skills" },
  { href: "#education", icon: <BookOpen />, label: "Education" },
  { href: "#projects", icon: <FolderKanban />, label: "Projects" },
  { href: "#certifications", icon: <BadgeCheck />, label: "Certifications" },
  { href: "#contact", icon: <Mail />, label: "Contact" },
];

export default function SidebarNav() {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 bg-white/90 rounded-2xl shadow-2xl px-3 py-5 items-center border border-green-200">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="
            group relative p-2
            rounded-full 
            hover:bg-green-100 
            focus:bg-green-200
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-green-400
            active:scale-95
          "
          tabIndex={0}
        >
          <span className="text-green-900">
            {link.icon}
          </span>
          <span className="
            absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 rounded 
            text-xs bg-green-700 text-white whitespace-nowrap opacity-0
            group-hover:opacity-100 group-focus:opacity-100
            transition pointer-events-none z-10 shadow-lg
          ">
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
