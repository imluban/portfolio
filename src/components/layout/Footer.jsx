import Container from "../ui/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-24">
      <Container>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Luban Noor
          </p>

          <p className="text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <span>Designed & Built by</span>

              <Image
                src="/logo.png"
                alt="LN"
                width={24}
                height={24}
                className="drop-shadow-[0_0_8px_rgba(223,255,0,0.3)]"
              />
            </div>
          </p>

        </div>

      </Container>
    </footer>
  );
}