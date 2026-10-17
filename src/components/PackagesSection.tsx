import React from 'react';
import { TourPackage } from '../types/travel';

interface PackagesSectionProps {
  packages: TourPackage[];
  onViewDetails: (pkg: TourPackage) => void;
  onOpenEnquiry: (packageTitle?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  onViewDetails,
}) => {
  return (
    <section className="w-full bg-[#f5f3f0] py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
              Handcrafted Best-Sellers
            </span>
            <h2 className="text-headline-lg text-[#00353b] mt-1 font-playfair">
              Featured Tour Packages
            </h2>
            <p className="text-body-md text-[#40484a] mt-1">
              Complete transparent tour packages with deluxe accommodations, dedicated private chauffeur
              vehicles, and immersive cultural excursions.
            </p>
          </div>

          <div className="p-space-sm bg-white rounded-lg shadow-sm flex items-center gap-space-xs border border-[#e4e2df]">
            <span className="material-symbols-outlined text-[#fc8f34] text-[20px]">info</span>
            <span className="text-label-sm text-[#40484a] font-medium">
              Sample prices per person on twin-sharing basis
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col md:flex-row border border-[#e4e2df]"
            >
              {/* Image banner */}
              <div className="relative md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden bg-[#e4e2df]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                  role="img"
                  aria-label={pkg.imageAlt}
                />
                <span className="absolute top-3 left-3 bg-[#00353b] text-white text-label-sm px-space-sm py-0.5 rounded-full shadow-sm font-bold">
                  {pkg.duration}
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[#00353b] text-label-sm font-bold shadow-sm">
                  <span
                    className="material-symbols-outlined text-[#fc8f34] text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span>{pkg.rating}</span>
                  <span className="text-[#40484a] font-normal">({pkg.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-space-lg flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-space-xs text-[#944a00] text-label-sm font-semibold mb-1">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span>{pkg.locations.join(' • ')}</span>
                  </div>

                  <h3 className="font-playfair text-headline-sm text-[#00353b] font-bold leading-snug">
                    {pkg.title}
                  </h3>

                  {/* Inclusions Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-space-sm">
                    {pkg.inclusions.map((inc, idx) => (
                      <span
                        key={idx}
                        className="bg-[#eae8e5] px-2.5 py-1 rounded text-[#1b1c1a] text-body-sm flex items-center gap-1 font-medium"
                      >
                        <span className="material-symbols-outlined text-[15px] text-[#00353b]">
                          {inc.icon}
                        </span>
                        <span>{inc.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-[#efeeeb]">
                  <div>
                    <span className="text-label-sm text-[#40484a] block font-medium">Sample Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-currency-display text-[#00353b]">
                        {pkg.samplePriceDisplay}
                      </span>
                      <span className="text-body-sm text-[#40484a]">/ person</span>
                    </div>
                    <span className="text-[11px] text-[#40484a] block leading-none">
                      Twin sharing basis
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/919054922308?text=${encodeURIComponent(
                        `Hi ChunMun Travels, I am interested in the ${pkg.title} package (${pkg.samplePriceDisplay}/person). Please share customized quotation.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-[#0e4d55] text-white hover:bg-[#00353b] transition-colors shadow-sm flex items-center justify-center"
                      title="WhatsApp Enquiry"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </a>

                    <button
                      onClick={() => onViewDetails(pkg)}
                      className="bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-label-md font-bold px-space-md py-2 rounded-full transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
