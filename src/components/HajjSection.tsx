import React from 'react';
import { PackageCard } from './PackageCard';
import { pakistanHajjPackages, internationalHajjPackages } from '../data/travelData';
import { TravelPackage } from '../types';
import { CheckCircle2, Sparkles } from 'lucide-react';

interface HajjSectionProps {
  selectedCategory: 'pakistan' | 'international';
  onCategoryChange: (category: 'pakistan' | 'international') => void;
  onViewDetails: (pkg: TravelPackage) => void;
  onSharePackage: (pkg: TravelPackage) => void;
}

export const HajjSection: React.FC<HajjSectionProps> = ({
  selectedCategory,
  onCategoryChange,
  onViewDetails,
  onSharePackage,
}) => {
  const currentPackages =
    selectedCategory === 'pakistan'
      ? pakistanHajjPackages
      : internationalHajjPackages;

  return (
    <section id="hajj-section" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Polish Section Header & Segmented Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Hajj 1448 AH • Registrations Open</span>
            </div>
            <h2
              id="hajj-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif tracking-tight"
            >
              Hajj 2027 Packages
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Select your origin region to view available itineraries and rates
            </p>
          </div>

          {/* Segmented Origin Switcher (Professional Polish aesthetic) */}
          <div className="flex bg-white p-1 rounded-xl shadow-inner border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => onCategoryChange('pakistan')}
              id="tab-pakistan-packages"
              className={`px-5 sm:px-6 py-2 rounded-lg text-sm font-bold transition-all duration-150 cursor-pointer ${
                selectedCategory === 'pakistan'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              Pakistan (PKR)
            </button>
            <button
              onClick={() => onCategoryChange('international')}
              id="tab-international-packages"
              className={`px-5 sm:px-6 py-2 rounded-lg text-sm font-bold transition-all duration-150 cursor-pointer ${
                selectedCategory === 'international'
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'text-slate-500 hover:text-blue-900 hover:bg-slate-50'
              }`}
            >
              International (USD)
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewDetails={onViewDetails}
              onSharePackage={onSharePackage}
            />
          ))}
        </div>

        {/* Note Below Packages */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 shadow-2xs">
          <p className="flex items-center justify-center gap-2 font-medium text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
            <span>Need customized room sharing or a specific departure airline?</span>
          </p>
          <p className="mt-0.5 text-slate-500 text-xs">
            Contact our Hajj desk directly via WhatsApp for individual quotes and family room allocations.
          </p>
        </div>
      </div>
    </section>
  );
};
