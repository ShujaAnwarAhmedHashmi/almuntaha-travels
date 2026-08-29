import React from 'react';
import { partnerCompanies } from '../data/travelData';
import { ShieldCheck, Handshake, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners-section" className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Handshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Trusted Network & Strategic Alliances</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white tracking-tight">
            Our Official Travel Partners
          </h2>

          <p className="text-slate-400 text-xs sm:text-base mt-2 max-w-2xl mx-auto">
            Working in close collaboration with premier pilgrimage organizers and accredited travel groups to guarantee top-tier service, verified hotel vouchers, and seamless ground logistics.
          </p>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {partnerCompanies.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/90 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  {partner.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{partner.badge}</span>
                    </span>
                  )}
                </div>

                {/* Partner Name */}
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  {partner.name}
                </h3>

                {/* Partner Type */}
                <p className="text-xs font-semibold text-sky-400 tracking-wide uppercase font-mono mb-3">
                  {partner.type}
                </p>

                {/* Partner Description / Tagline */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {partner.tagline}
                </p>
              </div>

              {/* Bottom Guarantee Pill */}
              <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Joint Group Operations</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Accredited
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Operative Assurance Strip */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-blue-950/40 border border-slate-700/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Synergy & Pilgrim Satisfaction Guarantee
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                Our alliance ensures guaranteed hotel allocations, synchronized flight ticketing, and on-ground Saudi supervision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
