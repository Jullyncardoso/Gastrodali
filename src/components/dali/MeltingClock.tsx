import * as React from "react";

/**
 * Surrealist melting clock — homage to Dalí's "The Persistence of Memory".
 * Pure SVG, themed with currentColor. No deps.
 */
export function MeltingClock({
  className,
  time = "8:42",
}: {
  className?: string;
  time?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mc-face" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </radialGradient>
        <linearGradient id="mc-drip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Drooping clock body */}
      <path
        d="M30 60
           C 30 30, 90 20, 130 28
           C 170 36, 200 60, 195 95
           C 192 120, 175 135, 150 138
           C 130 140, 120 155, 118 175
           C 117 188, 108 195, 100 192
           C 92 189, 92 178, 96 168
           C 102 152, 100 138, 85 128
           C 60 112, 30 95, 30 60 Z"
        fill="url(#mc-face)"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Dripping tail */}
      <path
        d="M118 175 C 118 200, 116 220, 112 240"
        stroke="url(#mc-drip)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Hour ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        const cx = 105 + Math.cos(a) * 48;
        const cy = 72 + Math.sin(a) * 38;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? 1.6 : 0.9}
            fill="currentColor"
          />
        );
      })}

      {/* Hands */}
      <line x1="105" y1="72" x2="105" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="72" x2="138" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="105" cy="72" r="2.4" fill="currentColor" />

      {/* Time label */}
      <text
        x="105"
        y="108"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontSize="11"
        fill="currentColor"
        opacity="0.7"
      >
        {time}
      </text>
    </svg>
  );
}
