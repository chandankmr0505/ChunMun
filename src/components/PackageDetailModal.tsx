import React, { useState } from 'react';
import { TourPackage } from '../types/travel';

interface PackageDetailModalProps {
  pkg: TourPackage | null;
  onClose: () => void;
  onBookNow: (packageTitle: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onBookNow,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [hotelTier, setHotelTier] = useState<'3-star' | '4-star' | '5-star'>('4-star');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);

  if (!pkg) return null;

  // Tier multiplier
  const multiplier = hotelTier === '3-star' ? 0.88 : hotelTier === '4-star' ? 1.0 : 1.35;
  const basePricePerPerson = Math.round(pkg.price * multiplier);
  const calculatedTotal = basePricePerPerson * adults + Math.round(basePricePerPerson * 0.5 * children);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#0e4d55]/20 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header with Image Banner */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#00353b] shrink-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${pkg.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00353b] via-[#00353b]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/75 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

          {/* Header Info */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#fc8f34] text-[#663100] text-xs font-bold px-2.5 py-0.5 rounded-full">
                {pkg.duration}
              </span>
              <span className="text-xs text-[#b4ecf5] flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                {pkg.locations.join(' • ')}
              </span>
            </div>
            <h2 className="font-playfair text-xl sm:text-2xl font-bold leading-tight">
              {pkg.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6 flex-grow">
          {/* Overview & Highlights */}
          <div>
            <h3 className="text-sm font-bold text-[#944a00] uppercase tracking-wider mb-1">
              Trip Overview
            </h3>
            <p className="text-sm text-[#40484a] leading-relaxed">{pkg.overview}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-[#00353b] bg-[#f5f3f0] p-2.5 rounded-lg border border-[#efeeeb]">
              <span className="material-symbols-outlined text-[18px] text-[#fc8f34]">
                calendar_month
              </span>
              <span>
                <strong>Best Time to Visit:</strong> {pkg.bestTimeToVisit}
              </span>
            </div>
          </div>

          {/* Package Inclusions Chips */}
          <div>
            <h3 className="text-sm font-bold text-[#944a00] uppercase tracking-wider mb-2">
              Package Key Inclusions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {pkg.inclusions.map((inc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#f5f3f0] p-2 rounded-lg text-xs font-medium text-[#1b1c1a] border border-[#efeeeb]"
                >
                  <span className="material-symbols-outlined text-[#00353b] text-[18px]">
                    {inc.icon}
                  </span>
                  <span>{inc.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-[#f5f3f0] p-2 rounded-lg text-xs font-medium text-[#1b1c1a] border border-[#efeeeb]">
                <span className="material-symbols-outlined text-[#00353b] text-[18px]">
                  support_agent
                </span>
                <span>24/7 Dedicated Concierge</span>
              </div>
            </div>
          </div>

          {/* Day-by-Day Interactive Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#944a00] uppercase tracking-wider">
                Day-by-Day Itinerary Schedule
              </h3>
              <span className="text-xs text-[#40484a]">
                Click days below to view timeline
              </span>
            </div>

            {/* Day tab buttons */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {pkg.itinerary.map((item) => (
                <button
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedDay === item.day
                      ? 'bg-[#00353b] text-white shadow-sm'
                      : 'bg-[#efeeeb] text-[#40484a] hover:bg-[#eae8e5]'
                  }`}
                >
                  Day {item.day}
                </button>
              ))}
            </div>

            {/* Selected day content */}
            {(() => {
              const currentDay =
                pkg.itinerary.find((d) => d.day === selectedDay) || pkg.itinerary[0];
              return (
                <div className="bg-[#fbf9f6] p-4 rounded-xl border border-[#e4e2df] mt-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-playfair text-base font-bold text-[#00353b]">
                      Day {currentDay.day}: {currentDay.title}
                    </h4>
                    <span className="text-xs bg-[#b4ecf5] text-[#001f24] px-2 py-0.5 rounded font-bold shrink-0">
                      {currentDay.stay}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#40484a] mt-2 leading-relaxed">
                    {currentDay.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#e4e2df] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <strong className="text-[#00353b]">Meals Provided:</strong> {currentDay.meals}
                    </div>
                    <div>
                      <strong className="text-[#00353b]">Stay:</strong> {currentDay.stay}
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <span className="text-xs font-bold text-[#944a00] block mb-1">
                      Day Highlights:
                    </span>
                    <ul className="list-disc list-inside text-xs text-[#40484a] space-y-0.5">
                      {currentDay.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Pricing Calculator & Hotel Tier Customization */}
          <div className="bg-[#f5f3f0] p-4 rounded-xl border border-[#e4e2df]">
            <h3 className="text-sm font-bold text-[#00353b] uppercase tracking-wider mb-3">
              Instant Custom Price Calculator
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Hotel Tier */}
              <div>
                <label className="text-xs text-[#40484a] font-bold block mb-1">Hotel Category</label>
                <div className="flex rounded-lg bg-white p-1 border border-[#e4e2df]">
                  {(['3-star', '4-star', '5-star'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setHotelTier(tier)}
                      className={`flex-1 py-1 text-xs font-bold rounded capitalize transition-colors ${
                        hotelTier === tier
                          ? 'bg-[#00353b] text-white'
                          : 'text-[#40484a] hover:bg-[#efeeeb]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Adults Counter */}
              <div>
                <label className="text-xs text-[#40484a] font-bold block mb-1">Adults (12+ yrs)</label>
                <div className="flex items-center justify-between bg-white px-2 py-1 rounded-lg border border-[#e4e2df]">
                  <button
                    onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                    className="w-7 h-7 rounded bg-[#efeeeb] hover:bg-[#eae8e5] text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#00353b]">{adults}</span>
                  <button
                    onClick={() => setAdults((prev) => prev + 1)}
                    className="w-7 h-7 rounded bg-[#efeeeb] hover:bg-[#eae8e5] text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div>
                <label className="text-xs text-[#40484a] font-bold block mb-1">Children (under 12)</label>
                <div className="flex items-center justify-between bg-white px-2 py-1 rounded-lg border border-[#e4e2df]">
                  <button
                    onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                    className="w-7 h-7 rounded bg-[#efeeeb] hover:bg-[#eae8e5] text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#00353b]">{children}</span>
                  <button
                    onClick={() => setChildren((prev) => prev + 1)}
                    className="w-7 h-7 rounded bg-[#efeeeb] hover:bg-[#eae8e5] text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#e4e2df] flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs text-[#40484a]">Estimated Total for your party:</span>
                <div className="text-xl sm:text-2xl font-bold text-[#00353b]">
                  ₹{calculatedTotal.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-normal text-[#40484a]">
                    (₹{basePricePerPerson.toLocaleString('en-IN')}/adult)
                  </span>
                </div>
              </div>
              <div className="text-xs text-[#944a00] font-semibold">
                * Includes all taxes, private vehicle, transfers & meals
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="bg-[#fbf9f6] p-4 border-t border-[#e4e2df] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#40484a] flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] text-[#00353b]">verified</span>
            100% customizable itinerary with free modifications
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`https://wa.me/919054922308?text=${encodeURIComponent(
                `Hello ChunMun Travels, I am planning for ${pkg.title} with ${adults} Adults, ${children} Children on ${hotelTier} hotels. Estimated ₹${calculatedTotal}. Please assist.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-4 py-2.5 rounded-full bg-[#0e4d55] text-white hover:bg-[#00353b] text-xs font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookNow(pkg.title);
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-5 py-2.5 rounded-full bg-[#fc8f34] text-[#663100] hover:bg-[#944a00] hover:text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              <span>Enquire & Reserve</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
