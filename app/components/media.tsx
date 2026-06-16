import Image from "next/image";
import Link from "next/link";
import {buttonBaseClass, buttonGradientClass, siteContainerClass} from "./site-container";

const mediaImages = {
    col2Bottom: "/images/media-image-3.png",
    col2Top: "/images/media-image-2.png",
    col3Top: "/images/media-image-4.png",
    contentImage: "/images/media-image-1.png",
    col3Bottom: "/images/media-image-5.png"
};

function MediaPhoto({src, alt} : {
    src : string;
    alt : string
}) {
    return (
        <div className="aspect-[10/11] w-full overflow-hidden rounded-[28px] shadow-[0_12px_32px_rgba(0,0,0,0.14)] sm:rounded-[32px] lg:rounded-[36px]">
            <Image src={src}
                alt={alt}
                width={300}
                height={330}
                className="h-full w-full object-cover"/>
        </div>
    );
}

export function Media() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
            <div className={
                `grid gap-10 sm:gap-12 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-6 xl:gap-8 ${siteContainerClass}`
            }>
                {/* first column */}
                <div className="flex flex-col">
                    <div className="flex flex-col items-start gap-7 sm:gap-8">
                    <span className="flex items-center justify-center rounded-full bg-[#1a4d3a] px-6 py-2.5 text-xs font-bold uppercase tracking-[1px] text-white sm:text-sm lg:h-[34px] lg:w-[78px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[14px] lg:leading-[14px]">
                            Media
                        </span>

                        <h2 className="font-serif text-4xl font-bold leading-[1.08] text-black sm:text-5xl lg:text-6xl">
                            Pictures From
                            <br/>
                            Shows & Events
                        </h2>

                        <p className="text-base leading-8 text-black/70 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10 lg:text-[22px] lg:leading-9">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.
                        </p>
                        
                        <Link href="/contact"
                            className={
                                `${buttonBaseClass} ${buttonGradientClass} flex items-center justify-center border-2 border-white px-12 py-4.5 text-sm font-bold uppercase tracking-normal sm:px-14 sm:py-5 sm:text-base lg:h-[52px] lg:w-[177px] lg:rounded-[100px] lg:px-0 lg:py-0 lg:text-[20px] lg:leading-[20px]`
                        }>
                            Learn More
                        </Link>
                    </div>

                    <div className="max-w-[350px] pt-10 ml-auto">
                        <MediaPhoto src={
                                mediaImages.contentImage
                            }
                            alt="Knight in silver armor at a show event"/>
                    </div>
                </div>
                {/* second column */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:pt-[250px]">
                    <MediaPhoto src={
                            mediaImages.col2Top
                        }
                        alt="Knight with shield at a reenactment"/>
                    <MediaPhoto src={
                            mediaImages.col2Bottom
                        }
                        alt="Knight with sword and shield at an event"/>
                </div>
                {/* third column */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:pb-10 xl:pb-12">
                    <MediaPhoto src={
                            mediaImages.col3Top
                        }
                        alt="Group of knights in battle reenactment"/>
                    <MediaPhoto src={
                            mediaImages.col3Bottom
                        }
                        alt="Knights on horseback at a show"/>
                </div>
            </div>
        </section>
    );
}
