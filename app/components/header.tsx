"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '../../public/graphics/756-Logo.png';
import { CiMenuBurger } from "react-icons/ci";

const Menus = ["/", "about", "portfolio", "services", "contact"];

interface HeaderProps {
    currentPage: string;
}

function Header({ currentPage = "" }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const formattedPage = currentPage === "/" ? "home" : currentPage;

    const [isOpen, setIsOpen] = useState(false);

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed w-screen z-10">

            {/* Mobile Header */}
            <div className={`flex md:hidden justify-between items-center transition-all duration-500 ease-in-out gap-4 p-4 ${
                mounted ? (scrolled ? "bg-black px-8" : "py-6 px-8 bg-black") : ""
            }`}>
                <div className="flex justify-center">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button onClick={handleClick} className="p-2 rounded-full">
                        <CiMenuBurger size={32} />
                    </button>
                </div>
            </div>
            <div className={`md:hidden bg-black py-1 transition-all duration-300 ease-in-out ${isOpen ? "bg-opacity-100" : "hidden -translate-y-96 bg-opacity-0"}`}>
                <nav className="flex flex-col justify-center items-center lg:gap-8 gap-6 font-medium">
                    {Menus.map((Menu: string, i: number) => (
                        <Link 
                            key={i} 
                            href={Menu === "/" ? "/" : `/${Menu}`}
                            className={`w-1/2 py-1 text-center capitalize transition ease-in-out hover:scale-110 ${formattedPage === Menu ? 'underline' : ''}`}
                        >
                            {Menu === "/" ? "home" : Menu}
                        </Link>
                    ))}
                    <div className="flex justify-center transition ease-in-out hover:scale-110 w-1/2 py-4">
                    <Link href="/contact" className="font-bold text-sm text-center font-main border-2 text-black border-zinc-100 bg-white p-2 rounded-full">
                        Work With Us
                    </Link>
                </div>
                </nav>
            </div>
            
            {/* Desktop Header */}
            <div className={`hidden md:flex justify-center transition-all duration-500 ease-in-out items-center gap-1 ${
                mounted ? (scrolled ? "p-4 bg-black bg-opacity-50" : "py-16 px-8 text-white") : ""
            }`}>
                <div className="flex justify-center hover:animate-pulse w-1/4">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </Link>
                </div>
                <nav className="w-1/2 flex justify-center items-center lg:gap-8 gap-4 p-2 font-medium">
                    {Menus.map((Menu: string, i: number) => (
                        <Link 
                            key={i} 
                            href={Menu === "/" ? "/" : `/${Menu}`}
                            className={`capitalize transition ease-in-out hover:scale-110 ${formattedPage === Menu ? 'underline' : ''}`}
                        >
                            {Menu === "/" ? "home" : Menu}
                        </Link>
                    ))}
                </nav>
                <div className="flex justify-center transition ease-in-out hover:scale-110 w-1/4">
                    <Link href="/contact" className="font-bold text-sm font-main border-2 border-white p-2 rounded-full">
                        Work With Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
