"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Entrepreneur",
  "Software Developer",
  "AI Product Builder",
  "Startup Founder",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === words.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="flex items-center gap-4">

    {/* Static Line */}
    <div className="w-12 h-px bg-[#dfff00] flex-shrink-0" />

    {/* Rotating Text */}
    <div className="h-5 min-w-[320px] overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            font-mono
            uppercase
            tracking-[0.35em]
            text-[#dfff00]
            text-sm
          "
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>

    </div>

  </div>
);
}