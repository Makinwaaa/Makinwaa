import React from 'react';
import { motion, Variants } from 'framer-motion';

const AboutHero: React.FC = () => {
    // Floating shapes animation variants
    const floatVariants: Variants = {
        animate: {
            y: [0, -25, 0],
            rotate: [0, 10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const floatVariants2: Variants = {
        animate: {
            y: [0, 20, 0],
            x: [0, -15, 0],
            transition: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section className="relative min-h-[85vh] bg-white text-gray-900 flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 pt-32 md:pt-40 overflow-hidden pb-16">
            {/* Background Texture/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Background Glow - Intensified for less "blank" look */}
            <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[130px] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute top-[30%] right-[20%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 pointer-events-none"></div>

            {/* Floating Decorative Shapes - More prominent */}
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-[15%] left-[10%] w-32 h-32 border border-black/5 rounded-full opacity-30 hidden md:block backdrop-blur-sm bg-black/5"
            />
            <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute top-[45%] left-[5%] w-4 h-4 bg-blue-500/40 rounded-full hidden md:block"
            />
            <motion.div
                variants={floatVariants2}
                animate="animate"
                className="absolute bottom-[20%] right-[15%] w-40 h-40 border border-blue-500/10 rounded-full opacity-30 hidden md:block border-dashed"
            />
            <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute top-[25%] right-[10%] w-6 h-6 bg-black/10 rounded-sm rotate-45 hidden md:block backdrop-blur-md"
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Main Heading - Reduced Size per request */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-gilda text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 mb-8 leading-[1.2]"
                >
                    Beyond the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">
                        Portfolio
                    </span>
                </motion.h1>

                {/* Subtext - Added width and styled */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 font-light leading-relaxed tracking-wide px-4"
                >
                    A closer look at the person behind the pixels. Exploring the intersection of design, technology, and life's little moments.
                </motion.p>

                {/* Decorative Elements to fill space */}
                <div className="mt-16 flex justify-center gap-3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-2 h-2 rounded-full bg-black/20"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-2 h-2 rounded-full bg-black/40"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 }}
                        className="w-2 h-2 rounded-full bg-black/20"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
