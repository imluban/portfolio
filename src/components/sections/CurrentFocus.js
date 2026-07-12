import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";

const focusItems = [
  "Developing AI-Powered SaaS Products That Solve Meaningful Problems",
  "Building Intelligent Automation Systems for Modern Businesses",
  "Designing Scalable Web Applications with Performance in Mind",
  "Creating Seamless Cross-Platform Mobile Experiences at Scale",
];

export default function CurrentFocus() {
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
              03
            </span>

            <span
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              Current Focus
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

         <div className="max-w-6xl mx-auto px-6 lg:px-12">

          {/* Intro */}
          <div className="max-w-4xl mb-16">
            <h3
              className="
                text-2xl
                md:text-3xl
                font-bold
                leading-tight
                mb-8
              "
            >
              What I&apos;m actively building and exploring.
            </h3>

            <p
              className="
                text-lg
                md:text-xl
                text-white/60
                leading-relaxed
                max-w-3xl
              "
            >
              My current work revolves around leveraging AI,
              automation, and scalable software architecture to
              build products that solve meaningful problems and
              create long-term value.
            </p>
          </div>

          {/* Focus Areas */}
<div className="max-w-4xl">
  {focusItems.map((item) => (
    <div
      key={item}
      className="
        flex
        items-center
        gap-5
        py-7
        border-b
        border-white/10
      "
    >
      <span
        className="
          text-[var(--accent)]
          text-lg
          opacity-70
          shrink-0
        "
      >
        →
      </span>

      <AsciiGlitchRipple
        as="div"
        dur={1000}
        spread={1.2}
        className="
          text-lg
          font-mono
          md:text-xl
          text-white/50
          hover:text-white
          transition-colors
          duration-300
        "
      >
        {item}
      </AsciiGlitchRipple>
    </div>
  ))}
</div>
          </div>

        </FadeIn>

      </Container>
    </section>
  );
}