import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import Reveal from "../ui/Reveal";

export default function Experience() {
  return (
    <section className="py-32">

      <Container>

        <FadeIn>

          {/* Section Header */}
          <div className="flex items-center gap-6 mb-16">

            <span
              className="
                text-[var(--accent)]
                text-sm
                tracking-[0.3em]
                uppercase
                font-medium
                whitespace-nowrap
              "
            >
              04
            </span>

            <span
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              Experience
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12">

            <div className="max-w-3xl">

              <div className="space-y-12">

  <Reveal delay={0.1}>
    <div className="border-l border-white/10 pl-6">

      <p
        className="
          text-[var(--accent)]
          text-sm
          tracking-[0.2em]
          uppercase
          mb-3
        "
      >
        2024 — Present
      </p>

      <h4
        className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
      >
        Full Stack Developer
      </h4>

      <p
        className="
          text-lg
          md:text-xl
          text-white/60
          leading-relaxed
        "
      >
        Building modern web applications,
        intelligent automation systems,
        scalable digital products, and
        AI-powered solutions for real-world
        business challenges.
      </p>

    </div>
  </Reveal>

  <Reveal delay={0.2}>
    <div className="border-l border-white/10 pl-6">

      <p
        className="
          text-[var(--accent)]
          text-sm
          tracking-[0.2em]
          uppercase
          mb-3
        "
      >
        2023 — Present
      </p>

      <h4
        className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
      >
        AI Product Builder
      </h4>

      <p
        className="
          text-lg
          md:text-xl
          text-white/60
          leading-relaxed
        "
      >
        Designing and developing AI-powered
        products, automation workflows, and
        intelligent systems focused on solving
        practical business and operational
        problems.
      </p>

    </div>
  </Reveal>

  <Reveal delay={0.3}>
    <div className="border-l border-white/10 pl-6">

      <p
        className="
          text-[var(--accent)]
          text-sm
          tracking-[0.2em]
          uppercase
          mb-3
        "
      >
        2022 — Present
      </p>

      <h4
        className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
      >
        Entrepreneur
      </h4>

      <p
        className="
          text-lg
          md:text-xl
          text-white/60
          leading-relaxed
        "
      >
        Exploring startup opportunities,
        validating product ideas, and building
        technology-driven ventures with a focus
        on scalability, innovation, and
        long-term value creation.
      </p>

    </div>
  </Reveal>

</div>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}