import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowForward, IoLockClosed } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';

const allProjects = [
    {
        id: 1,
        title: "Partyverse",
        year: "2025",
        category: "Mobile Application",
        description: "Designed Partyverse's v1.0: a warm, widget-based event app that makes anyone feel like a planner. People literally started hosting events just to use it.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: false,
        liveUrl: null,
    },
    {
        id: 2,
        title: "Chainrails",
        year: "2025",
        category: "Web Application",
        description: "Crafted Chainrails, an SDK that lets anyone pay from any chain, with any token. No checking or swapping required.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 3,
        title: "Peer Virtual Cards",
        year: "2025",
        category: "Mobile Application",
        description: "Introduced a new look to Peer's 'Virtual Cards' interface, designed to be more vibrant and built around how users actually spend everyday.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: true,
        liveUrl: null,
    },
    {
        id: 4,
        title: "Sonar Analytics",
        year: "2024",
        category: "Web Application",
        description: "Built the analytics dashboard components using React and D3.js for real-time data visualization.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: false,
        liveUrl: "#",
    },
    {
        id: 5,
        title: "Velocity",
        year: "2024",
        category: "Web Application",
        description: "A comprehensive digital banking platform offering frictionless financial management.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 6,
        title: "Nexus Store",
        year: "2023",
        category: "Web Application",
        description: "An elegant e-commerce experience maximizing conversion through rapid interactions.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: false,
        liveUrl: null,
    },
    {
        id: 7,
        title: "Aurora System",
        year: "2023",
        category: "Web Application",
        description: "Developed a shared component library to bridge the gap between design and engineering teams.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 8,
        title: "Sentinel Security",
        year: "2023",
        category: "Web Application",
        description: "Designed a mobile security management suite providing real-time alerts.",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: false,
        liveUrl: null,
    },
    {
        id: 9,
        title: "Horizon",
        year: "2022",
        category: "Web Application",
        description: "Architected a minimalist landing page designed to attract high-end enterprise clients.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        hasCaseStudy: true,
        ndaLocked: false,
        liveUrl: "#",
    }
];

const categories = ["All", "Web Application", "Mobile Application"];

const ProjectShowcase: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProjects = activeTab === "All"
        ? allProjects
        : allProjects.filter(p => p.category === activeTab);

    const getCount = (cat: string) => {
        if (cat === "All") return allProjects.length;
        return allProjects.filter(p => p.category === cat).length;
    };

    return (
        <section className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">

                {/* Filter Tabs */}
                <div className="flex flex-nowrap items-center gap-4 md:gap-8 mb-8 md:mb-12 border-b border-gray-100 pb-4">
                    {categories.map((cat) => {
                        const count = getCount(cat);
                        const isActive = activeTab === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`flex items-start transition-colors duration-300 relative ${isActive
                                    ? "text-gray-900 font-bold"
                                    : "text-gray-400 font-medium hover:text-gray-600"
                                    } text-sm md:text-lg whitespace-nowrap`}
                            >
                                {cat}
                                <span className="text-[10px] ml-1 -mt-1 font-semibold">{count}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 items-start">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col group"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden mb-6 flex items-center justify-center border border-gray-100">
                                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl md:text-2xl font-medium text-gray-900">
                                        {project.title}
                                    </h3>
                                    <span className="text-gray-400 text-sm font-light">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-gray-600 font-light leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Links bottom */}
                                <div className="flex items-center gap-6 mt-auto">
                                    {project.hasCaseStudy && (
                                        project.ndaLocked ? (
                                            <span className="flex items-center text-gray-400 text-sm gap-2 font-medium cursor-not-allowed">
                                                <IoLockClosed className="text-[16px]" /> Read Case Study
                                            </span>
                                        ) : (
                                            <a href="#" className="flex items-center text-gray-500 hover:text-gray-900 text-sm gap-1 font-medium transition-colors group/link relative">
                                                Read Case Study
                                                <IoArrowForward className="ml-1 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                                                <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-gray-900 group-hover/link:w-full transition-all duration-300"></span>
                                            </a>
                                        )
                                    )}

                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-900 hover:text-blue-600 text-sm gap-1 font-medium transition-colors">
                                            View Live Site <FiArrowUpRight className="text-[16px]" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectShowcase;
