    import React, { useState, useRef } from 'react';
    import Image, { type StaticImageData } from 'next/image';
    import ScrollAnimator from "./scrollanimator"; // Import the external component
    import nomad9logo from '../../public/graphics/Nomad9-Logo.png';
    import drewellalogo from '../../public/graphics/Drewella-Logo.png';
    import vakaylologo from '../../public/graphics/Vakaylo-Logo.png';
    import tbtglogo from '../../public/graphics/TBTG-Logo.png';

    // --- Placeholder for your custom image/scroll imports ---
    // In a real environment, you would import Image from 'next/image' and your ScrollAnimator.
    // For the canvas preview, we use basic HTML elements and simple state management (if needed).

    // --- Arrow SVG Icons (Simple, inline SVG for cross-compatibility) ---
    type ArrowIconProps = {
        direction: 'left' | 'right';
        onClick?: React.MouseEventHandler<HTMLButtonElement>;
        disabled?: boolean;
    };

    const ArrowIcon: React.FC<ArrowIconProps> = ({ direction, onClick, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`absolute top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-gray-900/70 text-white 
                    hover:bg-red-700 transition-colors duration-300 shadow-lg 
                    ${direction === 'left' ? 'left-0 md:left-4' : 'right-0 md:right-4'}
                    ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
    >
        <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        >
        {direction === 'left' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
        </svg>
    </button>
    );


    // --- 1. Artist Data ---
    const artistData = [
    {
        name: "NOMAD9",
        genre: "Dubstep",
        bio: "NOMAD9 fuses tech house and dubstep into a high-energy sound driven by heavy bass, sleek synths, and pulsing electronic drums. A nod to influences like Dom Dolla and Odd Mob",
        imageSrc: nomad9logo, 
    },
    {
        name: "Vakaylo",
        genre: "Pop",
        bio: "Vakaylo blends pop, R&B, and hip-hop into emotionally charged productions where layered vocals and rich instrumentation meet soulful energy and cinematic depth.",
        imageSrc: vakaylologo, 
    },
    {
        name: "DREWELLA",
        genre: "EDM",
        bio: "Drewella bends genres with effortless finesse: merging pop, house, R&B, and trap into emotionally charged anthems powered by soaring vocals and cinematic production. Every track is a statement: bold, fearless, and unmistakably her.",
        imageSrc: drewellalogo, 
    },
    {
        name: "T.B.T.G",
        genre: "Dubstep",
        bio: "Blending folk roots with electronic polish, T.B.T.G creates high-energy, feel-good music rich in live instrumentation and sound design, all built from a spirit of collaboration and creative freedom.",
        imageSrc: tbtglogo, 
    },
    ];

    // --- 2. Artist Card Sub-Component ---
    type Artist = {
        name: string;
        genre: string;
        bio: string;
        imageSrc: StaticImageData | string;
    };
    
    type ArtistCardProps = {
        artist: Artist;
    };
    
    const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => (
    // Standardized width for programmatic scrolling: 275px on desktop, 100% on mobile
    // Added 'snap-center' to help the browser stop scrolling cleanly on a card
    <div className="flex-none w-full sm:w-[320px] lg:w-[275px] p-4 flex flex-col text-white snap-center
                    transition-all duration-300 transform hover:bg-gray-800/50 
                    rounded-lg cursor-pointer">
        
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md shadow-xl 
                        mb-4 border border-white/10">
        <Image
            src={artist.imageSrc}
            alt={artist.name}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover"
            unoptimized={true}
        />
        </div>
        
        {/* Artist Info */}
        <ScrollAnimator className="font-extrabold text-2xl mb-1 tracking-normal">{artist.name}</ScrollAnimator>
        <p className="text-red-700 mb-2 font-medium uppercase text-xs tracking-widest">{artist.genre}</p>
        <p className="text-gray-400 max-w-sm text-sm leading-snug">{artist.bio}</p>
    </div>
    );


    // --- 3. Main App Component (Required for Canvas Preview) ---
    const FeaturedArtists = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // The scroll amount (card width + gap). 
    // We'll use a rough estimate since exact pixel width is tricky with Tailwind's responsiveness.
    // On desktop (lg:w-[275px] + space-x-8 (32px)) a good step size is around 310px.
    // On mobile, we scroll by the container width for a full-page scroll.
    const scrollStep = 310; 
    const totalArtists = artistData.length;

    const scrollNext = () => {
        if (carouselRef.current) {
        const isMobile = window.innerWidth < 640; // Tailwind 'sm' breakpoint
        const scrollDistance = isMobile ? carouselRef.current.offsetWidth : scrollStep;
        
        carouselRef.current.scrollBy({
            left: scrollDistance,
            behavior: 'smooth',
        });
        
        // Update index based on one full card scroll
        setCurrentIndex(prev => Math.min(prev + 1, totalArtists - 1));
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
        const isMobile = window.innerWidth < 640;
        const scrollDistance = isMobile ? carouselRef.current.offsetWidth : scrollStep;
        
        carouselRef.current.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth',
        });
        
        // Update index based on one full card scroll
        setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
    };
    
    // Logic to determine if arrows should be disabled (simplistic based on index)
    // This helps guide the user when they've reached the start/end
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= totalArtists - 3; // Show the right arrow until the last few cards are visible

    return (
        <section className="w-full bg-gradient-to-b from-black to-red-900/10 flex justify-center items-center py-20 md:py-32">
        {/* Changed the position wrapper to the main content container */}
            <div className="flex flex-col justify-center items-center w-full md:px-16 max-w-screen-xl relative">
            
            {/* Navigation Arrows moved to the outer container */}
            <ArrowIcon 
                direction="left" 
                onClick={scrollPrev} 
                disabled={isAtStart}
            />
            <ArrowIcon 
                direction="right" 
                onClick={scrollNext} 
                disabled={isAtEnd}
            />
            
            {/* Section Title */}
            <div>
                <ScrollAnimator className="font-extrabold text-5xl md:text-6xl mb-16 text-center text-white 
                            border-b-4 border-red-700 pb-2 tracking-tighter">
                FEATURED ARTISTS
                </ScrollAnimator>
            </div>

            {/* Carousel Wrapper - Removed relative positioning from here */}
            <div className="w-full px-4">
                
                {/* Horizontal Scroll / Carousel Container 
                - ref: Attached the ref for programmatic scrolling
                - overflow-x-hidden: Hides the default scrollbar
                - scroll-smooth: Ensures smooth scrolling transitions
                - snap-x: Helps the content land neatly on a card boundary
                */}
                <div 
                ref={carouselRef}
                className="flex overflow-x-hidden space-x-8 w-full pb-4 scroll-smooth snap-x snap-mandatory"
                >
                {artistData.map((artist, index) => (
                    <ArtistCard key={index} artist={artist} />
                ))}
                </div>
            </div> {/* End inner wrapper */}
            
            </div>
        </section>
        );
    };

    export default FeaturedArtists;