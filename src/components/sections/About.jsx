"use client";

import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <Container>

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-6 mb-24">

            <span
              className="
                text-[#dfff00]
                text-sm
                tracking-[0.25em]
                font-medium
              "
            >
              01
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              About
            </h2>

            <div className="h-px flex-1 bg-white/10" />

          </div>
        </FadeIn>

        {/* Content */}
        <div
  className="
    max-w-6xl
    mx-auto
    grid
    lg:grid-cols-2
    gap-24
    px-6
    lg:px-12
  "
>

          {/* Left Side */}
          <FadeIn>
            <div
              className="
                text-zinc-400
                text-lg
                leading-relaxed
                space-y-10
              "
            >

              <p>
                I&apos;m a{" "}
                <span className="text-white font-semibold">
                  full-stack developer
                </span>{" "}
                who bridges the gap between thoughtful
                design and solid engineering.
                I work across the entire stack —
                from crafting interfaces that feel
                effortless to architecting systems
                built to scale.
              </p>

              <p>
                My focus is on building digital
                products that solve real problems.
                Whether it&apos;s a consumer app,
                an internal tool,
                or an AI platform,
                I care about the craft
                at every layer.
              </p>

              <p>
                I&apos;m currently{" "}
                <span className="text-white font-semibold">
                  open to new opportunities
                </span>{" "}
                — freelance projects,
                product collaborations,
                and full-time roles.
              </p>

            </div>
          </FadeIn>

          {/* Right Side */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">

              <InfoRow
                label="Based In"
                value="Chittagong, Bangladesh"
              />

              <InfoRow
                label="Focus"
                value="Software & Web Development"
              />

              <InfoRow
                label="Status"
                value="Available for Work"
                accent
              />

              <InfoRow
                label="Languages"
                value="Python · Kotlin · C++ · JavaScript · TypeScript"
              />

            </div>
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}

function InfoRow({
  label,
  value,
  accent = false,
}) {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        border-b
        border-white/10
        pb-8
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[0.25em]
          text-zinc-500
        "
      >
        {label}
      </span>

      <span
        className={`
          font-medium
          ${accent ? "text-[#dfff00]" : "text-white"}
        `}
      >
        {value}
      </span>
    </div>
  );
}