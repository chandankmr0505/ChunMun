import React from 'react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: 'workspace_premium',
      iconBg: 'bg-[#0e4d55]/10 text-[#00353b]',
      title: '10+ Years Excellence',
      desc: 'Founded in 2014 with 25,000+ satisfied travelers worldwide.',
    },
    {
      icon: 'support_agent',
      iconBg: 'bg-[#fc8f34]/15 text-[#944a00]',
      title: '24/7 On-Ground Care',
      desc: 'Instant WhatsApp & direct helpline concierge (+91 90549 22308).',
    },
    {
      icon: 'edit_calendar',
      iconBg: 'bg-[#0e4d55]/10 text-[#00353b]',
      title: '100% Customized',
      desc: 'Bespoke daily timelines tailored to families, seniors, and couples.',
    },
    {
      icon: 'verified_user',
      iconBg: 'bg-[#fc8f34]/15 text-[#944a00]',
      title: 'Zero Hidden Costs',
      desc: 'Transparent pricing with all driver permits, taxes, and inclusions upfront.',
    },
    {
      icon: 'hotel_class',
      iconBg: 'bg-[#0e4d55]/10 text-[#00353b]',
      title: '4.9/5 Star Rating',
      desc: 'Over 2,400+ verified 5-star reviews on Google and TripAdvisor.',
    },
  ];

  const stats = [
    { value: '25,000+', label: 'Happy Voyagers' },
    { value: '150+', label: 'Curated Circuits' },
    { value: '450+', label: 'Verified Hotels' },
    { value: '99.4%', label: 'Satisfaction Score' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          Our Promise of Royal Hospitality
        </span>
        <h2 className="text-headline-lg text-[#00353b] mt-1 font-playfair">
          Why Travelers Choose ChunMun
        </h2>
        <p className="text-body-md text-[#40484a] mt-2">
          Serving discerning domestic and international globetrotters with authentic local hospitality
          and complete peace of mind since 2014.
        </p>
      </div>

      {/* 5 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
        {pillars.map((pillar, i) => (
          <div
            key={i}
            className="bg-white p-space-lg rounded-xl shadow-sm text-center flex flex-col items-center hover:-translate-y-1 transition-transform border border-[#efeeeb]"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center mb-space-md ${pillar.iconBg}`}
            >
              <span className="material-symbols-outlined text-[30px]">{pillar.icon}</span>
            </div>
            <h4 className="text-title-lg text-[#00353b] font-bold mb-1.5">{pillar.title}</h4>
            <p className="text-body-sm text-[#40484a]">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Trust Stats Infographic Counter Bar */}
      <div className="mt-space-lg bg-[#00353b] text-white rounded-xl p-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-md text-center shadow-md border border-[#0e4d55]">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <span className="font-playfair text-headline-lg font-bold text-[#ffdcc5] block">
              {stat.value}
            </span>
            <span className="text-label-sm uppercase tracking-wider text-[#86bdc6] font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
