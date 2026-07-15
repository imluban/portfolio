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

const closeMenu = () => {
setMobileOpen(false);
};

return (
<> <header
     className="
       fixed
       top-2
       left-0
       right-0
       z-50
       transition-all
       duration-300
     "
   > <Container>
<div
className={`               max-w-3xl
              mx-auto
              flex
              items-center
              justify-between
              rounded-4xl
              border
              border-white/10
              backdrop-blur-2xl
              bg-black/40
              px-8
              transition-all
              duration-300
              ${scrolled ? "h-14" : "h-17"}
            `}
> <Link
           href="/"
           className="transition duration-300"
         > <Image
             src="/logo22.png"
             alt="Luban Noor"
             width={27}
             height={27}
             priority
           /> </Link>

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-6
          "
        >
          <NavLink href="/">Home</NavLink>

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
            relative
            w-6
            h-6
            text-white
          "
        >
          <Menu
            size={24}
            className={`
              absolute
              inset-0
              transition-all
              duration-300
              ease-out
              ${
                mobileOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }
            `}
          />

          <X
            size={24}
            className={`
              absolute
              inset-0
              transition-all
              duration-300
              ease-out
              ${
                mobileOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }
            `}
          />
        </button>
      </div>
    </Container>
  </header>

  <div
    className={`
      fixed
      top-20
      left-4
      right-4
      z-40
      md:hidden

      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]

      ${
        mobileOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
      }
    `}
  >
    <div
      className="
        rounded-4xl
        border
        border-white/10
        bg-black/40
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.35)]
        p-6
      "
    >
      <div className="flex flex-col gap-5">
        <MobileLink
          href="/"
          onClick={closeMenu}
        >
          Home
        </MobileLink>

        <MobileLink
          href="/projects"
          onClick={closeMenu}
        >
          Projects
        </MobileLink>

        <MobileLink
          href="/blog"
          onClick={closeMenu}
        >
          Blog
        </MobileLink>

        <MobileLink
          href="#contact"
          onClick={closeMenu}
        >
          Contact
        </MobileLink>
      </div>
    </div>
  </div>
</>

);
}

function NavLink({
href,
children,
}) {
return ( <Link
   href={href}
   className="
     text-zinc-400
     hover:text-[#dfff00]
     transition
     duration-300
   "
 >
{children} </Link>
);
}

function MobileLink({
href,
children,
onClick,
}) {
return ( <Link
   href={href}
   onClick={onClick}
   className="
     text-zinc-400
     hover:text-[#dfff00]
     transition-all
     duration-300
     hover:translate-x-2
   "
 >
{children} </Link>
);
}
