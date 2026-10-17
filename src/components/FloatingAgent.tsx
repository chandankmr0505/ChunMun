import React from 'react';

export const FloatingAgent: React.FC = () => {
  return (
    <aside className="fixed bottom-space-lg right-space-lg z-50 flex flex-col items-end gap-space-xs pointer-events-none">
      <a
        className="pointer-events-auto flex items-center gap-space-sm bg-[#0e4d55] text-white px-space-md py-space-sm rounded-full shadow-[0_4px_16px_rgba(14,77,85,0.25)] hover:bg-[#00353b] hover:text-white transition-all duration-300 group border border-white/10"
        href="https://wa.me/919054922308?text=Hello%20ChunMun%20Holiday%20Travels,%20I%20would%20like%20to%20speak%20to%20an%20India%20tour%20specialist."
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex items-center justify-center">
          <span className="material-symbols-outlined text-[24px]">support_agent</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fc8f34] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fc8f34]" />
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-label-sm text-[#86bdc6] leading-tight font-semibold">
            India Tour Specialist
          </span>
          <span className="text-title-md font-bold leading-tight text-white">
            +91 90549 22308
          </span>
        </div>
      </a>
    </aside>
  );
};
