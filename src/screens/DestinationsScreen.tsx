import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';
import { DestinationItem } from '../types/travel';

interface DestinationsScreenProps {
  onSelectDestination: (dest: DestinationItem) => void;
  onPlanTrip: (destinationName: string) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({
  onPlanTrip,
}) => {
  const [selectedDest, setSelectedDest] = useState<DestinationItem>(DESTINATIONS[0]);

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Explore Regions & Landscapes
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          Top Indian Destinations Guide
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          Handpicked boutique stays, certified local guides, and carefully planned sightseeing for
          the most iconic destinations of India.
        </p>
      </div>

      {/* Featured Destination Spotlight */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e4e2df] mb-12 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-72 lg:h-auto overflow-hidden bg-[#00353b]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${selectedDest.image}')` }}
            role="img"
            aria-label={selectedDest.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 bg-[#fc8f34] text-[#663100] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {selectedDest.badge}
          </span>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h2 className="font-playfair text-2xl lg:text-3xl font-bold">{selectedDest.name}</h2>
            <p className="text-xs text-[#e4e2df]">{selectedDest.subLocations}</p>
          </div>
        </div>

        <div className="p-6 lg:p-8 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#40484a] mb-3">
              <span className="bg-[#f5f3f0] px-2.5 py-1 rounded-md font-semibold text-[#00353b]">
                Duration: {selectedDest.idealDuration}
              </span>
              <span className="bg-[#f5f3f0] px-2.5 py-1 rounded-md font-semibold text-[#00353b]">
                Best Season: {selectedDest.bestMonths}
              </span>
              <span className="bg-[#f5f3f0] px-2.5 py-1 rounded-md font-semibold text-[#944a00]">
                Avg Temp: {selectedDest.temp}
              </span>
            </div>

            <p className="text-sm text-[#40484a] leading-relaxed mb-4">
              {selectedDest.description}
            </p>

            <h4 className="text-xs font-bold text-[#944a00] uppercase tracking-wider mb-2">
              Must-Visit Sights & Experiences
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedDest.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-[#1b1c1a] bg-[#fbf9f6] p-2 rounded border border-[#efeeeb]"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#00353b]">
                    check_circle
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#efeeeb] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#40484a] block">Starting from</span>
              <span className="text-2xl font-bold text-[#00353b]">
                {selectedDest.fromPriceDisplay}
              </span>
              <span className="text-xs text-[#40484a] ml-1">/ person</span>
            </div>

            <button
              onClick={() => onPlanTrip(selectedDest.name)}
              className="px-6 py-2.5 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Plan Trip to {selectedDest.name}
            </button>
          </div>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => {
              setSelectedDest(dest);
              window.scrollTo({ top: 350, behavior: 'smooth' });
            }}
            className={`cursor-pointer rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all border ${
              selectedDest.id === dest.id
                ? 'border-[#00353b] ring-2 ring-[#00353b]/20'
                : 'border-[#e4e2df]'
            }`}
          >
            <div className="relative h-44 w-full overflow-hidden bg-[#e4e2df]">
              <div
                className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${dest.image}')` }}
                role="img"
                aria-label={dest.imageAlt}
              />
              <span className="absolute top-2 left-2 bg-[#00353b] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                {dest.bestMonths}
              </span>
            </div>
            <div className="p-3.5">
              <h3 className="font-playfair text-base font-bold text-[#00353b]">{dest.name}</h3>
              <p className="text-xs text-[#40484a] truncate mt-0.5">{dest.subLocations}</p>
              <div className="mt-2 pt-2 border-t border-[#efeeeb] flex items-center justify-between text-xs">
                <span className="text-[#40484a]">From {dest.fromPriceDisplay}</span>
                <span className="text-[#00353b] font-bold">Select & View →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
