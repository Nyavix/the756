import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

import Drew from "../../public/graphics/BioPics/Drew.png";
import Deus from "../../public/graphics/BioPics/Deus.png";
import Nvikelo from "../../public/graphics/BioPics/Nvikelo.png";
import Studio from "../../public/graphics/Studio.jpg";
import record from "../../public/graphics/Record.jpg";

import { RxMixerVertical } from "react-icons/rx";
import { CiMicrophoneOn } from "react-icons/ci";

export default function about() {
    return (
        <div className="overflow-clip font-main">
            <Header currentPage="about"  />
            <section className="h-auto w-screen bg-black bg-repeat bg-cover bg-bottom">

                <div className="flex justify-center items-center w-full pt-36 md:px-16 bg-blackOverlay">
                    <div className="md:px-16 bg-black bg-opacity-30 rounded-2xl">
                        <h1 className="text-4xl text-center py-8 font-bold">Meet The Team</h1>
                        <div className="shadow-inner flex md:flex-row flex-col justify-center items-center gap-10 px-6 py-8">
                            <div className="flex flex-col justify-center items-center md:w-1/4">
                                <Image src={Drew} alt="Drew" width={200} className="shadow-xl py-4"/>
                                <p className="py-2 font-bold">
                                    Drew Matousek
                                </p>
                                <p className="py-2">
                                    Singer | Producer | Visionary Leader 
                                </p>
                                <p className="text-sm py-4 ">
                                    Drew Matousek is the visionary behind The 756, a powerhouse collective of talent and innovation. 
                                    An entrepreneur since high school, she’s built multiple successful businesses and assembled a team 
                                    of driven creatives. Her passion for philanthropy and community-building makes her a powerhouse 
                                    collaborator, turning visions into reality.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center md:w-1/4">
                                <Image src={Deus} alt="Deus" width={200} className="shadow-xl py-4"/>
                                <p className="py-2 font-bold">
                                    Deus
                                </p>
                                <p className="py-2">
                                    Mix & Mastering Engineer
                                </p>
                                <p className="text-sm py-4 ">
                                Deus is a world-renowned mixing and mastering engineer who has worked with some of the biggest artists 
                                in the industry. Passionate about bringing out the best in artists, Deus refines creative visions with 
                                precision, ensuring every track reaches its full potential and resonates at the highest level. 
                                </p>
                            </div>
                            <div className="flex flex-col justify-between items-center md:w-1/4 py-4">
                                <Image src={Nvikelo} alt="Nvikelo" width={200} className="shadow-xl py-4"/>
                                <p className="py-2 font-bold">
                                    Nvikelo Nyathi
                                </p>
                                <p className="py-2">
                                    Producer | Developer | Songwriter
                                </p>
                                <p className="text-sm py-4 ">
                                Nvikelo Nyathi is a producer, developer, and songwriter crafting immersive soundscapes that push sonic 
                                boundaries. Merging his background in computer science with sharp production instincts, he delivers 
                                professional-quality tracks at an impressive pace. 
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </section>

            <section className="w-screen bg-black">
                <div className="flex justify-center items-center w-full md:px-16 bg-blackOverlay">
                    <div className="md:p-16 bg-black bg-opacity-30 rounded-2xl">
                        {/* <h1 className="text-4xl text-center py-8 font-bold">Our Studio</h1> */}
                        <div className="shadow-inner flex flex-row justify-between items-center md:gap-10 px-6 py-8">
                            <div className="flex flex-col justify-center items-center md:w-1/2">
                                <Image src={Studio} alt="Studio" width={700} className="shadow-xl"/>
                            </div>
                            <div className="flex flex-col justify-center items-center md:w-1/2">
                                <p className="py-2 font-bold">
                                    The 756 Studios
                                </p>
                                <p className="py-2">
                                    Elevate Your Sound. Amplify Your Vision.
                                </p>
                                <p className="text-sm py-4">
                                Imagine a place where dreams come to life, where every sound is a reflection of raw emotion, and 
                                where music is crafted with intention. The 756 is more than a studio—it’s a sanctuary for artists, 
                                built on love, passion, and the relentless pursuit of greatness.
                                </p>
                                <p className="text-sm py-4 ">
                                Founded in 2019 with nothing but a vision, Drew Matousek set out to create a space where beautiful 
                                things could be made. Today, The 756 stands as a premier creative hub, offering artists a professional, 
                                safe, and inspiring environment equipped with industry-leading tools, high-fidelity microphones, and 
                                state-of-the-art production gear to bring any musical vision to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen bg-black">
                <div className="flex justify-center items-center w-screen px-16 bg-blackOverlay">
                        <div className="rounded-md shadow-inner bg-bannerMarImg bg-cover w-screen">
                            <h1 className="text-2xl text-center py-8 font-bold">Our Gear</h1>
                            <div className="flex justify-between items-center gap-10 px-6 pb-16 bg-blackOverlay">
                                <div className="flex justify-center w-1/4">
                                    <CiMicrophoneOn size={48} />
                                </div>
                                <div className="flex flex-col justify-center items-center w-1/4">
                                    <h2 className="text-xl font-bold">Microphones</h2>
                                    <ul className="list-disc">
                                        <li>Neumann U 87 Ai</li>
                                        <li>Warm Audio 87 R2</li>
                                        <li>Rode NT2-A</li>
                                        <li>Shure SM7B</li>
                                        <li>(x3) Sennheiser E835</li>
                                        <li>VivMic826</li>
                                        <li>Shure SM58</li>
                                    </ul>
                                </div>
                                
                                <div className="flex flex-col justify-center items-center w-1/4">
                                    <div>
                                        <h2 className="text-xl font-bold">Interfaces</h2>
                                        <ul className="list-disc">
                                            <li>Apollo Twin X</li>
                                            <li>M-Track 8x4M</li>
                                        </ul>
                                        <h2 className="text-xl font-bold">Mixers</h2>
                                        <ul className="list-disc">
                                            <li>Yamaha MG10XUF</li>
                                        </ul>
                                        <h2 className="text-xl font-bold">Mixers</h2>
                                        <ul className="list-disc">
                                            <li>(2) Yamaha HS8 + (1) HS8S</li>
                                            <li>Bose L1 Pro16</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/4">
                                    <RxMixerVertical size={48} />
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            <section className="w-screen bg-black">
                <div className="flex justify-center items-center w-full md:p-16 bg-blackOverlay">
                        <div className="shadow-inner flex md:flex-row flex-col justify-between items-center md:gap-10 px-6 py-8">
                            <div className="flex flex-col justify-center md:w-1/2">
                                <h1 className="text-2xl text-center py-8 font-bold">Our Mission</h1>
                                <p className="text-sm py-4">
                                    At The 756, every song tells a story, and our goal is to ensure yours is heard in its most authentic and 
                                    powerful form. Whether it&apos;s recording, mixing, mastering, or production, we handle every detail so you can 
                                    focus on what truly matters you the music.
                                </p>
                                <p className="text-sm py-4">
                                    Looking to take your track to the next level? Explore our 
                                    <Link rel="stylesheet" href="/services" className="text-blue-700"> services here</Link>
                                    .
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center  md:w-1/2">
                                <Image src={record} alt="Record" width={600} className="shadow-xl"/>
                            </div>
                        </div>
                        
                    </div>
            </section>

            <Footer/>
        </div>
    );
}