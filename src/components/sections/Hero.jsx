"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import RotatingText from "../ui/RotatingText";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-40 pb-20">

      <Container>

        <FadeIn>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-8">
            <RotatingText />
          </div>

          <h1 className="text-7xl md:text-9xl font-black leading-none mb-8">
            Luban
            <br />
            Noor.
          </h1>

          <p className="text-zinc-400 text-xl max-w-3xl mb-10 leading-relaxed">
            Entrepreneur | Software Developer | Building
            scalable AI-powered web and multiplatform
            mobile solutions that transform ideas into
            impactful digital products.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#dfff00] text-black rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 rounded-full hover:border-[#dfff00] hover:text-[#dfff00] transition duration-300"
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