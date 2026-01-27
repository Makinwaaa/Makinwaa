
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 bg-[#0A0101]/90 backdrop-blur-md text-white py-5 px-6 md:px-12 flex justify-between items-center border-b border-[#ffffff0d]">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center group">
                    <span className="text-white italic font-serif text-3xl group-hover:text-blue-500 transition-colors duration-300">Makinwaa</span>
                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full ml-1 mb-1 animate-pulse"></div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 text-sm text-gray-400 font-medium tracking-wide">
                <Link to="/" className="hover:text-white transition-colors duration-300 relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/about" className="hover:text-white transition-colors duration-300 relative group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/works" className="hover:text-white transition-colors duration-300 relative group">
                    Works
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="hover:text-white transition-colors duration-300 relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
                <button className="bg-white text-black hover:bg-blue-600 hover:text-white text-sm font-bold py-2.5 px-7 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(26,92,255,0.4)]">
                    Let's Talk
                </button>
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
                    <Link to="/" className="text-gray-300 hover:text-white text-xl font-medium" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white text-xl font-medium" onClick={toggleMenu}>About</Link>
                    <Link to="/works" className="text-gray-300 hover:text-white text-xl font-medium" onClick={toggleMenu}>Works</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white text-xl font-medium" onClick={toggleMenu}>Contact</Link>
                    <button className="bg-[#1A5CFF] hover:bg-[#0047FF] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 mt-4">
                        Let's Talk
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;