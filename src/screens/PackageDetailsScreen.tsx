import React, { useState } from 'react';
import { PACKAGES } from '../data/travelData';
import { TourPackage } from '../types/travel';

interface PackageDetailsScreenProps {
  onBookNow: (packageTitle: string) => void;
}

export const PackageDetailsScreen: React.FC<PackageDetailsScreenProps> = ({
  onBookNow,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<TourPackage>(PACKAGES[0]);
  const [activeDay, setActiveDay] = useState<number>(1);

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Transparent Itinerary Dossier
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          Comprehensive Package Details
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          Review complete day-wise itineraries, verified hotel tiers, included private cab
          transfers, and authentic regional sightseeing plans.
        </p>
      </div>

      {/* Package Selector Pills */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => {
              setSelectedPkg(pkg);
              setActiveDay(1);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
              selectedPkg.id === pkg.id
                ? 'bg-[#00353b] text-white border-[#00353b] shadow-md'
                : 'bg-white text-[#40484a] border-[#e4e2df] hover:bg-[#efeeeb]'
            }`}
          >
            {pkg.title}
          </button>
        ))}
      </div>

      {/* Main Package Detail Dossier */}
      <div className="bg-white rounded-2xl shadow-lg border border-[#e4e2df] overflow-hidden">
        {/* Hero banner */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#00353b]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${selectedPkg.image}')` }}
            role="img"
            aria-label={selectedPkg.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00353b] via-[#00353b]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#fc8f34] text-[#663100] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {selectedPkg.duration}
                </span>
                <span className="text-xs text-[#b4ecf5] flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {selectedPkg.locations.join(' • ')}
                </span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold leading-tight max-w-2xl">
                {selectedPkg.title}
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-right shrink-0">
              <span className="text-xs text-[#e4e2df] block">Sample Price</span>
              <span className="text-2xl font-bold text-[#ffdcc5]">
                {selectedPkg.samplePriceDisplay}
              </span>
              <span className="text-xs text-[#e4e2df] block">per person on twin-share</span>
            </div>
          </div>
        </div>

        {/* Content layout */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Timeline & Day-by-Day */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#944a00] uppercase tracking-wider mb-2">
                Overview & Story
              </h3>
              <p className="text-sm text-[#40484a] leading-relaxed">{selectedPkg.overview}</p>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="text-sm font-bold text-[#944a00] uppercase tracking-wider mb-3">
                Included with this Package
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {selectedPkg.inclusions.map((inc, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-[#f5f3f0] border border-[#efeeeb] flex items-center gap-2 text-xs font-semibold text-[#00353b]"
                  >
                    <span className="material-symbols-outlined text-[18px]">{inc.icon}</span>
                    <span>{inc.label}</span>
                  </div>
                ))}
                <div className="p-2.5 rounded-lg bg-[#f5f3f0] border border-[#efeeeb] flex items-center gap-2 text-xs font-semibold text-[#00353b]">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Driver Allowances & Tolls</span>
                </div>
              </div>
            </div>

            {/* Day Schedule Timeline */}
            <div>
              <h3 className="text-sm font-bold text-[#00353b] uppercase tracking-wider mb-3">
                Day-by-Day Tour Schedule
              </h3>

              <div className="space-y-4">
                {selectedPkg.itinerary.map((day) => {
                  const isExpanded = activeDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-[#e4e2df] rounded-xl overflow-hidden bg-[#fbf9f6]"
                    >
                      <button
                        onClick={() => setActiveDay(day.day)}
                        className="w-full p-4 flex items-center justify-between text-left font-bold text-sm text-[#00353b] hover:bg-[#efeeeb] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#00353b] text-white flex items-center justify-center text-xs shrink-0">
                            D{day.day}
                          </span>
                          <span>{day.title}</span>
                        </div>
                        <span className="material-symbols-outlined text-[20px] text-[#40484a]">
                          {isExpanded ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-1 border-t border-[#e4e2df] text-xs text-[#40484a] space-y-2.5">
                          <p className="leading-relaxed">{day.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-white p-2.5 rounded-lg border border-[#efeeeb]">
                            <div>
                              <strong className="text-[#00353b]">Meals:</strong> {day.meals}
                            </div>
                            <div>
                              <strong className="text-[#00353b]">Accommodations:</strong> {day.stay}
                            </div>
                          </div>
                          <div>
                            <strong className="text-[#944a00] block mb-1">Key Highlights:</strong>
                            <ul className="list-disc list-inside space-y-0.5">
                              {day.highlights.map((h, idx) => (
                                <li key={idx}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Col: Booking Card & Special Touches */}
          <div className="space-y-6">
            <div className="bg-[#f5f3f0] p-6 rounded-2xl border border-[#e4e2df] space-y-4">
              <h4 className="font-playfair text-lg font-bold text-[#00353b]">
                Reserve or Customize Package
              </h4>
              <p className="text-xs text-[#40484a] leading-relaxed">
                Connect directly with our senior destination specialist. All itineraries can be
                tailored with upgraded 5-star heritage hotels, customized meals, or private airport
                pickup cities.
              </p>

              <div className="pt-2 border-t border-[#e4e2df] space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#e4e2df]">
                  <span className="text-[#40484a]">Package Code:</span>
                  <strong className="text-[#00353b]">{selectedPkg.id.toUpperCase()}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e4e2df]">
                  <span className="text-[#40484a]">Vehicle Type:</span>
                  <strong className="text-[#00353b]">Private Sedan / AC Innova</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e4e2df]">
                  <span className="text-[#40484a]">Advance Token:</span>
                  <strong className="text-[#944a00]">25% at confirmation</strong>
                </div>
              </div>

              <button
                onClick={() => onBookNow(selectedPkg.title)}
                className="w-full py-3 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book / Enquire Now</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              <a
                href={`https://wa.me/919054922308?text=${encodeURIComponent(
                  `Hello ChunMun Travels, I would like to get a quote for ${selectedPkg.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-[#0e4d55] hover:bg-[#00353b] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp Specialist</span>
              </a>
            </div>

            {/* ChunMun Trust Card */}
            <div className="bg-white p-5 rounded-2xl border border-[#e4e2df] space-y-3">
              <h5 className="text-xs font-bold text-[#00353b] uppercase tracking-wider">
                ChunMun Guarantee
              </h5>
              <div className="space-y-2 text-xs text-[#40484a]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#00353b] shrink-0">
                    check_circle
                  </span>
                  <span>100% verified hotels with high cleanliness standards</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#00353b] shrink-0">
                    check_circle
                  </span>
                  <span>Dedicated, courteous chauffeur with local route expertise</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#00353b] shrink-0">
                    check_circle
                  </span>
                  <span>No hidden driver charges, parking, or state road permits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
