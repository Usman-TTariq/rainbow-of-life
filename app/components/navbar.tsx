"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContainerClass } from "./site-container";

const LOGO_IMAGE = "/images/Rainbow of Life.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#", label: "About Author" },
  { href: "#", label: "My Books" },
  { href: "#", label: "Contact" },
] as const;

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute w-full top-0 z-50 py-5 sm:py-6">
      <div className={siteContainerClass}>
        <nav
          aria-label="Main navigation"
          className="relative flex h-14 w-full items-center justify-between rounded-full border-b  bg-[#faf8f5]/75 px-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md sm:h-16 sm:px-8"
        >
        <Link href="/" className="relative block shrink-0">
          <Image
            src={LOGO_IMAGE}
            alt="Rainbow of Life"
            width={224}
            height={24}
            priority
            className="h-[24px] w-[224px]"
          />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[67px] md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "text-[18px] font-extrabold capitalize leading-[30px] tracking-normal text-center text-black"
                      : "text-[18px] font-bold capitalize leading-[30px] tracking-normal text-center text-zinc-500 transition-colors hover:text-zinc-800"
                  }
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 text-black">
          <button
            type="button"
            aria-label="Open cart"
            className="rounded-full p-1 transition-opacity hover:opacity-70"
          >
            <CartIcon />
          </button>

          <span
            aria-hidden="true"
            className="h-5 w-px bg-zinc-300"
          />

          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-1 transition-opacity hover:opacity-70"
          >
            <SearchIcon />
          </button>
        </div>
        </nav>
      </div>
    </header>
  );
}
