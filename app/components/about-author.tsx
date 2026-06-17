import Image from "next/image";
import Link from "next/link";
import { buttonBaseClass, buttonGradientClass, siteContainerClass } from "./site-container";

const AUTHOR_IMAGE = "/images/author-pryce.webp";
const FLAG_IMAGE = "/images/us-flag.svg";

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
          <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[460px] lg:mx-0 lg:max-w-[500px]">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-5 z-0 h-[86%] w-[90%] -rotate-3 overflow-hidden rounded-[30px] shadow-[0_18px_44px_rgba(0,0,0,0.2)] ring-1 ring-black/5 sm:-right-6 sm:-top-7"
            >
              <Image
                src={FLAG_IMAGE}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 1024px) 90vw, 500px"
                className="object-cover object-left-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a4d3a]/25 via-transparent to-[#DFAA0E]/15 mix-blend-multiply" />
            </div>

            <div
              className={`relative z-10 rounded-[30px] p-[3px] shadow-[0_26px_60px_rgba(0,0,0,0.25)] ${buttonGradientClass}`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[27px] bg-white">
                <Image
                  src={AUTHOR_IMAGE}
                  alt="Michael Pryce, author"
                  width={880}
                  height={1100}
                  priority
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
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
