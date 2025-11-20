import Link from "next/link";

import { resumeData } from "@/lib/resumeData";

const NAV_LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 mt-20">
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 md:items-center justify-between text-white/60 text-sm">
      <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      <div className="flex flex-wrap gap-4 uppercase tracking-[0.3rem] text-xs">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-white transition">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

