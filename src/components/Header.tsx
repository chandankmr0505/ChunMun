import React, { useState } from 'react';

interface HeaderProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'domestic-tours', label: 'Domestic Tours' },
    { id: 'honeymoon', label: 'Honeymoon' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'package-details', label: 'Package Details' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(14,77,85,0.08)]">
      {/* Top utility ribbon */}
      <div className="bg-[#00353b] text-white py-space-xs px-gutter">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-label-sm font-semibold">
          <div className="flex items-center gap-space-sm truncate">
            <span className="material-symbols-outlined text-[16px] text-[#fc8f34]">auto_awesome</span>
            <span className="truncate">
              Call or WhatsApp our India Tour Specialists 24/7 at <a href="tel:+919054922308" className="underline hover:text-[#ffdcc5]">+91 90549 22308</a> | Custom Indian & International holiday itineraries
            </span>
          </div>
          <div className="hidden md:flex items-center gap-space-md shrink-0 text-[#86bdc6]">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">verified</span>Govt. Approved
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">flight_takeoff</span>IATA Accredited
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="h-20 bg-[#fbf9f6]/90 backdrop-blur-xl border-b border-[#0e4d55]/10">
        <div className="h-full max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
          {/* Brand Logo & Title */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 text-left cursor-pointer focus:outline-none"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1VdKI0mrTAA7EzGigmCrlVxa0ORDdaSsE2X0tuKGrMBH7k0lR_nqwliUSY4PVQlb63hk0lLUtqAPMaf2VJNmszedhcqxyhKzEWkFVuEgEpJYkt-lao3gU4CvBfmnyvqQ2fbI5RurxheAFEaUj2eHVzf64LkBfNGOaqISofO2wsACNBAtEv1EvDsOeCU5NS1uPrtaAFiKzSiFGS-1EnU3psvE6AxcI6yBfmPxBGCLodxEtyIaMYGYN_n4x8"
              alt="ChunMun Holiday Travels Logo"
              className="h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-playfair text-[22px] text-[#00353b] font-bold tracking-tight leading-none">
                ChunMun
              </span>
              <span className="text-[11px] font-bold text-[#944a00] tracking-widest uppercase">
                Holiday Travels
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-label-md px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#00353b] font-bold bg-[#eae8e5]'
                      : 'text-[#40484a] hover:text-[#1b1c1a] hover:bg-[#efeeeb]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone button */}
            <a
              href="tel:+919054922308"
              className="hidden lg:flex items-center gap-1.5 text-label-md px-3 py-2 rounded-full bg-[#efeeeb] text-[#00353b] hover:bg-[#eae8e5] transition-colors font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>+91 90549 22308</span>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/919054922308?text=Hello%20ChunMun%20Holiday%20Travels,%20I%20would%20like%20to%20plan%20a%20holiday%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-label-md px-3.5 py-2 rounded-full bg-[#0e4d55] text-white hover:bg-[#00353b] transition-colors shadow-sm font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Book Now / Enquire button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="flex items-center gap-1 text-label-md px-4 py-2 rounded-full bg-[#fc8f34] text-[#663100] hover:bg-[#944a00] hover:text-white transition-all font-bold shadow-sm cursor-pointer"
            >
              <span>Book Now / Enquire</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-[#efeeeb] text-[#00353b] hover:bg-[#eae8e5] transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f6] border-b border-[#0e4d55]/15 px-gutter py-4 shadow-lg transition-all">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left px-3 py-2 rounded-lg font-semibold transition-colors ${
                  activeScreen === item.id
                    ? 'bg-[#00353b] text-white'
                    : 'text-[#1b1c1a] hover:bg-[#efeeeb]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-[#e4e2df] flex flex-col gap-2">
              <a
                href="tel:+919054922308"
                className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#efeeeb] text-[#00353b] font-bold text-sm"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                +91 90549 22308
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
