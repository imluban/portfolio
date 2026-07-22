import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";

export default function FounderStatement() {
  return (
    <section 
    id="founder"
    className="py-32">
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
                02
              </span>

              <span
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                "
              >
                Philosophy
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12">           

            {/* Content */}
            <div className="max-w-3xl">

              <h3
                className="
                  text-2xl
                  md:text-2xl
                  font-bold
                  leading-tight
                  mb-10
                "
              >
                I don&apos;t just build software.
              </h3>

              <div
                className="
                  text-lg
                  md:text-xl
                  text-white/60
                  leading-relaxed
                  space-y-8
                "
              >
                <p>
                  I build products, systems, and businesses
                  that leverage AI to solve real-world
                  problems at scale.
                </p>

                <p>
                  My focus is creating technology that is
                  practical, profitable, and designed for
                  long-term impact.
                </p>

                <p>
                  Every project I work on is driven by a
                  simple principle: create solutions that
                  deliver measurable value while remaining
                  scalable, maintainable, and future-ready.
                </p>

              </div>

            </div>
          </div>  

          </FadeIn>

      </Container>
    </section>
  );
}