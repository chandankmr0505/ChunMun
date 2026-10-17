import React, { useState } from 'react';
import { SearchQuery } from '../types/travel';

interface HeroSectionProps {
  onSearch: (params: SearchQuery) => void;
  onFilterTag: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onFilterTag }) => {
  const [destination, setDestination] = useState('rajasthan');
  const [departureCity, setDepartureCity] = useState('delhi');
  const [travelDate, setTravelDate] = useState('2025-04-15');
  const [guestsRooms, setGuestsRooms] = useState('2-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      departureCity,
      travelDate,
      guestsRooms
    });
  };

  return (
    <section className="relative w-full min-h-[942px] flex flex-col justify-between -mt-20 pt-24 overflow-hidden bg-[#00353b]">
      {/* Background Hero Visual matching Inspiration Artistry */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center mix-blend-luminosity opacity-40 scale-105 transform duration-1000"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtMhSTHo6V-yjyhAINCwH6xCzL9zRIOLwTXyQAlxodi8cnAvzyn-WArRuoN9eylWiwlTt92JflJfrtpBYaWYkUrLdrOE6Wyl5BUGumLlkbzX-dJ22QGGwHln-2ze0BK7uGbIGu0c0A23OAw8JXIMmHw6CcvNZVMJ4qENXJCg9uKusx0w1U4L23DgGQZzY9wWugzIprqIcFv07mZRC83nGxJtitiWY_alqbZ4V5P-dfGJjedMLLHSsW')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#fbf9f6] via-[#00353b]/80 to-[#00353b]/90" />

      {/* Ambient glowing light rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#fc8f34]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#b4ecf5]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-gutter pt-space-xl pb-space-lg flex flex-col items-center text-center">
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-space-sm bg-white/10 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-sm mb-space-md border border-white/10">
          <span className="flex h-2 w-2 rounded-full bg-[#fc8f34] animate-pulse" />
          <span className="text-label-sm uppercase tracking-widest text-[#b4ecf5] font-bold">
            Trusted India Inbound & Domestic Tour Operator
          </span>
          <span className="text-white/40">|</span>
          <div className="flex items-center text-[#ffdcc5]">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="material-symbols-outlined text-[15px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            ))}
            <span className="text-label-sm text-white ml-1 font-semibold">
              4.9/5 (2,400+ Verified)
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-headline-xl text-[#fbf9f6] max-w-5xl tracking-tight leading-tight drop-shadow-sm font-playfair font-bold">
          Discover the Soul of{' '}
          <span className="italic font-normal text-[#ffdcc5] underline decoration-[#fc8f34]/40 decoration-wavy decoration-2">
            Incredible India
          </span>{' '}
          with ChunMun Holiday Travels
        </h1>

        <p className="text-body-lg text-[#e4e2df] max-w-3xl mt-space-md mb-space-lg">
          Curated hand-crafted holiday packages for families, couples, and travelers worldwide.
          Trusted by 25,000+ satisfied explorers across majestic Himalayas, regal palaces, and
          tranquil backwaters.
        </p>

        {/* Key Micro Badges */}
        <div className="flex flex-wrap justify-center items-center gap-space-md text-[#fbf9f6] text-label-md font-semibold">
          <div className="flex items-center gap-space-xs bg-white/5 backdrop-blur-sm px-space-sm py-space-xs rounded-full border border-white/5">
            <span className="material-symbols-outlined text-[#fc8f34] text-[18px]">verified</span>
            <span>Govt. Approved & IATA Certified</span>
          </div>
          <div className="flex items-center gap-space-xs bg-white/5 backdrop-blur-sm px-space-sm py-space-xs rounded-full border border-white/5">
            <span className="material-symbols-outlined text-[#fc8f34] text-[18px]">support_agent</span>
            <span>24/7 Dedicated Concierge Support</span>
          </div>
          <div className="flex items-center gap-space-xs bg-white/5 backdrop-blur-sm px-space-sm py-space-xs rounded-full border border-white/5">
            <span className="material-symbols-outlined text-[#fc8f34] text-[18px]">savings</span>
            <span>Transparent Pricing & No Hidden Fees</span>
          </div>
        </div>
      </div>

      {/* Interactive Multi-Field Search Dock */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-gutter -mb-10">
        <div className="bg-white rounded-xl shadow-xl p-space-md md:p-space-lg border border-[#e4e2df]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md items-end"
          >
            {/* Destination Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-label-sm text-[#40484a] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#00353b]">pin_drop</span>
                Destination
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-title-md font-semibold rounded-lg p-space-sm pr-8 appearance-none focus:outline-none focus:bg-[#efeeeb] cursor-pointer"
                >
                  <option value="kashmir">Kashmir (Paradise Valley)</option>
                  <option value="himachal">Manali & Shimla (Himachal)</option>
                  <option value="uttarakhand">Uttarakhand (Char Dham & Auli)</option>
                  <option value="kerala">Kerala (Munnar & Backwaters)</option>
                  <option value="rajasthan">Royal Rajasthan (Jaipur & Desert)</option>
                  <option value="goa">Goa (Beaches & Heritage)</option>
                  <option value="andaman">Andaman & Nicobar Islands</option>
                  <option value="northeast">Northeast & Sikkim Silk Route</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#40484a] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Departure City */}
            <div className="flex flex-col gap-1">
              <label className="text-label-sm text-[#40484a] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#00353b]">
                  flight_takeoff
                </span>
                Departure City
              </label>
              <div className="relative">
                <select
                  value={departureCity}
                  onChange={(e) => setDepartureCity(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-title-md font-semibold rounded-lg p-space-sm pr-8 appearance-none focus:outline-none focus:bg-[#efeeeb] cursor-pointer"
                >
                  <option value="delhi">Delhi NCR</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#40484a] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Travel Dates */}
            <div className="flex flex-col gap-1">
              <label className="text-label-sm text-[#40484a] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#00353b]">
                  calendar_month
                </span>
                Travel Month / Date
              </label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-title-md font-semibold rounded-lg p-space-sm focus:outline-none focus:bg-[#efeeeb] cursor-pointer"
              />
            </div>

            {/* Travellers & Rooms */}
            <div className="flex flex-col gap-1">
              <label className="text-label-sm text-[#40484a] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-[16px] text-[#00353b]">groups</span>
                Guests & Rooms
              </label>
              <div className="relative">
                <select
                  value={guestsRooms}
                  onChange={(e) => setGuestsRooms(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-title-md font-semibold rounded-lg p-space-sm pr-8 appearance-none focus:outline-none focus:bg-[#efeeeb] cursor-pointer"
                >
                  <option value="2-1">2 Adults, 1 Room</option>
                  <option value="2-1-1">2 Adults, 1 Child, 1 Room</option>
                  <option value="4-2">4 Adults, 2 Rooms (Family)</option>
                  <option value="group">6+ Group / Custom</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#40484a] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              className="w-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-title-md py-space-sm px-space-md rounded-lg shadow-md transition-all flex items-center justify-center gap-space-xs font-bold h-[48px] self-end cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span>Search Packages</span>
            </button>
          </form>

          {/* Quick filter chips underneath */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mt-space-md pt-space-sm border-t border-[#efeeeb]">
            <div className="flex flex-wrap items-center gap-space-xs text-body-sm text-[#40484a]">
              <span className="text-label-sm uppercase tracking-wide text-[#00353b] font-bold">
                Trending Circuits:
              </span>
              {[
                { tag: 'kashmir', label: 'Kashmir Houseboat' },
                { tag: 'kerala', label: 'Munnar & Alleppey' },
                { tag: 'rajasthan', label: 'Jaipur & Desert Camp' },
                { tag: 'himachal', label: 'Solang Snow Tour' }
              ].map(({ tag, label }) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onFilterTag(tag)}
                  className="px-space-sm py-0.5 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#1b1c1a] text-xs font-medium cursor-pointer transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-space-xs text-label-sm text-[#944a00] font-semibold">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Price Range: ₹15,000 - ₹1,50,000+ per person</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
