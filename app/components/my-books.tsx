import Image from "next/image";
import Link from "next/link";
import {buttonBaseClass, buttonGradientClass, siteContainerClass} from "./site-container";

const SECTION_BG = "/images/my-book-bg-1.webp";
const LEFT_BOOK = "/images/left-book.webp";
const RIGHT_BOOK = "/images/right-book.webp";

export function MyBooks() {
    return (
        <section id="my-books" className="relative mt-12 scroll-mt-28 sm:mt-16 lg:mt-20">
            <Image src={SECTION_BG}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"/>


            <Image src={LEFT_BOOK}
                alt="Platform: Get Noticed in a Noisy World by Michael Hyatt"
                width={700}
                height={700}
                className="h-auto w-[600px] absolute -bottom-20 left-0"/>
            <Image src={RIGHT_BOOK}
                alt="Platform: Get Noticed in a Noisy World by Michael Hyatt"
                width={700}
                height={700}
                className="h-auto w-[700px] absolute -bottom-20 right-0"/>


            <div className={
                `relative flex min-h-[760px] flex-col sm:min-h-[820px] lg:min-h-[900px] xl:min-h-[960px] ${siteContainerClass}`
            }>
                <div className="relative z-10 flex flex-col items-center gap-6 px-4 pt-16 text-center sm:gap-7 sm:pt-20 lg:gap-8 lg:pt-24 xl:pt-28">
                <span className="flex items-center justify-center rounded-full bg-[#1a4d3a] px-6 py-2.5 text-xs font-bold uppercase tracking-[1px] text-white sm:text-sm lg:h-[34px] lg:w-[130px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[14px] lg:leading-[14px]">
                        My Books
                    </span>

                    <h2 className="font-serif font-bold tracking-normal text-black text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[100px] xl:leading-[99px]">
                        Books By Michael Pryce
                    </h2>

                    <p className="font-normal px-[200px] text-[22px] leading-9 tracking-normal text-center text-black/75">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley
                    </p>

                    <Link href="/my-books"
                        className={
                            `${buttonBaseClass} ${buttonGradientClass} flex items-center justify-center px-10 py-4 text-sm font-bold uppercase tracking-normal sm:px-12 sm:py-4 sm:text-[15px] border-2 border-white shadow-[6px_6px_12px_rgba(0,0,0,0.25)] lg:h-[52px] lg:w-[223px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[20px] lg:leading-[20px]`
                    }>
                        View All Books
                    </Link>
                </div>

                {/* <div className="relative z-10 mt-8 min-h-[280px] flex-1 sm:min-h-[320px] lg:mt-10 lg:min-h-[360px]">
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 lg:gap-16">
            <div className="w-[38%] max-w-[400px] shrink-0 sm:max-w-[440px] lg:max-w-[480px] lg:scale-[1.1] lg:origin-bottom-left xl:scale-[1.14]">
              <Image
                src={LEFT_BOOK}
                alt="Platform: Get Noticed in a Noisy World by Michael Hyatt"
                width={700}
                height={700}
                className="h-auto w-full object-contain object-bottom absolute bottom-0 left-0"
              />
            </div>

            <div className="w-[42%] max-w-[440px] shrink-0 sm:max-w-[500px] lg:max-w-[560px] lg:scale-[1.22] lg:origin-bottom-right xl:max-w-[620px] xl:scale-[1.3]">
              <Image
                src={RIGHT_BOOK}
                alt="Me and My Game of Football by Martin Bidzinski"
                width={700}
                height={700}
                className="ml-auto h-auto w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div> */} </div>
        </section>
    );
}
