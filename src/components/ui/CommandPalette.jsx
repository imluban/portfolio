"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  const jump = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="matrix-command"
    >
      <Command.Input
        className="matrix-command-input"
        placeholder="Type a command..."
      />

      <Command.List>

        <Command.Item
          onSelect={() => jump("home")}
        >
          home
        </Command.Item>

        <Command.Item
          onSelect={() => jump("about")}
        >
          about
        </Command.Item>

        <Command.Item
          onSelect={() => jump("projects")}
        >
          projects
        </Command.Item>

        <Command.Item
          onSelect={() => jump("experience")}
        >
          experience
        </Command.Item>

        <Command.Item
          onSelect={() => jump("contact")}
        >
          contact
        </Command.Item>

        <Command.Item
          onSelect={() =>
            window.open(
              "https://github.com/imluban",
              "_blank"
            )
          }
        >
          github
        </Command.Item>

        <Command.Item
          onSelect={() =>
            window.open(
              "https://linkedin.com/in/lubannoor",
              "_blank"
            )
          }
        >
          linkedin
        </Command.Item>

      </Command.List>
    </Command.Dialog>
  );
}