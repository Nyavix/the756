import Image from "next/image";
import Link from "next/link";

import fb from "../../public/graphics/facebook.png";
import ig from "../../public/graphics/instagram.png";
import yt from "../../public/graphics/youtube.png";
import li from "../../public/graphics/linkedin.png";
import cbclogo from "../../public/graphics/CreativeBC-Logo.png";
import socanlogo from "../../public/graphics/SOCAN-Logo.png";

function Footer() {

    return (
        <footer className="py-8 bg-black">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
                <h2 className="text-xl font-semibold text-white">The 756</h2>
                <p className="mt-2 text-gray-400">Elevate Your Sound. Amplify Your Vision.</p>
                
            </div>
            
            <div>
                <Image src={cbclogo} alt="CreativeBC-Logo" />
                <Image src={socanlogo} alt="CreativeBC-Logo" />
            </div>
            
            <div>
                <h3 className="text-lg font-medium text-white">Contact Us</h3>
                <p className="mt-2 text-gray-400">📧 <a href="mailto:info@the756.com" className="hover:text-white">info@the756.com</a></p>
                
                <h3 className="text-lg font-medium text-white pt-6">Follow Us</h3>
                <div className="mt-2 flex justify-center md:justify-start space-x-4">
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
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
            <a href="#" className="hover:text-white mx-2">Privacy Policy</a> |
            <a href="#" className="hover:text-white mx-2">Terms of Service</a> |
            <a href="#" className="hover:text-white mx-2">FAQ</a>
            <p className="mt-2">© 2025 The 756 | All Rights Reserved</p>
        </div>
    </div>
        </footer>
    );
}

export default Footer;