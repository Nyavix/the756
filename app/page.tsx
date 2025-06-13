'use client';
//import React, { useState, useEffect, useRef, ReactNode, CSSProperties, FC } from 'react';

import Header from "./components/header";
import ScrollAnimator from "./components/scrollanimator"; // Import the external component
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

//--- Component: AnimatedTitle ---//
// interface AnimatedTitleProps {
//   children: ReactNode;
// }
// const AnimatedTitle: FC<AnimatedTitleProps> = ({ children }) => {
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   useEffect(() => {
//     const title = titleRef.current;
//     if (title && !title.hasAttribute('data-animated')) {
//         const originalHTML = title.innerHTML;
//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = originalHTML;
//         title.innerHTML = '';
//         title.setAttribute('data-animated', 'true');
//         let charCount = 0;
//         Array.from(tempDiv.childNodes).forEach(node => {
//             if (node.nodeType === Node.TEXT_NODE && node.textContent) {
//                 node.textContent.split('').forEach(char => {
//                     const span = document.createElement('span');
//                     span.className = 'char';
//                     span.innerHTML = char === ' ' ? '&nbsp;' : char;
//                     span.style.animationDelay = `${charCount * 25}ms`;
//                     title.appendChild(span);
//                     charCount++;
//                 });
//             } else if (node.nodeType === Node.ELEMENT_NODE) {
//                 const elementNode = node as HTMLElement;
//                 const wrapper = elementNode.cloneNode(false) as HTMLElement;
//                 if (elementNode.textContent) {
//                     elementNode.textContent.split('').forEach(char => {
//                         const span = document.createElement('span');
//                         span.className = 'char';
//                         span.innerHTML = char === ' ' ? '&nbsp;' : char;
//                         span.style.animationDelay = `${charCount * 25}ms`;
//                         wrapper.appendChild(span);
//                         charCount++;
//                     });
//                 }
//                 title.appendChild(wrapper);
//             }
//         });
//     }
//   }, []);
//   return <h2 ref={titleRef} className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight font-semibold">{children}</h2>;
// };

export default function Home() {
  return (
    <div className="overflow-clip font-main">

      {/* Hero Section */}

      <section className="h-screen w-screen bg-bannerImg bg-no-repeat bg-cover bg-top bg-fixed">
        <Header currentPage="home" />
        <div className="flex flex-col justify-center items-center w-full h-screen bg-blackOverlay">
          <Image src={logoHori} alt="The 756" width={500} className='animate-title'/>
          {/* <AnimatedTitle>The 756</AnimatedTitle>  // Consider using this or the 'animate-title' class on the Image above */}
          
          <ScrollAnimator className="text-center md:text-lg text-gray-300 max-w-md" style={{transitionDelay: '500ms'}}>Shaping the future of music with boundless creativity and unstoppable energy.</ScrollAnimator>
          <div className="absolute flex justify-center sm:justify-start gap-4 sm:gap-6 bottom-0 left-0 p-8 sm:p-16 w-full sm:w-auto">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition ease-in-out hover:scale-110">
              <Image src={fb} alt="Facebook" width={26} height={26} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition ease-in-out hover:scale-110">
              <Image src={ig} alt="Instagram" width={26} height={26} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition ease-in-out hover:scale-110">
              <Image src={yt} alt="Youtube" width={26} height={26} />
            </Link>
            <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="transition ease-in-out hover:scale-110">
              <Image src={li} alt="LinkedIn" width={26} height={26} />
            </Link>
          </div>
        </div>
        
      </section>
      
      {/* About Section */}

      <section className="w-screen bg-gradient-to-b from-black to-Crail flex justify-center items-center">
        <div className="flex justify-center items-center w-full md:px-16">
          <div className="flex md:flex-row flex-col-reverse justify-center items-center max-w-screen-xl md:py-16">
            <div className="md:w-1/2 md:p-16 p-4">
              <div className="py-8">
                <ScrollAnimator className="font-bold text-2xl py-2">Welcome to The 756 Studio: Where Your Sound Comes to Life</ScrollAnimator>
                <ScrollAnimator className="py-4">At The 756 Studio, we combine cutting-edge technology with a passion 
                  for music. Our experienced team is dedicated to bringing your creative 
                  vision to reality.</ScrollAnimator>
              </div>
              <div className="flex justify-between items-center gap-10">
                <ScrollAnimator>
                  <LuBoxes size={48} />
                  <h1 className="font-bold py-2">Top Equipment</h1>
                  <p>Experience unparalleled sound quality 
                    with our state-of-the-art recording gear.</p>
                </ScrollAnimator>
                <ScrollAnimator>
                  <RiTeamLine size={48} />
                  <h1 className="font-bold py-2">Expert Team</h1>
                  <p>Our skilled professionals ensure every 
                    project meets the highest standards 
                    of excellence.</p>
                </ScrollAnimator>
              </div>
            </div>
            <ScrollAnimator className="md:w-1/2 py-6 flex justify-center">
              <Image src={singer} alt="Singer" width={500} className="shadow-lg rounded-md"/>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="w-screen bg-zinc-950 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-screen-xl px-4  text-center">
          <ScrollAnimator className="py-16">
            <h1 className="text-4xl font-bold py-8">Unleash Your Sound with Our Expertise</h1>
            <p>At The 756, we specialize in transforming your musical 
              ideas into polished tracks. Our state-of-the-art 
              recording, mixing, and mastering services ensure 
              your sound stands out.</p>
          </ScrollAnimator>
          <div className="flex md:flex-row flex-col justify-center items-center gap-8">
            <ScrollAnimator className="md:w-1/3 flex flex-col justify-center items-center" style={{transitionDelay: '200ms'}}>
              <Image src={mic} alt="Mic" width={300} className='rounded-md'/>
              <h1 className="font-bold text-2xl py-4">Professional Recording Services Tailored for You</h1>
              <p className="text-sm">Capture your music in a pristine environment.</p>
            </ScrollAnimator>
            <ScrollAnimator className="md:w-1/3 flex flex-col justify-center items-center"  style={{transitionDelay: '400ms'}}>
              <Image src={mixing} alt="Mixing" width={300} className='rounded-md'/>
              <h1 className="font-bold text-2xl py-4">Expert Mixing for a Perfect Balance</h1>
              <p className="text-sm">We blend your tracks to create a cohesive sound.</p>
            </ScrollAnimator>
            <ScrollAnimator className="md:w-1/3 flex flex-col justify-center items-center"  style={{transitionDelay: '600ms'}}>
              <Image src={mastering} alt="Mastering" width={300} className='rounded-md'/>
              <h1 className="font-bold text-2xl py-4">Mastering Services for Industry-Ready Tracks</h1>
              <p className="text-sm">Ensure your music meets industry standards with our mastering.</p>
            </ScrollAnimator>
          </div>
          <ScrollAnimator className="py-16 transition ease-in-out hover:scale-110">
            <Link href="/portfolio" className="font-bold font-main border-2 border-white p-4 rounded-full">
                        Learn More
                    </Link>
          </ScrollAnimator>
        </div>
      </section>
        
      {/* Artists Section */}

      <section className="w-screen bg-gradient-to-b from-zinc-950 to-Crail flex justify-center items-center">
      <div className="flex md:flex-row flex-col justify-center items-center max-w-screen-xl md:p-16">
          <div className="md:w-1/2 flex flex-col justify-center m-4">
            <ScrollAnimator>
              <h1 className="py-16 font-bold text-4xl">Experience Unmatched Sound Quality at The 756</h1>
            </ScrollAnimator>
            <ScrollAnimator>At The 756 Studio, we provide a professional environment that fosters creativity 
              and collaboration. Our state-of-the-art equipment ensures that every note is 
              captured with precision and clarity.</ScrollAnimator>
            <ScrollAnimator className="py-16 gap-3 flex justify-start">
              <div className="transition ease-in-out hover:scale-110">
                <Link href="/portfolio" className="font-main border-2 border-white p-2 rounded-xl">
                  Discover
                </Link>
              </div>
              <div className="transition ease-in-out hover:scale-110">
                <Link href="/contact" className="p-2">
                  Contact
                </Link>
              </div>
            </ScrollAnimator>
          </div>
          <ScrollAnimator className="md:w-1/2 flex justify-center py-4"  style={{transitionDelay: '200ms'}}>
            <Image src={taz} alt="Taz" width={500} className="shadow-lg rounded-md"/>
          </ScrollAnimator>
        </div>
      </section>


      <section className="w-screen h-96 bg-bannerMarImg bg-no-repeat bg-cover bg-top bg-fixed">
        <div className="flex justify-center items-center w-screen h-full bg-blackOverlay">
          <div className="px-4">
                <ScrollAnimator>
                  <h1 className="text-4xl py-8 font-bold">Book Your Session Today</h1>
                </ScrollAnimator>
                <ScrollAnimator>Unlock your sound potential with our expert recording and production 
                  services. Let&apos;s create something amazing!</ScrollAnimator>
                <div className="py-8 gap-3 flex justify-start">
                  <ScrollAnimator className="transition ease-in-out hover:scale-110"  style={{transitionDelay: '400ms'}}>
                    <Link href="/portfolio" className="font-main border-2 border-white p-2 rounded-xl">
                      Discover
                    </Link>
                  </ScrollAnimator>
                  <ScrollAnimator className="transition ease-in-out hover:scale-110"  style={{transitionDelay: '500ms'}}>
                  <Link href="/contact" className="p-2">
                    Contact
                  </Link>
                </ScrollAnimator>
              </div>
            </div>
          </div>
      </section>

      <Footer/>
    </div>
  );
}
