"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function RotatingLogo() {
  return (
    <div className="relative flex items-center justify-center mb-8">
      {/* Rotating light ring */}
      <motion.div
        className="absolute inset-0 w-48 h-48 md:w-64 md:h-64"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-400" />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 w-48 h-48 md:w-64 md:h-64"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-blue-500/20" />
        <div className="absolute inset-0 rounded-full border border-transparent border-b-blue-500 border-l-blue-500" />
      </motion.div>

      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo image */}
      <motion.div
        className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/gabriel-logo-reference.png"
          alt="CALISSTUS Logo"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Light particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: [0, Math.cos((i / 8) * Math.PI * 2) * 100],
            y: [0, Math.sin((i / 8) * Math.PI * 2) * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
