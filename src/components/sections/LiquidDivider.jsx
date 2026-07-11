"use client";

import Container from "../ui/Container";
import { LiquidText } from "@/components/ui/liquid-text";

export default function LiquidDivider() {
  return (
    <section className="py-10 overflow-hidden">
      <Container>
        <div className="flex justify-center">
          <LiquidText
            text="BEING CREATIVE."
            className="max-w-6xl"
          />
        </div>
      </Container>
    </section>
  );
}