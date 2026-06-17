import Image from "next/image";
import Link from "next/link";
import {buttonBaseClass, buttonGradientClass, siteContainerClass} from "./site-container";

const BOOK_IMAGE = "/images/Hard Cover Book 1.webp";
const HERO_BG = "/images/hero-bg-1.webp";

export function Hero() {
    return (
        <section className="relative -mt-[2.5rem] min-h-[820px] overflow-x-clip pt-[6.5rem] sm:min-h-[980px] lg:min-h-[1180px]">
            <Image src={HERO_BG}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"/>

            <div className={
                `relative grid min-h-[calc(920px-6.5rem)] items-start gap-10 pb-24 pt-28 sm:min-h-[calc(980px-6.5rem)] sm:gap-12 sm:pb-28 sm:pt-32 md:grid-cols-12 md:items-center md:gap-12 md:pb-20 md:pt-24 lg:min-h-[calc(1180px-6.5rem)] lg:items-stretch lg:gap-14 lg:pb-32 lg:pt-44 xl:pt-48 ${siteContainerClass}`
            }>
                <div className="z-10 flex w-full flex-col items-start gap-7 sm:gap-8 md:col-span-12 md:items-center md:text-center md:gap-7 lg:col-span-6 lg:items-start lg:text-left lg:gap-9">
                    <span className="rounded-full bg-[#1a4d3a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-[13px]">
                        By Michael Pryce
                    </span>

                    <h1 className="font-serif text-4xl font-bold leading-[1.06] tracking-normal text-black sm:text-6xl md:text-5xl lg:text-[4.25rem] xl:text-[80px]">
                        Welcome To
                        <br/>
                        Rainbow of Life
                    </h1>

                    <p className="w-full max-w-[34rem] text-sm capitalize leading-7 text-black/75 sm:text-lg sm:leading-9 md:max-w-2xl md:text-base md:leading-8 lg:max-w-none lg:text-[22px] lg:leading-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                      aliquip ex ea commodo consequat.
                    </p>

                    <Link href="/"
                        className={
                            `${buttonBaseClass} ${buttonGradientClass} flex items-center justify-center px-10 py-4 text-sm font-bold capitalize tracking-normal sm:px-12 sm:py-4 sm:text-[15px] border-2 border-white shadow-[6px_6px_12px_rgba(0,0,0,0.25)] lg:h-[52px] lg:w-[177px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[20px] lg:leading-[20px]`
                    }>
                        Shop Now
                    </Link>
                </div>

                <div className="relative z-10 flex w-full items-center justify-center md:col-span-12 md:mt-4 lg:col-span-6 lg:mt-0 lg:justify-end">
                    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[760px] md:max-w-[560px] md:-translate-x-10 md:scale-110 lg:mx-0 lg:max-w-none lg:w-full lg:translate-x-0 lg:scale-[1.55] lg:origin-[center_right] xl:scale-[1.52] 2xl:scale-[1.62]">
                        <Image src={BOOK_IMAGE}
                            alt="The Great Continent: A History of Ancient Africa by Martin Bidzinski"
                            width={840}
                            height={980}
                            priority
                            sizes="(max-width: 1024px) 90vw, 50vw"
                            className="relative h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)] lg:translate-x-0 lg:translate-y-5 xl:translate-x-20"/>
                    </div>
                </div>
            </div>
        </section>
    );
}