"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingRole() {
  return (
    <div className="typing-terminal">
      <span className="typing-prompt">&gt;</span>

      <TypeAnimation
        sequence={[
          " Full-Stack Web Developer",
          2000,
          " Software Developer",
          2000,
          " AI Product Builder",
          2000,
          " Entrepreneur",
          2000,
        ]}
        speed={65}
        repeat={Infinity}
        cursor={false}
      />
    </div>
  );
}