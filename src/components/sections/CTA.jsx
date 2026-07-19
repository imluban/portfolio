import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import StaggeredGrid from "@/components/ui/staggered-grid";
import LiquidChrome from "@/components/ui/liquid-chrome";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  Mail,
  FileText,
} from "lucide-react";

export default function CTA() {
  const bentoItems = [
  {
    id: 1,
    title: "GitHub",
    image: "/socials/github.jpg",
    icon: <FaGithub size={20} />,
    url: "https://github.com/imluban",
  },
  {
    id: 2,
    title: "LinkedIn",
    image: "/socials/linkedin.jpg",
    icon: <FaLinkedin size={20} />,
    url: "https://linkedin.com/in/lubannoor",
  },
  {
    id: 3,
    title: "Email",
    image: "/socials/email.jpg",
    icon: <Mail size={20} />,
    url: "mailto:lubannoor@gmail.com",
  },
  {
    id: 4,
    title: "Twitter / X",
    image: "/socials/twitter.jpg",
    icon: <FaXTwitter size={20} />,
    url: "https://x.com/LubanNoor",
  },
  {
    id: 5,
    title: "Instagram",
    image: "/socials/instagram.jpg",
    icon: <FaInstagram size={20} />,
    url: "https://instagram.com/lubannoor",
  },
];

  return (
  <section
    id="contact"
    className="relative pt-25 pb-0 border-t border-white/10 overflow-hidden"
  >
    {/* Liquid Chrome Background */}
    <div className="absolute inset-0 z-0">
      <LiquidChrome
        baseColor={[0.08, 0.08, 0.08]}
        speed={0.3}
        amplitude={0.3}
        interactive
      />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/55 z-[1] pointer-events-none" />

    <Container>
      <div className="relative z-10">
        <FadeIn>
          <StaggeredGrid
            showFooter={false}
            bentoItems={bentoItems}
            images={[
              "github",
              "linkedin",
              "email",
              "twitter",
              "instagram",
            ]}
          />
        </FadeIn>
      </div>
    </Container>
  </section>
);
}