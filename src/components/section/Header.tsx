import React, { useState } from 'react';
import Link from "next/link";

const links = [
    {
        name: "Home",
        linkUrl: "#home",
    },
    {
        name: "Services",
        linkUrl: "#services",
    },
    {
        name: "About",
        linkUrl: "#about",
    },
    {
        name: "Contact",
        linkUrl: "#contact",
    }
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700/50 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <h1 className="text-2xl text-amber-500 font-bold">TOVETECH LIMITED</h1>
                    </div>

                    {/* Desktop Navigation (hidden on mobile) */}
                    <nav className="hidden md:flex space-x-8">
                        {links.map((link, index) => (
                            <Link href={link.linkUrl} className="text-slate-300 hover:text-yellow-400 transition-colors" key={index}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button (visible only on mobile) */}
                    <button
                        className="md:hidden text-slate-300 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu (visible when isMenuOpen is true) */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800/95 backdrop-blur-sm">
                        <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {links.map((link, index) => (
                                <Link
                                    href={link.linkUrl}
                                    className="text-slate-300 hover:text-yellow-400 transition-colors py-2"
                                    key={index}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;