import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Check, 
  XCircle, 
  MessageCircle, 
  Phone, 
  Share2, 
  Calendar, 
  AlertCircle, 
  Bus, 
  Plane, 
  Utensils, 
  FileText 
} from 'lucide-react';
import { TravelPackage } from '../types';
import { getHajjWhatsAppUrl, getUmrahWhatsAppUrl } from '../utils/helpers';
import { contactData } from '../data/travelData';

interface PackageDetailModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
  onShare: (pkg: TravelPackage) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onShare,
}) => {
  if (!pkg) return null;

  const whatsAppUrl = pkg.type === 'hajj' 
    ? getHajjWhatsAppUrl(pkg) 
    : getUmrahWhatsAppUrl(pkg);

  return (
    <div
      id="package-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 lg:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-blue-900 text-white p-6 sm:p-7 relative border-b border-blue-950">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
              {pkg.type === 'hajj' ? 'Hajj 2027' : 'Umrah Package'}
            </span>
            {pkg.badge && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white/10 text-sky-100 border border-white/20">
                {pkg.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight pr-8">
            {pkg.name}
          </h3>

          <div className="mt-4 flex flex-wrap items-baseline gap-4 pt-3 border-t border-white/15">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-sky-200 block font-mono">
                Total Package Rate ({pkg.currency})
              </span>
              <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                {pkg.currency === 'USD' ? '$' : 'PKR '}
                {pkg.price}
              </span>
              {pkg.currency === 'USD' && (
                <span className="text-xs font-bold text-amber-300 ml-1 font-mono">USD</span>
              )}
              {pkg.priceNote && (
                <span className="text-xs text-sky-200 block mt-0.5">
                  {pkg.priceNote}
                </span>
              )}
            </div>

            <div className="sm:ml-auto flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs">
                <span className="text-sky-200 block text-[10px] uppercase font-mono">Duration</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300" />
                  {pkg.duration}
                </span>
              </div>

              {pkg.dates && (
                <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs">
                  <span className="text-sky-200 block text-[10px] uppercase font-mono">Schedule</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-300" />
                    {pkg.dates}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-7 max-h-[68vh] overflow-y-auto space-y-6">
          {/* Hotels Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
              Accommodation & Distances
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Makkah Hotel Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-blue-900 uppercase">
                    Makkah Mukarramah
                  </span>
                  {pkg.makkahHotel.rating && (
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {pkg.makkahHotel.rating}
                    </span>
                  )}
                </div>
                <h5 className="text-base font-bold text-slate-900 font-serif">
                  {pkg.makkahHotel.name}
                </h5>
                <p className="text-xs text-blue-900 font-semibold flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>{pkg.makkahHotel.distance}</span>
                </p>
                {pkg.makkahHotel.details && (
                  <p className="text-xs text-slate-600 mt-2">
                    {pkg.makkahHotel.details}
                  </p>
                )}
              </div>

              {/* Madinah Hotel Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-emerald-900 uppercase">
                    Madinah Munawwarah
                  </span>
                  {pkg.madinahHotel.rating && (
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {pkg.madinahHotel.rating}
                    </span>
                  )}
                </div>
                <h5 className="text-base font-bold text-slate-900 font-serif">
                  {pkg.madinahHotel.name}
                </h5>
                <p className="text-xs text-emerald-800 font-semibold flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>{pkg.madinahHotel.distance}</span>
                </p>
                {pkg.madinahHotel.details && (
                  <p className="text-xs text-slate-600 mt-2">
                    {pkg.madinahHotel.details}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Room Sharing Pricing Options */}
          {pkg.sharingPrices && pkg.sharingPrices.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2.5">
                Room Sharing Configurations & Rates
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                {pkg.sharingPrices.map((sp) => (
                  <div key={sp.sharingType} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-700 block">
                      {sp.sharingType} Room
                    </span>
                    <span className="text-sm font-extrabold text-blue-900 font-mono mt-0.5 block">
                      {sp.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logistics Quick Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-start gap-2">
              <Bus className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Transport:</strong>
                <span className="text-slate-600">{pkg.transport}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Plane className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Flight / Airline:</strong>
                <span className="text-slate-600">{pkg.flights}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Utensils className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Meals / Catering:</strong>
                <span className="text-slate-600">{pkg.meals}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Visa & Processing:</strong>
                <span className="text-slate-600">{pkg.visa}</span>
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Package Inclusions</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Package Exclusions</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-0.5">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Itinerary Summary */}
          {pkg.itinerarySummary && pkg.itinerarySummary.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3">
                Journey Outline
              </h4>
              <div className="space-y-2 border-l-2 border-blue-900 pl-4">
                {pkg.itinerarySummary.map((step, idx) => (
                  <div key={idx} className="text-xs sm:text-sm text-slate-700">
                    <span className="font-semibold text-blue-900 mr-1">Phase {idx + 1}:</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Notes */}
          {pkg.importantNotes && pkg.importantNotes.length > 0 && (
            <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Important Information & Guidelines:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-900 pl-1">
                {pkg.importantNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onShare(pkg)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer uppercase tracking-wider"
          >
            <Share2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Share Package</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <a
              href={`tel:${contactData.phoneNumber}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
