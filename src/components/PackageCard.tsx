import React from 'react';
import { 
  Building, 
  Clock, 
  Check, 
  MessageCircle, 
  Eye, 
  Share2, 
  MapPin, 
  Plane, 
  Bus, 
  Utensils, 
  FileCheck
} from 'lucide-react';
import { TravelPackage } from '../types';
import { getHajjWhatsAppUrl, getUmrahWhatsAppUrl } from '../utils/helpers';

interface PackageCardProps {
  pkg: TravelPackage;
  onViewDetails: (pkg: TravelPackage) => void;
  onSharePackage: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onViewDetails,
  onSharePackage,
}) => {
  const whatsAppUrl = pkg.type === 'hajj' 
    ? getHajjWhatsAppUrl(pkg) 
    : getUmrahWhatsAppUrl(pkg);

  const isFeatured = pkg.badge?.toLowerCase().includes('executive') || 
                     pkg.badge?.toLowerCase().includes('recommended') || 
                     pkg.badge?.toLowerCase().includes('popular') ||
                     pkg.name.toLowerCase().includes('executive');

  return (
    <div
      id={`package-card-${pkg.id}`}
      className={`bg-white rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-200 relative group ${
        isFeatured
          ? 'border-2 border-blue-900 shadow-xl'
          : 'border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
      }`}
    >
      {/* Floating Badge for Most Trusted / Featured */}
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm z-10 whitespace-nowrap">
          {pkg.badge || 'Most Trusted'}
        </div>
      )}

      {/* Card Header */}
      <div className={`p-5 border-b ${isFeatured ? 'border-blue-100 bg-blue-50/40' : 'border-slate-100'}`}>
        <div className="flex justify-between items-start gap-2">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
              {pkg.type === 'hajj' ? (pkg.currency === 'USD' ? 'International Region' : 'Pakistan Region') : `${pkg.category || 'Umrah'} Plan`}
            </span>
            <h3 className="font-bold text-blue-900 text-lg sm:text-xl font-serif">
              {pkg.name}
            </h3>
          </div>

          <div className="text-right shrink-0">
            <p className="text-[11px] text-slate-400 font-medium">
              {pkg.priceNote?.includes('Person') ? 'Per Pilgrim' : 'Starting From'}
            </p>
            <p className="text-xl sm:text-2xl font-black text-amber-600 leading-tight font-mono">
              {pkg.currency === 'USD' ? '$' : 'PKR '}
              {pkg.price}
            </p>
          </div>
        </div>
      </div>

      {/* Card Details & Specifications */}
      <div className="p-5 flex-1 space-y-4">
        {/* Key Features 2-Column Grid */}
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate">{pkg.duration} Duration</span>
          </div>

          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate">Flights: {pkg.flights.split('(')[0]}</span>
          </div>

          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate" title={pkg.makkahHotel.name}>
              Makkah: {pkg.makkahHotel.distance}
            </span>
          </div>

          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate" title={pkg.madinahHotel.name}>
              Madinah: {pkg.madinahHotel.distance}
            </span>
          </div>

          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate">{pkg.meals ? 'Full Board Meals' : 'Meals on Request'}</span>
          </div>

          <div className="flex items-center space-x-2 truncate">
            <span className="text-blue-900 font-bold shrink-0">•</span>
            <span className="truncate">Visa & Processing Incl.</span>
          </div>
        </div>

        {/* Accommodation Preview strip */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
          <div className="flex items-center justify-between text-slate-700">
            <span className="font-semibold text-slate-800 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-sky-700" />
              <span>{pkg.makkahHotel.name}</span>
            </span>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
              {pkg.makkahHotel.rating || 'Makkah'}
            </span>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <span className="font-semibold text-slate-800 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-700" />
              <span>{pkg.madinahHotel.name}</span>
            </span>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
              {pkg.madinahHotel.rating || 'Madinah'}
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className={`p-4 rounded-b-2xl border-t ${
        isFeatured 
          ? 'bg-blue-50/60 border-blue-100' 
          : 'bg-slate-50 border-slate-100'
      }`}>
        <div className="flex space-x-2.5">
          <button
            onClick={() => onViewDetails(pkg)}
            id={`btn-details-${pkg.id}`}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 ${
              isFeatured
                ? 'text-blue-900 bg-white border border-blue-200 hover:bg-blue-100/50'
                : 'text-slate-700 bg-white border border-slate-200 hover:bg-slate-100/70 shadow-2xs'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`btn-whatsapp-${pkg.id}`}
            className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-white transition-colors inline-flex items-center justify-center gap-1.5 ${
              isFeatured
                ? 'bg-blue-900 hover:bg-blue-800 shadow-sm'
                : 'bg-green-600 hover:bg-green-700 shadow-sm'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span>Inquire</span>
          </a>

          <button
            onClick={() => onSharePackage(pkg)}
            title="Share Package"
            aria-label="Share package details"
            className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-blue-900 hover:bg-slate-100/70 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
