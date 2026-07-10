"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import RotatingText from "../ui/RotatingText";
import TextRoll from "../ui/TextRoll";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-40 pb-20">
      <Container>
        <FadeIn>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <div className="mb-10">
              <RotatingText />
            </div>

            <div className="mb-12">
              <TextRoll
                className="
                  hero-name
                  text-[70px]
                  md:text-[150px]
                  lg:text-[160px]
                  font-bold
                  tracking-[-0.08em]
                  text-white
                  leading-[0.8]
                "
              >
                Luban
              </TextRoll>

              <TextRoll
                className="
                  hero-name
                  text-[70px]
                  md:text-[150px]
                  lg:text-[160px]
                  font-bold
                  tracking-[-0.08em]
                  text-[#dfff00]
                  leading-[0.8]
                "
              >
                Noor.
              </TextRoll>
            </div>

            <p
              className="
                text-zinc-400
                text-lg
                md:text-xl
                max-w-3xl
                leading-relaxed
                tracking-tight
                mb-12
              "
            >
              Building scalable AI-powered web and
              multiplatform mobile solutions that transform
              ideas into impactful digital products.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="
                  px-8
                  py-4
                  bg-[#dfff00]
                  text-black
                  rounded-full
                  font-semibold
                  hover:scale-105
                  transition
                  duration-300
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  px-8
                  py-4
                  border
                  border-white/10
                  rounded-full
                  hover:border-[#dfff00]
                  hover:text-[#dfff00]
                  transition
                  duration-300
                "
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
}