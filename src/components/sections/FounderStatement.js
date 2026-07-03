import FadeIn from "../ui/FadeIn";

export default function FounderStatement() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-[var(--accent)]
            mb-6
          "
        >
          Founder Mindset
        </p>

        <h2
          className="
            text-4xl
            md:text-6xl
            font-bold
            leading-tight
            mb-10
          "
        >
          I don&apos;t just build software.
        </h2>

        <div
          className="
            text-xl
            text-white/70
            leading-relaxed
            max-w-4xl
          "
        >
          <p className="mb-6">
            I build products, systems, and businesses that leverage
            AI to solve real-world problems at scale.
          </p>

          <p>
            My focus is creating technology that is practical,
            profitable, and designed for long-term impact.
          </p>
        </div>
        </FadeIn>

      </div>
      </section>
  );
}