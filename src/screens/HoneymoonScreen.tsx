import React from 'react';
import { PACKAGES } from '../data/travelData';
import { TourPackage } from '../types/travel';

interface HoneymoonScreenProps {
  onViewDetails: (pkg: TourPackage) => void;
  onBookNow: (packageTitle: string) => void;
}

export const HoneymoonScreen: React.FC<HoneymoonScreenProps> = ({
  onViewDetails,
  onBookNow,
}) => {
  const honeymoonPackages = PACKAGES.filter(
    (p) => p.category === 'Honeymoon' || p.destination === 'Kashmir' || p.destination === 'Kerala'
  );

  const perks = [
    {
      icon: 'dinner_dining',
      title: 'Candlelight Dinners',
      desc: 'Intimate dining on private houseboats and heritage palace verandas.',
    },
    {
      icon: 'spa',
      title: 'Floral Bed & Cake',
      desc: 'Romantic welcome floral decor, wine/kahwa, and celebration honeymoon cake.',
    },
    {
      icon: 'directions_car',
      title: 'Exclusive Private Chauffeur',
      desc: 'Seamless dedicated car throughout your journey for complete privacy.',
    },
    {
      icon: 'photo_camera',
      title: 'Scenic Photo Points',
      desc: 'Curated golden-hour photo stops at picturesque valleys and sunset points.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Love & Romance Across India
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          Handcrafted Honeymoon Specials
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          Celebrate new beginnings amidst ethereal Himalayan valleys, misty tea estates, and
          golden Thar desert camps designed exclusively for couples.
        </p>
      </div>

      {/* Honeymoon Perks Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {perks.map((perk, i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm border border-[#e4e2df] flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#ffdcc5] text-[#944a00] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">{perk.icon}</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#00353b]">{perk.title}</h4>
              <p className="text-xs text-[#40484a] mt-0.5">{perk.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Honeymoon Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
        {honeymoonPackages.map((pkg) => (
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
              <span className="absolute top-3 left-3 bg-[#fc8f34] text-[#663100] text-xs px-2.5 py-0.5 rounded-full font-bold">
                Honeymoon Choice
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-xs font-semibold text-[#944a00] flex items-center gap-1 mb-1">
                  <span className="material-symbols-outlined text-[15px]">favorite</span>
                  {pkg.locations.join(' • ')}
                </span>
                <h3 className="font-playfair text-lg font-bold text-[#00353b]">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#40484a] mt-2 line-clamp-2">{pkg.overview}</p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#efeeeb] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#40484a] block">Couple Package From</span>
                  <span className="text-lg font-bold text-[#00353b]">
                    {pkg.samplePriceDisplay}
                  </span>
                  <span className="text-[10px] text-[#40484a] block leading-none">per person</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDetails(pkg)}
                    className="bg-[#efeeeb] hover:bg-[#eae8e5] text-[#00353b] text-xs font-bold px-3 py-2 rounded-full transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onBookNow(pkg.title)}
                    className="bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
                  >
                    Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
