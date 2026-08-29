import React from 'react';
import { 
  UserCheck, 
  Hotel, 
  Globe2, 
  Headphones, 
  CalendarCheck, 
  Award,
  Sparkles
} from 'lucide-react';
import { whyChooseList } from '../data/travelData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-900" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-blue-900" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-blue-900" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-blue-900" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-blue-900" />;
      case 'Award':
      default:
        return <Award className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section id="why-choose-section" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Excellence & Commitment</span>
          </div>

          <h2
            id="why-choose-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-2"
          >
            Why Choose Al Muntaha Travels?
          </h2>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We are dedicated to providing clear, honest, and comfortable travel arrangements so that you can concentrate wholly on your spiritual pilgrimage.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseList.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all duration-200 flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 shrink-0">
                {getIcon(item.iconName)}
              </div>

              <h3 className="text-base font-bold text-blue-900 mb-1.5 font-serif">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
