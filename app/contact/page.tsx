'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

import fb from "../../public/graphics/facebook.png";
import ig from "../../public/graphics/instagram.png";
import yt from "../../public/graphics/youtube.png";
import li from "../../public/graphics/tiktok.png";

export default function Contact() {

    return (
        <div className="overflow-clip font-main">
            <Header currentPage="contact" />
            <section className="w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center w-full z-0 pt-16 px-16 bg-blackOverlay gap-4">
                    <div className="md:w-1/2 md:p-16 py-16 flex flex-col justify-center items-center shadow-xl">

                    
                        <h1 className="text-4xl p-4">Get in touch</h1>
                        <p className="p-4">Great Music Starts With a Conversation. Let’s Connect.</p>
                        <div className="flex justify-between gap-10 p-2">
                            <Link rel="stylesheet" href="/" className="transition ease-in-out hover:scale-110">
                            <Image src={fb} alt="Facebook" width={26} height={26} />
                            </Link>
                            <Link rel="stylesheet" href="/" className="transition ease-in-out hover:scale-110">
                            <Image src={ig} alt="Instagram" width={26} height={26} />
                            </Link>
                            <Link rel="stylesheet" href="/" className="transition ease-in-out hover:scale-110">
                            <Image src={yt} alt="Youtube" width={26} height={26} />
                            </Link>
                            <Link rel="stylesheet" href="/" className="transition ease-in-out hover:scale-110">
                            <Image src={li} alt="LinkedIn" width={26} height={26} />
                            </Link>
                        </div>
                        <div className="py-4">
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div className="elfsight-app-1fe2cda6-0b66-4135-8b10-39376e2fc449" data-elfsight-app-lazy></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}