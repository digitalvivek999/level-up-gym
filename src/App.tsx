import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ReviewMarquee } from './components/ReviewMarquee';
import { About } from './components/About';
import { WhyLevelUp } from './components/WhyLevelUp';
import { Programs } from './components/Programs';
import { ServicesGrid } from './components/ServicesGrid';
import { CombatSports } from './components/CombatSports';
import { GroupFitness } from './components/GroupFitness';
import { Transformations } from './components/Transformations';
import { Coach } from './components/Coach';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { InstagramSection } from './components/InstagramSection';
import { Membership } from './components/Membership';
import { EnquiryForm } from './components/EnquiryForm';
import { LocationSection } from './components/LocationSection';
import { FAQ } from './components/FAQ';
import { MotivationalCTA } from './components/MotivationalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { OwnerGuideModal } from './components/OwnerGuideModal';

export function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (programName?: string) => {
    setSelectedProgramForEnquiry(programName);
    const enquirySection = document.getElementById('enquiry-form') || document.getElementById('membership');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#E0E0E0] font-sans selection:bg-[#FF3D00] selection:text-black antialiased relative overflow-x-hidden">
      
      {/* Structural Accent Corner Grid for Artistic Flair Brutalist Theme */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l border-t border-[#FF3D00]/40 pointer-events-none z-50 hidden md:block" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r border-b border-[#FF3D00]/40 pointer-events-none z-50 hidden md:block" />

      {/* Main Navigation Bar */}
      <Navbar
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Hero Section with Brutalist Visual Layout */}
      <Hero onOpenEnquiry={handleOpenEnquiry} />

      {/* Trust Badge Bar */}
      <TrustBar />

      {/* Ticker / Review Marquee Strip */}
      <ReviewMarquee />

      {/* About Level Up Fitness Studio */}
      <About onOpenEnquiry={handleOpenEnquiry} />

      {/* Why Choose Level Up (6 key points) */}
      <WhyLevelUp />

      {/* Featured Programs Grid (12 items) */}
      <Programs onOpenEnquiry={handleOpenEnquiry} />

      {/* All Interactive Services (18 items) */}
      <ServicesGrid onOpenEnquiry={handleOpenEnquiry} />

      {/* Combat Sports & Martial Arts Section */}
      <CombatSports onOpenEnquiry={handleOpenEnquiry} />

      {/* Group Fitness & Wellness (Zumba, Yoga, Aerobics) */}
      <GroupFitness onOpenEnquiry={handleOpenEnquiry} />

      {/* Real Transformations & Quotes */}
      <Transformations onOpenEnquiry={handleOpenEnquiry} />

      {/* Certified Coach Profile (Coach Shashank Khare) */}
      <Coach onOpenEnquiry={handleOpenEnquiry} />

      {/* Genuine Google Reviews */}
      <Reviews />

      {/* Photo Gallery with Lightbox */}
      <Gallery />

      {/* Instagram Feed / Community Showcase */}
      <InstagramSection />

      {/* Membership Plans */}
      <Membership onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive Lead / WhatsApp Enquiry Form */}
      <EnquiryForm selectedProgram={selectedProgramForEnquiry} />

      {/* Location & Google Maps Directions */}
      <LocationSection />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Motivational Bottom CTA */}
      <MotivationalCTA onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Footer */}
      <Footer onOpenGuide={() => setIsGuideOpen(true)} />

      {/* Floating Elements */}
      <WhatsAppButton />
      <MobileBottomBar onOpenEnquiry={handleOpenEnquiry} />

      {/* Owner Implementation Guide Modal */}
      <OwnerGuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />

    </div>
  );
}

export default App;
