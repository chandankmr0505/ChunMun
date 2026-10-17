import React from 'react';
import { DestinationItem } from '../types/travel';

interface DestinationsSectionProps {
  destinations: DestinationItem[];
  onSelectDestination: (destination: DestinationItem) => void;
  onOpenWeatherGuide: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  destinations,
  onSelectDestination,
  onOpenWeatherGuide,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-gutter pt-24 pb-space-xl w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
        <div>
          <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
            Incredible Heritage & Serene Landscapes
          </span>
          <h2 className="text-headline-lg text-[#00353b] mt-1 font-playfair">
            Top Indian Holiday Destinations
          </h2>
          <p className="text-body-md text-[#40484a] mt-2 max-w-2xl">
            Handcrafted vacation packages with handpicked boutique hotels, verified local drivers,
            and tailored local sightseeing.
          </p>
        </div>

        <button
          onClick={onOpenWeatherGuide}
          className="flex items-center gap-space-sm shrink-0 px-4 py-2 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#1b1c1a] transition-all cursor-pointer shadow-sm group"
        >
          <span className="text-label-sm text-[#40484a] group-hover:text-[#00353b] font-semibold">
            Live Weather & Best Season Guide
          </span>
          <div className="h-2.5 w-2.5 rounded-full bg-[#fc8f34] animate-pulse" />
        </button>
      </div>

      {/* Grid of 8 Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all flex flex-col border border-[#efeeeb]"
          >
            <div className="relative h-60 w-full overflow-hidden bg-[#e4e2df]">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${dest.image}')` }}
                role="img"
                aria-label={dest.imageAlt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00353b]/90 via-[#00353b]/30 to-transparent" />

              {/* Badge */}
              <span
                className={`absolute top-3 left-3 text-label-sm px-space-sm py-0.5 rounded-full shadow-sm font-bold ${
                  dest.badgeType === 'secondary'
                    ? 'bg-[#fc8f34] text-[#663100]'
                    : 'bg-[#00353b] text-white'
                }`}
              >
                {dest.badge}
              </span>

              {/* Title & subtitle inside image scrim */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-playfair text-headline-sm leading-tight font-bold">
                  {dest.name}
                </h3>
                <p className="text-body-sm text-[#e4e2df] truncate">{dest.subLocations}</p>
              </div>
            </div>

            <div className="p-space-md flex flex-col justify-between flex-grow bg-white">
              <div className="flex items-center justify-between text-[#40484a] text-body-sm mb-space-sm">
                <span className="flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px] text-[#944a00]">
                    {dest.tempIcon}
                  </span>
                  {dest.temp}
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#00353b]">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  {dest.bestMonths}
                </span>
              </div>

              <div className="pt-space-sm flex items-center justify-between border-t border-[#efeeeb]">
                <div>
                  <span className="text-label-sm text-[#40484a] block">From</span>
                  <span className="text-currency-display text-[#00353b]">
                    {dest.fromPriceDisplay}
                  </span>
                </div>
                <button
                  onClick={() => onSelectDestination(dest)}
                  className="px-space-md py-space-xs rounded-full bg-[#efeeeb] text-[#00353b] text-label-sm font-bold group-hover:bg-[#00353b] group-hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
