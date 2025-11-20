import { resumeData } from "@/lib/resumeData";
import { Card } from "@/components/ui/Card";

export const About = () => (
  <section id="about" className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
    <header className="mb-6">
      <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
        About
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        About Me
      </h2>
    </header>
    <Card>
      <p className="text-white/80 leading-relaxed">{resumeData.summary}</p>
    </Card>
  </section>
);

