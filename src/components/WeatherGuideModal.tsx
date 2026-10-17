import React from 'react';
import { SEASONAL_GUIDE } from '../data/travelData';

interface WeatherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPlanTrip: (region: string) => void;
}

export const WeatherGuideModal: React.FC<WeatherGuideModalProps> = ({
  isOpen,
  onClose,
  onPlanTrip,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-[#0e4d55]/20 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#00353b] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fc8f34] text-[24px]">wb_sunny</span>
            <div>
              <h3 className="font-playfair text-lg font-bold leading-tight">
                Incredible India Weather & Best Season Guide
              </h3>
              <p className="text-xs text-[#86bdc6]">
                Curated temperature trends and ideal travel windows by ChunMun specialists
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

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="bg-[#f5f3f0] p-3 rounded-xl border border-[#efeeeb] text-xs text-[#40484a] flex items-start gap-2">
            <span className="material-symbols-outlined text-[#00353b] text-[18px] shrink-0 mt-0.5">
              tips_and_updates
            </span>
            <span>
              <strong>ChunMun Tip:</strong> India has diverse climates across regions. While North
              India (Himalayas) is best during spring, summer, and autumn, Western and Southern India
              (Rajasthan, Kerala, Goa) offer pleasant conditions from October to March.
            </span>
          </div>

          <div className="space-y-3">
            {SEASONAL_GUIDE.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#fbf9f6] p-4 rounded-xl border border-[#e4e2df] hover:border-[#00353b]/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-playfair text-base font-bold text-[#00353b]">
                      {item.region}
                    </h4>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#ffdcc5] text-[#944a00]">
                      Recommended
                    </span>
                  </div>
                  <div className="text-xs text-[#1b1c1a] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#00353b]">
                      event_available
                    </span>
                    {item.bestTime}
                  </div>
                  <div className="text-xs text-[#40484a] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#fc8f34]">
                      thermostat
                    </span>
                    {item.weather}
                  </div>
                  <div className="text-xs text-[#40484a]">
                    <strong>Seasonal Highlights:</strong> {item.highlights}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onPlanTrip(item.region);
                  }}
                  className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#0e4d55] hover:bg-[#00353b] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Plan {item.region.split(' ')[0]} Trip
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#fbf9f6] border-t border-[#e4e2df] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] text-[#00353b] text-xs font-bold"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
