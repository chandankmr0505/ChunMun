import React from 'react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-gutter pb-space-xl w-full">
      <div className="relative bg-gradient-to-r from-[#00353b] via-[#0e4d55] to-[#00353b] text-white rounded-xl p-space-xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-space-lg border border-[#0e4d55]">
        {/* Decorative background icon */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="material-symbols-outlined text-[260px]">travel_explore</span>
        </div>

        <div className="max-w-2xl text-center lg:text-left z-10">
          <span className="bg-[#fc8f34] text-[#663100] text-label-sm uppercase tracking-widest px-space-sm py-0.5 rounded-full inline-block mb-space-xs font-bold shadow-sm">
            Talk to a Destination Expert
          </span>
          <h3 className="text-headline-lg text-[#fbf9f6] leading-tight font-playfair font-bold">
            Ready to plan your dream vacation across Incredible India?
          </h3>
          <p className="text-body-lg text-[#e4e2df] mt-space-xs">
            Speak directly to our senior holiday consultant at{' '}
            <strong className="text-[#ffdcc5]">+91 90549 22308</strong> or click below to receive a
            personalized quote on WhatsApp within 15 minutes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0 z-10 w-full sm:w-auto">
          <a
            href="tel:+919054922308"
            className="w-full sm:w-auto bg-[#fbf9f6] text-[#00353b] hover:bg-[#efeeeb] text-title-md px-space-lg py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-space-xs font-bold"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
            <span>Call +91 90549 22308</span>
          </a>

          <a
            href="https://wa.me/919054922308?text=Hello%20ChunMun%20Holiday%20Travels,%20I%20would%20like%20to%20plan%20a%20holiday%20package."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#fc8f34] text-[#663100] hover:bg-[#944a00] hover:text-white text-title-md px-space-lg py-3 rounded-full shadow-md transition-all flex items-center justify-center gap-space-xs font-bold"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>WhatsApp Concierge</span>
          </a>
        </div>
      </div>
    </section>
  );
};
