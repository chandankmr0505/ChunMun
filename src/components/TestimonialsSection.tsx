import React from 'react';
import { ReviewItem } from '../types/travel';

interface TestimonialsSectionProps {
  testimonials: ReviewItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="w-full bg-[#f5f3f0] py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
            Authentic Travel Stories
          </span>
          <h2 className="text-headline-lg text-[#00353b] mt-1 font-playfair">
            Loved by Explorers Worldwide
          </h2>
          <p className="text-body-md text-[#40484a] mt-2">
            Read how ChunMun Holiday Travels transforms vacations into cherished lifetime memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {testimonials.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-space-lg rounded-xl shadow-md flex flex-col justify-between border border-[#e4e2df]"
            >
              <div>
                <div className="flex items-center text-[#fc8f34] mb-space-sm">
                  {[...Array(rev.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md text-[#1b1c1a] italic mb-space-md leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-md border-t border-[#efeeeb]">
                <div
                  className={`w-12 h-12 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold text-title-md shrink-0 shadow-sm`}
                >
                  {rev.avatarText}
                </div>
                <div>
                  <h5 className="text-title-md text-[#00353b] leading-tight font-bold">
                    {rev.name}
                  </h5>
                  <span className="text-body-sm text-[#40484a] block">{rev.location} • {rev.tour}</span>
                  <span className="inline-flex items-center gap-1 text-label-sm text-[#00353b] font-bold mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    {rev.verifiedLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
