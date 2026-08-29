import React, { useState } from 'react';
import { PackageCard } from './PackageCard';
import { umrahPackagesList } from '../data/travelData';
import { TravelPackage } from '../types';
import { Moon, MessageCircle, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/helpers';

interface UmrahSectionProps {
  onViewDetails: (pkg: TravelPackage) => void;
  onSharePackage: (pkg: TravelPackage) => void;
}

export const UmrahSection: React.FC<UmrahSectionProps> = ({
  onViewDetails,
  onSharePackage,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories available in umrahPackagesList
  const uniqueCategories = ['All', ...Array.from(new Set(umrahPackagesList.map((p) => p.category)))];

  const filteredPackages =
    selectedCategory === 'All'
      ? umrahPackagesList
      : umrahPackagesList.filter((pkg) => pkg.category === selectedCategory);

  return (
    <section id="umrah-section" className="py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Moon className="w-3.5 h-3.5 text-blue-900" />
              <span>Direct Flight Umrah Group</span>
            </div>

            <h2
              id="umrah-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif tracking-tight"
            >
              Umrah Packages
            </h2>

            <p className="text-slate-500 text-sm sm:text-base mt-1">
              Verified hotel vouchers, direct airline tickets, fast visa processing, and dedicated religious guidance
            </p>
          </div>

          {/* Categories Pill (if multiple categories exist) */}
          {uniqueCategories.length > 2 && (
            <div className="flex flex-wrap items-center gap-2">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All Packages' : cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Umrah Packages Layout */}
        {filteredPackages.length === 1 ? (
          <div className="max-w-xl mx-auto">
            <PackageCard
              pkg={filteredPackages[0]}
              onViewDetails={onViewDetails}
              onSharePackage={onSharePackage}
            />
          </div>
        ) : filteredPackages.length === 2 ? (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onViewDetails={onViewDetails}
                onSharePackage={onSharePackage}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onViewDetails={onViewDetails}
                onSharePackage={onSharePackage}
              />
            ))}
          </div>
        )}

        {/* More Packages Announcement Note */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-center max-w-2xl mx-auto text-xs sm:text-sm text-amber-900 flex items-center justify-center gap-2 shadow-2xs">
          <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>More Umrah departures & packages are being added soon In Sha Allah!</strong> For custom dates or private family groups, please reach out directly on WhatsApp.
          </span>
        </div>

        {/* Umrah Customization Banner */}
        <div className="mt-8 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 font-serif mb-1">
              Looking for Customized Umrah Dates or Private Family Group?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We arrange bespoke packages with specific 5-star hotels, luxury private transport (GMC/Sedan), and customized durations from any city.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl('Custom Umrah Plan Inquiry')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Request Custom Umrah Plan</span>
          </a>
        </div>
      </div>
    </section>
  );
};
