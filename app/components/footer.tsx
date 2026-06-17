import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerContainerClass } from "./site-container";

const FOOTER_LOGO = "/images/footer-logo.png";
const CONTACT_ICON_GRADIENT_ID = "footer-contact-icon-gradient";

const accentColor = "text-[#C8945A]";

function ContactIconGradientDefs() {
  return (
    <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
      <defs>
        <linearGradient
          id={CONTACT_ICON_GRADIENT_ID}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="24"
          x2="24"
          y2="0"
          gradientTransform="rotate(100.05 12 12)"
        >
          <stop offset="-14.45%" stopColor="#DFAA0E" />
          <stop offset="48.91%" stopColor="#8E1418" />
          <stop offset="103.36%" stopColor="#005335" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-author", label: "About The Author" },
  { href: "#my-books", label: "My Books" },
  { href: "#contact", label: "Contact" },
] as const;

const helpfulLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/faqs", label: "FAQs" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
] as const;

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className={`size-3 shrink-0 ${accentColor}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M9.71 6.71a1 1 0 0 1 1.42 0l4.59 4.59a1 1 0 0 1 0 1.42l-4.59 4.59a1 1 0 0 1-1.42-1.42L13.59 12 9.71 8.12a1 1 0 0 1 0-1.41z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke={`url(#${CONTACT_ICON_GRADIENT_ID})`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke={`url(#${CONTACT_ICON_GRADIENT_ID})`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <rect height="16" rx="2" width="20" x="2" y="4" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke={`url(#${CONTACT_ICON_GRADIENT_ID})`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="flex items-center gap-2 text-sm text-black/80 transition-colors hover:text-black sm:text-[15px]"
          >
            <ChevronIcon />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function PaymentBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-[8px] py-[6px] items-center justify-center rounded-md bg-white  shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 bg-[#F6E4C9]">
      <div className={`${footerContainerClass} py-12 sm:py-14 lg:py-16`}>
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block w-fit">
              <Image
                src={FOOTER_LOGO}
                alt="Rainbow of Life"
                width={320}
                height={48}
                className="h-auto w-[240px] sm:w-[280px]"
              />
            </Link>
            <p className="max-w-xs text-sm leading-7 text-black/70 sm:text-[15px] sm:leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex flex-wrap items-center gap-1 pt-1">
              <PaymentBadge>
                <span className="text-[10px] font-bold italic tracking-tight text-[#1A1F71]">
                  VISA
                </span>
              </PaymentBadge>
              <PaymentBadge>
                <span className="flex items-center gap-0.5">
                  <span className="size-3 rounded-full bg-[#EB001B]" />
                  <span className="-ml-1.5 size-3 rounded-full bg-[#F79E1B]" />
                </span>
              </PaymentBadge>
              <PaymentBadge>
                <span className="text-[11px] font-bold">
                  <span className="text-[#003087]">Pay</span>
                  <span className="text-[#009CDE]">Pal</span>
                </span>
              </PaymentBadge>
              <PaymentBadge>
                <span className="text-[10px] font-semibold text-black">
                  Pay
                </span>
              </PaymentBadge>
              <div className="lg:flex lg:items-center lg:justify-center">
                <PaymentBadge>
                  <span className="text-[10px] font-semibold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-black"> Pay</span>
                  </span>
                </PaymentBadge>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-xl font-bold text-black sm:text-[1.35rem]">
              Quick Links
            </h3>
            <FooterLinkList links={quickLinks} />
          </div>

          <div>
            <h3 className="mb-5 font-serif text-xl font-bold text-black sm:text-[1.35rem]">
              Helpful links
            </h3>
            <FooterLinkList links={helpfulLinks} />
          </div>

          <div className="relative">
            <ContactIconGradientDefs />
            <h3 className="mb-5 font-serif text-xl font-bold text-black sm:text-[1.35rem]">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-black/80 sm:text-[15px]">
                <PhoneIcon />
                (123) 456 78901
              </li>
              <li className="flex items-center gap-3 text-sm text-black/80 sm:text-[15px]">
                <MailIcon />
                <a
                  href="mailto:info@gmail.com"
                  className="transition-colors hover:text-black"
                >
                  info@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-black/80 sm:text-[15px]">
                <LocationIcon />
                <span>Your, Dummy, 4578, USA.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 w-full border-t border-black/15 pt-6 sm:mt-14 sm:pt-7">
          <p className="text-center text-xs text-black/70 sm:text-sm">
            © Copyright 2026 Rainbow Of Life. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
