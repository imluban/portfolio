import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import { LiquidMetalButton } from "@/components/ui/liquid-metal";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="pt-55 pb-20 border-t border-white/10"
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

          <a href="mailto:lubannoor@gmail.com">
            <LiquidMetalButton
              size="md"
              icon={<Mail className="w-4 h-4" />}
              metalConfig={{
                colorBack: "#DFFF00",
                colorTint: "#FFFFFF",
                speed: 0.35,
                distortion: 0.08,
              }}
            >
             Get In Touch
            </LiquidMetalButton>
          </a>

        </div>
        </FadeIn>
        
      </Container>
    </section>
  );
}