import React from 'react';
import { MapPin, Navigation, Compass, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { SERVICE_LOCATIONS, BUSINESS_INFO } from '../data/websiteData';

export const ServiceLocations: React.FC = () => {
  return (
    <section id="locations" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-3 border border-amber-300">
            <Compass className="w-3.5 h-3.5 text-amber-800" />
            <span>Operational Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Service Areas in Bhojpur & Across Bihar
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Our operational hub is located at <strong className="text-slate-900">Old Police Line, Arrah</strong>. We proudly offer prompt chauffeur-driven doorstep pickup and travel across the following service areas.
          </p>
        </div>

        {/* Clear Disclosure Notice */}
        <div className="mb-10 bg-blue-50 border border-blue-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-slate-700 text-sm">
          <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-blue-950">
              Clear Service Area Transparency:
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              S K Travels is physically stationed at <strong className="text-slate-900">Old Police Line, Arrah, Bhojpur, Bihar (802301)</strong>. The destinations listed below represent our active travel routes, pickup zones, and outstation coverage areas. We do not claim individual branch offices in other towns.
            </p>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICE_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-900/30 rounded-2xl p-5 transition-all duration-200 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {loc.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {loc.distanceFromAra}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-blue-950 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>{loc.name}</span>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {loc.description}
                </p>

                <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-lg border border-slate-200/80 mb-2">
                  <span className="font-semibold text-slate-700 block mb-0.5">Common Journeys:</span>
                  <span>{loc.popularFor}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hello S K Travels, I need a car rental service between Arrah and ${loc.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs font-bold transition"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Book for {loc.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Local SEO Keywords Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white">
          <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3 text-center sm:text-left">
            Popular Local Travel Routes & Keywords
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Car Rental in Arrah",
              "Car Rental in Ara Bihar",
              "Scorpio Rental in Arrah",
              "Mahindra Scorpio on Rent in Ara",
              "Taxi Service in Arrah",
              "Car Hire in Bhojpur",
              "Outstation Taxi from Arrah",
              "SUV Rental in Ara",
              "Wedding Car Rental in Arrah",
              "Cab Service in Bhojpur Bihar",
              "Arrah to Patna Airport Taxi",
              "Ara to Buxar Scorpio Cab",
              "Koilwar Bridge Taxi Service",
              "Ara to Sasaram SUV Rental",
              "Bihiya Station Taxi"
            ].map((kw, i) => (
              <span
                key={i}
                className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 hover:text-white hover:border-slate-500 transition"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
