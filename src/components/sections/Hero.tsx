import Image from "next/image";
import Link from "next/link";

import { resumeData } from "@/lib/resumeData";

export const Hero = () => (
  <section className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-32 pb-20 flex flex-col gap-10">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
      <div className="text-center lg:text-left flex-1">
        <p className="uppercase tracking-[0.5rem] text-xs text-white/50 mb-4">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight">
          {resumeData.name}
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-6">
          {resumeData.role}
        </p>
        <p className="text-white/70 max-w-3xl mx-auto lg:mx-0">
          {resumeData.summary}
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center">
          <Link
            className="rounded-none bg-white text-black px-6 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-slate-200 transition"
            href={resumeData.hero.primaryCta.href}
            target="_blank"
          >
            {resumeData.hero.primaryCta.label}
          </Link>
          <Link
            className="rounded-none border border-white/40 text-white px-6 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-white/10 transition"
            href={resumeData.hero.secondaryCta.href}
          >
            {resumeData.hero.secondaryCta.label}
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm flex-1">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-indigo-500/40 to-cyan-500/30 blur-3xl" />
          <Image
            src="/portrait.svg"
            alt="Pushpesh Kumar abstract portrait"
            width={600}
            height={600}
            priority
            className="relative z-10 w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

