import React, { useState } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, AlertCircle, Calendar, MapPin, User, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: 'Old Police Line, Arrah',
    destination: '',
    travelDate: '',
    tripType: 'Outstation Trip (Across Bihar)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tripTypes = [
    'Local Ara / Arrah City Travel',
    'Outstation Trip (Across Bihar)',
    'Patna / Gaya Airport Transfer',
    'Ara Junction / Station Pickup & Drop',
    'Wedding / Family Function',
    'Full Day Business Rental',
    'One-Way Outstation Drop',
    'Round-Trip Journey'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Mobile number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Please provide your pickup location in Arrah';
    }

    if (!formData.destination.trim()) {
      newErrors.destination = 'Please provide destination / drop city';
    }

    if (!formData.travelDate) {
      newErrors.travelDate = 'Please select your travel date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format prefilled WhatsApp message
    const formattedMessage = 
`*NEW BOOKING ENQUIRY - S K TRAVELS ARRAH*
----------------------------------------
👤 *Customer Name:* ${formData.name.trim()}
📱 *Mobile Number:* ${formData.phone.trim()}
📍 *Pickup Location:* ${formData.pickupLocation.trim()}
🏁 *Destination:* ${formData.destination.trim()}
📅 *Travel Date:* ${formData.travelDate}
🚗 *Trip Type:* ${formData.tripType}
🚘 *Vehicle:* White Mahindra Scorpio (With Driver)
${formData.message.trim() ? `💬 *Notes:* ${formData.message.trim()}` : ''}
----------------------------------------
Please confirm vehicle availability and rental rates.`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;

    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 mb-3 shadow-xs">
            <span>Instant Booking Request</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book Your Mahindra Scorpio with Driver
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-300 text-base sm:text-lg">
            Fill out the form below to immediately send a formatted booking enquiry to our official WhatsApp number (<strong className="text-white">+91 6204671213</strong>). We respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Quick Contact & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-extrabold text-white">
                Prefer Direct Booking?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                You can call us directly or click to chat on WhatsApp without waiting. Our driver and coordinator will assist you with timing, route planning, and fair rates.
              </p>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base transition shadow-md"
                >
                  <Phone className="w-5 h-5 fill-slate-950" />
                  <span>Call Now: 6204671213</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello S K Travels, I want to check car rental availability in Arrah."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition shadow-md"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Box */}
              <div className="pt-4 border-t border-slate-700/80 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chauffeur included with every booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doorstep pickup anywhere in Arrah & Bhojpur</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hygienic, AC White Mahindra Scorpio</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct booking without intermediaries</span>
                </div>
              </div>

            </div>

            {/* Operating Address Card */}
            <div className="bg-blue-950/60 border border-blue-900 rounded-2xl p-5 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-white text-sm">S K Travels Office Base</p>
                <p className="text-slate-300 mt-0.5">
                  Old Police Line, Arrah, Bhojpur, Bihar - 802301
                </p>
                <p className="text-amber-400 mt-1 font-semibold">
                  Serving Arrah, Ara, Koilwar, Bihiya, Jagdishpur & All Bihar
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-100">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-blue-950">
                  Enquiry Sent to WhatsApp!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Your trip details were formatted and opened in WhatsApp for S K Travels (6204671213). If WhatsApp did not open automatically, please click below.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition"
                  >
                    Submit Another Enquiry
                  </button>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="px-5 py-2.5 rounded-lg bg-blue-950 text-amber-400 font-bold text-sm hover:bg-blue-900 transition flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 6204671213</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h3 className="text-xl font-extrabold text-blue-950">
                    Travel Details Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Generates a prefilled WhatsApp enquiry sent directly to 916204671213
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Satyam Kumar"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-400/50 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 6204671213"
                        maxLength={13}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-400/50 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Pickup Location in Arrah <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder="e.g. Old Police Line / Ara Station"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                          errors.pickupLocation ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-400/50 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.pickupLocation && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Destination City / Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Patna Airport / Buxar / Local Ara"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                          errors.destination ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-400/50 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.destination && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.destination}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date & Trip Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                          errors.travelDate ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-amber-400/50 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {errors.travelDate && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.travelDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Trip Type
                    </label>
                    <div className="relative">
                      <Car className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                      <select
                        value={formData.tripType}
                        onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500 bg-white"
                      >
                        {tripTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Special Requirements or Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Wedding flower decoration required, early morning 4 AM pickup, or multiple stopovers."
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-500"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base transition shadow-lg shadow-emerald-700/20 active:scale-98"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Send Enquiry via WhatsApp (+91 6204671213)</span>
                </button>

                <p className="text-center text-xs text-slate-500">
                  By clicking, this pre-formats your trip enquiry and opens WhatsApp directly with S K Travels.
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
