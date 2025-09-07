import NameLogo from '@/components/ui/NameLogo';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

const Footer: React.FC = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="relative bg-gradient-to-br overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float1" />
                <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float2" />
                <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl animate-float3" />
            </div>
            {/* Main footer content */}
            <div className="relative container mx-auto px-6 py-16 sm:py-20 lg:px-8">

                {/* Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {/* Logo/Name section with interactive effect */}
                    <div className="group">
                        <NameLogo />
                        <p className="text-eduGray my-6">Innovating digital experiences one of best enjoyable supporting journey at a time.</p>
                        {/* Social media with hover glow */}
                        <div className="flex space-x-4">
                            <Link className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center hover:bg-eduBlue hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300" href={"/"}><FaFacebook className='text-eduWhite' />
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-eduRed/85 flex items-center justify-center hover:bg-eduRed hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300">
                                <FaYoutube className='text-eduWhite' />
                            </Link>
                            <Link href="/" className="w-10 h-10 rounded-full bg-eduGreen flex items-center justify-center hover:bg-eduBlue/50 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                                <FaLinkedin className='text-eduWhite' />
                            </Link>
                        </div>
                    </div>

                    {/* Quick links with hover effect */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 relative inline-block">
                            <span className="relative z-10 ">Quick Links</span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </h3>

                        <nav className="space-y-3">
                            {navLinks?.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href} className="text-eduGray hover:text-eduRed hover:pl-2 transition-all duration-300 flex items-center">
                                    <span className="w-1 h-1 bg-eduBlue rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                    </div>
                    
                    {/* Contact info with animated icons */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-eduBlue/30 rounded-full flex items-center justify-center">
                                        <MdOutlineMail />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm">Email</p>
                                    <a href="mailto:mohibullahmohim2020@gmail.com" className="text-eduGray hover:text-eduRed transition font-normal">mohibullahmohim2020@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-8 h-8 bg-eduBlue/30 rounded-full flex items-center justify-center" >
                                        <LuPhone />
                                    </div>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm">Phone</p>
                                    <a href="tel:+244941540352" className="text-eduGray hover:text-eduRed transition font-normal">+880 1706439736</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter with floating input */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
                        <p className="mb-4">Subscribe to my newsletter for the latest updates.</p>
                        <form className="mt-4">
                            <div className="relative">
                                <input type="email" placeholder="Your email" className="w-full bg-eduGray/50 border border-eduBorder rounded-lg py-3 px-4 focus:outline-none focus:ring focus:ring-eduBlue focus:border-transparent placeholder-eduWhite text-eduBlack" />
                                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-eduBlue/85 hover:bg-eduBlue text-eduWhite rounded-lg px-4 py-1 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom section with animated copyright */}
                <div className="mt-16 pt-8 border-t border-eduGray flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">
                        © <span id="year" className="text-blue-400" /> <span className="text-eduGreen">
                            Edu
                        </span>
                        <span className="text-eduRed">
                            Nest
                        </span> {year} All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/" className="text-eduGray hover:text-eduBlack transition">Privacy Policy</Link>
                        <Link href="/" className="text-eduGray hover:text-eduBlack transition">Terms of Service</Link>
                        <Link href="/" className="text-eduGray hover:text-eduBlack transition">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;