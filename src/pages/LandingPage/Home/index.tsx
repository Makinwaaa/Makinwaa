
import React from 'react';
import Hero from 'components/LandingPage/Hero';
import ProjectShowcase from 'components/LandingPage/ProjectShowcase';
import WorkExperience from 'components/LandingPage/WorkExperience';
import Testimonials from 'components/LandingPage/Testimonials';
import DesignShowcase from 'components/LandingPage/DesignShowcase';


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: '"Jost", sans-serif' }}>
            <main>
                <Hero />
                <ProjectShowcase />
                <WorkExperience />
                <DesignShowcase />
                <Testimonials />

            </main>
        </div>
    )
}

