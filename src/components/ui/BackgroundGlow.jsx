"use client";

import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [pos, setPos] = useState({
    x: 500,
    y: 500,
  });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(
            600px circle at ${pos.x}px ${pos.y}px,
            rgba(223,255,0,0.12),
            transparent 50%
          )
        `,
      }}
    />
  );
}