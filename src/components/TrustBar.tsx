import React from 'react';
import { trustHighlights } from '../data/travelData';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="bg-blue-900 min-h-16 py-4 flex items-center justify-center text-white text-sm font-medium border-y border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-14 gap-y-3">
          {trustHighlights.map((item) => (
            <div key={item.id} className="flex items-center space-x-2.5">
              <span className="text-amber-400 font-black text-base">✓</span>
              <span className="font-semibold tracking-wide text-xs sm:text-sm">
                {item.title}
              </span>
              <span className="hidden md:inline text-sky-300/60 text-xs">
                ({item.subtitle})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
