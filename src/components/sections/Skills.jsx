import Container from "../ui/Container";

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

        <h2 className="text-5xl font-black mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              p-8
              border
              border-white/10
              bg-white/[0.02]
              hover:border-[#dfff00]
              transition
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}