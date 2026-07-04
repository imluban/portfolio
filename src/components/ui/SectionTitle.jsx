"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  number,
  title,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-20"
    >
      <div className="flex items-center gap-4 mb-4">

        <span
          className="
            text-[#dfff00]
            text-sm
            tracking-[0.3em]
          "
        >
          {number}
        </span>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      <motion.h2
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        className="text-5xl md:text-6xl font-black"
      >
       {title}
      </motion.h2>

    </motion.div>
  );
}