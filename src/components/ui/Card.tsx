import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "bg-[#1e1e1e] border border-[#333333] text-white/80 rounded-none p-6 transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-[#4b5563] shadow-soft",
      className
    )}
  >
    {children}
  </div>
);

