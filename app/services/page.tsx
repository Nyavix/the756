import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import mmbeginner from "../../public/graphics/M&M/M&M-Beginner_Panel.png";
import mmintermediate from "../../public/graphics/M&M/M&M-Intermediate_Panel.png";
import mmadvanced from "../../public/graphics/M&M/M&M-Advanced_Panel.png";
import mmastering from "../../public/graphics/M&M/M&M-Mastering_Panel.png";

import bfullm from "../../public/graphics/Beats/B-Full Monetization_Panel.png";
import bfullu from "../../public/graphics/Beats/B-FullUnlimited+CustomStructure_Panel.png";
import bfullmm from "../../public/graphics/Beats/B-Full_Monetization+Mixing_Panel.png";
import bmw from "../../public/graphics/Beats/B-MP3+WAV_Panel.png";
import bumw from "../../public/graphics/Beats/B-Unlimited_MP3+WAV_Panel.png";
import buts from "../../public/graphics/Beats/B-Unlimited_Track_Stems_Panel.png";
import ber from "../../public/graphics/Beats/B-ExclusiveRights_Panel.png";

interface ServiceImage {
  src: StaticImageData;
  alt: string;
  width: number;
}

const M_AND_M_IMAGE_PAIRS: ServiceImage[][] = [
  [
    { src: mmbeginner, alt: "Mixing and Mastering Beginner Package panel", width: 300 },
    { src: mmintermediate, alt: "Mixing and Mastering Intermediate Package panel", width: 300 },
  ],
  [
    { src: mmadvanced, alt: "Mixing and Mastering Advanced Package panel", width: 300 },
    { src: mmastering, alt: "Mastering Services Package panel", width: 300 },
  ]
];

const BEAT_LICENSING_IMAGES_GRID: ServiceImage[] = [
  { src: bfullm, alt: "Full Monetization Beat License panel", width: 250 },
  { src: bfullu, alt: "Full Unlimited + Custom Structure Beat License panel", width: 250 },
  { src: bfullmm, alt: "Full Monetization + Mixing Beat License panel", width: 250 },
  { src: bmw, alt: "MP3 + WAV Beat License panel", width: 250 },
  { src: bumw, alt: "Unlimited MP3 + WAV Beat License panel", width: 250 },
  { src: buts, alt: "Unlimited Track Stems Beat License panel", width: 250 },
];

const EXCLUSIVE_RIGHTS_IMAGE: ServiceImage = { src: ber, alt: "Exclusive Rights Beat License panel", width: 300 };

export default function Services() {
    return (
        <div className="overflow-clip font-main">
            <Header currentPage="services" />

            <section className="w-screen h-64 bg-bannerImg bg-repeat md:bg-no-repeat md:bg-cover bg-top">
                <div className="flex justify-center items-end py-16 w-full h-64 bg-blackOverlay">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Mixing and Mastering Services</h1>
                </div>
            </section>

            <section className="w-screen bg-bannerMarImg bg-repeat md:bg-no-repeat md:bg-cover bg-top py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
                        {M_AND_M_IMAGE_PAIRS.map((pair, pairIndex) => (
                            <div key={pairIndex} className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
                                {pair.map((item, itemIndex) => (
                                    <div key={itemIndex} className="transition ease-in-out hover:scale-105">
                                        <Image src={item.src} alt={item.alt} width={item.width} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-screen h-64 bg-bannerImg bg-repeat md:bg-no-repeat md:bg-cover bg-center">
                <div className="flex justify-center items-center py-16 w-full h-64">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Beats</h1>
                </div>
            </section>

            <section className="w-screen bg-bannerMarImg bg-repeat md:bg-no-repeat md:bg-cover bg-top py-10">
                <div className="flex justify-center items-center">
                    <iframe
                        className="max-w-full"
                        src="https://player.beatstars.com/?storeId=150639"
                        width="80%"
                        height="800"
                        title="BeatStars embedded player"
                        style={{ border: 'none', borderRadius: '12px' }}
                    >
                        Your browser does not support iframes. Please visit <a href="https://player.beatstars.com/?storeId=150639" target="_blank" rel="noopener noreferrer">our BeatStars page</a> to listen to our beats.
                    </iframe>
                </div>
            </section>

            <section className="w-screen h-64 bg-bannerImg bg-repeat md:bg-no-repeat md:bg-cover bg-bottom">
                <div className="flex justify-center items-center py-16 w-full h-64">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Beat Licensing</h1>
                </div>
            </section>

            <section className="w-screen bg-bannerMarImg bg-repeat md:bg-no-repeat md:bg-cover bg-top py-6 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 place-items-center">
                        {BEAT_LICENSING_IMAGES_GRID.map((item, index) => (
                            <div key={index} className="transition ease-in-out hover:scale-105">
                                <Image src={item.src} alt={item.alt} width={item.width} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 md:mt-6 flex justify-center">
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={EXCLUSIVE_RIGHTS_IMAGE.src} alt={EXCLUSIVE_RIGHTS_IMAGE.alt} width={EXCLUSIVE_RIGHTS_IMAGE.width} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}