import React from 'react';
import { 
  Car, 
  Compass, 
  ShieldCheck, 
  HeartHandshake, 
  Plane, 
  Train, 
  Briefcase, 
  MapPin, 
  MessageSquare,
  ArrowRight,
  Phone
} from 'lucide-react';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/websiteData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  Train: <Train className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 mb-3 border border-blue-200">
            <span>Comprehensive Travel Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Our Car Rental & Taxi Services in Arrah
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            From city commutes in Ara to outstation tours across Bihar, our chauffeur-driven White Mahindra Scorpio is at your service with punctual pickup and clear communication.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, index) => {
            const prefilledText = `Hello S K Travels, I would like to enquire about ${service.title} in Arrah.`;
            const waUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(prefilledText)}`;

            return (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      {iconMap[service.iconName] || <Car className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-blue-950 mb-2 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short SEO Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 border-t border-slate-200 pt-3">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom WhatsApp Enquiry CTA */}
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white group-hover:bg-emerald-600 text-slate-800 group-hover:text-white text-xs font-bold transition border border-slate-300 group-hover:border-emerald-600 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white transition-colors" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Need a Custom Trip or Urgent Taxi in Arrah?
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Call us directly for instant availability of our chauffeur-driven White Mahindra Scorpio for your specific travel dates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition shadow-md"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call 6204671213</span>
            </a>

            <a
              href="#enquiry"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
            >
              <span>Submit Form</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
