"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-5
          left-0
          right-0
          z-50
          transition-all
          duration-300
        `}
      >
        <Container>

          <div
            className={`
              mx-auto
              flex
              items-center
              justify-between
              rounded-full
              border
              border-white/10
              backdrop-blur-2xl
              bg-black/40
              px-8
              transition-all
              duration-300
              ${
                scrolled
                  ? "h-14 shadow-[0_0_30px_rgba(223,255,0,0.08)]"
                  : "h-20"
              }
            `}
          >

            <Link
              href="/"
              className="
                transition
                duration-300
                hover:scale-110
              "
            >
              <Image
                src="/logo22.png"
                alt="Luban Noor"
                width={34}
                height={34}
                priority
                className="
                  drop-shadow-[0_0_12px_rgba(223,255,0,0.5)]
                "
              />
            </Link>

            <nav
              className="
                hidden
                md:flex
                items-center
                gap-8
              "
            >

              <NavLink href="/">
                Home
              </NavLink>

              <NavLink href="/projects">
                Projects
              </NavLink>

              <NavLink href="/blog">
                Blog
              </NavLink>

              <NavLink href="#contact">
                Contact
              </NavLink>

            </nav>

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="
                md:hidden
                text-white
              "
            >
              {mobileOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </Container>
      </header>

      {mobileOpen && (
        <div
          className="
            fixed
            top-28
            left-6
            right-6
            z-40
            rounded-3xl
            border
            border-white/10
            bg-black/90
            backdrop-blur-2xl
            p-6
            md:hidden
          "
        >
          <div className="flex flex-col gap-5">

            <Link href="/">
              Home
            </Link>

            <Link href="/projects">
              Projects
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="#contact">
              Contact
            </Link>

          </div>
        </div>
      )}
    </>
  );
}

function NavLink({
  href,
  children,
}) {
  return (
    <Link
      href={href}
      className="
        text-zinc-400
        hover:text-[#dfff00]
        transition
        duration-300
        relative
      "
    >
      {children}
    </Link>
  );
}