import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { contactData, pakistanHajjPackages, internationalHajjPackages, umrahPackagesList } from '../data/travelData';
import { formatPhoneForWhatsApp } from '../utils/helpers';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [packageType, setPackageType] = useState('Hajj 2027 - Pakistan Package');
  const [travelers, setTravelers] = useState('2 Persons');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formatPhoneForWhatsApp(contactData.whatsappNumber);
    const message = `*Website Inquiry - Al Muntaha Travels & Tours*
👤 *Name:* ${name || 'Prospective Pilgrim'}
📞 *Contact Phone:* ${phone || 'Not specified'}
📍 *City/Country:* ${city || 'Not specified'}
🕋 *Package of Interest:* ${packageType}
👥 *Number of Travelers:* ${travelers}
📝 *Special Notes/Queries:* ${notes || 'None'}

Assalamualaikum, please share availability, room configurations, and the step-by-step registration process.`;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full mb-2 inline-block">
            Direct pilgrim assistance
          </span>
          <h2
            id="contact-section-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-serif tracking-tight mb-2"
          >
            Start Your Journey With Us
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Have questions about our Hajj 2027 or Umrah packages? Contact Al Muntaha Travels today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary WhatsApp Card (Professional Polish deep blue style) */}
            <div className="p-6 rounded-2xl bg-blue-900 text-white shadow-md relative overflow-hidden border border-blue-950">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/10">
                    Fastest Response
                  </span>
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-1 text-white">
                  WhatsApp Direct Inquiry
                </h3>
                <p className="text-xs text-sky-100 mb-4">
                  Chat instantly with our dedicated Hajj & Umrah travel consultants.
                </p>
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${formatPhoneForWhatsApp(contactData.whatsappNumber)}?text=${encodeURIComponent('Assalamualaikum, I am contacting you from your website regarding Hajj 2027 / Umrah packages.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>WhatsApp 1: {contactData.whatsappDisplay}</span>
                  </a>
                  {contactData.whatsappNumber2 && (
                    <a
                      href={`https://wa.me/${formatPhoneForWhatsApp(contactData.whatsappNumber2)}?text=${encodeURIComponent('Assalamualaikum, I am contacting you from your website regarding Hajj 2027 / Umrah packages.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp 2: {contactData.whatsappDisplay2}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Direct Phone & Landline */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                  Phone Consultation
                </h4>
                <p className="text-xs text-slate-500 mb-1.5">
                  Call our Islamabad desk during business hours:
                </p>
                <a
                  href={`tel:${contactData.phoneNumber}`}
                  className="text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors"
                >
                  {contactData.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                  Official Email
                </h4>
                <p className="text-xs text-slate-500 mb-1.5">
                  Send your requirements or corporate group inquiries:
                </p>
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </div>
            </div>

            {/* Office Address */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-0.5">
                  Office Location
                </h4>
                <p className="text-xs font-semibold text-slate-800 mb-0.5">
                  {contactData.address}
                </p>
                <p className="text-xs text-slate-500">
                  {contactData.cityCountry}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill out this quick form and click to open an instantly formatted WhatsApp inquiry message with our reservations desk.
            </p>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Package of Interest
                  </label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800"
                  >
                    <optgroup label="Hajj 2027 Packages (PKR)">
                      {pakistanHajjPackages.map((p) => (
                        <option key={p.id} value={`Hajj 2027: ${p.name}`}>
                          {p.name} (PKR {p.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="International Hajj 2027 Packages (USD)">
                      {internationalHajjPackages.map((p) => (
                        <option key={p.id} value={`International Hajj: ${p.name}`}>
                          {p.name} (USD {p.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Umrah Packages">
                      {umrahPackagesList.map((p) => (
                        <option key={p.id} value={`Umrah: ${p.name}`}>
                          {p.name} ({p.currency} {p.price})
                        </option>
                      ))}
                      <option value="Custom Tailored Umrah Package">
                        Custom Tailored Umrah Package
                      </option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Departure City / Country
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Islamabad / London / Dubai"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Number of Travelers & Preferred Room
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white text-slate-800"
                >
                  <option value="1 Person (Single / Quad Sharing basis)">1 Person</option>
                  <option value="2 Persons (Double Room / Sharing)">2 Persons (Couple / Sharing)</option>
                  <option value="3 Persons (Triple Room)">3 Persons (Family)</option>
                  <option value="4 Persons (Quad Family Room)">4 Persons (Family)</option>
                  <option value="5+ Persons (Group / Multi-Room)">5+ Persons (Large Family / Group)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention any specific hotel preference, wheelchair requirement, or customized travel dates..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-white"
                />
              </div>

              <button
                type="submit"
                id="submit-inquiry-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 active:scale-[0.99] transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Submit & Inquire on WhatsApp</span>
              </button>

              {formSubmitted && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>WhatsApp opened! If it did not open automatically, please click the WhatsApp chat button above.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
