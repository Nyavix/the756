import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import chainS from "../../public/graphics/HC/TheChainsmokers.png";
import bludN from "../../public/graphics/HC/Bludnymph.png";
import dizzy from "../../public/graphics/HC/DizzyIsDead.png";
import complete from "../../public/graphics/HC/Complete.png";
import teonG from "../../public/graphics/HC/Teon Gibbs.png";
import spotifyLogo from "../../public/graphics/Spotify.png";
import musoLogo from "../../public/graphics/MusoAI.png";
import soundcloudLogo from "../../public/graphics/Soundcloud.png";
import youtubeLogo from "../../public/graphics/YoutubeRed.png";
import { BiArrowToRight } from "react-icons/bi";
import ccThumb from "../../public/graphics/YT-Thumbs/ChequetoCheque-Thumb.png";
import mtThumb from "../../public/graphics/YT-Thumbs/MasteringTemplate-Thumb.png";

export default function portfolio() {
    return (
        <div className="overflow-clip font-main">
            <Header currentPage="portfolio" />
            <section className=" w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex md:flex-row flex-col justify-center items-center w-full md:px-16 bg-blackOverlay">
                    <div className="md:w-1/2 md:-translate-y-12 translate-y-12 px-8 py-16">
                        <h1 className="text-2xl py-8 font-bold drop-shadow-md">Bringing Your Sound to Life</h1>
                        <p className="text-1xl py-8 drop-shadow-md">
                            At The 756, we don’t just produce music—we craft sonic experiences. 
                            Our team of passionate producers, engineers, and artists work tirelessly 
                            to ensure that every project reaches its full potential. From raw ideas 
                            to radio-ready records, we handle everything from production to mixing 
                            and mastering with precision and creativity.
                        </p>
                        <p>
                            Our Work Speaks for Itself.
                        </p>
                        <div className="flex justify-between items-center gap-10 py-8">
                            <p>
                                Check out some of the projects we&apos;ve worked on
                            </p>
                            <BiArrowToRight size={32} />
                        </div>
                        
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center items-center md:py-36 py-4 shadow-xl">
                        <nav className="flex justify-center items-center gap-12 md:gap-24 p-8 w-screen md:w-fit">
                            <Link rel="stylesheet" href="https://open.spotify.com/playlist/074YJaBM2Nq0jQhtPpmW6h?si=qaIOrW-bTouzx8NygX3z5Q&pi=ky9yuNrAQN6Qj"  
                                className="transition ease-in-out hover:scale-110">
                                <Image src={spotifyLogo} alt="Spotify" width={50} height={50} />
                            </Link>
                            <Link rel="stylesheet" href="https://credits.muso.ai/artist/0ac1aa8c-9beb-40e1-86c3-242e96c016c9" 
                                className="transition ease-in-out hover:scale-110">
                                <Image src={musoLogo} alt="MusoAI" width={50} height={50} />
                            </Link>
                            <Link rel="stylesheet" href="https://on.soundcloud.com/DirGu7kHSMUz9zD18"  
                                className="transition ease-in-out hover:scale-110">
                                <Image src={soundcloudLogo} alt="Soundcloud" width={50} height={50} />
                            </Link>
                            <Link rel="stylesheet" href="https://www.youtube.com/@756studio"  
                                className="transition ease-in-out hover:scale-110">
                                <Image src={youtubeLogo} alt="Youtube" width={50} height={50} />
                            </Link>
                        </nav>
                        <div className="flex justify-center w-full items-center">
                        <iframe style={{ borderRadius: "12px" }} 
                        src="https://open.spotify.com/embed/playlist/074YJaBM2Nq0jQhtPpmW6h?utm_source=generator" 
                        width="90% md:75%" height="352" frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy" title="Spotify Playlist" className="shadow-lg transition-all ease-in-out hover:shadow-2xl hover:animate-wiggle"></iframe>
                        </div>
                        <div>
                            <Script src="https://apis.google.com/js/platform.js" strategy="lazyOnload"></Script>

                            <div data-channel="@756studio" data-layout="default" data-theme="dark" data-count="hidden"></div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="h-3/4 w-screen flex justify-center flex-col items-center bg-bannerAltImg bg-no-repeat bg-fixed bg-cover bg-bottom">
                <div className="bg-blackOverlay w-full h-full flex flex-col justify-center items-center md:py-16">
                    <h1 className="text-white text-6xl p-6 text-center">
                        Happy Clients
                    </h1>
                    <p className="text-white text-1xl py-4 px-2 md:mx-96">
                        Every song has a story—our
                        job is to make sure yours is
                        heard in its purest, most
                        powerful form. At The 756, we
                        provide a professional space
                        where creativity flourishes
                        and sound quality is uncompromising. From production to
                        mixing and mastering, we handle every detail so you can
                        focus on what matters: the
                        music.
                    </p>
                    <nav className="md:flex md:flex-row grid grid-auto-flow:row grid-cols-2 grid-rows-3 justify-center items-center md:gap-10 w-full">
                        <div className="transition ease-in-out hover:scale-110">
                            <Image src={chainS} alt="TheChainsmokers" width={200} height={200} />
                        </div>
                        <div className="transition ease-in-out hover:scale-110">
                        <Image src={bludN} alt="Bludnymph" width={200} height={200} />
                        </div>
                        <div className="transition ease-in-out hover:scale-110">
                        <Image src={dizzy} alt="DizzyIsDead" width={200} height={200} />
                        </div>
                        <div className="transition ease-in-out hover:scale-110">
                        <Image src={complete} alt="Complete" width={200} height={200} />
                        </div>
                        <div className="transition ease-in-out hover:scale-110">
                        <Image src={teonG} alt="TeonGibbs" width={200} height={200} />
                        </div>
                    </nav>
                </div>
            </section>

            <section className="w-screen bg-bannerAltImg bg-repeat bg-cover bg-bottom">
                <div className="flex flex-col justify-center items-center w-full px-4 md:px-16 bg-blackOverlay shadow-inner">
                    <div className="text-white text-4xl py-8 font-bold text-center">  
                        <h1>Checkout Our Engineering Breakdowns</h1>
                    </div>
                    <div>
                        <p className="text-white text-1xl py-8 md:px-48">
                            Our engineering breakdowns provide an in-depth look at the process behind the music. 
                            From the initial idea to the final mix, we take you through every step of the production 
                            process, giving you a behind-the-scenes look at how we bring your sound to life.
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-10">
                        <Link rel="stylesheet" href="https://www.youtube.com/watch?v=Zo7z3vFI3Y8" className="transition ease-in-out hover:scale-105">
                            <Image src={ccThumb} alt="CCThumb" width={400}/>
                        </Link>
                        <Link rel="stylesheet" href="https://www.youtube.com/watch?v=nxdfgA8DS6g&t=198s" className="transition ease-in-out hover:scale-105">
                            <Image src={mtThumb} alt="MTThumb" width={400}/>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}