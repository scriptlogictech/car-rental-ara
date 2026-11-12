import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/websiteData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 mb-3 border border-blue-200">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Frequently Asked Questions – Car Rental in Arrah
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about booking our chauffeur-driven White Mahindra Scorpio in Arrah, Bhojpur, and across Bihar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-blue-950 hover:text-amber-600 transition-colors"
                >
                  <span className="flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-10 text-center text-sm text-slate-600 bg-white p-6 rounded-2xl border border-slate-200 max-w-xl mx-auto">
          <p className="font-semibold text-slate-900">Have another question not listed here?</p>
          <p className="text-xs text-slate-500 mt-1">
            Feel free to call our coordinator directly anytime for immediate assistance.
          </p>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-blue-950 text-amber-400 font-bold text-xs hover:bg-blue-900 transition"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call S K Travels: 6204671213</span>
          </a>
        </div>

      </div>
    </section>
  );
};
