"use client";

import { motion } from "framer-motion";

const STAGGER = 0.035;

export default function TextRoll({
  children,
  className = "",
}) {
  const letters = children.split("");

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block overflow-hidden cursor-default ${className}`}
      style={{
        lineHeight: 0.8,
      }}
    >
      {/* Top Layer */}
      <div>
        {letters.map((char, index) => {
          const delay =
            STAGGER *
            Math.abs(
              index - (letters.length - 1) / 2
            );

          return (
            <motion.span
              key={`top-${index}`}
              className="inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                delay,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>

      {/* Bottom Layer */}
      <div className="absolute inset-0">
        {letters.map((char, index) => {
          const delay =
            STAGGER *
            Math.abs(
              index - (letters.length - 1) / 2
            );

          return (
            <motion.span
              key={`bottom-${index}`}
              className="inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                delay,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}