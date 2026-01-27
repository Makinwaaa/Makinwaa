
import React from 'react';
import { IoStar } from 'react-icons/io5';

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO at TechFlow",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "Makinwaa transformed our product vision into a tangible, user-friendly reality. The attention to detail and user-centric approach is unmatched."
    },
    {
        id: 2,
        name: "David Chen",
        role: "Founder, GreenSpace",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "An absolute professional. The new design system helped us scale our development velocity by 40% within the first quarter."
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager, Stripe",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Best designer I've worked with. Understands both the creative and technical constraints of building modern software."
    },
    {
        id: 4,
        name: "Michael Ross",
        role: "CTO, Nexus Corp",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        content: "We needed a complete brand overhaul and Makinwaa delivered beyond our expectations. Our customer engagement has doubled."
    },
    {
        id: 5,
        name: "Jessica Lee",
        role: "Marketing Director",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        content: "The landing page conversion rate jumped by 200% after the redesign. The results speak for themselves. Highly recommended."
    },
    {
        id: 6,
        name: "Thomas Wright",
        role: "VP of Product, Linear",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        content: "Exceptional quality and speed. Makinwaa has a rare ability to solve complex UX problems with simple, elegant interfaces."
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
