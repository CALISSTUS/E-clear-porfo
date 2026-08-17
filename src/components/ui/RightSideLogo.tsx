"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function RightSideLogo() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rotating light ring with RAMBO colors */}
      <motion.div
        className="absolute inset-0 w-40 h-40 md:w-56 md:h-56"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-wine/30" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-wine border-r-navy-blue" />
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 w-40 h-40 md:w-56 md:h-56"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-navy-blue/20" />
        <div className="absolute inset-0 rounded-full border border-transparent border-b-wine border-l-navy-blue" />
      </motion.div>

      {/* Pulsing glow effect with RAMBO colors */}
      <motion.div
        className="absolute inset-0 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-wine/20 to-navy-blue/20 blur-xl"
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

      {/* Shining light effect */}
      <motion.div
        className="absolute inset-0 w-40 h-40 md:w-56 md:h-56 rounded-full"
        animate={{
          boxShadow: [
            "0 0 20px rgba(114, 47, 55, 0.3)",
            "0 0 40px rgba(114, 47, 55, 0.6)",
            "0 0 60px rgba(0, 0, 128, 0.4)",
            "0 0 20px rgba(114, 47, 55, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
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
          alt="GABRIEL CALISSTUS GABRIEL Logo"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Light particles with RAMBO colors */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            backgroundColor: i % 2 === 0 ? "#722F37" : "#000080",
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
