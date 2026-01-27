
import React from 'react';
import Hero from 'components/LandingPage/Hero';
import AboutSection from 'components/LandingPage/AboutSection';
import ProjectShowcase from 'components/LandingPage/ProjectShowcase';
import WorkExperience from 'components/LandingPage/WorkExperience';
import Testimonials from 'components/LandingPage/Testimonials';
import DesignShowcase from 'components/LandingPage/DesignShowcase';


export default function Home() {
    return (
        <div className="min-h-screen bg-[#0A0101] text-white" style={{ fontFamily: '"Jost", sans-serif' }}>
            <main>
                <Hero />
                <AboutSection />
                <ProjectShowcase />
                <WorkExperience />
                <DesignShowcase />
                <Testimonials />

            </main>
        </div>
    )
}

