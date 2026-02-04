import React from 'react';
import { motion } from 'framer-motion';
import { IoRibbonOutline } from 'react-icons/io5';

const certifications = [
    {
        id: 1,
        title: "Google UX Design Professional Certificate",
        issuer: "Google",
        date: "2023",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Placeholder or use icon
        description: "Comprehensive training in the UX design process: empathizing with users, defining pain points, ideating solutions, creating wireframes and prototypes, testing and iterating on designs."
    },
    {
        id: 2,
        title: "Human-Computer Interaction",
        issuer: "Interaction Design Foundation (IxDF)",
        date: "2022",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Interaction_Design_Foundation_logo.png/600px-Interaction_Design_Foundation_logo.png",
        description: "Deep dive into HCI principles, focusing on how computer technology should be designed for human interaction."
    },
    {
        id: 3,
        title: "Advanced React Patterns",
        issuer: "Frontend Masters",
        date: "2024",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        description: "Mastering advanced React concepts, including render props, higher-order components, and state reducer patterns."
    }
];

const Certifications: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 tracking-widest mb-6">
                        • Credentials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Certifications & Awards
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
                        Continuous learning is at the heart of my process. Here are some of the qualifications I've earned along the journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:bg-[#141414]"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300 text-2xl text-white/70">
                                    <IoRibbonOutline />
                                </div>
                                <span className="text-xs font-mono text-gray-500 border border-white/5 px-3 py-1 rounded-full bg-black/50">{cert.date}</span>
                            </div>

                            <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#1A5CFF] transition-colors">
                                {cert.title}
                            </h3>
                            <div className="text-sm text-gray-400 mb-4">{cert.issuer}</div>

                            <p className="text-sm text-gray-500 leading-relaxed border-t border-white/5 pt-4 mt-4">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
