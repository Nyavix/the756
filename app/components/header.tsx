"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from '../../public/graphics/756-Logo.png';

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

    return (
        <header className="fixed w-screen z-10">
            <div className={`flex justify-center transition-all duration-500 ease-in-out items-center ${
                mounted ? (scrolled ? "gap-40 p-4 bg-black bg-opacity-50" : "gap-80 p-16 text-white") : ""
            }`}>
                <div className="flex justify-center hover:animate-pulse w-1/4">
                    <Link href="/">
                        <Image src={logo} alt="Logo" width={50} height={50} />
                    </Link>
                </div>
                <nav className="w-1/2 flex justify-between items-center mx-2 p-2 font-medium">
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
                    <Link href="/" className="font-bold font-main border-2 border-white p-4 rounded-full">
                        Work With Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
