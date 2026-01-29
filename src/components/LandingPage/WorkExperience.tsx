
import React from 'react';

const workHistory = [
    {
        id: "01",
        role: "Product Design Lead",
        company: "Octacode Technology Limited",
        location: "Lagos, Nigeria",
        type: "Fulltime",
        duration: "Dec 2024 - Present",
        description: "Leading design team, designed series of solutions for companies."
    },
    {
        id: "02",
        role: "UIUX Designer",
        company: "Hydrogen Technology Limited",
        location: "Lagos, Nigeria",
        type: "Fulltime",
        duration: "May 2024 - Present",
        description: "Designed a comprehensive SaaS platform optimizing HR operations."
    },
    {
        id: "03",
        role: "Product Designer",
        company: "Dokto",
        location: "United States",
        type: "Contract",
        duration: "March 2025 - Sep 2025",
        description: "Designed healthtech software for practitioners and users."
    },
    {
        id: "04",
        role: "UIUX Designer",
        company: "DokRx",
        location: "Lagos, Nigeria",
        type: "Fulltime",
        duration: "May 2023 - Aug 2025",
        description: "Worked on healthtech software for practitioners and users."
    },
    {
        id: "05",
        role: "UIUX Designer",
        company: "Bethillszone",
        location: "United Kingdom",
        type: "Contract",
        duration: "Jan 2023 - Apr 2023",
        description: "Built user interface for betting prediction engine."
    }
];

const WorkExperience: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
            {/* Header */}
            <div className="mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-medium text-gray-400 mb-6">
                    • Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Work History
                </h2>
            </div>

            {/* Timeline List */}
            <div className="flex flex-col">
                {workHistory.map((work) => (
                    <div
                        key={work.id}
                        className="border-t border-[#1a1a1a] py-10 flex flex-col xl:flex-row xl:items-center gap-6 hover:bg-[#0a0a0a] transition-colors cursor-pointer group"
                    >
                        {/* Number */}
                        <span className="text-gray-600 text-sm font-mono w-12 flex-shrink-0 pt-1">{work.id}</span>

                        {/* Role & Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-500 transition-colors">{work.role}</h3>
                            <div className="flex items-center text-gray-400 text-sm">
                                <span className="font-medium text-gray-300">{work.company}</span>
                                <span className="mx-2 text-gray-600">•</span>
                                <span>{work.location}</span>
                                <span className="mx-2 text-gray-600">•</span>
                                <span>{work.type}</span>
                            </div>
                        </div>

                        {/* Description & Duration */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 xl:ml-auto w-full xl:w-auto mt-4 xl:mt-0">
                            <p className="text-gray-400 text-sm whitespace-nowrap overflow-x-auto no-scrollbar">{work.description}</p>
                            <span className="text-gray-500 text-xs font-medium tracking-wide uppercase border border-white/10 px-3 py-1 rounded-full">
                                {work.duration}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
