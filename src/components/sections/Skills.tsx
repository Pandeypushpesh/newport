import { resumeData } from "@/lib/resumeData";
import { Card } from "@/components/ui/Card";

export const Skills = () => (
  <section id="skills" className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16">
    <header className="mb-10">
      <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
        Skills
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Technical Arsenal
      </h2>
    </header>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resumeData.skills.map((skill) => (
        <Card key={skill.title}>
          <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {skill.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-block h-px w-6 bg-white/40" />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </section>
);

