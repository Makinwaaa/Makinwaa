
import React from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward, IoLogoFigma, IoLogoReact, IoLogoCss3 } from 'react-icons/io5';
import { SiAdobexd, SiFramer } from 'react-icons/si';

const AboutSection: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Section Header - Left Aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 tracking-widest mb-6">
                        • About Me
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        A Little Bit About Myself
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4"
                    >
                        <div className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden border border-white/10 group">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                alt="Makinwa Amori"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="text-white/60 text-xs tracking-widest uppercase mb-1">Designer</div>
                                <div className="text-white text-xl font-bold">Makinwa Amori</div>
                                <div className="text-gray-400 text-sm mt-1">Ibadan, Nigeria</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-8 flex flex-col justify-between"
                    >
                        {/* Bio Text */}
                        <div className="mt-8 mb-8">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                                I'm a <span className="text-white font-semibold">Product & Web Designer</span> who
                                believes that great design is the bridge between a user's need and a business's goal.
                            </p>
                            <p className="text-base text-gray-500 leading-relaxed">
                                With over 4 years of hands-on experience, I've partnered with startups and established
                                brands to craft digital products that are not only visually stunning but strategically
                                designed to convert and engage. I transform complex problems into simple, intuitive solutions.
                            </p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-white/10">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white">4<span className="text-[#1A5CFF]">+</span></div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white">50<span className="text-[#1A5CFF]">+</span></div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Projects Delivered</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-white">30<span className="text-[#1A5CFF]">+</span></div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">Happy Clients</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Row - Tools & CTA Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-8">
                    {/* Tools Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Tools I Use</div>
                            <div className="text-white font-medium">Design & Development Stack</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/60 hover:text-[#F24E1E] hover:border-[#F24E1E]/30 transition-colors cursor-pointer">
                                <IoLogoFigma />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/60 hover:text-[#FF61F6] hover:border-[#FF61F6]/30 transition-colors cursor-pointer">
                                <SiAdobexd />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/60 hover:text-[#0055FF] hover:border-[#0055FF]/30 transition-colors cursor-pointer">
                                <SiFramer />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/60 hover:text-[#61DAFB] hover:border-[#61DAFB]/30 transition-colors cursor-pointer">
                                <IoLogoReact />
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white/60 hover:text-[#264de4] hover:border-[#264de4]/30 transition-colors cursor-pointer">
                                <IoLogoCss3 />
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 bg-gradient-to-br from-[#1A5CFF]/20 to-[#1A5CFF]/5 border border-[#1A5CFF]/20 rounded-[2rem] p-8 flex items-center justify-between"
                    >
                        <div>
                            <div className="text-white font-bold text-lg mb-1">Want to know more?</div>
                            <div className="text-gray-400 text-sm">Check out my full story</div>
                        </div>
                        <a
                            href="/about"
                            className="group flex items-center justify-center w-14 h-14 rounded-full bg-[#1A5CFF] hover:bg-[#0047FF] transition-colors"
                        >
                            <IoArrowForward className="text-white text-xl group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
