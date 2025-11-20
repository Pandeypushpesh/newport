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
        <Card key={project.title} className="flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-none border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={420}
              className="w-full h-auto object-cover"
              priority={project.title === resumeData.projects[0].title}
            />
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
          {project.link && (
            <div>
              <Link
                href={project.link}
                className="text-sm uppercase tracking-[0.3rem] text-white hover:text-white/60 transition inline-flex items-center gap-2"
              >
                View Project
                <span aria-hidden>↗</span>
              </Link>
            </div>
          )}
        </Card>
      ))}
    </div>
  </section>
);

