import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import Image from "next/image";

import fb from "../public/graphics/facebook.png";
import ig from "../public/graphics/instagram.png";
import yt from "../public/graphics/youtube.png";
import li from "../public/graphics/tiktok.png";

import logoHori from "../public/graphics/756-Logo_Compact.svg";

import singer from "../public/graphics/Photos/Singer.jpg";
import mic from "../public/graphics/Photos/Mic.jpg";
import mixing from "../public/graphics/Photos/Mixing.jpg";
import mastering from "../public/graphics/Photos/Mastering.jpg";
import taz from "../public/graphics/Photos/Taz.png";

import { RiTeamLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";

export default function Home() {
  return (
    <div className="overflow-clip font-main">
      
      <section className="h-screen w-screen bg-bannerImg bg-repeat bg-cover bg-top">
        <Header currentPage="home" />
        <div className="flex flex-col justify-center items-center w-full h-screen bg-blackOverlay">
          <Image src={logoHori} alt="The 756" width={500}/>
          <p className="text-white text-1xl p-8 text-center animate-title">Shaping the future of music with boundless creativity and unstoppable energy.</p>
        
          <div className="absolute flex justify-between w-1/5 bottom-0 left-0 p-16">
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
        </div>
        
      </section>
      
      <section className="w-screen bg-gradient-to-b from-black to-SandyBrownDarkest">
        <div className="flex justify-center items-center w-full px-16">
          <div className="flex justify-between items-center max-w-screen-xl py-16">
            <div className="w-1/2 p-16">
              <div className="py-8">
                <h1 className="font-bold text-2xl py-2">Welcome to The 756 Studio: Where Your Sound Comes to Life</h1>
                <p>At The 756 Studio, we combine cutting-edge technology with a passion 
                  for music. Our experienced team is dedicated to bringing your creative 
                  vision to reality.</p>
              </div>
              <div className="flex justify-between items-center gap-10">
                <div>
                  <LuBoxes size={48} />
                  <h1 className="font-bold py-2">Top Equipment</h1>
                  <p>Experience unparalleled sound quality 
                    with our state-of-the-art recording gear.</p>
                </div>
                <div>
                  <RiTeamLine size={48} />
                  <h1 className="font-bold py-2">Expert Team</h1>
                  <p>Our skilled professionals ensure every 
                    project meets the highest standards 
                    of excellence.</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <Image src={singer} alt="Singer" width={500} className="shadow-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen bg-zinc-950 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-screen-xl px-16  text-center">
          <div className="py-16">
            <h1 className="text-4xl font-bold py-8">Unleash Your Sound with Our Expertise</h1>
            <p>At The 756, we specialize in transforming your musical 
              ideas into polished tracks. Our state-of-the-art 
              recording, mixing, and mastering services ensure 
              your sound stands out.</p>
          </div>
          <div className=" flex md:flex-row flex-col justify-center items-start gap-10">
            <div className=" w-1/3 flex flex-col justify-center items-center">
              <Image src={mic} alt="Mic" width={300}/>
              <h1 className="font-bold text-2xl py-4">Professional Recording Services Tailored for You</h1>
              <p className="text-sm">Capture your music in a pristine environment.</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Image src={mixing} alt="Mixing" width={300}/>
              <h1 className="font-bold text-2xl py-4">Expert Mixing for a Perfect Balance</h1>
              <p className="text-sm">We blend your tracks to create a cohesive sound.</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <Image src={mastering} alt="Mastering" width={300}/>
              <h1 className="font-bold text-2xl py-4">Mastering Services for Industry-Ready Tracks</h1>
              <p className="text-sm">Ensure your music meets industry standards with our mastering.</p>
            </div>
          </div>
          <div className="py-16 transition ease-in-out hover:scale-110">
            <Link href="/portfolio" className="font-bold font-main border-2 border-white p-4 rounded-full">
                        Learn More
                    </Link>
          </div>
        </div>
      </section>
        
      <section className="w-screen bg-gradient-to-b from-zinc-950 to-Crail flex justify-center items-center">
      <div className="flex justify-center items-center max-w-screen-xl p-16">
          <div className="w-1/2 flex flex-col justify-center m-8">
            <h1 className="py-16 font-bold text-4xl">Experience Unmatched Sound Quality at The 756</h1>
            <p>At The 756 Studio, we provide a professional environment that fosters creativity 
              and collaboration. Our state-of-the-art equipment ensures that every note is 
              captured with precision and clarity.</p>
            <div className="py-16 gap-3 flex justify-start">
              <div className="transition ease-in-out hover:scale-110">
                <Link href="/portfolio" className="font-main border-2 border-white p-2 rounded-xl">
                  Discover
                </Link>
              </div>
              <div className="transition ease-in-out hover:scale-110">
                <Link href="/portfolio" className="p-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image src={taz} alt="Taz" width={500} className="shadow-lg"/>
          </div>
        </div>
      </section>

      <section>

      </section>

      <section className="w-screen h-96 bg-bannerMarImg bg-repeat bg-cover bg-top">
        <div className="flex justify-center items-center w-screen h-full bg-blackOverlay">
          <div>
                <h1 className="text-4xl py-8 font-bold">Book Your Session Today</h1>
                <p>Unlock your sound potential with our expert recording and production 
                  services. Let&apos;s create something amazing!</p>
                <div className="py-8 gap-3 flex justify-start">
                  <div className="transition ease-in-out hover:scale-110">
                    <Link href="/portfolio" className="font-main border-2 border-white p-2 rounded-xl">
                      Discover
                    </Link>
                  </div>
                  <div className="transition ease-in-out hover:scale-110">
                  <Link href="/portfolio" className="p-2">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </section>

      <Footer/>
    </div>
  );
}
