import React from 'react';
import { motion } from 'framer-motion';
import { IoRibbonOutline } from 'react-icons/io5';

const certifications = [
    {
        id: 1,
        title: "UX Designer: Visual/UI Design",
        issuer: "EntryLevel",
        date: "2024",
        description: "Focusing on the visual aspects of digital products, mastering color theory, typography, and high-fidelity interface design. Credential ID: 9142d8c5-0ab6-4976-9d84-e8e0856cf6f4"
    },
    {
        id: 2,
        title: "UX Design Fundamentals",
        issuer: "EntryLevel",
        date: "2023",
        description: "Mastering the core principles of user experience design, from user research and wireframing to prototyping and usability testing. Credential ID: a33d71eb-c8e9-449d-ac3c-4723497b89c0"
    },
    {
        id: 3,
        title: "BSc Computer Science & IT",
        issuer: "Bowen University Iwo",
        date: "2022",
        description: "Studied Computer Science and Information Technology, building a strong technical foundation in software principles and complex systems."
    }
];

const Certifications: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 tracking-widest mb-6">
                        • Credentials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Certifications & Awards
                    </h2>
                    <p className="text-gray-600 max-w-2xl text-lg font-light leading-relaxed">
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
                            className="group bg-white border border-gray-200 p-8 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md hover:bg-gray-50"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300 text-2xl text-gray-600">
                                    <IoRibbonOutline />
                                </div>
                                <span className="text-xs font-mono text-gray-600 border border-gray-200 px-3 py-1 rounded-full bg-gray-50">{cert.date}</span>
                            </div>

                            <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-[#1A5CFF] transition-colors">
                                {cert.title}
                            </h3>
                            <div className="text-sm text-gray-500 mb-4">{cert.issuer}</div>

                            <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-200 pt-4 mt-4">
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
