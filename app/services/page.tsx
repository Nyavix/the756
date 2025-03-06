import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

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

export default function services() {
    return (
        <div className="overflow-clip font-main">
            <Header currentPage="services" />

            <section className="w-screen h-64 bg-bannerImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-end py-16 w-full h-64 bg-blackOverlay">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Mixing and Mastering Services</h1>
                </div>
            </section>

            <section className="h-full w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center md:gap-10">
                    <div className="transition ease-in-out hover:scale-105">
                        <Image src={mmbeginner} alt="beginner" width={300}/>
                    </div>
                    <div className="transition ease-in-out hover:scale-105">
                        <Image src={mmintermediate} alt="beginner" width={300} />
                    </div>
                    <div className="transition ease-in-out hover:scale-105">
                        <Image src={mmadvanced} alt="beginner" width={300} />
                    </div>
                    <div className="transition ease-in-out hover:scale-105">
                        <Image src={mmastering} alt="beginner" width={300} />
                    </div>
                </div>
            </section>

            <section className="w-screen h-64 bg-bannerImg bg-repeat bg-cover bg-center">
                <div className="flex justify-center items-center py-16 w-full h-64">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Beats</h1>
                </div>
            </section>

            <section className="h-full w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center gap-10">
                    <h1 className="text-4xl font-bold py-24">Beat Stars Embbed</h1>
                </div>
            </section>

            <section className="w-screen h-64 bg-bannerImg bg-repeat bg-cover bg-bottom">
                <div className="flex justify-center items-center py-16 w-full h-64">
                    <h1 className="text-4xl font-bold text-center drop-shadow-lg">Beat Licensing</h1>
                </div>
            </section>

            <section className="h-full w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div  className="flex justify-center items-center py-6 md:py-16">
                    <div className="grid grid-cols-3 md:gap-4">
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={bfullm} alt="bfullm" width={250}/>
                        </div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={bfullu} alt="bfullu" width={250} />
                        </div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={bfullmm} alt="bfullmm" width={250} />
                        </div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={bmw} alt="bmw" width={250} />
                        </div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={bumw} alt="bumw" width={250} />
                        </div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={buts} alt="buts" width={250} />
                        </div>
                        <div></div>
                        <div className="transition ease-in-out hover:scale-105">
                            <Image src={ber} alt="ber" width={300} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}