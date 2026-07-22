"use client";

import { useEffect } from "react";

export default function MatrixProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / docHeight) * 100;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress}%`
      );
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      updateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div className="matrix-progress">
      <div className="matrix-progress-fill" />
    </div>
  );
}