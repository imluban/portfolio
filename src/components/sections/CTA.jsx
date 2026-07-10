import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-44 border-t border-white/10"
    >
      <Container>

        <FadeIn>
          <div className="text-center">

          <h2 className="text-6xl font-black mb-6">
            Let&apos;s Build Something Great
          </h2>

          <p className="text-zinc-400 mb-10">
            Open for freelance projects,
            collaborations and full-time opportunities.
          </p>

          <a
            href="mailto:lubannoor@gmail.com"
            className="
            px-10
            py-5
            bg-[#dfff00]
            text-black
            rounded-full
            inline-block
            font-semibold
            "
          >
            Get In Touch
          </a>

        </div>
        </FadeIn>
        
      </Container>
    </section>
  );
}