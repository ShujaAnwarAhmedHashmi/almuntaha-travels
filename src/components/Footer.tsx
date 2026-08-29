import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { contactData } from '../data/travelData';
import { getGeneralWhatsAppUrl } from '../utils/helpers';

interface FooterProps {
  onSelectCategory?: (category: 'pakistan' | 'international') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string, category?: 'pakistan' | 'international') => {
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center border border-blue-700 shadow-xs">
                <div className="w-3.5 h-3.5 border-2 border-amber-400 rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-serif">
                Al Muntaha <span className="font-light text-slate-400">Travels</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your Journey to the Holy Lands, Planned with Care. Dedicated Hajj 2027 and year-round Umrah services for pilgrims from Pakistan and overseas.
            </p>

            <div className="pt-1 flex items-center space-x-2.5">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${contactData.phoneNumber}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 transition-colors"
                aria-label="Phone Contact"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactData.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('hajj-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Hajj 2027 Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('hajj-section', 'pakistan')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Pakistan Packages (PKR)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('hajj-section', 'international')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  International Packages (USD)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('umrah-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Umrah Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact-section')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">
              Office & Support
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{contactData.address}, {contactData.cityCountry}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: {contactData.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${contactData.phoneNumber}`}
                  className="hover:text-white"
                >
                  Phone: {contactData.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="hover:text-white break-all"
                >
                  {contactData.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Al Muntaha Travels and Tours. All Rights Reserved.</p>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold">
              Hajj • Umrah • Comfort • Guidance
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer inline-flex items-center space-x-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
