import FadeIn from "../ui/FadeIn";
import Container from "../ui/Container";

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
              06
            </span>

            <span
              className="
                text-4xl
                md:text-5xl
                font-black
              "
            >
              Tech Stack
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12">

            {/* Intro */}
            <div className="max-w-3xl mb-16">

              <h3
                className="
                  text-2xl
                  md:text-2xl
                  font-bold
                  leading-tight
                  mb-10
                "
              >
                Technologies I use to build modern products.
              </h3>

              <div
                className="
                  text-lg
                  md:text-xl
                  text-white/60
                  leading-relaxed
                "
              >
                <p>
                  My toolkit spans frontend development,
                  backend architecture, artificial intelligence,
                  automation, and cloud deployment.
                </p>
              </div>

            </div>

            {/* Stack Cards */}
            <div className="grid md:grid-cols-2 gap-8">

              {stacks.map((stack) => (
                <div
                  key={stack.title}
                  className="
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    bg-white/[0.02]
                    backdrop-blur-xl
                    hover:border-[var(--accent)]
                    transition-all
                    duration-300
                  "
                >
                  <h4
                    className="
                      text-2xl
                      font-bold
                      mb-6
                    "
                  >
                    {stack.title}
                  </h4>

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
                          text-sm
                        "
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}