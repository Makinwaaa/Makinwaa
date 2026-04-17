
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
        return location.pathname === path ? 'text-[#1A5CFF] font-semibold' : 'text-gray-500';
    };

    const socialLinks = [
        { icon: IoLogoLinkedin, url: "https://www.linkedin.com/in/ademakinwaa/", label: "LinkedIn" },
        { icon: IoLogoDribbble, url: "https://dribbble.com/Designsbymak", label: "Dribbble" },
        { icon: IoLogoBehance, url: "https://www.behance.net/ademakinwaa", label: "Behance" },
        { icon: IoLogoWhatsapp, url: "https://wa.me/2348159225460", label: "WhatsApp" },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-white/90 backdrop-blur-md text-gray-900 py-5 px-6 md:px-12 flex justify-between items-center border-b border-black/5">
            {/* Logo (Desktop only) */}
            <div className="hidden md:flex items-center">
                <Link to="/" className="group">
                    <img src={PortLogo} alt="Makinwaa Logo" className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity filter invert" />
                </Link>
            </div>

            {/* Mobile Nav Toggle (Text-based, Left side) */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-900 font-semibold text-[15px]">
                    {isMenuOpen ? 'close x' : '/menu'}
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                <Link to="/" className={`${isActive('/')} hover:text-gray-900 transition-colors duration-300 relative group`}>
                    Home
                </Link>
                <Link to="/works" className={`${isActive('/works')} hover:text-gray-900 transition-colors duration-300 relative group`}>
                    Projects
                </Link>
                <Link to="/about" className={`${isActive('/about')} hover:text-gray-900 transition-colors duration-300 relative group`}>
                    About
                </Link>
                <Link to="/contact" className={`${isActive('/contact')} hover:text-gray-900 transition-colors duration-300 relative group`}>
                    Contact
                </Link>
            </div>

            {/* Social Icons (Mobile Top Nav - Right side, Desktop right) */}
            <div className="flex items-center gap-5 md:gap-6">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-[#1A5CFF] transition-colors duration-300 text-xl"
                        aria-label={social.label}
                    >
                        <social.icon />
                    </a>
                ))}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start px-6 py-6 space-y-6 shadow-2xl md:hidden border-b border-black/5">
                    <Link to="/" className={`${location.pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium'} text-[15px] tracking-wide hover:text-gray-900 transition-colors capitalize`} onClick={toggleMenu}>Home</Link>
                    <Link to="/works" className={`${location.pathname === '/works' ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium'} text-[15px] tracking-wide hover:text-gray-900 transition-colors capitalize`} onClick={toggleMenu}>Projects</Link>
                    <Link to="/about" className={`${location.pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium'} text-[15px] tracking-wide hover:text-gray-900 transition-colors capitalize`} onClick={toggleMenu}>About</Link>
                    <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium'} text-[15px] tracking-wide hover:text-gray-900 transition-colors capitalize`} onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;