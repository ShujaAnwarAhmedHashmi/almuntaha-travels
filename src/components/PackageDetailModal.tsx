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
  FileText,
  Download,
  Building2,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { TravelPackage } from '../types';
import { getHajjWhatsAppUrl, getUmrahWhatsAppUrl } from '../utils/helpers';
import { contactData } from '../data/travelData';
import { downloadPackagePDF } from '../utils/pdfGenerator';

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

  const isHajj = pkg.type === 'hajj';

  const handleDownloadPDF = () => {
    downloadPackagePDF(pkg);
  };

  return (
    <div
      id="package-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl rounded-t-3xl sm:rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] sm:max-h-[88vh] flex flex-col text-slate-800 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-5 sm:p-7 relative border-b-2 border-amber-400 shrink-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-95 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5 pr-10">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 fill-slate-950" />
              <span>{isHajj ? 'Hajj 2027 Season' : 'Umrah Special Departure'}</span>
            </span>
            {pkg.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-white/15 text-amber-200 border border-white/20">
                {pkg.badge}
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
              ● Verified Schedule
            </span>
          </div>

          {/* Package Title */}
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif tracking-tight pr-8 leading-snug text-white">
            {pkg.name}
          </h3>

          {/* Pricing & Duration Bar */}
          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-300 block font-mono">
                {pkg.priceNote?.includes('Tentative') ? 'Tentative Base Rate' : 'Total Package Rate'} ({pkg.currency})
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono tracking-tight">
                  {pkg.currency === 'USD' ? '$' : 'PKR '}
                  {pkg.price}
                </span>
                {pkg.currency === 'USD' && (
                  <span className="text-xs font-bold text-amber-200 font-mono">USD</span>
                )}
              </div>
              {pkg.priceNote && (
                <span className="text-[11px] text-sky-200 block mt-0.5 font-medium leading-tight">
                  {pkg.priceNote}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs backdrop-blur-xs">
                <span className="text-sky-200 block text-[9px] sm:text-[10px] uppercase font-mono">Duration</span>
                <span className="font-bold text-white flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300 shrink-0" />
                  {pkg.duration}
                </span>
              </div>

              {pkg.dates && (
                <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs backdrop-blur-xs">
                  <span className="text-sky-200 block text-[9px] sm:text-[10px] uppercase font-mono">Dates / Timeline</span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-300 shrink-0" />
                    {pkg.dates}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 lg:p-7 overflow-y-auto space-y-6 flex-1 bg-slate-50/40">
          
          {/* Quick PDF & Booking Announcement */}
          <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5 text-blue-950 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
              <span>
                Want an offline copy or to share with family? Download the verified brochure in PDF format.
              </span>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold inline-flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 shrink-0"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download PDF</span>
            </button>
          </div>

          {/* Hotels Breakdown */}
          <div>
            <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-600" />
              <span>Accommodation & Hotel Details</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Makkah Hotel Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wide bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    🕋 Makkah Mukarramah
                  </span>
                  {pkg.makkahHotel.rating && (
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {pkg.makkahHotel.rating}
                    </span>
                  )}
                </div>
                <h5 className="text-base font-bold text-slate-900 font-serif mt-2">
                  {pkg.makkahHotel.name}
                </h5>
                <p className="text-xs text-blue-900 font-bold flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                  <span>{pkg.makkahHotel.distance}</span>
                </p>
                {pkg.makkahHotel.details && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {pkg.makkahHotel.details}
                  </p>
                )}
              </div>

              {/* Madinah Hotel Card */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wide bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    🕌 Madinah Munawwarah
                  </span>
                  {pkg.madinahHotel.rating && (
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      {pkg.madinahHotel.rating}
                    </span>
                  )}
                </div>
                <h5 className="text-base font-bold text-slate-900 font-serif mt-2">
                  {pkg.madinahHotel.name}
                </h5>
                <p className="text-xs text-emerald-800 font-bold flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>{pkg.madinahHotel.distance}</span>
                </p>
                {pkg.madinahHotel.details && (
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {pkg.madinahHotel.details}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Room Sharing Pricing Options */}
          {pkg.sharingPrices && pkg.sharingPrices.length > 0 && (
            <div>
              <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-2.5">
                Per-Person Rates by Room Type
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                {pkg.sharingPrices.map((sp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <span className="text-xs font-bold text-slate-700 block">
                      {sp.sharingType} Room
                    </span>
                    <span className="text-sm font-black text-blue-950 font-mono mt-1 block">
                      {sp.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Logistics & Ground Services Strip */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
            <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-3">
              Included Logistics & Travel Facilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                <Plane className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Flights & Airlines:</strong>
                  <span className="text-slate-600">{pkg.flights}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                <Bus className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Ground Transport:</strong>
                  <span className="text-slate-600">{pkg.transport}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                <Utensils className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Meals & Catering:</strong>
                  <span className="text-slate-600">{pkg.meals || 'Wholesome meals as specified'}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50">
                <FileText className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Visa & Official Insurance:</strong>
                  <span className="text-slate-600">{pkg.visa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200/80">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Package Inclusions</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5 shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/50 p-4 rounded-xl border border-rose-200/80">
              <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600 stroke-[2.5]" />
                <span>Package Exclusions</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-0.5 shrink-0">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Itinerary Summary */}
          {pkg.itinerarySummary && pkg.itinerarySummary.length > 0 && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <h4 className="text-xs font-extrabold text-blue-950 uppercase tracking-wider mb-3">
                Journey Route & Program Timeline
              </h4>
              <div className="space-y-2.5 border-l-2 border-amber-400 pl-4 ml-1">
                {pkg.itinerarySummary.map((step, idx) => (
                  <div key={idx} className="text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-blue-950 mr-1.5">Phase {idx + 1}:</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Notes */}
          {pkg.importantNotes && pkg.importantNotes.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 shadow-2xs">
              <div className="flex items-center gap-1.5 font-bold mb-1.5 text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Important Information & Guidelines:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-900 pl-1">
                {pkg.importantNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer / Action Buttons */}
        <div className="p-3.5 sm:p-5 bg-white border-t border-slate-200 shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
            {/* Left action group: Share & PDF */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                onClick={handleDownloadPDF}
                id="btn-modal-pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer border border-slate-300/80 min-h-[44px]"
              >
                <Download className="w-4 h-4 text-blue-900 shrink-0" />
                <span>Save PDF</span>
              </button>

              <button
                onClick={() => onShare(pkg)}
                id="btn-modal-share"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer border border-slate-300/80 min-h-[44px]"
              >
                <Share2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span>Share</span>
              </button>
            </div>

            {/* Right action group: Call & WhatsApp */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              <a
                href={`tel:${contactData.phoneNumber}`}
                id="btn-modal-call"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 hover:bg-blue-200 active:scale-95 transition-all min-h-[44px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Desk</span>
              </a>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-modal-whatsapp"
                className="flex-2 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all shadow-md shadow-emerald-500/20 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
