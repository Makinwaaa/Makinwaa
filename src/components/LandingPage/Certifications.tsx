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
        <section className="bg-white text-gray-900 py-24 px-6 md:px-16 lg:px-24">
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
