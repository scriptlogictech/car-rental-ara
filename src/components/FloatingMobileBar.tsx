import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 lg:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-md"
        >
          <Phone className="w-4 h-4 fill-slate-950 animate-bounce" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
            "Hello S K Travels, I want to book the Mahindra Scorpio in Arrah."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-md"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Book Trip Form link */}
        <a
          href="#enquiry"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs transition border border-blue-700/60"
        >
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>Enquiry</span>
        </a>
      </div>
    </div>
  );
};
