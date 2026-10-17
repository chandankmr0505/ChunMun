import React from 'react';

interface AboutScreenProps {
  onContactClick: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onContactClick }) => {
  const milestones = [
    { year: '2014', title: 'Founded with Passion', desc: 'Started in New Delhi with bespoke Himalayan & Rajasthan expeditions.' },
    { year: '2017', title: 'Govt. Recognition & IATA', desc: 'Received Ministry of Tourism approval and full IATA accreditation.' },
    { year: '2020', title: 'Pan-India Network', desc: 'Expanded direct fleet of premium tourist vehicles across Kashmir, Himachal, Kerala, and Goa.' },
    { year: '2024+', title: '25,000+ Voyagers', desc: 'Proudly served over 25,000 delighted domestic and international travelers.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Our Heritage & Passion
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          About ChunMun Holiday Travels
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          Rooted in the eternal Indian philosophy of <em>Atithi Devo Bhava</em> (Guest is God), we
          curate soulful, frictionless holiday journeys across the subcontinent.
        </p>
      </div>

      {/* Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-4">
          <span className="text-xs font-bold text-[#944a00] uppercase tracking-wider block">
            Crafted for Incredible Journeys Since 2014
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#00353b] leading-snug">
            Where authentic local warmth meets modern luxury travel standards.
          </h2>
          <p className="text-sm text-[#40484a] leading-relaxed">
            Founded over a decade ago, ChunMun Holiday Travels was born from a simple conviction:
            traveling through India shouldn't be stressful, complicated, or opaque. Whether you are
            gliding across the lotus blooms of Dal Lake in Srinagar, trekking pine forests in Manali,
            or watching golden dunes shift in Jaisalmer, every moment should feel effortless.
          </p>
          <p className="text-sm text-[#40484a] leading-relaxed">
            Today, our network spans over 450+ verified partner hotels, a dedicated fleet of sanitized
            tourist vehicles, and over 150+ meticulously crafted itineraries supported by our 24/7
            on-ground concierge desk.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="bg-[#f5f3f0] px-3.5 py-2 rounded-xl border border-[#efeeeb] text-xs font-bold text-[#00353b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#fc8f34] text-[18px]">verified</span>
              Ministry of Tourism Approved
            </div>
            <div className="bg-[#f5f3f0] px-3.5 py-2 rounded-xl border border-[#efeeeb] text-xs font-bold text-[#00353b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00353b] text-[18px]">flight</span>
              IATA Accredited Tour Operator
            </div>
            <div className="bg-[#f5f3f0] px-3.5 py-2 rounded-xl border border-[#efeeeb] text-xs font-bold text-[#00353b] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#944a00] text-[18px]">hotel_class</span>
              ISO 9001:2015 Certified
            </div>
          </div>
        </div>

        {/* Visual Collage */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#e4e2df] h-80 sm:h-96">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtMhSTHo6V-yjyhAINCwH6xCzL9zRIOLwTXyQAlxodi8cnAvzyn-WArRuoN9eylWiwlTt92JflJfrtpBYaWYkUrLdrOE6Wyl5BUGumLlkbzX-dJ22QGGwHln-2ze0BK7uGbIGu0c0A23OAw8JXIMmHw6CcvNZVMJ4qENXJCg9uKusx0w1U4L23DgGQZzY9wWugzIprqIcFv07mZRC83nGxJtitiWY_alqbZ4V5P-dfGJjedMLLHSsW')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00353b]/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs text-[#ffdcc5] font-bold block mb-1">Our Core Commitment</span>
            <p className="text-base font-bold font-playfair">
              "Every guest returns home with a heart filled with warmth, unforgettable stories, and a
              lifelong bond with India."
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#e4e2df] mb-12">
        <h3 className="font-playfair text-xl font-bold text-[#00353b] mb-6 text-center">
          Our Journey of Excellence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative p-4 rounded-xl bg-[#fbf9f6] border border-[#efeeeb]">
              <span className="text-2xl font-bold text-[#fc8f34] block mb-1 font-playfair">
                {m.year}
              </span>
              <h4 className="text-sm font-bold text-[#00353b] mb-1">{m.title}</h4>
              <p className="text-xs text-[#40484a] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center bg-[#00353b] text-white p-8 rounded-2xl">
        <h3 className="font-playfair text-2xl font-bold mb-2">
          Want to discuss your upcoming journey with our founders?
        </h3>
        <p className="text-xs sm:text-sm text-[#e4e2df] max-w-xl mx-auto mb-4">
          Connect directly with our senior destination team for bespoke advice or family itinerary
          designing.
        </p>
        <button
          onClick={onContactClick}
          className="px-6 py-2.5 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold transition-all shadow-md cursor-pointer"
        >
          Contact Our Travel Desk
        </button>
      </div>
    </div>
  );
};
