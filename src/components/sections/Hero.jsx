"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-32">

      <Container>

        <FadeIn>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.35em] text-[#dfff00] text-sm mb-8">
            Entrepreneur • Software & Web Developer • AI Enthusiast
          </p>

          <h1 className="text-7xl md:text-9xl font-black leading-none mb-8">
            Luban
            <br />
            Noor.
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mb-10">
            Building scalable AI-powered web and mobile applications that transform ideas into impactful digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#dfff00] text-black rounded-full font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-white/10 rounded-full"
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