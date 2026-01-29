
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { IoLocationOutline, IoTimeOutline, IoMailOutline, IoDownloadOutline } from 'react-icons/io5';

const Hero: React.FC = () => {
    const fullName = "Makinwa Amori";
    const [displayedName, setDisplayedName] = useState("");
    const [typingComplete, setTypingComplete] = useState(false);

    // Typewriter effect for the name
    useEffect(() => {
        if (displayedName.length < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayedName(fullName.slice(0, displayedName.length + 1));
            }, 80);
            return () => clearTimeout(timeout);
        } else {
            setTypingComplete(true);
        }
    }, [displayedName, fullName]);

    // Floating shapes animation variants - Fixed typing
    const floatVariants: Variants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    const floatVariants2: Variants = {
        animate: {
            y: [0, 10, 0],
            x: [0, 5, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    return (
        <section className="relative min-h-screen bg-[#0A0101] text-white flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 pt-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-900/15 to-purple-900/10 rounded-full blur-[180px] pointer-events-none"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none"></div>

            {/* Floating Decorative Shapes */}
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-[20%] left-[10%] w-20 h-20 border border-white/10 rounded-full opacity-30 hidden md:block"
            />
            <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute top-[30%] right-[15%] w-3 h-3 bg-blue-500/40 rounded-full hidden md:block"
            />
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute bottom-[25%] left-[15%] w-2 h-2 bg-purple-400/50 rounded-full hidden md:block"
            />
            <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute bottom-[30%] right-[10%] w-16 h-16 border border-white/5 rounded-lg rotate-12 opacity-40 hidden md:block"
            />
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-[15%] right-[25%] w-1.5 h-1.5 bg-white/30 rounded-full hidden md:block"
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Welcome Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-500 text-sm md:text-base tracking-[0.3em] uppercase mb-8"
                >
                    Hi there, welcome to
                </motion.p>

                {/* Name + Portfolio on same line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-baseline justify-center gap-x-4 mb-8"
                >
                    <h1 className="font-gilda text-5xl md:text-7xl lg:text-8xl tracking-tight text-white inline-flex items-baseline">
                        {displayedName}
                        {/* Cursor only shows while typing, hidden after complete */}
                        {!typingComplete && (
                            <span className="inline-block w-[3px] h-[0.7em] bg-white/70 ml-1 align-middle animate-pulse"></span>
                        )}
                    </h1>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: typingComplete ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-gray-500 text-2xl md:text-3xl lg:text-4xl font-light tracking-wide"
                    >
                        's Portfolio
                    </motion.span>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"
                />

                {/* Role */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light mb-10 leading-relaxed"
                >
                    Product Designer
                </motion.h2>

                {/* Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-14 text-sm text-gray-500 tracking-wide"
                >
                    <div className="flex items-center gap-2">
                        <IoTimeOutline className="text-lg text-white/40" />
                        <span>5+ Years of Experience</span>
                    </div>
                    <span className="hidden md:block w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-lg text-white/40" />
                        <span>Based in Ibadan, Nigeria</span>
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a href="#contact" className="group min-w-[180px] flex items-center justify-center gap-2 bg-[#1A5CFF] text-white text-sm font-semibold py-4 px-10 rounded-full hover:bg-[#0047FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(26,92,255,0.3)]">
                        <IoMailOutline className="text-lg group-hover:scale-110 transition-transform" />
                        Contact Me
                    </a>
                    <a href="/resume.pdf" download className="group min-w-[180px] flex items-center justify-center gap-2 border border-white/15 bg-white/5 text-white text-sm font-medium py-4 px-10 rounded-full hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                        <IoDownloadOutline className="text-lg group-hover:scale-110 transition-transform" />
                        Download My Resume
                    </a>
                </motion.div>

                {/* Scroll Indicator - Now below buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 border border-gray-700 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
