import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>

        <FadeIn>
          <h2 className="text-5xl font-black mb-16">
            Featured Projects
          </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
              p-10
              border
              border-white/10
              bg-white/[0.02]
              rounded-2xl
              "
            >
              <p className="text-[#dfff00] mb-3">
                Featured Project
              </p>

              <h3 className="text-3xl font-bold mb-4">
                Project {item}
              </h3>

              <p className="text-zinc-400">
                Replace with real project data.
              </p>
            </div>
          ))}

        </div>
        </FadeIn>
        
      </Container>
    </section>
  );
}