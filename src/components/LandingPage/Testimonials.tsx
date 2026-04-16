
import React, { useRef, useEffect, useState } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Macaulay Uzu",
        role: "FrontEnd Lead, Hydrogen",
        initial: "MU",
        content: "Collaborating with Makinwaa was effortless. He integrated seamlessly with our development team, making the handoff and implementation process incredibly smooth."
    },
    {
        id: 2,
        name: "Aduragbemi Gagher",
        role: "Product Manager, DokRx",
        initial: "AG",
        content: "Makinwaa delivered an exceptional design for our Healthtech platform. He truly grasped our user needs and translated them into a highly effective interface."
    },
    {
        id: 3,
        name: "Eriadura Odunlami",
        role: "CEO, Prejamb",
        initial: "EO",
        content: "He designed a beautiful educational platform for us. His work ethic is fantastic, and it was a pleasure collaborating to bring our vision to life."
    },
    {
        id: 4,
        name: "OluwaRotimi",
        role: "CTO, Hydrogen HR",
        initial: "OR",
        content: "Makinwaa is a standout talent. His ability to combine aesthetic appeal with functional design principles significantly elevated our product's quality."
    },
    {
        id: 5,
        name: "Ayomide Ishola",
        role: "FrontEnd Lead, Octacode",
        initial: "AI",
        content: "One of the easiest designers I've ever worked with. His designs are developer-friendly, and his communication makes the entire process efficient."
    },
    {
        id: 6,
        name: "Amusan Oluwatoni",
        role: "Founder, Bowentechhub",
        initial: "AO",
        content: "A highly skilled professional who consistently delivers. Working with Makinwaa was a great experience, and the final results exceeded our expectations."
    }
];

// Single background tint for all cards (back side)
const cardAccents = [
    { bg: '#F8F6F3', border: '#E8E3DB' },
];

interface TestimonialCardProps {
    item: typeof testimonials[0];
    index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile: Intersection Observer to auto-flip when card enters viewport center
    useEffect(() => {
        if (!isMobile || !cardRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                        setIsFlipped(true);
                    } else {
                        setIsFlipped(false);
                    }
                });
            },
            {
                threshold: [0, 0.3, 0.7, 1.0],
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, [isMobile]);

    const accent = cardAccents[index % cardAccents.length];

    // Split name into first and last for stylish layout
    const nameParts = item.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    return (
        <div
            ref={cardRef}
            className="testimonial-card-container"
            onMouseEnter={() => !isMobile && setIsFlipped(true)}
            onMouseLeave={() => !isMobile && setIsFlipped(false)}
        >
            <div className={`testimonial-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                {/* ===== BACK FACE (Default - Shows Name Stylishly) ===== */}
                <div
                    className="testimonial-card-face testimonial-card-back"
                    style={{ backgroundColor: accent.bg, borderColor: accent.border }}
                >
                    <div className="testimonial-back-content">
                        {/* Decorative quote mark */}
                        <span className="testimonial-back-quote">"</span>

                        {/* Stylish name display */}
                        <div className="testimonial-back-name-group">
                            <h3 className="testimonial-back-firstname">{firstName}</h3>
                            {lastName && (
                                <h3 className="testimonial-back-lastname">{lastName}</h3>
                            )}
                        </div>

                        {/* Role line */}
                        <div className="testimonial-back-divider"></div>
                        <p className="testimonial-back-role">{item.role}</p>
                    </div>
                </div>

                {/* ===== FRONT FACE (Hover - Shows Testimonial Content) ===== */}
                <div className="testimonial-card-face testimonial-card-front">
                    <div className="testimonial-front-content">
                        {/* Open quote */}
                        <span className="testimonial-front-quote">"</span>

                        {/* Testimonial text */}
                        <p className="testimonial-front-text">
                            {item.content}
                        </p>

                        {/* Attribution */}
                        <div className="testimonial-front-attribution">
                            <div className="testimonial-front-avatar">
                                {item.initial}
                            </div>
                            <div>
                                <h4 className="testimonial-front-name">{item.name}</h4>
                                <p className="testimonial-front-role">{item.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white text-gray-900 py-16 md:py-24 px-6 md:px-16 lg:px-24">
            {/* Left-aligned Header */}
            <div className="mb-10 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 shadow-sm text-xs font-medium text-gray-500 mb-6">
                    • Testimonials
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    What People Are Saying.
                </h2>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {testimonials.map((item, index) => (
                    <TestimonialCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
