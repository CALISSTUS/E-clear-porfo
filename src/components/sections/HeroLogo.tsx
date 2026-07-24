"use client";

import { motion } from "framer-motion";

export function HeroLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]"
      aria-label="GABRIEL TABLET logo"
    >
      <div className="logo-badge-glow absolute inset-[-12%] rounded-full pointer-events-none" />

      <div className="logo-badge-spin relative w-full h-full">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_0_28px_rgba(255,120,80,0.35)]"
          role="img"
          aria-hidden
        >
          <defs>
            <linearGradient id="logoRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="18%" stopColor="#ff9f43" />
              <stop offset="36%" stopColor="#ffd93d" />
              <stop offset="54%" stopColor="#6bcb77" />
              <stop offset="72%" stopColor="#4d96ff" />
              <stop offset="100%" stopColor="#c77dff" />
            </linearGradient>

            <linearGradient id="logoTopText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="50%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#ff8c42" />
            </linearGradient>

            <linearGradient id="logoBottomText" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4d96ff" />
              <stop offset="50%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#9d4edd" />
            </linearGradient>

            <linearGradient id="logoCenterBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd93d" />
              <stop offset="35%" stopColor="#ff9f43" />
              <stop offset="65%" stopColor="#6bcb77" />
              <stop offset="100%" stopColor="#4d96ff" />
            </linearGradient>

            <linearGradient id="logoG" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4d96ff" />
              <stop offset="45%" stopColor="#6bcb77" />
              <stop offset="100%" stopColor="#ffd93d" />
            </linearGradient>

            <linearGradient id="logoT" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd93d" />
              <stop offset="45%" stopColor="#ff9f43" />
              <stop offset="100%" stopColor="#ff4d4d" />
            </linearGradient>

            <path
              id="logoTopArc"
              d="M 34 98 A 66 66 0 0 1 166 98"
              fill="none"
            />
            <path
              id="logoBottomArc"
              d="M 166 102 A 66 66 0 0 1 34 102"
              fill="none"
            />

            <filter id="logoGrain" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="3"
                seed="8"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.28 0"
                result="grain"
              />
              <feBlend in="SourceGraphic" in2="grain" mode="overlay" />
            </filter>
          </defs>

          <g filter="url(#logoGrain)">
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="url(#logoRing)"
              strokeWidth="3.5"
            />

            <circle cx="100" cy="100" r="58" fill="url(#logoCenterBg)" opacity="0.92" />

            <text
              fill="url(#logoTopText)"
              fontSize="17"
              fontWeight="900"
              letterSpacing="2.5"
              fontFamily="Arial Black, Arial, sans-serif"
            >
              <textPath href="#logoTopArc" startOffset="50%" textAnchor="middle">
                GABRIEL
              </textPath>
            </text>

            <text
              fill="url(#logoBottomText)"
              fontSize="14.5"
              fontWeight="900"
              letterSpacing="2.2"
              fontFamily="Arial Black, Arial, sans-serif"
            >
              <textPath href="#logoBottomArc" startOffset="50%" textAnchor="middle">
                TABLET
              </textPath>
            </text>

            <text
              x="100"
              y="114"
              textAnchor="middle"
              fontSize="54"
              fontWeight="900"
              fontFamily="Arial Black, Arial, sans-serif"
            >
              <tspan fill="url(#logoG)">G</tspan>
              <tspan fill="url(#logoT)" dx="2">T</tspan>
            </text>
          </g>
        </svg>

        <div className="logo-badge-shine absolute inset-0 rounded-full pointer-events-none" />
        <div className="logo-badge-shimmer absolute inset-[8%] rounded-full pointer-events-none" />
      </div>
    </motion.div>
  );
}
