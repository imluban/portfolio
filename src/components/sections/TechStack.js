import FadeIn from "../ui/FadeIn";

const stacks = [
  {
    title: "Frontend",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    tech: [
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
    ],
  },

  {
    title: "Artificial Intelligence",
    tech: [
      "OpenAI",
      "Prompt Engineering",
      "AI Agents",
      "Automation Systems",
    ],
  },

  {
    title: "Deployment",
    tech: [
      "Vercel",
      "GitHub",
      "CI/CD",
      "Cloud Infrastructure",
    ],
  },
];

export default function TechStack() {
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
            mb-10
          "
        >
          Technology Stack
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {stacks.map((stack) => (
            <div
              key={stack.title}
              className="
                border
                border-white/10
                rounded-3xl
                p-8
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  mb-6
                "
              >
                {stack.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {stack.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
        </FadeIn>

      </div>
    </section>
  );
}