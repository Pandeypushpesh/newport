import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

const Page = () => (
  <div className="relative z-10 flex flex-col gap-10 md:gap-16">
    <Hero />
    <Skills />
    <Projects />
    <Education />
    <Certifications />
    <About />
    <Contact />
  </div>
);

export default Page;

