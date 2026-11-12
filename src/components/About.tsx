import React from 'react';
import { UserCheck, MapPin, Compass, Shield, Clock, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 mb-3 border border-blue-200">
            <MapPin className="w-3.5 h-3.5 text-blue-800" />
            <span>Old Police Line, Arrah • Bhojpur, Bihar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            About S K Travels – Your Trusted Car Rental in Arrah
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Providing reliable, chauffeur-driven <strong className="text-slate-900">Mahindra Scorpio car rental</strong> services across Arrah (Ara), Bhojpur district, and cities throughout Bihar.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Brand Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-base">
            <div className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="font-semibold text-blue-950 text-lg">
                Chauffeur-Driven Mahindra Scorpio for Comfortable Journeys
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Based in Old Police Line, Arrah, S K Travels is dedicated to delivering safe, punctual, and dependable vehicle hire with an experienced driver.
              </p>
            </div>

            <p>
              If you are searching for a dependable <strong className="text-blue-950 font-semibold">car rental in Arrah, Bihar</strong> or need a spacious SUV on hire, S K Travels offers a hassle-free solution. We provide a well-kept <strong className="text-blue-950 font-semibold">White Mahindra Scorpio</strong> operated exclusively with a driver. This ensures you never have to worry about congested town traffic, parking hassles, or highway fatigue.
            </p>

            <p>
              Whether you require local transportation within <strong className="text-slate-900">Ara city</strong>, a scheduled airport transfer to Patna, or a long-distance family tour across Bihar, our vehicle is maintained to high standards of hygiene and mechanical readiness.
            </p>

            <p>
              With extensive knowledge of local routes in Arrah and roads connecting Bhojpur to other districts, our chauffeur-driven service provides seamless pickups and punctual arrivals for weddings, family ceremonies, official duty, or outstation visits.
            </p>

            {/* Core highlight badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/70 border border-blue-100">
                <UserCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-blue-950">Driver-Provided Service</h3>
                  <p className="text-xs text-slate-600">Courteous, verified chauffeur included with every rental.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50/70 border border-amber-100">
                <Compass className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-amber-950">Local & Outstation Trips</h3>
                  <p className="text-xs text-slate-600">Travel anywhere within Arrah, Bhojpur, and across Bihar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-emerald-50/70 border border-emerald-100">
                <Shield className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-emerald-950">Comfortable Journeys</h3>
                  <p className="text-xs text-slate-600">Smooth suspension, cooling AC, and clean upholstery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200">
                <Clock className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-sm text-slate-950">Convenient Booking</h3>
                  <p className="text-xs text-slate-600">Direct phone call or WhatsApp without prepayment traps.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-950 hover:bg-blue-900 text-amber-400 font-bold text-sm transition shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call to Enquire: 6204671213</span>
              </a>
              <span className="text-xs text-slate-500">
                Operating base: Old Police Line, Arrah, Bhojpur
              </span>
            </div>

          </div>

          {/* Right Column: Branded Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-blue-900">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold text-white mb-2">
                Business Information
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Official details for S K Travels car rental service
              </p>

              <dl className="space-y-4 text-sm divide-y divide-white/10">
                <div className="pt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Business Name</dt>
                  <dd className="font-bold text-white mt-0.5 sm:mt-0">S K Travels</dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Primary Vehicle</dt>
                  <dd className="font-bold text-amber-400 mt-0.5 sm:mt-0">White Mahindra Scorpio</dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Rental Type</dt>
                  <dd className="font-semibold text-white mt-0.5 sm:mt-0">Chauffeur-Driven (With Driver)</dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Base Location</dt>
                  <dd className="font-medium text-slate-200 text-right mt-0.5 sm:mt-0">
                    Old Police Line, Arrah,<br />Bhojpur, Bihar - 802301
                  </dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Direct Contact</dt>
                  <dd className="font-bold text-amber-400 mt-0.5 sm:mt-0">6204671213</dd>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <dt className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Service Coverage</dt>
                  <dd className="font-medium text-slate-300 text-right mt-0.5 sm:mt-0">
                    Arrah, Ara, Bhojpur, Patna,<br />Buxar, Sasaram & across Bihar
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-300">Fast Booking via WhatsApp:</span>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello S K Travels, I want to book the Mahindra Scorpio in Arrah."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition"
                >
                  Message Us
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
