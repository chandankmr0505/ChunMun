import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DestinationsSection } from './components/DestinationsSection';
import { PackagesSection } from './components/PackagesSection';
import { TrustSection } from './components/TrustSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingAgent } from './components/FloatingAgent';
import { PackageDetailModal } from './components/PackageDetailModal';
import { BookingModal } from './components/BookingModal';
import { WeatherGuideModal } from './components/WeatherGuideModal';

import { DomesticToursScreen } from './screens/DomesticToursScreen';
import { HoneymoonScreen } from './screens/HoneymoonScreen';
import { DestinationsScreen } from './screens/DestinationsScreen';
import { PackageDetailsScreen } from './screens/PackageDetailsScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';

import { DESTINATIONS, PACKAGES, TESTIMONIALS, FAQS } from './data/travelData';
import { TourPackage, DestinationItem, SearchQuery } from './types/travel';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingPackageTitle, setBookingPackageTitle] = useState<string | undefined>(undefined);
  const [isWeatherGuideOpen, setIsWeatherGuideOpen] = useState<boolean>(false);

  // Search filter handler from hero
  const handleSearch = (params: SearchQuery) => {
    // If user selected a destination, let's find matching package or navigate to domestic tours
    const matchingPkg = PACKAGES.find(
      (p) =>
        p.destination.toLowerCase().includes(params.destination.toLowerCase()) ||
        params.destination.toLowerCase().includes(p.destination.toLowerCase())
    );

    if (matchingPkg) {
      setSelectedPackage(matchingPkg);
    } else {
      setActiveScreen('domestic-tours');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Trending tag click
  const handleFilterTag = (tag: string) => {
    const pkg = PACKAGES.find(
      (p) =>
        p.destination.toLowerCase().includes(tag.toLowerCase()) ||
        p.id.toLowerCase().includes(tag.toLowerCase())
    );
    if (pkg) {
      setSelectedPackage(pkg);
    }
  };

  // Open booking modal
  const handleOpenEnquiry = (packageTitle?: string) => {
    setBookingPackageTitle(packageTitle);
    setIsBookingOpen(true);
  };

  // When clicking explore on a destination card
  const handleSelectDestination = (dest: DestinationItem) => {
    const matchingPkg = PACKAGES.find(
      (p) =>
        p.destination.toLowerCase().includes(dest.id.toLowerCase()) ||
        dest.name.toLowerCase().includes(p.destination.toLowerCase())
    );
    if (matchingPkg) {
      setSelectedPackage(matchingPkg);
    } else {
      handleOpenEnquiry(dest.name);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1b1c1a] flex flex-col font-sans">
      {/* Persistent Translucent Header */}
      <Header
        activeScreen={activeScreen}
        onNavigate={(screen) => setActiveScreen(screen)}
        onOpenEnquiry={(title) => handleOpenEnquiry(title)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-grow">
        {activeScreen === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Immersive Hero with Search Dock */}
            <HeroSection
              onSearch={handleSearch}
              onFilterTag={handleFilterTag}
            />

            {/* 2. Top Indian Holiday Destinations Grid */}
            <div id="destinations-section">
              <DestinationsSection
                destinations={DESTINATIONS}
                onSelectDestination={handleSelectDestination}
                onOpenWeatherGuide={() => setIsWeatherGuideOpen(true)}
              />
            </div>

            {/* 3. Featured Tour Packages with Sample Prices */}
            <div id="packages-section">
              <PackagesSection
                packages={PACKAGES}
                onViewDetails={(pkg) => setSelectedPackage(pkg)}
                onOpenEnquiry={(title) => handleOpenEnquiry(title)}
              />
            </div>

            {/* 4. Why Travelers Choose ChunMun Trust Pillars & Stats */}
            <TrustSection />

            {/* 5. Authentic Travel Stories (Testimonials) */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* 6. Frequently Asked Questions Accordion */}
            <FaqSection faqs={FAQS} />

            {/* 7. Quick WhatsApp & Phone Enquiry Banner */}
            <CtaBanner />
          </div>
        )}

        {activeScreen === 'domestic-tours' && (
          <DomesticToursScreen
            onViewDetails={(pkg) => setSelectedPackage(pkg)}
            onBookNow={(title) => handleOpenEnquiry(title)}
          />
        )}

        {activeScreen === 'honeymoon' && (
          <HoneymoonScreen
            onViewDetails={(pkg) => setSelectedPackage(pkg)}
            onBookNow={(title) => handleOpenEnquiry(title)}
          />
        )}

        {activeScreen === 'destinations' && (
          <DestinationsScreen
            onSelectDestination={handleSelectDestination}
            onPlanTrip={(destName) => handleOpenEnquiry(destName)}
          />
        )}

        {activeScreen === 'package-details' && (
          <PackageDetailsScreen
            onBookNow={(title) => handleOpenEnquiry(title)}
          />
        )}

        {activeScreen === 'about-us' && (
          <AboutScreen
            onContactClick={() => {
              setActiveScreen('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Persistent Floating Specialist Concierge */}
      <FloatingAgent />

      {/* Royal Navy Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onFilterCircuit={(circuitKey) => {
          const pkg = PACKAGES.find(
            (p) =>
              p.destination.toLowerCase().includes(circuitKey.toLowerCase()) ||
              p.id.toLowerCase().includes(circuitKey.toLowerCase())
          );
          if (pkg) {
            setSelectedPackage(pkg);
          } else {
            setActiveScreen('domestic-tours');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      />

      {/* Interactive Modals */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookNow={(title) => handleOpenEnquiry(title)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        packageTitle={bookingPackageTitle}
        onClose={() => {
          setIsBookingOpen(false);
          setBookingPackageTitle(undefined);
        }}
      />

      <WeatherGuideModal
        isOpen={isWeatherGuideOpen}
        onClose={() => setIsWeatherGuideOpen(false)}
        onPlanTrip={(region) => {
          setIsWeatherGuideOpen(false);
          handleOpenEnquiry(region);
        }}
      />
    </div>
  );
}
