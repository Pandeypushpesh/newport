import { resumeData } from "@/lib/resumeData";
import { Card } from "@/components/ui/Card";

export const Education = () => (
  <section id="education" className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
    <header className="mb-10">
      <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
        Education
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Academic Journey
      </h2>
    </header>
    <div className="relative pl-6">
      <span className="absolute left-0 top-0 bottom-0 w-px bg-white/20" aria-hidden />
      <div className="space-y-6">
        {resumeData.education.map((item, index) => (
          <div key={`${item.title}-${index}`} className="relative">
            <span className="absolute -left-[13px] top-6 w-6 h-6 rounded-none border border-white bg-[#050509] flex items-center justify-center text-[10px] font-semibold text-white">
              {index + 1}
            </span>
            <Card className="relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/60">{item.institution}</p>
                </div>
                <span className="text-white/80 uppercase tracking-[0.3rem] text-xs">
                  {item.detail}
                </span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);

