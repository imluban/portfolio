import Container from "../ui/Container";
import FadeIn from "../ui/FadeIn";
import StaggeredGrid from "@/components/ui/staggered-grid";

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
      className="pt-25 pb-0 border-t border-white/10"
    >
      <Container>
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
      </Container>
    </section>
  );
}