import React, { useState } from 'react';
import { FaqItem } from '../types/travel';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  // First item open by default as in screenshot
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="max-w-5xl mx-auto px-gutter py-space-xl w-full">
      <div className="text-center mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Got Questions? We Have Answers
        </span>
        <h2 className="text-headline-lg text-[#00353b] mt-1 font-playfair">
          Frequently Asked Questions
        </h2>
        <p className="text-body-md text-[#40484a] mt-2 max-w-2xl mx-auto">
          Everything you need to know about reserving, modifying, and experiencing your vacation with
          ChunMun Holiday Travels.
        </p>
      </div>

      <div className="space-y-space-md">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#efeeeb] transition-all"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left p-space-md flex items-center justify-between text-[#00353b] text-title-lg font-bold focus:outline-none cursor-pointer hover:text-[#0e4d55] transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`material-symbols-outlined transition-transform duration-300 text-[#40484a] ${
                    isOpen ? 'rotate-180 text-[#00353b]' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <div className="p-space-md pt-0 text-[#40484a] text-body-md border-t border-[#efeeeb]/50 mt-1 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
