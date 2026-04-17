import React from 'react';
import { motion } from 'framer-motion';

const mediaItems = [
    {
        id: 1,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop', // Gaming/Esports vibe
        caption: "DOMINATING AT EA FC",
        aspect: 'aspect-[16/9]'
    },
    {
        id: 2,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop', // Workspace
        caption: "MY WORKSPACE",
        aspect: 'aspect-[4/3]'
    },
    {
        id: 3,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop', // Gym
        caption: "POST-GYM PUMP",
        aspect: 'aspect-[3/4]'
    },
    {
        id: 4,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop', // Design
        caption: "MIDNIGHT DESIGN SESSIONS",
        aspect: 'aspect-[16/9]'
    },
    {
        id: 5,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop', // Music/Chill
        caption: "CURATING PLAYLISTS",
        aspect: 'aspect-[1/1]'
    }
];

// Duplicate for marquee
const marqueeItems = [...mediaItems, ...mediaItems, ...mediaItems];

const PersonalGallery: React.FC = () => {
    return (
        <section className="bg-gray-50 text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-gray-200">
            <div className="max-w-[1400px] mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white text-xs font-medium text-gray-500 tracking-widest mb-6 shadow-sm">
                    • Lifestyle
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Life Beyond Design
                </h2>
            </div>

            <div className="relative w-full">
                {/* Marquee Container */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 pl-6"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {marqueeItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="flex flex-col gap-4 group cursor-default">
                                {/* Image Container with varied aspect ratios/heights */}
                                <div
                                    className={`relative overflow-hidden bg-gray-100 border border-gray-200 grayscale group-hover:grayscale-0 transition-all duration-500
                                        ${item.aspect === 'aspect-[16/9]' ? 'w-[400px] h-[225px]' : ''}
                                        ${item.aspect === 'aspect-[4/3]' ? 'w-[320px] h-[240px]' : ''}
                                        ${item.aspect === 'aspect-[3/4]' ? 'w-[240px] h-[320px]' : ''}
                                        ${item.aspect === 'aspect-[1/1]' ? 'w-[300px] h-[300px]' : ''}
                                    `}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>

                                {/* Caption */}
                                <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors duration-300 border-l border-gray-300 pl-3">
                                    {item.caption}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PersonalGallery;
