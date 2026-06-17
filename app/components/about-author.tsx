import Image from "next/image";
import Link from "next/link";
import { buttonBaseClass, buttonGradientClass, siteContainerClass } from "./site-container";

const AUTHOR_IMAGE = "/images/author.webp";

export function AboutAuthor() {
  return (
    <section id="about-author" className="relative -mt-24 scroll-mt-28 pb-16 pt-2 sm:-mt-28 sm:pb-20 sm:pt-4 lg:-mt-32 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-100"
      />

      <div
        className={`relative grid items-center gap-12 sm:gap-14 lg:grid-cols-2 xl:gap-[100px] ${siteContainerClass}`}
      >
        <div className="relative z-100 flex justify-center lg:justify-start">
          <div className="relative z-100 w-full max-w-[720px] sm:max-w-[820px] lg:max-w-none lg:scale-[1.3] lg:origin-left xl:scale-[1.3] 2xl:scale-[1.5]">
            <Image
              src={AUTHOR_IMAGE}
              alt="Michael Pryce, author"
              width={1000}
              height={1000}
              className="h-auto w-full object-contain z-[999] relative -translate-x-30"
            />
          </div>
        </div>

        <div className="z-10 flex w-full flex-col items-start gap-8 sm:gap-9 lg:gap-10">
        <span className="flex items-center justify-center rounded-full bg-[#1a4d3a] px-6 py-2.5 text-xs font-bold uppercase tracking-[1px] text-white sm:text-sm lg:h-[34px] lg:w-[190px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[14px] lg:leading-[14px]">
            About the Author
          </span>

          <h2 className="font-serif w-full text-5xl font-bold tracking-normal text-black sm:text-6xl lg:text-[4.5rem] xl:text-[80px]">
            Michael Pryce
          </h2>

          <p className="w-full max-w-2xl text-lg leading-9 text-black sm:text-xl sm:leading-10 lg:max-w-none lg:text-[22px] lg:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <Link
            href="/"
            className={`${buttonBaseClass} ${buttonGradientClass} flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-normal sm:px-12 sm:py-4 sm:text-[15px] border-2 border-white shadow-[6px_6px_12px_rgba(0,0,0,0.25)] lg:h-[52px] lg:w-[177px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[20px] lg:leading-[20px]`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
