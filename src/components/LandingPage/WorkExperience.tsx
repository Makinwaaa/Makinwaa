
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
        <section className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24">
            {/* Header */}
            <div className="mb-10 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 shadow-sm text-xs font-medium text-gray-500 mb-6">
                    • Experience
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    Work History
                </h2>
            </div>

            {/* Timeline List */}
            <div className="flex flex-col">
                {workHistory.map((work) => (
                    <div
                        key={work.id}
                        className="border-t border-gray-200 py-6 md:py-10 flex flex-col xl:flex-row xl:items-center gap-3 md:gap-6 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                        {/* Number */}
                        <span className="text-gray-400 text-sm font-mono w-12 flex-shrink-0 pt-1">{work.id}</span>

                        {/* Role & Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-gray-900 font-bold text-lg md:text-xl mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">{work.role}</h3>
                            <div className="flex flex-wrap items-center text-gray-500 text-xs md:text-sm gap-y-1">
                                <span className="font-medium text-gray-600">{work.company}</span>
                                <span className="mx-2 text-gray-300">•</span>
                                <span>{work.location}</span>
                                <span className="mx-2 text-gray-300">•</span>
                                <span>{work.type}</span>
                            </div>
                        </div>

                        {/* Description & Duration */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-12 xl:ml-auto w-full xl:w-auto mt-2 xl:mt-0">
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{work.description}</p>
                            <span className="text-gray-500 text-xs font-medium tracking-wide uppercase border border-gray-200 bg-white px-3 py-1 rounded-full shadow-sm">
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
