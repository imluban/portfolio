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

          <div className="text-zinc-500 text-sm">
            <p className="flex items-center">
              <span>Designed & Built by</span>

              <Image
                src="/logo22.png"
                alt="LN"
                width={20}
                height={20}
                className="ml-1 relative top-[0.7px] drop-shadow-[0_0_8px_rgba(223,255,0,0.3)]"
              />
            </p>
          </div>

        </div>

      </Container>
    </footer>
  );
}