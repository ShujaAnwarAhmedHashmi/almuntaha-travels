import React from 'react';
import { journeySteps } from '../data/travelData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  return (
    <section id="process-section" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif mb-2">
            Simple 4-Step Booking Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            From your first inquiry to your holy destination, we make every step transparent and guided.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journeySteps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-blue-900 font-mono">
                    {step.number}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-900">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-blue-900 mb-1.5 font-serif">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < journeySteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400 bg-white rounded-full p-1 border border-slate-200 shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
