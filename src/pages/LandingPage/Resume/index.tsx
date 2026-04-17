import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <section className="min-h-screen bg-gray-50 text-gray-900 pt-32 md:pt-48 pb-16 md:pb-24 relative overflow-hidden" style={{ fontFamily: '"Jost", sans-serif' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 md:p-16 rounded-3xl border border-gray-200 shadow-sm"
                >
                    {/* HEADER */}
                    <div className="text-center border-b border-gray-200 pb-8 mb-8">
                        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3">AMORI ADEMAKINWA</h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-gray-600 text-[13px] md:text-base">
                            <a href="mailto:amoriademakinwa@gmail.com" className="hover:text-blue-600 transition-colors">amoriademakinwa@gmail.com</a>
                            <span className="hidden md:inline text-gray-300">|</span>
                            <a href="http://www.linkedin.com/in/ademakinwaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors break-all">http://www.linkedin.com/in/ademakinwaa</a>
                        </div>
                    </div>

                    {/* SKILL SET */}
                    <Section title="SKILL SET">
                        <p className="text-gray-700 leading-relaxed font-light text-sm md:text-base">
                            User Research and Analysis <span className="text-gray-300 mx-1">|</span>
                            Affinity Map <span className="text-gray-300 mx-1">|</span>
                            User Persona <span className="text-gray-300 mx-1">|</span>
                            Lightning Demo <span className="text-gray-300 mx-1">|</span>
                            Design Thinking and Problem Solving <span className="text-gray-300 mx-1">|</span>
                            Crazy 8s Sketch <span className="text-gray-300 mx-1">|</span>
                            Lo-Fi Prototype <span className="text-gray-300 mx-1">|</span>
                            Hi-Fi Prototype <span className="text-gray-300 mx-1">|</span>
                            Usability Testing Script <span className="text-gray-300 mx-1">|</span>
                            Proficient in Figma.
                        </p>
                    </Section>

                    {/* EDUCATION */}
                    <Section title="EDUCATION">
                        <div className="flex flex-col md:flex-row justify-between md:items-start mb-2">
                            <div>
                                <h3 className="font-semibold text-gray-900 text-base md:text-lg">Bowen University, Iwo, Nigeria.</h3>
                                <p className="text-gray-600 font-light mt-1 text-sm md:text-base">B.Sc. Computer Science.</p>
                            </div>
                            <span className="text-gray-500 text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">Sep 2018 - Nov 2022.</span>
                        </div>
                    </Section>

                    {/* WORK EXPERIENCE */}
                    <Section title="WORK EXPERIENCE">
                        {/* Octacode */}
                        <div className="mb-10 last:mb-0">
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-base md:text-lg">Octacode Technology Limited</h3>
                                    <p className="text-gray-800 font-medium mt-1 mb-3 text-sm md:text-base">Role - Product Design Lead</p>
                                </div>
                                <span className="text-gray-500 text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">May 2024 - Present.</span>
                            </div>
                            <ul className="list-disc leading-relaxed text-gray-700 font-light space-y-3 pl-4 text-sm md:text-base">
                                <li>Conducted comprehensive research on assigned tasks and projects to identify user pain points. I also made lightning demos to spot trends and gain more insights, that helped in solving the UX OR UI problem.</li>
                                <li>Designed high-fidelity prototypes for various landing pages, dashboards, mobile applications, and web applications using Figma.</li>
                                <li>Collaborated closely with developers during project and task development stages to ensure a smooth and efficient process. I also performed usability testing on tasks and projects upon completion of development.</li>
                            </ul>
                        </div>

                        {/* DokRx */}
                        <div className="mb-10 last:mb-0">
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-base md:text-lg">DokRx.</h3>
                                    <p className="text-gray-800 font-medium mt-1 mb-3 text-sm md:text-base">Role - UX Designer.</p>
                                </div>
                                <span className="text-gray-500 text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">May 2023 - Aug 2024.</span>
                            </div>
                            <ul className="list-disc leading-relaxed text-gray-700 font-light space-y-3 pl-4 text-sm md:text-base">
                                <li>Collaborated with another designer in carrying out user research and also making analysis of the research.</li>
                                <li>Collaborated with another designer to make a high-fidelity design for the company's landing page, and also for their web and mobile application.</li>
                                <li>Collaborated closely with developers during project and task development stages to ensure a smooth and efficient process.</li>
                            </ul>
                        </div>
                    </Section>

                    {/* LEADERSHIP & VOLUNTEERING */}
                    <Section title="LEADERSHIP & VOLUNTEERING EXPERIENCE">
                        {/* Bluestock */}
                        <div className="mb-8 last:mb-0">
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
                                <h3 className="font-semibold text-gray-900 text-base md:text-lg">UX DESIGNER - Bluestock Lab</h3>
                                <span className="text-gray-500 text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">Mar 2023 - Jul 2023.</span>
                            </div>
                            <ul className="list-disc leading-relaxed text-gray-700 font-light space-y-3 pl-4 text-sm md:text-base">
                                <li>Teamed up with another designer to create high-fidelity Web3 designs for the company's landing page and web application.</li>
                            </ul>
                        </div>

                        {/* Bowentechhub */}
                        <div className="mb-8 last:mb-0">
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
                                <h3 className="font-semibold text-gray-900 text-base md:text-lg">UX DESIGNER & INSTRUCTOR - Bowentechhub</h3>
                                <span className="text-gray-500 text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">Mar 2022 - Jul 2022</span>
                            </div>
                            <ul className="list-disc leading-relaxed text-gray-700 font-light space-y-3 pl-4 text-sm md:text-base">
                                <li>Instructed and taught students in the UIUX team on how to make user friendly design on Figma.</li>
                                <li>Designed high-fidelity prototypes for the Bowentechhub event [landing page, web & mobile application].</li>
                            </ul>
                        </div>
                    </Section>

                    {/* CERTIFICATION */}
                    <Section title="CERTIFICATION">
                        <div className="flex flex-col md:flex-row justify-between py-3 border-b border-gray-100 last:border-0 border-dashed">
                            <span className="font-medium text-gray-800 text-sm md:text-base">UX Designer: Visual/UI Design</span>
                            <span className="text-gray-500 text-sm mt-1 md:mt-0">Jun 2024 - Aug 2024</span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between py-3 border-b border-gray-100 last:border-0 border-dashed">
                            <span className="font-medium text-gray-800 text-sm md:text-base">UX Design Fundamentals</span>
                            <span className="text-gray-500 text-sm mt-1 md:mt-0">Apr 2023 - Jun 2023</span>
                        </div>
                    </Section>

                    {/* INTERESTS */}
                    <Section title="INTERESTS" borderBottom={false}>
                        <p className="text-gray-700 font-light tracking-wide text-sm md:text-base">
                            Surfing the internet <span className="text-gray-300 mx-2">|</span>
                            Watching design tips <span className="text-gray-300 mx-2">|</span>
                            Research <span className="text-gray-300 mx-2">|</span>
                            Traveling.
                        </p>
                    </Section>

                </motion.div>
            </div>
        </section>
    );
}

const Section = ({ title, children, borderBottom = true }: { title: string, children: React.ReactNode, borderBottom?: boolean }) => (
    <div className={`mb-10 ${borderBottom ? 'border-b border-gray-200 pb-10' : ''}`}>
        <h2 className="text-sm md:text-base font-bold tracking-widest text-gray-900 mb-6 uppercase border-b-2 border-blue-600 inline-block pb-1">{title}</h2>
        <div>{children}</div>
    </div>
);
