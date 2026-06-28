import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <Container>
        <div className="h-20 flex items-center justify-between">

          <Link
            href="/"
            className="font-black text-xl tracking-tight"
          >
            LN
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