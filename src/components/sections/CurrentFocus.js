import FadeIn from "../ui/FadeIn";

const focusItems = [
  "AI-Powered SaaS Products",
  "Intelligent Automation Systems",
  "Modern Web Applications",
  "Cross-Platform Mobile Experiences",
];

export default function CurrentFocus() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
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
          Currently Building
        </p>

        <div className="space-y-6">
          {focusItems.map((item) => (
            <div
              key={item}
              className="
                border-b
                border-white/10
                pb-6
                text-3xl
                md:text-5xl
                font-bold
              "
            >
              → {item}
            </div>
          ))}
        </div>
        </FadeIn>

      </div>
    </section>
  );
}