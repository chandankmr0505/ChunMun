import React, { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  packageTitle?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  packageTitle,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState(packageTitle || 'Royal Rajasthan (Jaipur & Desert)');
  const [travelDate, setTravelDate] = useState('2025-05-10');
  const [adults, setAdults] = useState('2');
  const [dietPreference, setDietPreference] = useState('Vegetarian');
  const [notes, setNotes] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    const enquiryId = 'CM-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(enquiryId);
  };

  const handleReset = () => {
    setSubmittedId(null);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  const whatsAppMessage = encodeURIComponent(
    `Hello ChunMun Holiday Travels, I have submitted Enquiry ${submittedId || 'request'} for ${destination}.\nName: ${name}\nPhone: ${phone}\nDate: ${travelDate}\nGuests: ${adults} Adults\nDiet: ${dietPreference}\nNotes: ${notes}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-[#0e4d55]/20 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#00353b] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fc8f34] text-[24px]">
              luggage
            </span>
            <div>
              <h3 className="font-playfair text-lg font-bold leading-tight">
                Plan Your Vacation with ChunMun
              </h3>
              <p className="text-xs text-[#86bdc6]">
                Get a custom quote within 15 minutes • No booking charges
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submittedId ? (
          /* Confirmation Success Screen */
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-[#b4ecf5] text-[#00353b] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#944a00] uppercase tracking-wider block">
                Enquiry Received Successfully!
              </span>
              <h4 className="font-playfair text-2xl font-bold text-[#00353b] mt-1">
                Ref ID: {submittedId}
              </h4>
              <p className="text-sm text-[#40484a] mt-2 max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>! Senior travel specialist{' '}
                <strong>Mr. Rajesh at ChunMun Travels</strong> has received your trip requirements
                for <em>{destination}</em>.
              </p>
            </div>

            <div className="bg-[#f5f3f0] p-3 rounded-xl border border-[#efeeeb] text-xs text-left space-y-1">
              <div><strong>Travel Date:</strong> {travelDate}</div>
              <div><strong>Travelers:</strong> {adults} Adults ({dietPreference})</div>
              <div><strong>Registered Phone:</strong> {phone}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={`https://wa.me/919054922308?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#0e4d55] hover:bg-[#00353b] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Send to WhatsApp Now
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#00353b] text-xs font-bold"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            <div>
              <label className="text-xs font-bold text-[#40484a] block mb-1">
                Selected Destination / Tour Circuit
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sunil Mehta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Preferred Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Number of Adults
                </label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                >
                  <option value="1">1 Adult (Solo)</option>
                  <option value="2">2 Adults (Couple)</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults (Family)</option>
                  <option value="6+">6+ Group Travelers</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#40484a] block mb-1">
                  Diet Preference
                </label>
                <select
                  value={dietPreference}
                  onChange={(e) => setDietPreference(e.target.value)}
                  className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
                >
                  <option value="Vegetarian">Pure Vegetarian</option>
                  <option value="Jain">Pure Jain (No Root Veg)</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="All">Any / International</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#40484a] block mb-1">
                Special Requests or Custom Preferences
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Need Honeymoon cake & floral bed decor, or ground floor rooms for elderly parents..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#f5f3f0] text-[#1b1c1a] text-sm rounded-lg p-2.5 border border-[#e4e2df] focus:outline-none focus:border-[#00353b]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#fc8f34] hover:bg-[#944a00] text-[#663100] hover:text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
              <span>Submit Free Enquiry & Receive Quote</span>
            </button>

            <div className="flex items-center justify-center gap-3 text-xs text-[#40484a] pt-1">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#00353b]">lock</span>
                100% Confidential
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-[#00353b]">
                  support_agent
                </span>
                24/7 Phone Concierge
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
