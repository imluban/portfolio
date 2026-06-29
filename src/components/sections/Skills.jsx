import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

const skills = [
  "Next.js",
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "REST API",
];

export default function Skills() {
  return (
    <section className="py-32">

      <Container>

        <FadeIn>
        <h2 className="text-5xl font-black mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              p-8
              rounded-3xl
              border
            border-white/10
            bg-white/[0.03]
              backdrop-blur-xl

            hover:border-[#dfff00]
              hover:-translate-y-2

              transition-all
              duration-300
              "
            >
              {skill}
            </div>
          ))}

        </div>
        </FadeIn>

      </Container>

    </section>
  );
}