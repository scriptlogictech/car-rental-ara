import React from 'react';
import { Phone, MessageSquare, ShieldCheck, MapPin, UserCheck, CalendarCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Service Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-slate-950 shadow-sm">
                <MapPin className="w-3.5 h-3.5" />
                Arrah, Bhojpur, Bihar
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/80 border border-blue-700/60 text-blue-200">
                <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                Chauffeur-Driven Only
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-700/60 text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Clean White Mahindra Scorpio
              </span>
            </div>

            {/* Main Descriptive H1 for SEO */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Reliable <span className="text-amber-400">Car Rental Service</span> in Arrah, Bhojpur, Bihar
            </h1>

            {/* Subheadline as requested */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Book Your <strong className="text-white font-semibold">Mahindra Scorpio</strong> for Local Travel, Outstation Trips and Family Journeys.
            </p>

            {/* Key feature highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Vehicle</p>
                <p className="text-sm font-semibold text-white">White Scorpio SUV</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Service</p>
                <p className="text-sm font-semibold text-white">Experienced Driver</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-xs">
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Coverage</p>
                <p className="text-sm font-semibold text-white">Arrah & All Bihar</p>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base transition-all duration-200 shadow-lg shadow-amber-500/25 hover:scale-102 active:scale-98"
              >
                <Phone className="w-5 h-5 fill-slate-950 animate-bounce" />
                <span>Call Now: 6204671213</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello S K Travels, I want to enquire about hiring the White Mahindra Scorpio in Arrah."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-700/25 hover:scale-102 active:scale-98"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp Booking</span>
              </a>

              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-semibold text-sm transition border border-white/15"
              >
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>Book Online</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Chauffeur Provided (With Driver Only)
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Clean & Well-Maintained Vehicle
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Transparent Direct Pricing
              </span>
            </div>

          </div>

          {/* Right Column: High Quality Vehicle Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/30 bg-slate-900/80 shadow-2xl backdrop-blur-md group">
                <img
                  src="/assets/aistudio/Decorated_White_SUV_in_Covered_Garage_68f9c8e8.png"
                  alt="White Mahindra Scorpio Car Rental in Arrah Bihar - S K Travels"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  width="720"
                  height="540"
                  loading="eager"
                />

                {/* Gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating Overlay Badge on Image */}
                <div className="absolute top-3 left-3 bg-blue-950/90 border border-blue-800 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Available for Booking</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 border border-slate-700/80 p-3 rounded-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                        Primary Fleet Vehicle
                      </p>
                      <h2 className="text-base font-extrabold text-white">
                        White Mahindra Scorpio SUV
                      </h2>
                      <p className="text-xs text-slate-300">
                        Chauffeur-Driven • Arrah, Ara & All Bihar
                      </p>
                    </div>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="p-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition font-bold"
                      aria-label="Direct call for booking"
                    >
                      <Phone className="w-4 h-4 fill-slate-950" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Decorative small card: Driver Provided */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 p-3 rounded-xl shadow-xl border border-slate-200 items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-950">Driver Included</p>
                  <p className="text-[11px] text-slate-600">Polite & experienced chauffeur</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
