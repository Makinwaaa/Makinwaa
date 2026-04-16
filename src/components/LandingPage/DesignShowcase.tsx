
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
        <section className="bg-gray-50 text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24">
            {/* Header - Left Aligned */}
            <div className="mb-10 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 mb-6 shadow-sm">
                    • Design Showcase
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Interface Explorations
                </h2>
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
                    className="relative bg-white overflow-hidden border border-gray-200 shadow-sm w-full"
                >
                    {/* Browser Top Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div className="hidden md:block flex-1 max-w-md mx-4">
                            <div className="bg-white border border-gray-200 rounded-md px-4 py-1.5 text-center shadow-sm">
                                <span className="text-gray-500 text-xs truncate block">makinwaa.com/design/{currentProject.title.toLowerCase().replace(' ', '-')}</span>
                            </div>
                        </div>
                        <div className="w-20 hidden md:block"></div>
                    </div>

                    {/* Image Container - Wide Desktop Ratio */}
                    <div className="relative aspect-[16/9] md:aspect-[21/10] lg:aspect-[24/10] overflow-hidden bg-gray-100">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevProject}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/70 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:scale-110 shadow-sm"
                        >
                            <IoChevronBack className="text-gray-900 text-xl" />
                        </button>
                        <button
                            onClick={nextProject}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/70 hover:bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:scale-110 shadow-sm"
                        >
                            <IoChevronForward className="text-gray-900 text-xl" />
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
                    </div>

                    {/* Bottom Info Bar - Inside the Screen */}
                    <div className="px-6 py-5 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Project Info */}
                        <div className="flex items-center gap-4">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentProject.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-gray-900 font-semibold text-lg"
                                >
                                    {currentProject.title}
                                </motion.span>
                            </AnimatePresence>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-500 text-sm font-medium">{currentProject.year}</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex-1 max-w-[250px] h-1.5 bg-gray-100 rounded-full overflow-hidden mx-4 hidden sm:block">
                            <motion.div
                                className="h-full bg-gray-400 rounded-full"
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
                        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
                            {currentProject.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Dots Navigation - Below the Screen */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-400 ${idx === currentIndex
                                ? 'bg-gray-800 w-8'
                                : 'bg-gray-300 w-2 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignShowcase;
