import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, MapPin, Users, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/helpers';
import { contactData } from '../data/travelData';

export const Hero: React.FC = () => {
  const scrollToHajj = () => {
    const el = document.getElementById('hajj-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToUmrah = () => {
    const el = document.getElementById('umrah-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-50 flex items-center overflow-hidden border-b border-slate-200">
      {/* Professional Polish Geometric Skew Accent Background */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-blue-100 opacity-25 transform -skew-x-12 translate-x-20 pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-block px-3.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded-full mb-4 uppercase tracking-widest shadow-2xs">
              Registration Open • Hajj 1448 AH
            </div>

            {/* Main Headings */}
            <h1
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight mb-4 tracking-tight"
            >
              Hajj 2027 <br />
              <span className="text-slate-500 font-light italic">A Sacred Journey</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Premium and comfortable Hajj & Umrah travel packages planned with care for pilgrims from Pakistan and across the globe.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={scrollToHajj}
                id="hero-primary-cta"
                className="bg-amber-500 text-white px-7 py-3 rounded-lg font-bold shadow-md hover:bg-amber-600 active:scale-[0.99] transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>View Hajj Packages</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToUmrah}
                id="hero-secondary-cta"
                className="bg-white text-slate-700 border border-slate-200 px-7 py-3 rounded-lg font-bold shadow-xs hover:bg-slate-50 active:scale-[0.99] transition-all cursor-pointer"
              >
                Umrah Details
              </button>

              <a
                href={getGeneralWhatsAppUrl('Hajj 2027 Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-3 rounded-lg border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="text-blue-900 font-bold text-base">•</span>
                <span className="font-medium">Pakistan (PKR) & Overseas (USD)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-900 font-bold text-base">•</span>
                <span className="font-medium">Proximity Haram Hotels</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="text-blue-900 font-bold text-base">•</span>
                <span className="font-medium">Guided Religious Support</span>
              </div>
            </div>
          </div>

          {/* Right Featured Package Showcase Card (Professional Polish card style) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-3 border-2 border-slate-100 shadow-2xl relative">
              <div className="w-full rounded-2xl bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-800 text-white p-7 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl" />
                
                <div className="border border-white/20 p-5 rounded-xl backdrop-blur-xs relative z-10">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-2 border border-amber-400/30">
                    Featured 2027 Package
                  </div>
                  
                  <h3 className="text-2xl font-bold font-serif mb-1">
                    Executive Pakistan
                  </h3>
                  <p className="text-xs text-sky-200">14 Days Short Duration</p>

                  <div className="h-px bg-white/20 my-4" />

                  <p className="text-sm text-slate-200 italic mb-4">
                    Direct Airline Flights • 5-Star Front Row Hotels • Full Buffet
                  </p>

                  <div className="flex items-baseline justify-center gap-1.5 font-mono mb-4">
                    <span className="text-xs text-sky-200 uppercase font-sans">Starts at</span>
                    <span className="text-2xl font-black text-amber-300">PKR 1,450,000</span>
                  </div>

                  <button
                    onClick={scrollToHajj}
                    className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    Explore Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
