"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-black
            flex
            items-center
            justify-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.9, 1, 1, 1.05],
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo22.png"
              alt="Luban Noor"
              width={80}
              height={80}
              priority
              className="
                drop-shadow-[0_0_25px_rgba(223,255,0,0.4)]
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}