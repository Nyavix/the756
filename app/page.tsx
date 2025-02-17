import Header from "./components/header";
import Particles from "./components/particles";
import Link from "next/link";
import Image from "next/image";
import fb from "../public/graphics/facebook.png";
import ig from "../public/graphics/instagram.png";
import yt from "../public/graphics/youtube.png";
import li from "../public/graphics/linkedin.png";

export default function Home() {
  return (
    <div className="overflow-clip">
      
      <section className="h-screen w-screen bg-bannerImg bg-repeat bg-cover bg-bottom">
        <Header currentPage="home" />
        <div className="flex flex-col justify-center items-center w-full h-screen bg-blackOverlay">
          <h1 className="text-white text-6xl animate-title">The 756</h1>
          <p className="text-white text-2xl animate-title">Shaping the future of music with boundless creativity and unstoppable energy.</p>
        
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
      
      <section className="w-screen h-screen bg-background">
      <Particles
          className="h-full items-center inset-0 -z-10"
          quantity={100}
        />
      </section>
        
    </div>
  );
}
