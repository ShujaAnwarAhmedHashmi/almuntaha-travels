import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/helpers';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 pointer-events-auto"
    >
      {/* Tooltip badge with Professional Polish pulse indicator */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-xl border border-slate-100 text-xs font-bold text-slate-700 animate-fadeIn">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
          <span>Chat with us</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/30"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
