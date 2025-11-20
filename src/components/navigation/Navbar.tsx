"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { resumeData } from "@/lib/resumeData";

const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition backdrop-blur-md",
        scrolled ? "bg-black/70 border-b border-white/10" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold uppercase tracking-[0.4rem] text-white">
            {resumeData.name.split(" ")[0]}
          </span>
          <span className="hidden md:block text-xs uppercase tracking-[0.35rem] text-white/60">
            {resumeData.role}
          </span>
        </div>
        <div className="hidden md:flex gap-2 text-xs uppercase tracking-[0.35rem]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 border border-transparent hover:border-white/40 transition rounded-none"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden uppercase tracking-[0.3rem] text-xs border border-white/40 px-3 py-2 rounded-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </nav>
      <div
        className={cn(
          "md:hidden grid transition grid-rows-[0fr] border-t border-white/10",
          isOpen && "grid-rows-[1fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-4 pb-4 gap-2 text-xs uppercase tracking-[0.35rem] bg-black/80">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 border border-white/10 hover:border-white/50 transition rounded-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

