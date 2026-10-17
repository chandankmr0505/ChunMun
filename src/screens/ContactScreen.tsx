import React, { useState } from 'react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Kashmir Valley',
    travelDate: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const offices = [
    {
      city: 'Delhi NCR (Headquarters)',
      address: 'ChunMun Holiday Travels, Registered Head Office & Travel Studio, Connaught Place, New Delhi 110001',
      phone: '+91 90549 22308',
      email: 'delhi@chunmunholidays.com',
    },
    {
      city: 'Ahmedabad Branch',
      address: 'Suite 402, Heritage Square, Near CG Road, Navrangpura, Ahmedabad, Gujarat 380009',
      phone: '+91 90549 22308',
      email: 'ahmedabad@chunmunholidays.com',
    },
    {
      city: 'Kashmir On-Ground Desk',
      address: 'Boulevard Road, Opposite Dal Lake Ghat 7, Srinagar, Jammu & Kashmir 190001',
      phone: '+91 90549 22308',
      email: 'kashmir@chunmunholidays.com',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-xl">
      <div className="text-center max-w-3xl mx-auto mb-space-xl">
        <span className="text-label-sm text-[#944a00] uppercase tracking-widest block font-bold">
          We Are Here 24/7
        </span>
        <h1 className="text-headline-lg text-[#00353b] mt-1 font-playfair font-bold">
          Contact ChunMun Holiday Travels
        </h1>
        <p className="text-body-md text-[#40484a] mt-2">
          Have a question about a destination, customized group quotes, or need urgent travel
          assistance? Reach out directly to our holiday specialists.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Contact Information & Channels */}
        <div className="space-y-6">
          <div className="bg-[#00353b] text-white p-6 sm:p-8 rounded-2xl shadow-lg border border-[#0e4d55]">
            <span className="text-xs font-bold text-[#ffdcc5] uppercase tracking-wider block mb-1">
              Direct Emergency & Booking Helpline
            </span>
            <div className="flex items-center gap-3 mt-2">
              <span className="material-symbols-outlined text-[32px] text-[#fc8f34]">
                phone_in_talk
              </span>
              <div>
                <a
                  href="tel:+919054922308"
                  className="font-playfair text-2xl sm:text-3xl font-bold hover:text-[#ffdcc5] transition-colors"
                >
                  +91 90549 22308
                </a>
                <span className="text-xs text-[#86bdc6] block">
                  Available 24 Hours • 7 Days a Week
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#0e4d55] flex flex-wrap gap-4 text-xs">
              <a
                href="https://wa.me/919054922308?text=Hello%20ChunMun%20Holiday%20Travels,%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                Chat on WhatsApp
              </a>
              <a
                href="mailto:bookings@chunmunholidays.com"
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                bookings@chunmunholidays.com
              </a>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#00353b] uppercase tracking-wider">
              Our Registered Travel Studios & Hubs
            </h3>
            {offices.map((off, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-[#e4e2df] shadow-sm space-y-1"
              >
                <h4 className="text-sm font-bold text-[#00353b] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-[#944a00]">
                    location_city
                  </span>
                  {off.city}
                </h4>
                <p className="text-xs text-[#40484a]">{off.address}</p>
                <div className="text-xs text-[#00353b] font-semibold pt-1">
                  Direct Line: <a href={`tel:${off.phone}`}>{off.phone}</a> •{' '}
                  <a href={`mailto:${off.email}`}>{off.email}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Enquiry Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e4e2df] shadow-md">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-[#b4ecf5] text-[#00353b] rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#00353b]">
                Message Received!
              </h3>
              <p className="text-xs sm:text-sm text-[#40484a]">
                Thank you, <strong>{formData.name}</strong>. Our senior tour specialist will contact
                you at <strong>{formData.phone}</strong> within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-full bg-[#efeeeb] text-[#00353b] text-xs font-bold hover:bg-[#eae8e5]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-playfair text-xl font-bold text-[#00353b]">
                Send a Direct Travel Inquiry
              </h3>
              <p className="text-xs text-[#40484a]">
                Fill out this quick form and receive a customized day-by-day itinerary with exact
                hotel names and transparent quotation.
              </p>

              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#40484a] block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 90549 22308"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#40484a] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#40484a] block mb-1">
                    Destination of Interest
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                  >
                    <option value="Kashmir Valley">Kashmir Valley</option>
                    <option value="Manali & Shimla">Manali & Shimla</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Kerala Backwaters">Kerala Backwaters</option>
                    <option value="Royal Rajasthan">Royal Rajasthan</option>
                    <option value="Goa Beaches">Goa Beaches</option>
                    <option value="Andaman Islands">Andaman Islands</option>
                    <option value="Northeast & Sikkim">Northeast & Sikkim</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-[#40484a] block mb-1">
                    Tentative Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  How can we help you? (Group size, special requirements, food habits)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your trip plans, family members, or specific places you want to cover..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-xs rounded-lg p-3 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Send Enquiry to ChunMun Specialists</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
