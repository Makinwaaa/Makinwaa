import React from 'react';
import AboutHero from 'components/LandingPage/AboutHero';
import AboutSection from 'components/LandingPage/AboutSection';
import PersonalGallery from 'components/LandingPage/PersonalGallery';
import Certifications from 'components/LandingPage/Certifications';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: '"Noto Serif", serif' }}>
            <main>
                <AboutHero />

                {/* Reusing the Home Page About Section with updated Skills list */}
                <AboutSection />

                {/* Certifications Section - Moved before Life Beyond Design */}
                <Certifications />

                {/* Random Media / Lifestyle Section - Moved after Certifications */}
                <PersonalGallery />
            </main>
        </div>
    )
}
