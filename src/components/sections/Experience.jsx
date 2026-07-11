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
        March 2024 — Present
      </p>

      <h4
        className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
      >
        LAXON
      </h4>
      <h5>
        <i>
          Founder & CEO
        </i>
      </h5>

      <p
        className="
          text-lg
          md:text-xl
          text-white/60
          leading-relaxed
        "
      >
        ▪ Founded and operated a technology venture with planning, product direction and business operation
responsibilities.
▪ Coordinated development activities of the project and researched software solutions to meet user needs.
▪ Made decisions about product development, adoption of technologies and strategies for future
development.
▪ Enhanced entrepreneurial, leadership and project management skills through practical experience.
▪ Ongoing Projects: BlueTalk, Life OS.
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
        June 2023 — August 2025
      </p>

      <h4
        className="
          text-xl
          md:text-2xl
          font-bold
          mb-3
        "
      >
        IT Career Solution
      </h4>
      <h5>
        <i>
          Intern Web Developer
        </i>
      </h5>

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
        Freelancer
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