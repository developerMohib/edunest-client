"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import NameLogo from '@/components/common/NameLogo';
import ThemeChanger from './ThemeChanger';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

// Navigation links data
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

const Navber: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { logout } = useAuth();
    // const { user, refetch, isLoading } = useCurrentUser();
    // console.log("Session data:", user);
    // useEffect(() => {
    //     refetch();
    // }, [refetch]);

    // if (isLoading) {
    //     return <Loading />; // or a spinner
    // }
const user = false ;
    return (
        <header className="backdrop-blur-sm sticky top-0 z-50">
           <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <NameLogo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks?.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-md font-medium text-eduGray hover:text-eduBlack transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 ">

                        {user ? (<div className="rounded-full overflow-hidden
                            flex items-center justify-center border-2 border-eduGray">
                            <Image
                                src="https://i.ibb.co/Qv2rWPVX/istockphoto-1300845620-612x612.jpg"
                                alt="User Avatar"
                                width={500}
                                height={300}
                                className="object-cover w-8 h-auto"
                            />
                            <button
                                onClick={() => logout()}
                                className="ml-2 px-3 py-1 bg-red-500  rounded hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>) : (<Link className="w-full text-center items-center justify-center rounded-md text-base font-medium tracking-wide px-4 py-2 text-eduWhite bg-eduRed  hover:bg-eduGreen transition-colors duration-300 hidden md:block font-roboto" href={'/signin'}> Login
                        </Link>)}

                        {/* Theme Toggle Button */}
                        <div ><ThemeChanger /></div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-eduGray focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-300"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <LiaTimesSolid className="h-6 w-6" /> : <HiBars3BottomRight className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                </div>

            {/* Mobile Menu Dropdown (Sheet) */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-eduBorder absolute left-0 top-100% bg-eduBlack w-full" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-eduWhite block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link className="w-full text-center items-center justify-center rounded-md text-sm font-semibold tracking-wide px-4 py-2 bg-eduRed text-eduWhite hover:bg-eduGreen block transition-colors duration-300" href={'/signin'}> Login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navber;