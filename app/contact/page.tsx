'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";

import fb from "../../public/graphics/facebook.png";
import ig from "../../public/graphics/instagram.png";
import yt from "../../public/graphics/youtube.png";
import li from "../../public/graphics/tiktok.png";
import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const sendEmail = () => {
        setLoading(true);

        fetch('/api/emails', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => setResult(error))
            .finally(() => setLoading(false))
    }

    return (
        <div className="overflow-clip font-main">
            <Header currentPage="contact" />
            <section className="w-screen bg-bannerMarImg bg-repeat bg-cover bg-top">
                <div className="flex justify-center items-center w-full z-0 pt-16 px-16 bg-blackOverlay gap-4">
                    <div className="md:w-1/2 p-16 flex flex-col justify-center items-center shadow-xl">
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
                        <form className="flex flex-col justify-center items-center gap-4">
                            <div className="flex justify-between items-center gap-4">
                                <div>
                                    <h1 className="pb-2">First Name</h1>
                                    <input type="text" placeholder="Jane" className="p-2 rounded-md text-black"/>
                                </div>
                                <div>
                                    <h1 className="pb-2">Last Name</h1>
                                    <input type="text" placeholder="Doe" className="p-2 rounded-md text-black"/>
                                </div>
                            </div>
                            <div className="w-full">
                                <h1 className="pb-2">Email</h1>
                                <input type="email" placeholder="Email" className="p-2 rounded-md w-full text-black"/>
                            </div>
                            <div className="w-full">
                                <h1 className="pb-2">Subject</h1>
                                <input type="email" placeholder="Subject" className="p-2 rounded-md w-full text-black"/>
                            </div>
                            <div className="w-full">
                                <h1>Message</h1>
                                <textarea className="w-full h-36 p-2 my-2 rounded-md text-black" placeholder="Message"></textarea>
                            </div>
                            <button onClick={sendEmail} className="bg-Meteorite w-full py-2 px-6 rounded-lg">Lets Talk</button>
                            <div className="my-4">{JSON.stringify(result)}</div>
                            {loading && <div className="my-4">Processing...</div>}
                        </form>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
}