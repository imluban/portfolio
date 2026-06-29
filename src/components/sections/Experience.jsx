import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function Experience() {
  return (
    <section className="py-32 border-t border-white/10">

      <Container>
        
        <FadeIn>
        <h2 className="text-5xl font-black mb-16">
          Experience
        </h2>

        <div className="space-y-12">

          <div>
            <p className="text-[#dfff00]">
              2024 — Present
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Full Stack Developer
            </h3>

            <p className="text-zinc-400 mt-3">
              Building modern web applications,
              automation systems and scalable products.
            </p>
          </div>

        </div>
        </FadeIn>
        
      </Container>

    </section>
  );
}