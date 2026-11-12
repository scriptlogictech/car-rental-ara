import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-3 border border-amber-300">
            <Phone className="w-3.5 h-3.5 text-amber-800" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Contact S K Travels in Arrah
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out directly for booking inquiries, rates, and travel scheduling. We are physically located in Old Police Line, Arrah, Bhojpur, Bihar.
          </p>
        </div>

        {/* Contact Cards & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Main Details Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-blue-950 border-b border-slate-200 pb-3">
                Business Details
              </h3>

              <div className="space-y-4">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-950 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Office Location</h4>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      S K Travels
                    </p>
                    <p className="text-sm text-slate-600 leading-snug">
                      Old Police Line, Arrah,<br />
                      District Bhojpur, Bihar – 802301, India
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-950 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-amber-800" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone (Click to Call)</h4>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-lg font-extrabold text-blue-950 hover:text-amber-600 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500">Direct booking & inquiries</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">WhatsApp</h4>
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                        "Hello S K Travels, I want to inquire about renting the White Mahindra Scorpio in Arrah."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors block mt-0.5"
                    >
                      +91 {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-500">Instant messaging & quote</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-950 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-purple-800" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Enquiry Hours</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      Open Daily for Advance & Urgent Bookings
                    </p>
                    <p className="text-xs text-slate-500">
                      Standard booking desk hours: 6:00 AM – 10:00 PM (24/7 on-trip support for active trips)
                    </p>
                  </div>
                </div>

              </div>

              {/* Fast Action CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-amber-400 font-bold text-sm transition shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call 6204671213</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed Placeholder & Travel Distances */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              
              {/* Map header info */}
              <div className="bg-blue-950 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm">Location: Old Police Line, Arrah, Bhojpur, Bihar</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Old+Police+Line,+Arrah,+Bhojpur,+Bihar+802301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-200 relative">
                <iframe
                  title="S K Travels Location - Old Police Line, Arrah, Bhojpur, Bihar"
                  src="https://maps.google.com/maps?q=Old%20Police%20Line%2C%20Arrah%2C%20Bhojpur%2C%20Bihar%20802301&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Map Footer Note */}
              <div className="p-4 bg-white text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-200">
                <span>📍 Pickup available at your doorstep anywhere in Ara town & railway station.</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="font-bold text-blue-950 hover:underline"
                >
                  Request Doorstep Pickup &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
