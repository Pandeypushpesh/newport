"use client";

import { useMemo } from "react";

type Drop = {
  left: string;
  delay: string;
  scale: string;
};

const RainBackground = () => {
  const drops = useMemo<Drop[]>(() => {
    return Array.from({ length: 80 }).map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      scale: `${0.6 + Math.random() * 0.8}`
    }));
  }, []);

  return (
    <div className="rain-layer">
      {drops.map((drop, index) => (
        <span
          key={`drop-${index}`}
          className="rain-drop"
          style={{
            left: drop.left,
            animationDelay: drop.delay,
            transform: `scale(${drop.scale})`
          }}
        />
      ))}
    </div>
  );
};

export default RainBackground;

