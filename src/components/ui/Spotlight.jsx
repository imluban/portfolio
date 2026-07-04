"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
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
      className="
        fixed
        inset-0
        pointer-events-none
        z-0
      "
    >
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          blur-[140px]
        "
        style={{
          left: position.x - 250,
          top: position.y - 250,
          background:
            "rgba(223,255,0,0.08)",
          transition: "left 0.15s linear, top 0.15s linear",  
        }}
      />
    </div>
  );
}