import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { contactData } from '../data/travelData';
import { getGeneralWhatsAppUrl } from '../utils/helpers';

interface NavbarProps {
  onSelectCategory?: (category: 'pakistan' | 'international') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, category?: 'pakistan' | 'international') => {
    setMobileMenuOpen(false);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-slate-200 py-3'
          : 'bg-white border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo with Professional Polish geometric emblem */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            id="brand-logo-link"
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center shadow-xs">
              <div className="w-3.5 h-3.5 border-2 border-amber-400 rotate-45 transform transition-transform group-hover:rotate-90 duration-300"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-blue-900">
              Al Muntaha <span className="font-light text-slate-500">Travels</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('home')}
              id="nav-home"
              className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-0.5 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('hajj-section')}
              id="nav-hajj"
              className="hover:text-blue-900 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Hajj 2027</span>
              <span className="inline-block px-1.5 py-0.5 text-[10px] font-bold text-blue-900 bg-blue-50 border border-blue-100 rounded-full">
                Open
              </span>
            </button>
            <button
              onClick={() => handleNavClick('hajj-section', 'pakistan')}
              id="nav-pakistan-packages"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Pakistan Packages
            </button>
            <button
              onClick={() => handleNavClick('hajj-section', 'international')}
              id="nav-intl-packages"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              International
            </button>
            <button
              onClick={() => handleNavClick('umrah-section')}
              id="nav-umrah"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Umrah
            </button>
            <button
              onClick={() => handleNavClick('why-choose-section')}
              id="nav-why-choose"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('partners-section')}
              id="nav-partners"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Partners
            </button>
            <button
              onClick={() => handleNavClick('contact-section')}
              id="nav-contact"
              className="hover:text-blue-900 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Header Action CTAs with Professional Polish Rounded-Full button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-900/10 inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => handleNavClick('contact-section')}
              id="header-contact-btn"
              className="bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-900 hover:bg-slate-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-4 space-y-2 animate-fadeIn">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('hajj-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 flex items-center justify-between"
            >
              <span>Hajj 2027</span>
              <span className="px-2 py-0.5 text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-100 rounded-full">
                Registrations Open
              </span>
            </button>
            <button
              onClick={() => handleNavClick('hajj-section', 'pakistan')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Pakistan Packages (PKR)
            </button>
            <button
              onClick={() => handleNavClick('hajj-section', 'international')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              International Packages (USD)
            </button>
            <button
              onClick={() => handleNavClick('umrah-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Umrah Packages
            </button>
            <button
              onClick={() => handleNavClick('why-choose-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('partners-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Official Partners
            </button>
            <button
              onClick={() => handleNavClick('contact-section')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
            >
              Contact
            </button>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us ({contactData.whatsappDisplay})</span>
              </a>
              <button
                onClick={() => handleNavClick('contact-section')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Contact Office</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
