import Image from "next/image";
import Link from "next/link";

import { resumeData } from "@/lib/resumeData";
import { Card } from "@/components/ui/Card";

export const Projects = () => (
  <section id="projects" className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
    <header className="mb-10 flex flex-col gap-2">
      <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
        Projects
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Recent Work
      </h2>
    </header>
    <div className="grid gap-6 lg:grid-cols-2">
      {resumeData.projects.map((project) => (
        <Card key={project.title} className="flex flex-col gap-5 group relative">
          <div className="relative overflow-hidden rounded-none border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={420}
              className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-50"
              priority={project.title === resumeData.projects[0].title}
            />
            {/* Hover Overlay with Links */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white/20 border border-white/50 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/30 transition"
                >
                  View Live
                </Link>
              )}
              {project.sourceCode && (
                <Link
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white/20 border border-white/50 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/30 transition"
                >
                  Source Code
                </Link>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/70 text-sm mt-2">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={`${project.title}-${tech}`}
                  className="text-xs tracking-widest uppercase rounded-none border border-white/20 px-3 py-1 text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);

