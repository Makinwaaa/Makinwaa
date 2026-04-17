import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { IoLockClosed } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const mainProjects = [
    {
        id: 1,
        title: "Cribly™️",
        year: "2026",
        category: "Web Application",
        description: "I designed Cribly™️, a premium real estate marketplace for the Canadian market. My goal was to make renting, buying, and selling properties completely effortless.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: false,
        liveUrl: "#",
        slug: "cribly",
    },
    {
        id: 2,
        title: "Recommender",
        year: "2026",
        category: "Web Application",
        description: "I crafted the user experience for Recommender, an intelligent AI discovery engine. I focused on building a clean interface that delivers personalized, high-converting recommendations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 3,
        title: "Proton Collections",
        year: "2025",
        category: "Web Application",
        description: "I shaped the entire interface for Proton Collections, a civic-tech tool. I designed it to streamline tax compliance and help field agents collect revenue securely and efficiently.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: false,
        liveUrl: "#",
        slug: "proton-collections",
    },
    {
        id: 4,
        title: "CRide",
        year: "2025",
        category: "Mobile Application",
        description: "I built the central product flow for CRide, a dynamic ride-hailing app. I crafted an experience focused entirely on speed and safety, helping riders move and drivers earn effortlessly.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        ndaLocked: false,
        liveUrl: "#",
        slug: "cride",
    },
    {
        id: 5,
        title: "Quiva Transfers",
        year: "2025",
        category: "Mobile Application",
        description: "I designed Quiva Transfers, a borderless fintech app. I created a seamless flow that allows users to securely send money from the UK to Nigeria with zero friction.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 6,
        title: "Project Management Platform",
        year: "2025",
        category: "Web Application",
        description: "I architected the UI/UX for this enterprise collaborative workspace. My primary focus was bringing clarity to complex workflows so teams could collaborate without feeling overwhelmed.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 7,
        title: "HR System",
        year: "2025",
        category: "Web Application",
        description: "I reimagined the employee enterprise experience by designing a beautifully cohesive HR System. I streamlined complex processes like payroll and onboarding into a simple, intuitive dashboard.",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
        ndaLocked: false,
        liveUrl: "#",
        slug: "hr-system",
    },
    {
        id: 8,
        title: "Lease2earn",
        year: "2025",
        category: "Web Application",
        description: "I brought Lease2earn to life—a peer-to-peer car-sharing app. I designed the platform to make it incredibly easy for users to securely lease out their idle vehicles for passive income.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
        ndaLocked: true,
        liveUrl: "#",
    },
    {
        id: 9,
        title: "DokRx",
        year: "2023",
        category: "Web Application",
        description: "I designed DokRx, a telemedicine platform born out of necessity during the pandemic. I crafted an accessible interface allowing patients to comfortably book virtual appointments from home.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        ndaLocked: false,
        liveUrl: "#",
        slug: "dokrx",
    }
];

const designConcepts = [
    {
        id: 1, title: "Way Fields", year: "2024", tags: ["E-Commerce", "Portfolio"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2, title: "Aura Smart", year: "2024", tags: ["Mobile App", "UI Design"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3, title: "Velvet Store", year: "2023", tags: ["Web Design", "Branding"],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4, title: "Zenith Fit", year: "2023", tags: ["Product Design", "App"],
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5, title: "Echo Stream", year: "2023", tags: ["App Concept", "Music"],
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop"
    }
];

export default function Portfolio() {
    // Floating shapes animation variants tailored exactly from AboutHero
    const floatVariants: any = {
        animate: {
            y: [0, -25, 0],
            rotate: [0, 10, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const floatVariants2: any = {
        animate: {
            y: [0, 20, 0],
            x: [0, -15, 0],
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen pb-16 md:pb-24">
            {/* Header tailored perfectly to AboutHero */}
            <section className="relative min-h-[85vh] bg-white text-gray-900 flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 pt-24 md:pt-40 overflow-hidden pb-12 md:pb-16 mb-20 md:mb-32">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none mix-blend-multiply"></div>
                <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>

                <motion.div variants={floatVariants} animate="animate" className="absolute top-[15%] left-[10%] w-32 h-32 border border-black/5 rounded-full opacity-30 hidden md:block backdrop-blur-sm bg-black/5" />
                <motion.div variants={floatVariants2} animate="animate" className="absolute top-[45%] left-[5%] w-4 h-4 bg-blue-500/40 rounded-full hidden md:block" />
                <motion.div variants={floatVariants2} animate="animate" className="absolute bottom-[20%] right-[15%] w-40 h-40 border border-blue-500/10 rounded-full opacity-30 hidden md:block border-dashed" />
                <motion.div variants={floatVariants} animate="animate" className="absolute top-[25%] right-[10%] w-6 h-6 bg-black/10 rounded-sm rotate-45 hidden md:block backdrop-blur-md" />

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-gilda text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 mb-8 leading-[1.2]"
                    >
                        Featured <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">
                            Projects
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 font-light leading-relaxed tracking-wide px-4"
                    >
                        A curated selection of my recent works, ranging from enterprise web platforms to high-performance mobile applications.
                    </motion.p>

                    <div className="mt-16 flex justify-center gap-3">
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="w-2 h-2 rounded-full bg-black/20" />
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="w-2 h-2 rounded-full bg-black/40" />
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="w-2 h-2 rounded-full bg-black/20" />
                    </div>
                </div>
            </section>

            {/* Main Projects - Alternate Layout */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
                <div className="space-y-32 md:space-y-48">
                    {mainProjects.map((project, index) => {
                        const isEven = index % 2 !== 0;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col gap-8 md:gap-16 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-3/5">
                                    <div className="relative group overflow-hidden bg-gray-50 aspect-[4/3] w-full border border-gray-100 shadow-sm">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                                    <span className="text-sm font-mono text-gray-500 tracking-widest uppercase mb-4 block">
                                        {project.year} • {project.category}
                                    </span>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-600 text-[15px] md:text-lg font-light leading-relaxed mb-10 max-w-lg">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-6">
                                        {project.ndaLocked ? (
                                            <span className="flex items-center text-gray-400 text-sm gap-2 font-medium cursor-not-allowed bg-gray-50 px-5 py-3 rounded-full border border-gray-100">
                                                <IoLockClosed className="text-[16px]" /> Under NDA
                                            </span>
                                        ) : (
                                            <Link to={`/works/${project.slug}`} className="flex items-center text-white bg-gray-900 hover:bg-blue-600 text-sm gap-2 font-medium px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg">
                                                Read Case Study <FiArrowUpRight className="text-[16px]" />
                                            </Link>
                                        )}

                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-900 hover:text-blue-600 text-sm gap-1 font-medium transition-colors">
                                                Visit Live <FiArrowUpRight className="text-[16px]" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200 mt-32 md:mt-48 mb-24 max-w-[1400px] mx-auto opacity-50"></div>

            {/* Design Explorations - Masonry Grid Layout */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        Interface Explorations
                    </h2>
                    <p className="text-gray-600 max-w-2xl text-base md:text-lg font-light leading-relaxed">
                        A collection of visual experiments, UI concepts, and brand identities outside my core product work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {designConcepts.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group cursor-pointer ${index === 3 || index === 4 || index === 0 ? "lg:col-span-2 sm:col-span-1" : "lg:col-span-1"}`}
                        >
                            <div className="relative w-full h-[300px] md:h-[400px] bg-gray-50 overflow-hidden mb-4 border border-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                                {/* Overlay Tags */}
                                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/90 backdrop-blur text-gray-900 px-3 py-1 font-medium border border-gray-200/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                <span className="text-gray-400 text-sm font-light">{item.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
