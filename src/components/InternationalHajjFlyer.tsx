import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Plane, 
  Bus, 
  Utensils, 
  ShieldCheck, 
  Check, 
  X as CloseIcon, 
  Globe, 
  Info,
  Calendar,
  Clock,
  Building,
  Users,
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface InternationalHajjFlyerProps {
  onDownload?: () => void;
}

export const InternationalHajjFlyer: React.FC<InternationalHajjFlyerProps> = () => {
  return (
    <div 
      id="international-hajj-flyer-render"
      className="w-full max-w-[840px] mx-auto bg-gradient-to-b from-sky-100 via-white to-sky-50 text-slate-900 border-[6px] border-blue-900 rounded-3xl shadow-2xl overflow-hidden font-sans select-text relative"
      style={{
        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(245, 158, 11, 0.5)'
      }}
    >
      {/* 1. TOP HEADER SECTION */}
      <div className="relative bg-gradient-to-b from-sky-400 via-sky-200 to-sky-50 pt-3 px-4 sm:px-6 pb-4 border-b-2 border-amber-400/80">
        
        {/* Top Navbar Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Logo & Agency Name */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-900 border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-md">
              <span className="font-serif font-black text-lg">🕋</span>
            </div>
            <div>
              <h1 className="text-xs sm:text-sm font-black font-serif text-blue-950 uppercase tracking-wider leading-none">
                AL MUNTAHA
              </h1>
              <p className="text-[9px] sm:text-[10px] font-bold text-blue-800 tracking-widest uppercase">
                TRAVELS AND TOURS
              </p>
            </div>
          </div>

          {/* Bismillah Calligraphy */}
          <div className="text-center">
            <span className="text-sm sm:text-xl font-bold font-serif text-blue-950 tracking-wider">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>

          {/* Website Pill */}
          <div className="bg-blue-900 text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-sm border border-blue-800">
            <Globe className="w-3 h-3 text-amber-400" />
            <span>www.almuntahatravels.com</span>
          </div>
        </div>

        {/* Big Hajj 2027 Title */}
        <div className="text-center my-2 sm:my-3">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-blue-950 drop-shadow-sm tracking-tight">
            Hajj 2027
          </h2>
          
          {/* Tentative Package Ribbon */}
          <div className="inline-flex items-center justify-center gap-2 mt-1.5 px-4 sm:px-6 py-1.5 rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white border-2 border-amber-400 shadow-md">
            <span className="text-amber-400 text-xs sm:text-sm">✦</span>
            <span className="text-xs sm:text-base font-extrabold uppercase tracking-wide text-amber-300">
              Tentative Package (Economy - Maktab C)
            </span>
            <span className="text-amber-400 text-xs sm:text-sm">✦</span>
          </div>
        </div>
      </div>

      {/* 2. THREE KEY METRIC CARDS */}
      <div className="p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 bg-white">
        {/* Metric 1: Rate */}
        <div className="rounded-2xl border-2 border-blue-900 bg-gradient-to-b from-sky-50 to-white p-3 text-center shadow-xs flex flex-col justify-center items-center">
          <div className="flex items-center gap-1.5 text-blue-900 font-extrabold text-[11px] uppercase tracking-wider">
            <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold">$</span>
            <span>TENTATIVE BASE RATE (USD)</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-950 font-mono mt-1">
            $5,700 <span className="text-xs font-sans font-bold text-blue-800">USD</span>
          </div>
          <div className="text-[10px] text-slate-600 font-semibold mt-0.5">
            Tentative Rate (Without Ticket)
          </div>
          <div className="text-[9px] text-blue-900 font-bold">
            Sharing Basis (Ladies & Gents Separate Room)
          </div>
        </div>

        {/* Metric 2: Duration */}
        <div className="rounded-2xl border-2 border-blue-900 bg-gradient-to-b from-sky-50 to-white p-3 text-center shadow-xs flex flex-col justify-center items-center">
          <div className="flex items-center gap-1.5 text-blue-900 font-extrabold text-[11px] uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-blue-900" />
            <span>DURATION</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-950 font-sans mt-1">
            15 to 20 Days
          </div>
          <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
            (Flexible)
          </div>
        </div>

        {/* Metric 3: Dates */}
        <div className="rounded-2xl border-2 border-blue-900 bg-gradient-to-b from-sky-50 to-white p-3 text-center shadow-xs flex flex-col justify-center items-center">
          <div className="flex items-center gap-1.5 text-blue-900 font-extrabold text-[11px] uppercase tracking-wider">
            <Clock className="w-4 h-4 text-blue-900" />
            <span>DATES / TIMELINE</span>
          </div>
          <div className="text-lg sm:text-xl font-black text-blue-950 font-serif mt-1">
            Dhul Hijjah 1448 AH
          </div>
          <div className="text-[11px] text-slate-600 font-semibold mt-0.5">
            (Hajj 2027 Season)
          </div>
        </div>
      </div>

      {/* 3. ACCOMMODATION & HOTEL DETAILS */}
      <div className="px-3 sm:px-5 py-2 bg-white">
        <div className="text-center relative mb-3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-blue-300"></div>
          </div>
          <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider border border-amber-400">
            <span className="text-amber-400">❖</span>
            <span>Accommodation & Hotel Details</span>
            <span className="text-amber-400">❖</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Makkah Accommodation */}
          <div className="border-2 border-blue-900 rounded-2xl p-3 bg-sky-50/70 flex items-start gap-3 shadow-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-blue-900 text-amber-300 flex flex-col items-center justify-center shrink-0 border border-amber-400 text-center p-1">
              <Building className="w-6 h-6 mb-1 text-amber-400" />
              <span className="text-[8px] font-black uppercase tracking-tight text-white leading-none">MAKKAH</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-black tracking-wider text-blue-900">
                  MAKKAH MUKARRAMAH
                </span>
                <span className="text-[9px] bg-blue-900/10 text-blue-900 font-bold px-1.5 py-0.5 rounded">
                  Comfortable Stay
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-blue-950 font-serif leading-snug mt-0.5">
                Aziziyah Accommodation (Makkah)
              </h4>
              <p className="text-[11px] font-bold text-amber-800 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-red-600 shrink-0" />
                <span>Near Qubri Khalid (Aziziyah, Makkah)</span>
              </p>
              <p className="text-[10px] text-slate-600 leading-snug mt-1">
                Comfortable and convenient accommodation near Qubri Khalid in Aziziyah, Makkah. Ladies and gents separate rooms on sharing basis.
              </p>
            </div>
          </div>

          {/* Madinah Accommodation */}
          <div className="border-2 border-blue-900 rounded-2xl p-3 bg-sky-50/70 flex items-start gap-3 shadow-xs">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-emerald-900 text-emerald-300 flex flex-col items-center justify-center shrink-0 border border-emerald-400 text-center p-1">
              <span className="text-2xl mb-0.5">🕌</span>
              <span className="text-[8px] font-black uppercase tracking-tight text-white leading-none">MADINAH</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-900">
                  MADINAH MUNAWWARAH
                </span>
                <span className="text-[9px] bg-emerald-900/10 text-emerald-900 font-bold px-1.5 py-0.5 rounded">
                  Central Markazia
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-blue-950 font-serif leading-snug mt-0.5">
                Madinah Markazia Hotel
              </h4>
              <p className="text-[11px] font-bold text-emerald-800 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>200 - 250 Meters Markazia</span>
              </p>
              <p className="text-[10px] text-slate-600 leading-snug mt-1">
                Prime hotel accommodation in central Markazia, strictly 200–250 meters walking distance from the Prophet's Mosque (Masjid an-Nabawi).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PER-PERSON RATES BY ROOM TYPE */}
      <div className="px-3 sm:px-5 py-2 bg-white">
        <div className="text-center relative mb-3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-blue-300"></div>
          </div>
          <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider border border-amber-400">
            <span className="text-amber-400">❖</span>
            <span>Per-Person Rates by Room Type</span>
            <span className="text-amber-400">❖</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Quad Room */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-900 to-blue-950 text-white p-2.5 sm:p-3 text-center border-2 border-amber-400 shadow-md">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>QUAD ROOM</span>
            </div>
            <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono mt-1">
              $5,700 <span className="text-[10px] font-sans font-bold text-white">USD</span>
            </div>
            <div className="text-[10px] text-blue-200 font-semibold mt-0.5">
              (Sharing Basis)
            </div>
          </div>

          {/* Triple Room */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-900 to-blue-950 text-white p-2.5 sm:p-3 text-center border-2 border-amber-400 shadow-md">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>TRIPLE ROOM</span>
            </div>
            <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono mt-1">
              $6,350 <span className="text-[10px] font-sans font-bold text-white">USD</span>
            </div>
            <div className="text-[10px] text-blue-200 font-semibold mt-0.5">
              (Triple Bed / Person)
            </div>
          </div>

          {/* Double Room */}
          <div className="rounded-2xl bg-gradient-to-b from-blue-900 to-blue-950 text-white p-2.5 sm:p-3 text-center border-2 border-amber-400 shadow-md">
            <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>DOUBLE ROOM</span>
            </div>
            <div className="text-lg sm:text-2xl font-black text-amber-300 font-mono mt-1">
              $6,700 <span className="text-[10px] font-sans font-bold text-white">USD</span>
            </div>
            <div className="text-[10px] text-blue-200 font-semibold mt-0.5">
              (Double Bed / Person)
            </div>
          </div>
        </div>
      </div>

      {/* 5. INCLUDED LOGISTICS & TRAVEL FACILITIES */}
      <div className="px-3 sm:px-5 py-2 bg-white">
        <div className="text-center relative mb-3">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-blue-300"></div>
          </div>
          <div className="relative inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-950 text-white text-xs sm:text-sm font-black uppercase tracking-wider border border-amber-400">
            <span className="text-amber-400">❖</span>
            <span>Included Logistics & Travel Facilities</span>
            <span className="text-amber-400">❖</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
          {/* Facility 1 */}
          <div className="border border-blue-200 rounded-xl p-2.5 bg-sky-50/50 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-1.5 shadow-xs">
              <Plane className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase text-blue-950 tracking-tight">FLIGHTS & AIRLINES:</span>
            <p className="text-[9px] text-slate-600 leading-tight mt-1">
              Ticket is NOT Included (International flight booking assistance available on request).
            </p>
          </div>

          {/* Facility 2 */}
          <div className="border border-blue-200 rounded-xl p-2.5 bg-sky-50/50 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-1.5 shadow-xs">
              <Bus className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase text-blue-950 tracking-tight">GROUND TRANSPORT:</span>
            <p className="text-[9px] text-slate-600 leading-tight mt-1">
              Air-conditioned bus transportation for all ground travel, Ziyarat, and holy sites movement.
            </p>
          </div>

          {/* Facility 3 */}
          <div className="border border-blue-200 rounded-xl p-2.5 bg-sky-50/50 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-1.5 shadow-xs">
              <Utensils className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase text-blue-950 tracking-tight">MEALS & CATERING:</span>
            <p className="text-[9px] text-slate-600 leading-tight mt-1">
              Daily meals included throughout the stay and Hajj days.
            </p>
          </div>

          {/* Facility 4 */}
          <div className="border border-blue-200 rounded-xl p-2.5 bg-sky-50/50 flex flex-col items-center text-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-amber-400 flex items-center justify-center mb-1.5 shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase text-blue-950 tracking-tight">VISA & INSURANCE:</span>
            <p className="text-[9px] text-slate-600 leading-tight mt-1">
              Complete Hajj Visa processing and mandatory health & travel insurance included.
            </p>
          </div>
        </div>
      </div>

      {/* 6. THREE-COLUMN BREAKDOWN: INCLUSIONS, EXCLUSIONS & TIMELINE */}
      <div className="p-3 sm:p-5 bg-white grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Inclusions Column */}
        <div className="border-2 border-blue-900 rounded-2xl overflow-hidden shadow-xs flex flex-col">
          <div className="bg-blue-900 text-white text-center py-2 px-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">
              PACKAGE INCLUSIONS
            </h4>
          </div>
          <div className="p-3 space-y-1.5 bg-sky-50/40 text-[10px] text-slate-700 flex-1">
            {[
              'Hajj Visa Processing',
              'Hajj Insurance',
              'Guided Ziyarat in Makkah & Madinah',
              'Daily Wholesome Meals',
              'Transport by AC Bus',
              'All Services by Experienced Team',
              'Qurbani (Included in Package)',
              'Aziziyah Accommodation (Near Qubri Khalid)',
              'Madinah Accommodation (200-250 Meters Markazia)',
              'Maktab C Tent Services in Mina & Arafat'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 leading-snug">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions Column */}
        <div className="border-2 border-blue-900 rounded-2xl overflow-hidden shadow-xs flex flex-col">
          <div className="bg-blue-900 text-white text-center py-2 px-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-300">
              PACKAGE EXCLUSIONS
            </h4>
          </div>
          <div className="p-3 space-y-2 bg-sky-50/40 text-[10px] text-slate-700 flex-1">
            {[
              'Airline Return Ticket (Ticket is NOT Included)',
              'Abraj Al Bait (Clock Tower) upgrade (Available at extra rate)',
              'Personal laundry & individual incidental expenses'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 leading-snug">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                  <CloseIcon className="w-2.5 h-2.5" />
                </span>
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Timeline Column */}
        <div className="border-2 border-blue-900 rounded-2xl overflow-hidden shadow-xs flex flex-col">
          <div className="bg-blue-900 text-white text-center py-2 px-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">
              JOURNEY ROUTE & TIMELINE
            </h4>
          </div>
          <div className="p-2.5 space-y-1.5 bg-sky-50/40 text-[10px] text-slate-700 flex-1">
            {[
              { phase: 'Phase 1', text: 'Arrival in Saudi Arabia (Flight tickets arranged separately)' },
              { phase: 'Phase 2', text: 'Stay in Madinah Munawwarah: 200–250 Meters from Masjid an-Nabawi with guided Ziyarat' },
              { phase: 'Phase 3', text: 'Stay in Aziziyah (Makkah): Near Qubri Khalid with separate rooms for ladies & gents' },
              { phase: 'Phase 4', text: 'Optional Abraj Al Bait Clock Tower (Mövenpick / Pullman ZamZam) stay for 1-4 ZilHajj (3 Nights)' },
              { phase: 'Phase 5', text: 'Hajj Days (8th to 12th ZilHajj): Maktab C services in Mina, Arafat & Muzdalifah with AC bus transit & Qurbani' },
              { phase: 'Phase 6', text: 'Completion of Tawaf az-Ziyarah, farewell rites and departure back home' },
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-1.5 leading-tight">
                <span className="w-4 h-4 rounded-full bg-blue-950 text-amber-400 flex items-center justify-center text-[9px] font-black shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <span className="font-black text-blue-900 mr-1">{p.phase}:</span>
                  <span className="text-slate-800 font-medium">{p.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. IMPORTANT INFORMATION & GUIDELINES */}
      <div className="px-3 sm:px-5 pb-3 bg-white">
        <div className="border-2 border-blue-900 rounded-2xl p-3 bg-sky-50/80 shadow-xs">
          <div className="flex items-center gap-2 text-blue-950 font-black text-xs uppercase tracking-wider mb-2">
            <Info className="w-4 h-4 text-blue-900 shrink-0" />
            <span>IMPORTANT INFORMATION & GUIDELINES:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[10px] text-slate-700">
            <div className="flex items-start gap-1.5">
              <span className="text-emerald-700 font-bold">✔</span>
              <span><strong>Tentative Rate:</strong> 5,700 USD (Without Ticket). Package is subject to change.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Duration Options:</strong> 15 to 20 Days (Flexible Duration).</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Sharing Basis:</strong> Separate rooms for Ladies & Gents.</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Double Bed (Aziziyah & Madinah):</strong> $6,700 USD (Per Person).</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Triple Bed (Aziziyah & Madinah):</strong> $6,350 USD (Per Person).</span>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="text-amber-800 font-bold">★</span>
              <span><strong>Abraj Al Bait (Clock Towers - Mövenpick / Pullman ZamZam):</strong> 1-4 ZilHajj (3 Nights): Double Bed ($900 USD Extra), Triple Bed ($750 USD Extra).</span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-blue-200 flex items-center justify-between gap-2">
            <span className="text-[11px] font-black text-blue-950 flex items-center gap-1">
              📢 Limited Seats Left — Reserve your slot early with Al Muntaha Travels and Tours.
            </span>
          </div>
        </div>
      </div>

      {/* 8. GOLD BRAND TRUST BAR */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-blue-950 py-2 px-4 text-center font-serif font-black text-xs sm:text-sm tracking-widest uppercase border-y border-amber-600 flex items-center justify-center gap-2 shadow-inner">
        <span>🕌</span>
        <span>Your Trusted Partner for Hajj & Umrah</span>
        <span>🕋</span>
      </div>

      {/* 9. FOOTER CONTACT BAR */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* WhatsApp */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <span className="font-bold text-sm">💬</span>
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 uppercase font-bold">WhatsApp</span>
              <strong className="text-white text-xs sm:text-sm font-mono">+92 333 2082702</strong>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 uppercase font-bold">Direct Phone Helpline</span>
              <strong className="text-white text-xs sm:text-sm font-mono">+92 333 2082702 / +92 313 2710182</strong>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[9px] text-slate-400 uppercase font-bold">Official Email</span>
              <span className="text-white text-[11px] sm:text-xs font-medium">almuntahatravelsandtours@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
