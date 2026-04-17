
import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoFigma } from 'react-icons/io5';

const MakImage = require('./Asset/Mak.jpeg');

const AboutSection: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Section Header - Left Aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-500 tracking-widest mb-6">
                        • About Me
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        A Little Bit About Myself
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Image Column (Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden border border-gray-200 group">
                            <img
                                src={MakImage}
                                alt="Makinwa Amori"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/10">
                                <div className="flex flex-col">
                                    <div className="text-white/60 text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2">Based In</div>
                                    <div className="text-white text-lg md:text-xl font-bold">Ibadan, Nigeria</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column (Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 flex flex-col h-full"
                    >
                        {/* Bio Text */}
                        <div className="mb-10">
                            <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-6 leading-relaxed">
                                I'm a <span className="text-[#1A5CFF] font-medium">Product Designer</span> who believes that great design is the bridge between a user's need and a business's goal.
                            </h3>
                            <div className="space-y-5 text-gray-600 text-[15px] md:text-[16px] font-light leading-[1.8]">
                                <p>
                                    With over 4 years of hands-on experience, I've partnered with startups and established
                                    brands to craft digital products that are not only visually stunning but strategically
                                    designed to convert and engage.
                                </p>
                                <p>
                                    My approach is simple: I transform complex problems into intuitive, human-centered solutions.
                                    Every pixel has a purpose, and every interaction tells a story.
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-gray-100 mb-10"></div>

                        {/* Skills & Arsenal Section - Minimal Text Layout */}
                        <div className="flex flex-col gap-10">

                            {/* Skills Row */}
                            <div>
                                <div className="text-xs font-mono text-gray-400 mb-4 tracking-[0.2em] uppercase">.skills</div>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm md:text-base text-gray-500 font-light">
                                    {["Design Strategy", "UX Research", "UI/UX Design", "Prototyping", "Interaction Design"].map((skill, index, array) => (
                                        <React.Fragment key={index}>
                                            <span className="hover:text-gray-900 transition-colors cursor-default">{skill}</span>
                                            {index !== array.length - 1 && (
                                                <span className="text-gray-300">•</span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Arsenal Row */}
                            <div>
                                <div className="text-sm font-mono text-gray-500 mb-6 tracking-widest">.tool</div>
                                <div className="flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50 group-hover:bg-[#F24E1E] group-hover:border-[#F24E1E] transition-all duration-300">
                                        <IoLogoFigma className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 text-lg font-medium">Figma</span>
                                        <span className="text-gray-500 text-sm group-hover:text-[#F24E1E] transition-colors">Daily Driver</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
