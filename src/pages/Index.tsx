
import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DomainBanner from '@/components/DomainBanner';

const Index: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showBanner && <DomainBanner onClose={() => setShowBanner(false)} />}
      <Navbar />
      <main className="flex-grow">
        <HeroSection scrollToContact={scrollToContact} />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
