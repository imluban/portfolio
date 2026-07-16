"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);
const pathname = usePathname();

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 40);
};


window.addEventListener("scroll", handleScroll);

return () =>
  window.removeEventListener("scroll", handleScroll);


}, []);

const [activeHash, setActiveHash] = useState("");

const [contactActive, setContactActive] = useState(false);

useEffect(() => {
  const contactSection =
    document.getElementById("contact");

  if (!contactSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setContactActive(entry.isIntersecting);
    },
    {
      threshold: 0.4,
    }
  );

  observer.observe(contactSection);

  return () => observer.disconnect();
}, [pathname]);

const isHome =
  pathname === "/" &&
  activeHash !== "#contact";

const isProjects =
  pathname === "/projects";

const isBlog =
  pathname === "/blog";

const isContact =
  pathname === "/" &&
  activeHash === "#contact";

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
              bg-black/40
              backdrop-blur-2xl
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
  <NavLink
  href="/"
  active={
    pathname === "/" &&
    !contactActive
  }
>
  Home
</NavLink>

  <NavLink
    href="/projects"
    active={isProjects}
  >
    Projects
  </NavLink>

  <NavLink
    href="/blog"
    active={isBlog}
  >
    Blog
  </NavLink>

  <NavLink
  href="/#contact"
  active={
    pathname === "/" &&
    contactActive
  }
>
  Contact
</NavLink>
</nav>

        <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="
    md:hidden
    relative
    w-5
    h-5
    flex
    items-center
    justify-center
  "
>
  <span
    className={`
      absolute
      h-[1.8px]
      w-5
      bg-white
      rounded-full
      transition-all
      duration-300
      ${
        mobileOpen
          ? "rotate-45 translate-y-0"
          : "-translate-y-[5px]"
      }
    `}
  />

  <span
    className={`
      absolute
      h-[1.8px]
      w-5
      bg-white
      rounded-full
      transition-all
      duration-300
      ${
        mobileOpen
          ? "opacity-0"
          : "opacity-100"
      }
    `}
  />

  <span
    className={`
      absolute
      h-[1.8px]
      w-5
      bg-white
      rounded-full
      transition-all
      duration-300
      ${
        mobileOpen
          ? "-rotate-45 translate-y-0"
          : "translate-y-[5px]"
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

      rounded-4xl
      border
      border-white/10

      bg-black/40
      backdrop-blur-2xl

      shadow-[0_8px_40px_rgba(0,0,0,0.35)]

      transition-all
      duration-300
      ease-out

      ${
        mobileOpen
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }
    `}
  >
    <div className="p-6">
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
          href="/#contact"
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
  active,
}) {
  return (
    <Link
      href={href}
      className={`
        relative
        flex
        flex-col
        items-center
        transition-all
        duration-300
        ${
          active
            ? "text-[#dfff00]"
            : "text-zinc-400 hover:text-[#dfff00]"
        }
      `}
    >
      {children}

      <span
        className={`
          absolute
          -bottom-2
          w-1
          h-1
          rounded-full
          bg-[#dfff00]
          shadow-[0_0_8px_#dfff00]
          transition-all
          duration-300
          ${
            active
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
          }
        `}
      />
    </Link>
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
