
import React from 'react';
import { IoStar } from 'react-icons/io5';

const testimonials = [
    {
        id: 1,
        name: "Macaulay Uzu",
        role: "FrontEnd Lead, Hydrogen",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Macaulay&backgroundColor=b6e3f4",
        content: "Collaborating with Makinwaa was effortless. He integrated seamlessly with our development team, making the handoff and implementation process incredibly smooth."
    },
    {
        id: 2,
        name: "Aduragbemi Gagher",
        role: "Product Manager, DokRx",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Aduragbemi&backgroundColor=c0aede",
        content: "Makinwaa delivered an exceptional design for our Healthtech platform. He truly grasped our user needs and translated them into a highly effective interface."
    },
    {
        id: 3,
        name: "Eriadura Odunlami",
        role: "CEO, Prejamb",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Eriadura&backgroundColor=ffdfbf",
        content: "He designed a beautiful educational platform for us. His work ethic is fantastic, and it was a pleasure collaborating to bring our vision to life."
    },
    {
        id: 4,
        name: "OluwaRotimi",
        role: "CTO, Hydrogen HR",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Rotimi&backgroundColor=d1d4f9",
        content: "Makinwaa is a standout talent. His ability to combine aesthetic appeal with functional design principles significantly elevated our product's quality."
    },
    {
        id: 5,
        name: "Ayomide Ishola",
        role: "FrontEnd Lead, Octacode",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Ayomide&backgroundColor=ffd5dc",
        content: "One of the easiest designers I've ever worked with. His designs are developer-friendly, and his communication makes the entire process efficient."
    },
    {
        id: 6,
        name: "Amusan Oluwatoni",
        role: "Founder, Bowentechhub",
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Amusan&backgroundColor=c0aede",
        content: "A highly skilled professional who consistently delivers. Working with Makinwaa was a great experience, and the final results exceeded our expectations."
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24">
            <div className="text-center mb-20">
                <div className="inline-block px-3 py-1 rounded-full border border-[#333] bg-[#1a1a1a] text-xs font-medium text-gray-300 mb-6">
                    • Testimonials
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    What People Are Saying.
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-gray-700">
                    Trusted by Industry Leaders.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((item) => (
                    <div key={item.id} className="bg-[#0A0A0A] border border-[#ffffff0d] rounded-3xl p-8 hover:bg-[#111] hover:border-blue-500/20 transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#333]">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-base group-hover:text-blue-500 transition-colors">{item.name}</h4>
                                <p className="text-gray-500 text-xs">{item.role}</p>
                            </div>
                        </div>

                        <div className="mb-4 flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <IoStar key={star} className="text-yellow-500/80 text-xs" />
                            ))}
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            "{item.content}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
