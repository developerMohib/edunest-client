"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ThemeChanger from './ThemeChanger';
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import NameLogo from '@/ui/NameLogo';
// Navigation links data
const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

const Navber: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <header className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <NameLogo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks?.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <Link className="w-full mt-2 text-center items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300" href={'/signin'}> Get Started
                        </Link>

                        {/* Theme Toggle Button */}
                        <div ><ThemeChanger /></div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <LiaTimesSolid className="h-6 w-6" /> : <HiBars3BottomRight className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu Dropdown (Sheet) */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link className="w-full mt-2 text-center items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300" href={'/signin'}> Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navber;