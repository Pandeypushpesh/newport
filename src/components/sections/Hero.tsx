"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { resumeData } from "@/lib/resumeData";

type Badge = {
  id: string;
  title: string;
  detail: string;
  position: string;
  delayClass: string;
};

const floatingBadges: Badge[] = [
  {
    id: "impact",
    title: "Impact Score",
    detail: "Top 1%",
    position: "top-4 -left-3",
    delayClass: "[animation-delay:0s]"
  },
  {
    id: "latency",
    title: "Latency Wins",
    detail: "-120ms",
    position: "top-16 -right-6",
    delayClass: "[animation-delay:0.8s]"
  },
  {
    id: "deploy",
    title: "Ship Mode",
    detail: "24/7",
    position: "bottom-10 -left-4",
    delayClass: "[animation-delay:1.6s]"
  },
];

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>(
    { x: 50, y: 50 }
  );
  const gradientOverlayRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  const gradientMask = useMemo(
    () =>
      `radial-gradient(circle 280px at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.35) 0%, rgba(14, 165, 233, 0.2) 45%, transparent 70%)`,
    [mousePosition]
  );

  useEffect(() => {
    if (gradientOverlayRef.current) {
      gradientOverlayRef.current.style.background = gradientMask;
    }
  }, [gradientMask]);

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-32 pb-20 flex flex-col gap-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <div className="absolute -top-1/2 right-0 h-[36rem] w-[36rem] bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/20 blur-[120px] animate-hero-orbit" />
        <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/40 to-emerald-400/20 blur-3xl animate-hero-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_60%)] mix-blend-screen" />
      </div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left flex-1">
          <p className="uppercase tracking-[0.5rem] text-xs text-white/60 mb-4 animate-hero-fade">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight animate-hero-fade">
            {resumeData?.name || "Pushpesh Kumar"}
          </h1>

          <p className="text-lg md:text-2xl text-white/80 mb-6 animate-hero-fade">
            {resumeData?.role || "CSE Student"}
          </p>

          <p className="text-white/80 max-w-3xl mx-auto lg:mx-0 text-lg md:text-xl animate-hero-fade">
            Developer. Learner. Problem Solver.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 md:items-center animate-hero-fade">
            <Link
              className="rounded-full bg-white text-black px-8 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-slate-200 transition shadow-lg shadow-white/20"
              href={resumeData?.hero?.primaryCta?.href || "#"}
              target="_blank"
            >
              {resumeData?.hero?.primaryCta?.label || "Resume"}
            </Link>

            <Link
              className="rounded-full border border-white/40 text-white px-8 py-3 font-semibold tracking-wider uppercase text-xs hover:bg-white/10 transition"
              href={resumeData?.hero?.secondaryCta?.href || "#"}
            >
              {resumeData?.hero?.secondaryCta?.label || "Contact"}
            </Link>
          </div>
        </div>

        <div className="w-full max-w-sm flex-1">
          <div
            className="relative group cursor-crosshair overflow-visible"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -inset-6 bg-gradient-to-b from-indigo-600/40 via-transparent to-cyan-400/30 blur-3xl transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

            <div
              ref={gradientOverlayRef}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
            />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur animate-hero-fade">
              <Image
                src={resumeData?.heroImage || "/image.png"}
                alt="Portfolio portrait"
                width={600}
                height={600}
                priority
                className="relative z-10 w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

              {floatingBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`absolute ${badge.position} ${badge.delayClass} bg-black/70 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur flex flex-col gap-1 animate-hero-float`}
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.35rem] text-white/60">
                    {badge.title}
                  </span>
                  <span className="text-xl font-semibold text-white">
                    {badge.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
