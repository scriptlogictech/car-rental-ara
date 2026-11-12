import React from 'react';
import { Car, UserCheck, PhoneCall, Sparkles, Navigation, Map, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/websiteData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Car className="w-6 h-6 text-amber-500" key="car" />,
    <UserCheck className="w-6 h-6 text-amber-500" key="user" />,
    <PhoneCall className="w-6 h-6 text-amber-500" key="phone" />,
    <Sparkles className="w-6 h-6 text-amber-500" key="sparkles" />,
    <Navigation className="w-6 h-6 text-amber-500" key="nav" />,
    <Map className="w-6 h-6 text-amber-500" key="map" />
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 mb-3 border border-amber-500/30">
            <span>Customer First Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose S K Travels for Car Rental in Arrah?
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg">
            We focus on genuine reliability, vehicle cleanliness, and honest service for every passenger and family traveling in Ara and Bhojpur.
          </p>
        </div>

        {/* 6 Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-5 shadow-inner">
                {icons[index]}
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 flex items-center gap-2">
                <span>{item.title}</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified S K Travels Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="mt-12 text-center bg-slate-950/60 border border-slate-800 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            <strong className="text-amber-400">Authentic Service Guarantee:</strong> At S K Travels, we do not make exaggerated claims or fake promises. You get our actual White Mahindra Scorpio with our dedicated driver at transparent rates.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-slate-400">Direct booking assistance:</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="text-amber-400 hover:text-amber-300 font-bold text-sm underline decoration-amber-400/50"
            >
              Call 6204671213
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
