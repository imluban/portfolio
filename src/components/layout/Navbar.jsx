import Link from "next/link";
import Container from "../ui/Container";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-2xl border-b border-white/10 py-4">
      <Container>
        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="transition duration-300 hover:scale-110"
          >
            <Image
              src="/logo22.png"
              alt="Luban Noor"
              width={42}
              height={42}
              priority
              className="drop-shadow-[0_0_10px_rgba(223,255,0,0.4)]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-zinc-400 hover:text-[#dfff00] transition"
            >
              Home
            </Link>

            <Link
              href="/projects"
              className="text-zinc-400 hover:text-[#dfff00] transition"
            >
              Projects
            </Link>

            <Link
              href="/blog"
              className="text-zinc-400 hover:text-[#dfff00] transition"
            >
              Blog
            </Link>

            <Link
              href="#contact"
              className="text-zinc-400 hover:text-[#dfff00] transition"
            >
              Contact
            </Link>

          </nav>

        </div>
      </Container>
    </header>
  );
}