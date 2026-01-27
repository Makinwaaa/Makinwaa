
import React from 'react';

const workHistory = [
    {
        id: "01",
        role: "Senior Product Designer",
        company: "Google",
        duration: "2023 - Present",
        description: "Leading design systems for cloud platform tools."
    },
    {
        id: "02",
        role: "Lead UI/UX Designer",
        company: "Stripe",
        duration: "2021 - 2023",
        description: "Redesigned checkout experience, +15% conversion."
    },
    {
        id: "03",
        role: "Product Designer",
        company: "Airbnb",
        duration: "2019 - 2021",
        description: "Launched the Experiences feature."
    },
    {
        id: "04",
        role: "UI Designer",
        company: "Spotify",
        duration: "2017 - 2019",
        description: "Mobile app dark mode and accessibility."
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
            <div>
                {workHistory.map((work) => (
                    <div
                        key={work.id}
                        className="border-t border-[#1a1a1a] py-8 flex items-start hover:bg-[#0a0a0a] transition-colors cursor-pointer"
                    >
                        {/* Number */}
                        <span className="text-gray-600 text-sm font-mono w-12 flex-shrink-0">{work.id}</span>

                        {/* Role & Company */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-semibold text-lg">{work.role}</h3>
                            <p className="text-gray-500 text-sm">{work.company}</p>
                        </div>

                        {/* Description & Duration - Right Side */}
                        <div className="hidden md:flex items-center gap-8 ml-auto">
                            <p className="text-gray-500 text-sm max-w-xs text-right">{work.description}</p>
                            <span className="text-gray-500 text-sm whitespace-nowrap">{work.duration}</span>
                        </div>

                        {/* Mobile: Duration only */}
                        <span className="text-gray-500 text-sm whitespace-nowrap md:hidden ml-auto">{work.duration}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
