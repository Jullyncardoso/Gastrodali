import * as React from "react";

/** Tiny surrealist ant — recurring Dalí motif. */
export function Ant({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="9" cy="12" rx="5" ry="3.2" />
      <ellipse cx="20" cy="12" rx="3.6" ry="2.6" />
      <ellipse cx="31" cy="12" rx="6" ry="3.6" />
      {/* legs */}
      <path d="M9 9 L4 3 M9 15 L4 21 M20 9 L18 2 M20 15 L18 22 M31 9 L36 3 M31 15 L36 21" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
      {/* antennae */}
      <path d="M35 11 L40 7 M35 13 L40 17" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

/** Mustache silhouette — Dalí's iconic curl. */
export function Mustache({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M100 35
        C 90 35, 80 30, 70 22
        C 55 10, 35 4, 18 12
        C 8 17, 4 28, 14 28
        C 22 28, 30 22, 42 22
        C 56 22, 70 32, 88 38
        C 95 41, 105 41, 112 38
        C 130 32, 144 22, 158 22
        C 170 22, 178 28, 186 28
        C 196 28, 192 17, 182 12
        C 165 4, 145 10, 130 22
        C 120 30, 110 35, 100 35 Z" />
    </svg>
  );
}
