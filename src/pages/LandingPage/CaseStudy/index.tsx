import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';

// ─── Case Study Data ────────────────────────────────────────────────────────
const caseStudies: Record<string, CaseStudyData> = {
    cribly: {
        title: "Cribly™️",
        subtitle: "Making real estate effortless for the Canadian market.",
        year: "2026",
        role: "Product Designer",
        platform: "Web Application",
        duration: "2.5 Months",
        team: "1 Designer, 3 Developers",
        liveUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        overview: "Cribly™️ began with a simple observation: renting, buying, and selling property in Canada was unnecessarily complicated. The existing platforms felt outdated, cluttered, and completely disconnected from how modern users actually searched for homes. I was brought on to reimagine the entire experience from the ground up.",
        sections: [
            {
                label: "The Problem",
                heading: "A broken journey from search to settlement.",
                paragraphs: [
                    "Canadian property seekers were bouncing between 3-4 different platforms just to complete a single transaction. Listings were inconsistent, communication with agents was fragmented, and the payment process felt like it belonged in a different decade.",
                    "Through extensive user interviews, I discovered that 78% of users abandoned their property search within the first week due to platform fatigue. The cognitive load was simply too high."
                ],
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
            },
            {
                label: "Research",
                heading: "Understanding the Canadian renter's mindset.",
                paragraphs: [
                    "I conducted 24 in-depth user interviews across Toronto, Vancouver, and Calgary. The patterns were clear: users wanted transparency, speed, and a single source of truth for their entire property journey.",
                    "I mapped out the complete user journey from initial search to contract signing, identifying 12 critical pain points where existing solutions were failing. The biggest frustration? Hidden fees and unclear availability."
                ],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Design Process",
                heading: "Building clarity into every interaction.",
                paragraphs: [
                    "My approach centered on radical simplicity. Every screen had one clear purpose. I stripped away the noise that plagued competitor platforms and focused on what users actually needed at each stage of their journey.",
                    "The design system I built used a warm, approachable color palette that felt premium without being intimidating. Typography was carefully chosen to balance authority with friendliness — critical for a platform handling major financial decisions.",
                    "I designed a unified dashboard that consolidated listings, communications, documents, and payments into a single coherent view. The interface used progressive disclosure to manage complexity without overwhelming first-time users."
                ],
                images: [
                    "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                ]
            },
            {
                label: "Key Features",
                heading: "Smart defaults and intelligent workflows.",
                paragraphs: [
                    "The AI-powered search learned from user behavior, surfacing increasingly relevant properties over time. Instead of filtering through hundreds of irrelevant listings, users would see a curated feed that actually understood their preferences.",
                    "I designed a real-time availability system that eliminated the frustrating experience of inquiring about properties that were already taken. Every listing showed live status, eliminating uncertainty at the very first touchpoint."
                ],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            },
            {
                label: "Outcome",
                heading: "From concept to market-ready product.",
                paragraphs: [
                    "The final product reduced the average property search-to-inquiry time by 60%. User testing showed a 92% task completion rate on core flows, compared to the industry average of 64%.",
                    "Cribly launched with 2,000+ pre-registered users and received overwhelmingly positive feedback from both property seekers and real estate agents. The platform is now positioned as a serious contender in the Canadian proptech space."
                ]
            }
        ]
    },
    "proton-collections": {
        title: "Proton Collections",
        subtitle: "Streamlining civic revenue for government field agents.",
        year: "2025",
        role: "Lead Product Designer",
        platform: "Web Application",
        duration: "2.5 Months",
        team: "1 Designer, 3 Developers",
        liveUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop",
        overview: "Proton Collections was born from a critical infrastructure need: government revenue collection in Nigeria was leaking millions due to inefficient manual processes. I was tasked with designing a digital-first platform that could replace paper-based workflows while being intuitive enough for field agents with varying levels of tech literacy.",
        sections: [
            {
                label: "The Problem",
                heading: "Paper trails, lost revenue, and zero accountability.",
                paragraphs: [
                    "Field agents were collecting revenue using paper receipts and manual ledgers. There was no centralized tracking, no real-time reporting, and no way to verify that collections matched deposits. The system was practically designed for revenue leakage.",
                    "Government administrators had no visibility into daily operations. Reports took weeks to compile, and by the time anomalies were spotted, the damage was already done."
                ],
                image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Research",
                heading: "Riding along with the agents who make it work.",
                paragraphs: [
                    "I spent two weeks shadowing field agents across three different local government areas. I watched their daily routines, documented their pain points, and identified the workarounds they had invented to cope with a broken system.",
                    "The key insight was that agents were smart, resourceful people working with terrible tools. They didn't need simplification — they needed empowerment. The design had to respect their expertise while removing the friction that slowed them down."
                ],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Design Process",
                heading: "Designing for the field, not the office.",
                paragraphs: [
                    "Every design decision was tested against real-world conditions: bright sunlight on phone screens, intermittent network connectivity, and the physical limitations of using a device while standing at a market stall.",
                    "I built a progressive web app that worked offline-first, syncing data when connectivity was available. The interface used large touch targets, high-contrast colors, and minimal text inputs — favoring selection over typing wherever possible.",
                    "The admin dashboard was designed as a command center, giving government officials real-time visibility into collections across all zones with drill-down capabilities for investigating anomalies."
                ],
                images: [
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
                ]
            },
            {
                label: "Outcome",
                heading: "Measurable impact on public revenue.",
                paragraphs: [
                    "Within the first quarter of deployment, the platform increased trackable revenue collection by 340%. The digital paper trail reduced disputes by 89% and cut the monthly reporting cycle from 3 weeks to real-time.",
                    "The platform now serves over 500 field agents daily and has been adopted as the standard collection tool across multiple local government areas."
                ]
            }
        ]
    },
    cride: {
        title: "CRide",
        subtitle: "Reimagining urban mobility with speed and safety at its core.",
        year: "2025",
        role: "Product Designer",
        platform: "Mobile Application",
        duration: "2.5 Months",
        team: "1 Designer, 3 Developers",
        liveUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        overview: "CRide set out to challenge the status quo in ride-hailing. The existing apps had stagnated — they were functional but uninspired, with poor driver experiences and rider interfaces that hadn't meaningfully evolved in years. I was brought on to design a mobile experience that prioritized two things above all else: speed and safety.",
        sections: [
            {
                label: "The Problem",
                heading: "Riders felt unsafe. Drivers felt unsupported.",
                paragraphs: [
                    "Competitor analysis revealed a clear pattern: ride-hailing apps treated safety as an afterthought, buried behind menus and settings. Riders, especially women, reported feeling uncomfortable with the lack of visible safety features during rides.",
                    "On the driver side, the interfaces were cluttered with information that didn't matter and missing information that did. Navigation was an afterthought, earnings were opaque, and the overall experience felt like the app was working against them."
                ],
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Research",
                heading: "Mapping the emotional journey of a ride.",
                paragraphs: [
                    "I conducted emotion-mapping sessions with 30 riders and 15 drivers. Beyond functional needs, I wanted to understand the emotional states at each stage — from booking to drop-off.",
                    "The research revealed that rider anxiety peaked during two moments: waiting for the driver and the first 2 minutes of a ride. These became my primary design intervention points."
                ],
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Design Process",
                heading: "Safety-first, speed-always.",
                paragraphs: [
                    "I designed a persistent safety bar that stayed visible throughout every ride — no digging through menus. One tap to share your live location, one tap for emergency services, one tap to record. These features weren't hidden; they were celebrated as core product value.",
                    "For the booking flow, I obsessed over reducing time-to-ride. The entire booking process was compressed into 3 taps: confirm pickup, confirm destination, confirm ride. No unnecessary steps, no cognitive overhead.",
                    "The driver app was completely reimagined with a heads-up display philosophy. Critical information was presented in large, glanceable formats designed to be read at arm's length while driving."
                ],
                image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop"
            },
            {
                label: "Outcome",
                heading: "Faster rides, safer journeys.",
                paragraphs: [
                    "The redesigned booking flow achieved an average time-to-ride of 8 seconds, 4x faster than the industry benchmark. Safety feature engagement increased by 500% compared to competitor apps.",
                    "Driver satisfaction scores improved by 67%, primarily driven by the cleaner interface and the transparent earnings dashboard that showed real-time breakdowns of every trip."
                ]
            }
        ]
    },
    "hr-system": {
        title: "HR System",
        subtitle: "A beautifully cohesive enterprise employee experience.",
        year: "2025",
        role: "Product Designer",
        platform: "Web Application",
        duration: "2.5 Months",
        team: "1 Designer, 3 Developers",
        liveUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
        overview: "Enterprise HR software has a reputation for being ugly, confusing, and dreaded by the very employees it's supposed to serve. I was brought on to design an HR system that people would actually want to use — a platform that streamlined complex processes like payroll, onboarding, and leave management into a simple, intuitive dashboard.",
        sections: [
            {
                label: "The Problem",
                heading: "Enterprise software shouldn't feel like punishment.",
                paragraphs: [
                    "The client's existing HR system had a 23% daily active usage rate — meaning 77% of employees were avoiding it entirely. Basic tasks like requesting leave, checking payslips, or updating personal information were so cumbersome that employees preferred to email HR directly.",
                    "HR administrators were drowning in manual requests that the system was supposed to automate. The tool designed to reduce their workload was actually increasing it."
                ],
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            },
            {
                label: "Research",
                heading: "What do employees actually need from HR?",
                paragraphs: [
                    "I surveyed 150 employees across 4 departments and conducted 20 in-depth interviews. The findings were humbling: employees interacted with HR software for an average of only 12 minutes per week, but those 12 minutes were often the most frustrating part of their workweek.",
                    "The top 5 tasks covered 89% of all interactions: checking payslips, requesting leave, clocking in/out, viewing the company directory, and submitting expense reports. Everything else was noise."
                ],
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Design Process",
                heading: "Designing for the 12 minutes that matter.",
                paragraphs: [
                    "I designed a personal dashboard that surfaced the 5 core actions immediately upon login — no navigation required. Each action could be completed in under 3 taps. The design treated HR software like a consumer app: fast, beautiful, and respectful of the user's time.",
                    "The visual language was warm and human. I moved away from the cold, corporate blues that dominate enterprise software and introduced a palette built around soft neutrals with strategic accent colors that guided attention without overwhelming.",
                    "For HR administrators, I built a management console that automated 80% of routine approvals through smart rules. Leave requests, expense reports, and time-off balances were processed automatically unless they triggered exception flags."
                ],
                images: [
                    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                ]
            },
            {
                label: "Outcome",
                heading: "From dreaded to delightful.",
                paragraphs: [
                    "Daily active usage jumped from 23% to 81% within the first month of the redesigned launch. The average time to complete core tasks dropped by 74%, and HR administrators reported a 60% reduction in manual email requests.",
                    "The client's employee satisfaction survey showed a 45-point NPS improvement specifically attributed to the new HR platform. It went from being the most complained-about internal tool to one of the most praised."
                ]
            }
        ]
    },
    dokrx: {
        title: "DokRx",
        subtitle: "Bringing healthcare home through thoughtful telemedicine design.",
        year: "2023",
        role: "UX Designer",
        platform: "Web Application",
        duration: "2.5 Months",
        team: "2 Designers, 4 Developers",
        liveUrl: "#",
        coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        overview: "DokRx was born during the pandemic when accessing healthcare became a genuine challenge. I designed a telemedicine platform that made virtual consultations feel as reassuring and personal as an in-person visit. The goal was to remove every possible barrier between a patient and the care they needed.",
        sections: [
            {
                label: "The Problem",
                heading: "Digital health that actually felt unhealthy.",
                paragraphs: [
                    "Existing telemedicine apps treated virtual visits like video calls with a medical wrapper. They lacked the warmth and trust that patients associated with their doctor's office. The clinical, cold interfaces made an already anxious experience feel even more alienating.",
                    "For doctors, the platforms were equally frustrating. Patient information was fragmented across multiple screens, making it difficult to maintain the flow of a natural consultation."
                ],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Research",
                heading: "What makes a patient feel cared for?",
                paragraphs: [
                    "I interviewed 18 patients and 8 doctors to understand the emotional dynamics of telemedicine. The most powerful insight was that trust in virtual healthcare wasn't built through features — it was built through familiar patterns and visual warmth.",
                    "Patients who had positive telemedicine experiences consistently described interfaces that felt 'calm' and 'organized.' Those with negative experiences used words like 'confusing' and 'cold.' The emotional vocabulary told me everything I needed to know about the design direction."
                ],
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Design Process",
                heading: "Designing trust into every pixel.",
                paragraphs: [
                    "The visual design drew direct inspiration from physical healthcare environments: soft greens, warm whites, and rounded shapes that subconsciously communicated safety and care. Every icon was custom-designed to feel friendly rather than clinical.",
                    "I designed the booking flow to mirror the familiarity of calling a doctor's office: choose your concern, see available doctors, pick a time, confirm. No account creation barriers, no unnecessary form fields, no friction between feeling unwell and getting help.",
                    "The consultation screen was designed as a single, unified view where doctors could see the patient, their history, and their current symptoms simultaneously — eliminating the tab-switching that plagued other platforms."
                ],
                image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
            },
            {
                label: "Outcome",
                heading: "Healthcare that patients returned to by choice.",
                paragraphs: [
                    "DokRx achieved a 73% return visit rate — significantly above the telemedicine industry average of 38%. Patient satisfaction scores averaged 4.7/5, with the most common praise being how 'easy' and 'comfortable' the experience felt.",
                    "The platform facilitated over 5,000 consultations in its first six months, with an average booking-to-consultation time of under 4 minutes. Doctors reported that the unified consultation view saved them an average of 3 minutes per patient."
                ]
            }
        ]
    }
};

interface CaseStudySection {
    label: string;
    heading: string;
    paragraphs: string[];
    image?: string;
    images?: string[];
}

interface CaseStudyData {
    title: string;
    subtitle: string;
    year: string;
    role: string;
    platform: string;
    duration: string;
    team: string;
    liveUrl?: string;
    coverImage: string;
    overview: string;
    sections: CaseStudySection[];
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function CaseStudy() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const study = slug ? caseStudies[slug] : null;

    if (!study) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center pt-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Case study not found</h1>
                    <Link to="/works" className="text-blue-600 hover:underline">← Back to projects</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: '"Jost", sans-serif' }}>
            {/* ── Header ──────────────────────────────────────────── */}
            <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-12">
                {/* Back */}
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => navigate('/works')}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium mb-12 group"
                >
                    <IoArrowBack className="text-lg group-hover:-translate-x-1 transition-transform" />
                    Back to projects
                </motion.button>

                {/* Title & Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        {study.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
                        {study.subtitle}
                    </p>
                </motion.div>

                {/* Meta Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-14 pt-10 border-t border-gray-100"
                >
                    <MetaItem label="Role" value={study.role} />
                    <MetaItem label="Platform" value={study.platform} />
                    <MetaItem label="Duration" value={study.duration} />
                    <MetaItem label="Team" value={study.team} />
                </motion.div>
            </div>

            {/* ── Cover Image ─────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-[1400px] mx-auto px-0 md:px-6 mb-20 md:mb-28"
            >
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 overflow-hidden">
                    <img
                        src={study.coverImage}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* ── Overview ────────────────────────────────────────── */}
            <div className="max-w-[1100px] mx-auto px-6 md:px-12 mb-20 md:mb-28">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
                >
                    <div className="md:col-span-3">
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Overview</span>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                            {study.overview}
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-[1100px] mx-auto px-6 md:px-12">
                <div className="w-full h-[1px] bg-gray-100"></div>
            </div>

            {/* ── Sections ────────────────────────────────────────── */}
            {study.sections.map((section, index) => (
                <div key={index}>
                    <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-20 md:py-28">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
                        >
                            {/* Left label */}
                            <div className="md:col-span-3">
                                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
                                    {section.label}
                                </span>
                            </div>

                            {/* Right content */}
                            <div className="md:col-span-9">
                                <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.2] mb-8">
                                    {section.heading}
                                </h2>
                                {section.paragraphs.map((p, pIndex) => (
                                    <p key={pIndex} className="text-gray-600 text-base md:text-lg font-light leading-[1.8] mb-6 last:mb-0">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Section Image(s) */}
                    {(section.image || (section.images && section.images.length > 0)) && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-[1400px] mx-auto px-0 md:px-6 mb-4"
                        >
                            {section.images && section.images.length === 3 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-gray-50 overflow-hidden">
                                        <img src={section.images[0]} alt="Section graphic 1" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="grid grid-rows-2 gap-4 md:gap-6">
                                        <div className="w-full h-full min-h-[200px] bg-gray-50 overflow-hidden">
                                            <img src={section.images[1]} alt="Section graphic 2" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-full h-full min-h-[200px] bg-gray-50 overflow-hidden">
                                            <img src={section.images[2]} alt="Section graphic 3" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            ) : section.images && section.images.length === 2 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                                        <img src={section.images[0]} alt="Section graphic 1" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                                        <img src={section.images[1]} alt="Section graphic 2" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            ) : (
                                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-50 overflow-hidden">
                                    <img
                                        src={section.image || (section.images && section.images[0])}
                                        alt={section.heading}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Divider */}
                    <div className="max-w-[1100px] mx-auto px-6 md:px-12">
                        <div className="w-full h-[1px] bg-gray-100"></div>
                    </div>
                </div>
            ))}

            {/* ── Footer CTA ─────────────────────────────────────── */}
            <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                >
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">Interested in working together?</h3>
                        <p className="text-gray-500 text-base md:text-lg font-light">Let's create something impactful.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 md:px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-md whitespace-nowrap"
                        >
                            Get in Touch <FiArrowUpRight className="text-lg hidden sm:block" />
                        </Link>
                        <Link
                            to="/works"
                            className="flex items-center justify-center gap-2 bg-white text-gray-900 px-6 md:px-8 py-4 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-900 transition-colors whitespace-nowrap"
                        >
                            View More Projects
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const MetaItem = ({ label, value }: { label: string; value: string }) => (
    <div>
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block mb-2">{label}</span>
        <span className="text-gray-900 text-sm md:text-base font-medium">{value}</span>
    </div>
);
