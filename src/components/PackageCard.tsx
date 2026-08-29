import React from 'react';
import { 
  Clock, 
  Check, 
  MessageCircle, 
  Eye, 
  Share2, 
  MapPin, 
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { TravelPackage } from '../types';
import { getHajjWhatsAppUrl, getUmrahWhatsAppUrl } from '../utils/helpers';

interface PackageCardProps {
  pkg: TravelPackage;
  onViewDetails: (pkg: TravelPackage) => void;
  onSharePackage: (pkg: TravelPackage) => void;
  onViewBrochure?: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onViewDetails,
  onSharePackage,
  onViewBrochure,
}) => {
  const whatsAppUrl = pkg.type === 'hajj' 
    ? getHajjWhatsAppUrl(pkg) 
    : getUmrahWhatsAppUrl(pkg);

  const isHajj = pkg.type === 'hajj';

  return (
    <div
      id={`package-card-${pkg.id}`}
      className="bg-white rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 relative group border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 hover:-translate-y-1"
    >
      {/* Top Banner with Rich Contrast Header */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-5 sm:p-6 relative overflow-hidden border-b-2 border-amber-400">
        {/* Subtle decorative background glow */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-500/10 rounded-full blur-lg pointer-events-none" />

        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              <span>{isHajj ? 'Hajj 2027' : 'Umrah Special'}</span>
            </span>
            {pkg.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/15 text-amber-200 border border-white/20 backdrop-blur-xs">
                {pkg.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{pkg.status || 'Available'}</span>
          </div>
        </div>

        {/* Package Title */}
        <h3 
          onClick={() => onViewDetails(pkg)}
          className="font-bold text-white text-lg sm:text-xl font-serif leading-snug cursor-pointer group-hover:text-amber-300 transition-colors relative z-10"
        >
          {pkg.name}
        </h3>

        {/* Pricing Block with High Visual Contrast */}
        <div className="mt-4 pt-3 border-t border-white/15 flex items-baseline justify-between gap-2 relative z-10">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 block font-medium">
              {pkg.priceNote?.includes('Tentative') ? 'Tentative Base Price' : 'Starting From'}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight drop-shadow-xs">
                {pkg.currency === 'USD' ? '$' : 'PKR '}
                {pkg.price}
              </span>
              {pkg.currency === 'USD' && (
                <span className="text-xs font-bold text-amber-200 font-mono">USD</span>
              )}
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
              <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span>{pkg.duration}</span>
            </span>
          </div>
        </div>

        {pkg.priceNote && (
          <p className="text-[11px] text-slate-300 mt-1.5 font-medium relative z-10 leading-tight">
            {pkg.priceNote}
          </p>
        )}
      </div>

      {/* Card Body & Specifications */}
      <div className="p-4 sm:p-5 flex-1 space-y-4 bg-slate-50/50">
        {/* Hotel & Location Badges */}
        <div className="space-y-2">
          {/* Makkah Hotel Banner */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-start gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider leading-none mb-0.5">
                  Makkah Stay
                </span>
                <p className="text-xs font-bold text-slate-900 truncate font-serif" title={pkg.makkahHotel.name}>
                  {pkg.makkahHotel.name}
                </p>
                <p className="text-[11px] text-blue-900 font-semibold truncate">
                  {pkg.makkahHotel.distance}
                </p>
              </div>
            </div>
          </div>

          {/* Madinah Hotel Banner */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-start gap-2 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider leading-none mb-0.5">
                  Madinah Stay
                </span>
                <p className="text-xs font-bold text-slate-900 truncate font-serif" title={pkg.madinahHotel.name}>
                  {pkg.madinahHotel.name}
                </p>
                <p className="text-[11px] text-emerald-800 font-semibold truncate">
                  {pkg.madinahHotel.distance}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Room Types & Pricing Badges Strip */}
        {pkg.sharingPrices && pkg.sharingPrices.length > 0 && (
          <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
            <span className="text-[10px] uppercase font-bold text-blue-900 block tracking-wider mb-1.5">
              Available Room Configurations:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {pkg.sharingPrices.map((sp, idx) => (
                <div key={idx} className="bg-white px-2 py-1 rounded-md border border-blue-200/60 text-center shadow-2xs">
                  <span className="text-[10px] font-semibold text-slate-600 block leading-tight">
                    {sp.sharingType}
                  </span>
                  <span className="text-[11px] font-bold text-blue-950 font-mono leading-tight">
                    {sp.price.split('(')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Inclusions Highlights */}
        <div className="space-y-1.5 text-xs text-slate-700">
          <div className="grid grid-cols-2 gap-2 text-[11px] font-medium">
            <div className="flex items-center gap-1.5 truncate">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span className="truncate">{pkg.flights.includes('NOT') ? 'Airfare Separate' : 'Ticket Included'}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span className="truncate">Visa & Insurance</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span className="truncate">Guided Ziyarat</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
              <span className="truncate">{isHajj ? 'Qurbani Included' : 'AC Bus Transport'}</span>
            </div>
          </div>
        </div>

        {/* Visual Flyer Preview & Lightbox Trigger */}
        {pkg.flyerImage && (
          <div 
            onClick={() => onViewBrochure && onViewBrochure(pkg)}
            className="p-2.5 rounded-xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 border border-amber-400/60 shadow-sm cursor-pointer group/flyer relative overflow-hidden transition-all hover:border-amber-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden border border-amber-400/80 shrink-0 shadow-md bg-slate-950">
                <img 
                  src={pkg.flyerImage} 
                  alt={`${pkg.name} Official Flyer`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/flyer:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover/flyer:bg-transparent transition-colors flex items-center justify-center">
                  <span className="w-6 h-6 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center font-bold shadow-xs">
                    <ImageIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-black tracking-wider text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                    Official Flyer
                  </span>
                  <span className="text-[10px] text-slate-300">
                    HD View & Save
                  </span>
                </div>
                <p className="text-xs font-bold text-white mt-1 group-hover/flyer:text-amber-300 transition-colors">
                  Click to View & Enlarge Flyer
                </p>
                <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                  Full rates, Makkah/Madinah hotels, timeline & 1-click JPEG download.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View Brochure Visual Flyer Link (for packages without inline thumbnail or additional quick button) */}
        {onViewBrochure && !pkg.flyerImage && (
          <button
            onClick={() => onViewBrochure(pkg)}
            className="w-full py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer group/brochure"
          >
            <span className="flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span>View Brochure Flyer (JPEG)</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-black group-hover/brochure:scale-105 transition-transform">
              View & Save
            </span>
          </button>
        )}
      </div>

      {/* Card Action Footer with High-Conversion Touch Buttons */}
      <div className="p-3.5 sm:p-4 bg-white border-t border-slate-200">
        <div className="flex items-center gap-2">
          {/* View Details Button */}
          <button
            onClick={() => onViewDetails(pkg)}
            id={`btn-details-${pkg.id}`}
            aria-label={`View details for ${pkg.name}`}
            className="flex-1 py-3 px-3 rounded-xl text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100/80 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 border border-blue-200/80 shadow-2xs min-h-[44px]"
          >
            <Eye className="w-4 h-4 text-blue-900" />
            <span>Details</span>
          </button>

          {/* Direct WhatsApp Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-whatsapp-${pkg.id}`}
            aria-label={`Inquire about ${pkg.name} on WhatsApp`}
            className="flex-1 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
            <span>Inquire</span>
          </a>

          {/* Quick Share Button */}
          <button
            onClick={() => onSharePackage(pkg)}
            title="Share with Family"
            aria-label="Share package details"
            className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-blue-900 rounded-xl transition-colors cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center active:scale-[0.95]"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};


