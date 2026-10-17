import React, { useState } from 'react';
import { PACKAGES } from '../data/travelData';
import { TourPackage } from '../types/travel';

interface DomesticToursScreenProps {
  onViewDetails: (pkg: TourPackage) => void;
  onBookNow: (packageTitle: string) => void;
}

export const DomesticToursScreen: React.FC<DomesticToursScreenProps> = ({
  onViewDetails,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(30000);

  const regions = ['All', 'North', 'South', 'West'];

  const filteredPackages = PACKAGES.filter((pkg) => {
    const matchesRegion = selectedRegion === 'All' || pkg.region === selectedRegion;
    const matchesPrice = pkg.price <= maxPrice;
    return matchesRegion && matchesPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          All-India Circuits
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          Domestic Holiday Packages
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          From snowbound Himalayan mountain passes to sun-drenched Arabian Sea coastlines and
          regal desert fortresses, explore verified itineraries curated by local specialists.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-[#e4e2df] mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Region selector */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          <span className="text-xs font-bold text-[#00353b] uppercase mr-2">Region:</span>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-[#00353b] text-white shadow-sm'
                  : 'bg-[#efeeeb] text-[#40484a] hover:bg-[#eae8e5]'
              }`}
            >
              {reg === 'All' ? 'All India' : reg}
            </button>
          ))}
        </div>

        {/* Budget filter slider */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-bold text-[#40484a] whitespace-nowrap">
            Max Price: <strong className="text-[#00353b]">₹{maxPrice.toLocaleString('en-IN')}</strong>
          </span>
          <input
            type="range"
            min={15000}
            max={35000}
            step={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-36 accent-[#fc8f34] cursor-pointer"
          />
        </div>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row border border-[#e4e2df]"
          >
            <div className="relative sm:w-2/5 h-60 sm:h-auto overflow-hidden bg-[#e4e2df] shrink-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${pkg.image}')` }}
                role="img"
                aria-label={pkg.imageAlt}
              />
              <span className="absolute top-3 left-3 bg-[#00353b] text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                {pkg.duration}
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-xs font-semibold text-[#944a00] flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  {pkg.locations.join(' • ')}
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#00353b] leading-tight">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#40484a] mt-2 line-clamp-2">{pkg.overview}</p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {pkg.inclusions.slice(0, 3).map((inc, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#efeeeb] text-[#1b1c1a] px-2 py-0.5 rounded flex items-center gap-1 font-medium"
                    >
                      <span className="material-symbols-outlined text-[13px] text-[#00353b]">
                        {inc.icon}
                      </span>
                      {inc.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#efeeeb] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#40484a] block">Starting from</span>
                  <span className="text-lg font-bold text-[#00353b]">
                    {pkg.samplePriceDisplay}
                  </span>
                  <span className="text-[10px] text-[#40484a] block leading-none">per person</span>
                </div>

                <button
                  onClick={() => onViewDetails(pkg)}
                  className="bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
