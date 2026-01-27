
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const projects = [
    {
        id: 1,
        title: "Way Fields",
        year: "2024",
        tags: ["E-Commerce", "Portfolio"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Aura Smart",
        year: "2024",
        tags: ["Mobile App", "UI Design"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Velvet Store",
        year: "2023",
        tags: ["Web Design", "Branding"],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Zenith Fit",
        year: "2023",
        tags: ["Product Design", "App"],
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Echo Stream",
        year: "2023",
        tags: ["App Concept", "Music"],
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
    }
];

const AUTO_PLAY_DELAY = 6000;

const DesignShowcase: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const currentProject = projects[currentIndex];

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, []);

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextProject, AUTO_PLAY_DELAY);
        return () => clearInterval(interval);
    }, [isPaused, nextProject]);

    return (
        <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
            {/* Header - Centered */}
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-medium text-gray-400 mb-6">
                    • Design Showcase
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Fresh From My Desk
                </h2>
                <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
                    A collection of project screens, concepts, and creative explorations I've been working on.
                </p>
            </div>

            {/* Desktop Screen Container */}
            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Browser Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-[#111] rounded-2xl overflow-hidden border border-[#222] shadow-2xl"
                >
                    {/* Browser Top Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-[#1a1a1a]">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div className="flex-1 max-w-md mx-4">
                            <div className="bg-[#1a1a1a] rounded-md px-4 py-1.5 text-center">
                                <span className="text-gray-500 text-xs">makinwaa.com/projects/{currentProject.title.toLowerCase().replace(' ', '-')}</span>
                            </div>
                        </div>
                        <div className="w-20"></div>
                    </div>

                    {/* Image Container - Wide Desktop Ratio */}
                    <div className="relative aspect-[16/9] md:aspect-[21/10] overflow-hidden bg-black">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevProject}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110"
                        >
                            <IoChevronBack className="text-white text-xl" />
                        </button>
                        <button
                            onClick={nextProject}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/70 hover:bg-black/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110"
                        >
                            <IoChevronForward className="text-white text-xl" />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentProject.id}
                                src={currentProject.image}
                                alt={currentProject.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Gradient Overlay at Bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Bottom Info Bar - Inside the Screen */}
                    <div className="px-6 py-4 bg-[#0a0a0a] border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Project Info */}
                        <div className="flex items-center gap-4">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentProject.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-white font-semibold text-lg"
                                >
                                    {currentProject.title}
                                </motion.span>
                            </AnimatePresence>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-500 text-sm">{currentProject.year}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex-1 max-w-[250px] h-[3px] bg-[#1a1a1a] rounded-full overflow-hidden mx-4 hidden sm:block">
                            <motion.div
                                className="h-full bg-gray-500 rounded-full"
                                key={currentIndex}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: isPaused ? 0 : AUTO_PLAY_DELAY / 1000,
                                    ease: "linear"
                                }}
                            />
                        </div>

                        {/* Tags */}
                        <div className="flex items-center gap-2">
                            {currentProject.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs text-gray-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Dots Navigation - Below the Screen */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-400 ${idx === currentIndex
                                    ? 'bg-white w-8'
                                    : 'bg-gray-700 w-2 hover:bg-gray-500'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignShowcase;
