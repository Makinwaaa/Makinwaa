
import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward, IoLogoWhatsapp, IoDocumentTextOutline } from 'react-icons/io5';

const CTAFooter: React.FC = () => {
    const currentYear = new Date().getFullYear();

    // WhatsApp link with phone number
    const whatsappNumber = "2348159225460";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Makinwa,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;

    // Email
    const email = "amoriademakinwa@gmail.com";

    // Resume Link (Placeholder)
    const resumeLink = "#";

    return (
        <section className="bg-gradient-to-t from-[#0a0a0a] to-black text-white py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Gradient Orbs - Softened and moved bottom */}
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30"></div>

                {/* Grid Pattern - Lower opacity */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-medium text-gray-400 mb-8"
                >
                    • Let's Work Together
                </motion.span>

                {/* Main Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                >
                    Have a project in mind?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-[16px] max-w-lg mx-auto mb-10 leading-relaxed"
                >
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-[#25D366] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#20bd5a] transition-all duration-300 text-sm"
                    >
                        <IoLogoWhatsapp className="text-lg" />
                        WhatsApp Me
                        <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={resumeLink}
                        download
                        className="flex items-center gap-2 border border-[#333] text-white font-medium py-3 px-6 rounded-full hover:bg-[#111] hover:border-[#444] transition-all duration-300 text-sm"
                    >
                        <IoDocumentTextOutline className="text-lg" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Email Display */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="inline-block mb-16"
                >
                    <a
                        href={`mailto:${email}`}
                        className="text-base md:text-lg font-medium text-gray-500 hover:text-white transition-colors duration-300 border-b border-gray-700 hover:border-white pb-1"
                    >
                        {email}
                    </a>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent mb-10"
                />

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Open to new opportunities</span>
                    </div>

                    <div className="flex items-center gap-5">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dribbble</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    </div>

                    <span>© {currentYear} Makinwaa</span>
                </motion.div>
            </div>
        </section>
    );
};

export default CTAFooter;
