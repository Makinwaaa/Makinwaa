
import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';

const projects = [
    {
        id: 1,
        title: "Perplexity AI",
        subtitle: "Search Interface",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        quote: "Collaborated on the search interface to ensure rapid response times and fluid user interactions.",
        status: "Live Project",
        statusColor: "green",
        url: "#",
        tags: ["React", "AI Integration", "Tailwind"],
        bgColor: "bg-[#050505]"
    },
    {
        id: 2,
        title: "Sonar",
        subtitle: "Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        quote: "Built the analytics dashboard components using React and D3.js for real-time data visualization.",
        status: "Deployed Locally",
        statusColor: "yellow",
        url: "#",
        tags: ["D3.js", "Dashboard", "Real-time"],
        bgColor: "bg-[#1a0f0a]"
    },
    {
        id: 3,
        title: "Framer",
        subtitle: "Design System",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        quote: "Developed a shared component library to bridge the gap between design and engineering teams.",
        status: "Live Project",
        statusColor: "green",
        url: "#",
        tags: ["Design System", "TypeScript", "Storybook"],
        bgColor: "bg-[#080808]"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className={`w-[90vw] md:w-[1100px] h-[600px] flex-shrink-0 ${project.bgColor} rounded-3xl overflow-hidden border border-[#ffffff1a] relative mx-4 flex flex-col md:flex-row group transition-all duration-300 hover:border-[#ffffff33]`}>

        {/* Left Side - Content (40% width) */}
        <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col relative z-10 border-r border-white/5 bg-[#ffffff02]">
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="text-white font-bold text-lg md:text-xl">{project.title}</span>
            </div>

            {/* Quote/Description (Top) */}
            <h3 className="text-2xl md:text-3xl leading-snug font-medium text-white/90 mb-8">
                "{project.quote}"
            </h3>

            {/* Spacer to push Subtitle and Tags down */}
            <div className="mt-auto"></div>

            {/* Subtitle (Small) */}
            <div className="text-white/40 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                {project.subtitle}
            </div>

            {/* Tags (Just above border) */}
            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer: Status + Arrow Link (Border Separated) */}
            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                {/* Status Indicator */}
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.statusColor === 'green' ? 'bg-green-400' : 'bg-yellow-400'} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${project.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                    </span>
                    <span className={`text-sm font-medium ${project.statusColor === 'green' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {project.status}
                    </span>
                </div>

                {/* External Link Arrow */}
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group/link"
                >
                    <IoArrowForward className="transform group-hover/link:-rotate-45 transition-transform duration-300" />
                </a>
            </div>
        </div>

        {/* Right Side - Image (60% width) */}
        <div className="w-full md:w-[60%] h-full relative overflow-hidden bg-black">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>

            {/* Image Container */}
            <div className="absolute inset-0 group-hover:inset-4 transition-all duration-700 ease-in-out">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:rounded-xl"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
        </div>
    </div>
);

const ProjectShowcase: React.FC = () => {
    // Duplicate projects for infinite loop
    const doubledProjects = [...projects, ...projects, ...projects];

    return (
        <section className="bg-black text-white py-32 overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-20 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-medium text-gray-300 mb-6">
                    • Projects Worked On
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Delivering Tangible Results
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700 mb-8">
                    That Propel Your Success
                </h2>

                <p className="text-gray-400 max-w-xl mx-auto mb-10 text-[16px]">
                    At the core of everything we do lies a commitment to collaborating with
                    ambitious teams to deliver measurable outcomes.
                </p>

                <a href="/contact" className="bg-[#1A5CFF] hover:bg-[#0047FF] text-white text-sm font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(26,92,255,0.3)] hover:shadow-[0_0_30px_rgba(26,92,255,0.5)]">
                    Book a 15-min call
                </a>
            </div>

            {/* Scrolling Carousel - Auto Scroll */}
            <div className="relative w-full overflow-hidden group/carousel">
                {/* Fade Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none hidden md:block"></div>

                <div className="flex">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-33.33%"] }} // Scroll one set of projects
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 50 // Slower scroll speed (increased from 20)
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {doubledProjects.map((project, index) => (
                            <ProjectCard key={`${project.id}-${index}`} project={project} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
