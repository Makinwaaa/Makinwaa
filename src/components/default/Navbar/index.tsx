
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose, IoMenu, IoLogoLinkedin, IoLogoDribbble, IoLogoBehance, IoLogoWhatsapp } from "react-icons/io5";

const PortLogo = require('./Assets/Port.webp');

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-[#1A5CFF] font-semibold' : 'text-gray-400';
    };

    const socialLinks = [
        { icon: IoLogoLinkedin, url: "#", label: "LinkedIn" },
        { icon: IoLogoDribbble, url: "#", label: "Dribbble" },
        { icon: IoLogoBehance, url: "#", label: "Behance" },
        { icon: IoLogoWhatsapp, url: "#", label: "WhatsApp" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-[#0A0101]/90 backdrop-blur-md text-white py-5 px-6 md:px-12 flex justify-between items-center border-b border-[#ffffff0d]">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="group">
                    <img src={PortLogo} alt="Makinwaa Logo" className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                <Link to="/" className={`${isActive('/')} hover:text-white transition-colors duration-300 relative group`}>
                    Home
                </Link>
                <Link to="/works" className={`${isActive('/works')} hover:text-white transition-colors duration-300 relative group`}>
                    Projects
                </Link>
                <Link to="/about" className={`${isActive('/about')} hover:text-white transition-colors duration-300 relative group`}>
                    About
                </Link>
                <Link to="/contact" className={`${isActive('/contact')} hover:text-white transition-colors duration-300 relative group`}>
                    Contact
                </Link>
            </div>

            {/* Social Icons (Replaces CTA) */}
            <div className="hidden md:flex items-center gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#1A5CFF] transition-colors duration-300 text-xl"
                        aria-label={social.label}
                    >
                        <social.icon />
                    </a>
                ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#0A0101] flex flex-col items-center py-8 space-y-6 shadow-2xl md:hidden border-b border-[#ffffff1a]">
                    <Link to="/" className={`${isActive('/')} text-xl font-medium hover:text-white`} onClick={toggleMenu}>Home</Link>
                    <Link to="/works" className={`${isActive('/works')} text-xl font-medium hover:text-white`} onClick={toggleMenu}>Projects</Link>
                    <Link to="/about" className={`${isActive('/about')} text-xl font-medium hover:text-white`} onClick={toggleMenu}>About</Link>
                    <Link to="/contact" className={`${isActive('/contact')} text-xl font-medium hover:text-white`} onClick={toggleMenu}>Contact</Link>

                    <div className="flex items-center gap-6 mt-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#1A5CFF] text-2xl transition-colors"
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;