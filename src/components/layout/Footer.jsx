import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-24">
      <Container>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 Luban Noor
          </p>

          <p className="text-zinc-500 text-sm">
            Designed & Built by LN
          </p>

        </div>

      </Container>
    </footer>
  );
}