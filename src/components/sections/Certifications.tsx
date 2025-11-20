import { resumeData } from "@/lib/resumeData";
import { Card } from "@/components/ui/Card";

export const Certifications = () => (
  <section id="certifications" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16">
    <header className="mb-10">
      <p className="text-xs uppercase tracking-[0.3rem] text-white/50">
        Certifications
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        Credible Credentials
      </h2>
    </header>
    <div className="grid gap-6 md:grid-cols-2">
      {resumeData.certifications.map((certification, index) => (
        <Card key={`cert-${index}`}>
          <p className="text-white">{certification}</p>
        </Card>
      ))}
    </div>
  </section>
);

