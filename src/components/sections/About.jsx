import Container from "../ui/Container";

export default function About() {
  return (
    <section className="py-32 border-t border-white/10">

      <Container>

        <div className="grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-[#dfff00] uppercase tracking-widest mb-4">
              About
            </p>

            <h2 className="text-5xl font-black">
              Engineering ideas into products.
            </h2>
          </div>

          <div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I&apos;m a Full Stack Developer focused on building
              scalable applications, clean user experiences,
              and systems that solve real-world problems.
            </p>
          </div>

        </div>

      </Container>

    </section>
  );
}