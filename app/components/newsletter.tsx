import Image from "next/image";
import { buttonGradientClass, siteContainerClass } from "./site-container";

const NEWSLETTER_BG = "/images/news-letter-bg.png";

export function Newsletter() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <Image
          src={NEWSLETTER_BG}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#F6E4C9]/50"
      />

      <div className={`relative ${siteContainerClass}`}>
        <div className="mx-auto flex flex-col items-center gap-6 text-center sm:gap-7 lg:gap-8">
          <h2 className="font-serif text-3xl font-bold tracking-normal text-black sm:text-4xl lg:text-[80px] lg:leading-[99px]">
            Subscribe Our Newsletter
          </h2>

          <p className="max-w-4xl text-sm leading-7 text-black text-center sm:text-base sm:leading-8 lg:text-[22px] lg:leading-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer
          </p>

          <form
            className="flex w-full max-w-xl items-center overflow-hidden rounded-full bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] lg:h-[60px] lg:max-w-[906px]"
            action="#"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Enter your Email..."
              className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-black outline-none placeholder:text-zinc-400 sm:px-6 sm:py-4 sm:text-base"
            />
            <button
              type="submit"
              className={`shrink-0 px-6 py-3.5 text-sm font-semibold text-white sm:px-8 sm:py-4 sm:text-base ${buttonGradientClass}`}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
