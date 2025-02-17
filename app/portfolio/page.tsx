import Header from "../components/header";
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

export default function portfolio() {
    return (
        <div className="overflow-clip">
            <Header currentPage="portfolio" />
            <section className="h-screen w-screen bg-bannerMarImg bg-repeat bg-cover bg-bottom">
                <div className="flex justify-center items-center w-full h-screen px-16 bg-blackOverlay">
                    <div className="w-1/2">
                        <h1>portfolio</h1>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center h-screen shadow-xl">
                        <nav className="flex justify-center items-center gap-24 p-8 w-fit">
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
                        width="75%" height="352" frameBorder="0" 
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

            <section className="h-3/4 w-screen flex justify-center flex-col items-center bg-bannerAltImg bg-repeat bg-cover bg-bottom">
                <h1 className="text-white text-6xl p-6">
                    Happy Clients
                </h1>
                <nav className="flex justify-center items-center gap-10 w-full">
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
                <p className="text-white text-1xl p-8 mx-96">
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
            </section>
        </div>
    );
}