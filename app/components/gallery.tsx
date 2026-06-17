import Image from "next/image";
import { buttonGradientClass, siteContainerClass } from "./site-container";

const galleryPhotos = [
  {
    src: "/images/gallery-michael-1.webp",
    alt: "Michael Pryce in camouflage jacket and fur hat",
    caption: "Free Spirit",
  },
  {
    src: "/images/gallery-michael-2.webp",
    alt: "Michael Pryce wearing a rasta beanie and sunglasses",
    caption: "Good Vibes",
  },
];

export function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-16 sm:py-20 lg:py-24">
      <div className={`relative ${siteContainerClass}`}>
        <div className="flex flex-col items-center gap-6 text-center sm:gap-7">
          <span className="flex items-center justify-center rounded-full bg-[#1a4d3a] px-6 py-2.5 text-xs font-bold uppercase tracking-[1px] text-white sm:text-sm lg:h-[34px] lg:w-[110px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[14px] lg:leading-[14px]">
            Gallery
          </span>

          <h2 className="font-serif text-4xl font-bold leading-[1.08] text-black sm:text-5xl lg:text-6xl">
            Moments &amp; Memories
          </h2>

          <p className="max-w-2xl text-base leading-8 text-black/70 sm:text-lg sm:leading-9 lg:text-[22px] lg:leading-9">
            A few candid frames from life behind the pages &mdash; captured in
            the colors that inspire the Rainbow of Life.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[920px] gap-6 sm:mt-14 sm:gap-8 sm:grid-cols-2 lg:mt-16">
          {galleryPhotos.map((photo, index) => (
            <figure
              key={photo.src}
              className={`group relative ${index === 1 ? "sm:mt-12" : ""}`}
            >
              <div
                className={`rounded-[28px] p-[3px] shadow-[0_18px_44px_rgba(0,0,0,0.18)] sm:rounded-[32px] lg:rounded-[36px] ${buttonGradientClass}`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-white sm:rounded-[30px] lg:rounded-[34px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={900}
                    height={1125}
                    sizes="(max-width: 640px) 90vw, 440px"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <figcaption className="absolute bottom-5 left-5 rounded-full bg-black/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:text-[13px]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
