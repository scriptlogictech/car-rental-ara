import React, { useState } from 'react';
import { Car, Phone, MessageSquare, MapPin, Download, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST } from '../data/websiteData';

interface FooterProps {
  onOpenZipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & About (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">S K TRAVELS</span>
                <p className="text-xs text-amber-400 font-semibold">Arrah, Bhojpur, Bihar</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your dependable partner for chauffeur-driven White Mahindra Scorpio car rentals in Arrah (Ara) and Bhojpur district. Providing punctual travel, local city rides, outstation trips, airport transfers, and wedding cars across Bihar.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Old Police Line, Arrah, Bhojpur, Bihar - 802301</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={BUSINESS_INFO.phoneTel} className="text-white hover:text-amber-400 font-bold">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </p>
            </div>

            {/* Download website ZIP button */}
            <div className="pt-3">
              <button
                onClick={onOpenZipModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Complete Website ZIP</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition">About S K Travels</a>
              </li>
              <li>
                <a href="#vehicle" className="hover:text-amber-400 transition">Our Vehicle (Scorpio)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Rental Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition">Vehicle Gallery</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-amber-400 transition">Service Locations</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-amber-400 transition">Booking Enquiry</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-amber-400 transition">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Contacts (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Coverage Areas
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Arrah, Ara, Bhojpur, Koilwar, Bihiya, Jagdishpur, Piro, Shahpur, Patna, Gaya, Buxar, Sasaram and all Bihar destinations.
            </p>

            <div className="pt-3 space-y-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-amber-300 font-bold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call: 6204671213</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 6204671213</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">S K Travels</strong> – Car Rental in Arrah, Bhojpur, Bihar. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 underline"
            >
              Privacy Policy & Terms
            </button>
            <span>•</span>
            <button
              onClick={onOpenZipModal}
              className="text-amber-400 hover:underline font-semibold"
            >
              Download Website ZIP
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
          <div className="bg-slate-900 text-slate-200 rounded-2xl max-w-lg w-full p-6 border border-slate-700 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="text-lg font-bold text-white">Privacy Policy & Service Terms</h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2"
              >
                &times;
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <p>
                <strong>Information Handling:</strong> S K Travels respects your privacy. Any personal information (name, phone number, travel dates, locations) provided through our enquiry form or telephone calls is used solely to coordinate your car rental journey.
              </p>
              <p>
                <strong>No Sharing:</strong> We do not sell, rent, or distribute your phone number or contact details to third parties or marketing lists.
              </p>
              <p>
                <strong>Chauffeur Service:</strong> All car rental services are chauffeur-driven with an assigned professional driver. Vehicles are inspected for safety and cleanliness prior to departure.
              </p>
              <p>
                <strong>Direct Bookings:</strong> Bookings are handled directly through S K Travels, Old Police Line, Arrah, Bhojpur, Bihar. Contact: 6204671213.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-800 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
