import React from 'react';

interface FooterProps {
  onNavigate: (screen: string) => void;
  onFilterCircuit?: (circuit: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCircuit }) => {
  const circuits = [
    { label: 'Kashmir Paradise (Srinagar & Gulmarg)', key: 'kashmir' },
    { label: 'Himachal Bliss (Manali & Shimla)', key: 'himachal' },
    { label: 'Uttarakhand Char Dham & Valley of Flowers', key: 'uttarakhand' },
    { label: 'Kerala Backwaters & Munnar Hills', key: 'kerala' },
    { label: 'Royal Rajasthan Heritage Triangle', key: 'rajasthan' },
    { label: 'Andaman Coral Islands & Havelock', key: 'andaman' },
    { label: 'Mystical Northeast & Sikkim Silk Route', key: 'northeast' },
    { label: 'Goa Beach Escapes & Coastal Living', key: 'goa' },
  ];

  const categories = [
    { label: 'Family Vacations', screen: 'domestic-tours' },
    { label: 'Honeymoon Specials', screen: 'honeymoon' },
    { label: 'Senior Citizen Tours', screen: 'domestic-tours' },
    { label: 'Corporate Retreats', screen: 'contact' },
    { label: 'Spiritual Journeys & Pilgrimages', screen: 'destinations' },
    { label: 'Customized Luxury Itineraries', screen: 'package-details' },
  ];

  return (
    <footer className="w-full bg-[#1f3047] text-white pt-space-xl pb-space-lg border-t border-[#36475f]">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg pb-space-xl">
          {/* Brand Info */}
          <div className="space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-[#0e4d55] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[22px]">
                  temple_hindu
                </span>
              </div>
              <div>
                <span className="font-playfair text-headline-sm text-white block leading-none font-bold">
                  ChunMun
                </span>
                <span className="text-label-sm text-[#ffdcc5] block tracking-widest uppercase font-semibold">
                  Holiday Travels
                </span>
              </div>
            </div>

            <p className="text-body-md text-[#a4b5d1] leading-relaxed">
              ChunMun Holiday Travels - Crafting unforgettable memories across Incredible India and
              beyond since 2014. Verified tour operators with 25,000+ happy travelers.
            </p>

            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-[#36475f] text-white text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px] text-[#fc8f34]">
                  hotel_class
                </span>{' '}
                4.9/5 Rating
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-[#36475f] text-white text-label-sm font-semibold">
                <span className="material-symbols-outlined text-[16px] text-[#86bdc6]">
                  verified_user
                </span>{' '}
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Popular Circuits */}
          <div>
            <h4 className="text-title-lg text-white mb-space-md flex items-center gap-space-xs font-bold">
              <span className="material-symbols-outlined text-[#ffdcc5] text-[20px]">explore</span>{' '}
              Popular Circuits
            </h4>
            <ul className="space-y-2 text-body-sm text-[#a4b5d1]">
              {circuits.map((item, i) => (
                <li
                  key={i}
                  onClick={() => onFilterCircuit?.(item.key)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Categories */}
          <div>
            <h4 className="text-title-lg text-white mb-space-md flex items-center gap-space-xs font-bold">
              <span className="material-symbols-outlined text-[#ffdcc5] text-[20px]">category</span>{' '}
              Travel Categories
            </h4>
            <ul className="space-y-2 text-body-sm text-[#a4b5d1]">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => onNavigate(cat.screen)}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Support */}
          <div className="space-y-space-md">
            <h4 className="text-title-lg text-white mb-space-md flex items-center gap-space-xs font-bold">
              <span className="material-symbols-outlined text-[#ffdcc5] text-[20px]">
                contact_phone
              </span>{' '}
              Office & Support
            </h4>
            <p className="text-body-sm text-[#a4b5d1]">
              ChunMun Holiday Travels, Registered Head Office & Travel Studio
            </p>

            <div className="space-y-2 text-body-sm text-[#a4b5d1]">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-[#ffdcc5]">
                  phone_in_talk
                </span>
                <a href="tel:+919054922308" className="hover:text-white">
                  Helpline: +91 90549 22308
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-[#ffdcc5]">mail</span>
                <a href="mailto:bookings@chunmunholidays.com" className="hover:text-white">
                  bookings@chunmunholidays.com
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px] text-[#ffdcc5]">
                  schedule
                </span>
                <span>7 Days a week 9:00 AM - 9:00 PM IST</span>
              </div>
            </div>

            <div className="pt-space-xs">
              <span className="text-label-sm text-[#ffdcc5] block mb-2 font-semibold">
                Approved & Certified By
              </span>
              <div className="flex items-center gap-space-sm text-white">
                <div className="px-space-sm py-1 bg-[#36475f] rounded text-label-sm flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#ffdcc5]">
                    travel
                  </span>{' '}
                  Ministry of Tourism
                </div>
                <div className="px-space-sm py-1 bg-[#36475f] rounded text-label-sm flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px] text-[#86bdc6]">
                    shield
                  </span>{' '}
                  IATA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#36475f]/60 pt-space-md pb-space-md">
          <p className="text-body-sm text-[#a4b5d1] text-justify lg:text-left leading-relaxed">
            Disclaimer: All tour rates displayed are indicative sample prices per person on twin-sharing
            basis for reference only and do not constitute confirmed real-time airline/hotel booking
            confirmation. Actual tariffs are subject to seat/room availability, seasonal surcharges,
            and travel date confirmation.
          </p>
        </div>

        {/* Copyright & Security */}
        <div className="border-t border-[#36475f]/60 pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md text-[#a4b5d1] text-label-sm">
          <p>© 2024 ChunMun Holiday Travels. All Rights Reserved. Crafted for Incredible Journeys.</p>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-[#ffdcc5]">lock</span>{' '}
              100% Safe & Secure Payments
            </span>
            <span>UPI / RuPay / Visa / Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
