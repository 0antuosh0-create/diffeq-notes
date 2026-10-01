import React from "react";

/**
 * Clean, Cool, and Simple Mathematics Background
 * Completely static, zero CPU overhead, elegant ODE geometry and harmonic streamlines.
 */
export const MathBackground = React.memo(function MathBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Large elegant harmonic solution curve (Continuous laminar ODE flow) */}
      <svg
        className="absolute top-12 -start-[8%] w-[116%] h-[680px] opacity-[0.045] dark:opacity-[0.055]"
        viewBox="0 0 1400 680"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,340 C220,120 480,560 850,300 C1220,40 1350,460 1500,240"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-teal-600 dark:text-teal-400"
        />
        <path
          d="M-50,420 C260,200 520,620 900,360 C1260,110 1390,520 1500,320"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="text-amber-600 dark:text-amber-400"
        />
      </svg>

      {/* 2. Top-Start: Phase Portrait of Harmonic Oscillator (y, y' orbit) */}
      <svg
        className="absolute top-6 start-4 w-[280px] h-[280px] opacity-[0.04] dark:opacity-[0.05] text-teal-600 dark:text-teal-400 hidden sm:block"
        viewBox="0 0 280 280"
        fill="none"
      >
        <line x1="140" y1="20" x2="140" y2="260" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <line x1="20" y1="140" x2="260" y2="140" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" />
        <ellipse cx="140" cy="140" rx="45" ry="30" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="140" cy="140" rx="85" ry="55" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="140" cy="140" rx="120" ry="80" stroke="currentColor" strokeWidth="1.8" />
      </svg>

      {/* 3. Top-End: Direction Field Matrix (dy/dx = f(x,y)) */}
      <svg
        className="absolute top-10 end-6 w-[260px] h-[220px] opacity-[0.045] dark:opacity-[0.055] text-amber-600 dark:text-amber-400 hidden lg:block"
        viewBox="0 0 240 200"
        fill="none"
      >
        {[
          { x: 30, y: 30, a: -30 }, { x: 80, y: 30, a: -10 }, { x: 130, y: 30, a: 15 }, { x: 180, y: 30, a: 40 },
          { x: 30, y: 80, a: -45 }, { x: 80, y: 80, a: -20 }, { x: 130, y: 80, a: 5 }, { x: 180, y: 80, a: 30 },
          { x: 30, y: 130, a: -60 }, { x: 80, y: 130, a: -35 }, { x: 130, y: 130, a: -10 }, { x: 180, y: 130, a: 20 },
          { x: 30, y: 180, a: -75 }, { x: 80, y: 180, a: -50 }, { x: 130, y: 180, a: -25 }, { x: 180, y: 180, a: 0 },
        ].map((pt, i) => (
          <line
            key={i}
            x1={pt.x - 10}
            y1={pt.y}
            x2={pt.x + 10}
            y2={pt.y}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${pt.a} ${pt.x} ${pt.y})`}
          />
        ))}
      </svg>

      {/* 4. Bottom-End: Orthogonal Trajectories System */}
      <svg
        className="absolute bottom-8 end-4 w-[340px] h-[280px] opacity-[0.04] dark:opacity-[0.05] text-violet-600 dark:text-violet-400 hidden md:block"
        viewBox="0 0 340 280"
        fill="none"
      >
        <path d="M50,30 Q170,230 290,30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M80,60 Q170,200 260,60" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
        <ellipse cx="170" cy="140" rx="120" ry="70" stroke="currentColor" strokeWidth="1.5" className="text-teal-600 dark:text-teal-300" />
      </svg>
      {/* 4. Architectural engineering coordinate crosshairs (+) */}
      <div className="absolute top-20 start-6 text-[11px] font-mono text-ink/15 dark:text-ink/20 select-none hidden lg:block">
        + [ODE / 32°]
      </div>
      <div className="absolute top-[48%] end-8 text-[11px] font-mono text-ink/15 dark:text-ink/20 select-none hidden lg:block">
        + [W(x) ≠ 0]
      </div>
      <div className="absolute bottom-24 start-10 text-[11px] font-mono text-ink/15 dark:text-ink/20 select-none hidden lg:block">
        + [s ∈ ℂ]
      </div>
    </div>
  );
});
