import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HajjSection } from './components/HajjSection';
import { UmrahSection } from './components/UmrahSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSteps } from './components/ProcessSteps';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageDetailModal } from './components/PackageDetailModal';
import { SharePackageModal } from './components/SharePackageModal';
import { TravelPackage } from './types';

export default function App() {
  const [hajjCategory, setHajjCategory] = useState<'pakistan' | 'international'>('pakistan');
  const [selectedDetailPackage, setSelectedDetailPackage] = useState<TravelPackage | null>(null);
  const [selectedSharePackage, setSelectedSharePackage] = useState<TravelPackage | null>(null);

  const handleSelectHajjCategory = (cat: 'pakistan' | 'international') => {
    setHajjCategory(cat);
  };

  const handleViewDetails = (pkg: TravelPackage) => {
    setSelectedDetailPackage(pkg);
  };

  const handleSharePackage = (pkg: TravelPackage) => {
    setSelectedSharePackage(pkg);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 antialiased">
      {/* 1. Header Navigation */}
      <Navbar onSelectCategory={handleSelectHajjCategory} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Quick Information Bar */}
        <TrustBar />

        {/* 4. Hajj 2027 Packages Section & Category Switcher */}
        <HajjSection
          selectedCategory={hajjCategory}
          onCategoryChange={handleSelectHajjCategory}
          onViewDetails={handleViewDetails}
          onSharePackage={handleSharePackage}
        />

        {/* 5. Umrah Packages Section */}
        <UmrahSection
          onViewDetails={handleViewDetails}
          onSharePackage={handleSharePackage}
        />

        {/* 6. Why Choose Al Muntaha Travels and Tours */}
        <WhyChooseUs />

        {/* 7. Simple 4-Step Journey Process */}
        <ProcessSteps />

        {/* 8. Contact & WhatsApp Integration */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer onSelectCategory={handleSelectHajjCategory} />

      {/* 10. Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* 11. Interactive Modals */}
      <PackageDetailModal
        pkg={selectedDetailPackage}
        onClose={() => setSelectedDetailPackage(null)}
        onShare={(pkg) => {
          setSelectedDetailPackage(null);
          setSelectedSharePackage(pkg);
        }}
      />

      <SharePackageModal
        pkg={selectedSharePackage}
        onClose={() => setSelectedSharePackage(null)}
      />
    </div>
  );
}
