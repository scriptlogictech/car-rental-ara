import React, { useState } from 'react';
import { ShieldCheck, Wind, UserCheck, MessageSquare, Phone, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_IMAGES } from '../data/websiteData';

interface VehicleShowcaseProps {
  onSelectPhoto: (src: string, title: string, alt: string) => void;
}

export const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({ onSelectPhoto }) => {
  // Let user switch among the actual uploaded vehicle images
  const vehiclePhotos = [
    {
      id: 'garage',
      label: 'Front View',
      src: '/assets/aistudio/Decorated_White_SUV_in_Covered_Garage_68f9c8e8.png',
      alt: 'White Mahindra Scorpio Car Rental in Arrah front angle view',
      desc: 'Immaculate exterior finish with iconic Mahindra grille and high stance.'
    },
    {
      id: 'side',
      label: 'Side Profile',
      src: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_7.33.47_PM_3fcdc723.jpeg',
      alt: 'Side profile of White Mahindra Scorpio ready for outstation trip in Ara Bihar',
      desc: 'High road clearance and solid build for comfortable travel across Bihar roads.'
    },
    {
      id: 'interior',
      label: 'Dashboard & Interior',
      src: '/assets/aistudio/Mahindra_Scorpio_Dashboard_Interior_d47a21c2.png',
      alt: 'Dashboard and clean interior seats of Mahindra Scorpio car rental in Arrah',
      desc: 'Clean, well-maintained cabin with modern touchscreen, cooling AC, and comfortable seating.'
    },
    {
      id: 'wedding',
      label: 'Event Decoration',
      src: '/assets/aistudio/Decorated_Mahindra-Style_SUV_on_a_Dusty_Lot_f6eb9e76.png',
      alt: 'Decorated White Mahindra Scorpio for wedding car rental in Arrah Bhojpur',
      desc: 'Decorated setup ready for weddings, tilak, and family function celebrations in Bhojpur.'
    }
  ];

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const currentPhoto = vehiclePhotos[activePhotoIndex];

  return (
    <section id="vehicle" className="py-16 sm:py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 mb-3 border border-amber-300">
            <span>Our Primary Fleet Vehicle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            White Mahindra Scorpio – Premium SUV on Rent
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience the commanding comfort and safety of our chauffeur-driven White Mahindra Scorpio for all your local and outstation travel needs in Arrah and Bhojpur.
          </p>
        </div>

        {/* Premium Vehicle Showcase Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left 7 Cols: Image & Thumbnail Switcher */}
            <div className="lg:col-span-7 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between">
              
              {/* Main Active Image Display */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-slate-900 group">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* View Larger Fullscreen Button */}
                <button
                  onClick={() => onSelectPhoto(currentPhoto.src, currentPhoto.label, currentPhoto.alt)}
                  className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-lg backdrop-blur-xs text-xs font-medium flex items-center gap-1 transition"
                  title="View full resolution"
                >
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Inspect Photo</span>
                </button>

                {/* Photo Badge overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-slate-900/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-amber-400">{currentPhoto.label}</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">{currentPhoto.desc}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {activePhotoIndex + 1} / {vehiclePhotos.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Bar */}
              <div className="grid grid-cols-4 gap-2 pt-3">
                {vehiclePhotos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 aspect-video transition-all ${
                      activePhotoIndex === idx
                        ? 'border-amber-400 ring-2 ring-amber-400/30 scale-102'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <span className="absolute bottom-1 left-1 text-[9px] font-bold text-white bg-black/60 px-1 rounded truncate max-w-[90%]">
                      {photo.label}
                    </span>
                  </button>
                ))}
              </div>

            </div>

            {/* Right 5 Cols: Verified Vehicle Specifications & Booking */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md">
                    SUV Category
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5" /> Chauffeur-Driven
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                  Mahindra Scorpio
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Primary vehicle of S K Travels, Old Police Line, Arrah, Bihar
                </p>

                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  The White Mahindra Scorpio is recognized for rugged performance and superior cabin comfort on highway journeys as well as interior Bihar roads. Kept clean and driven exclusively by an experienced chauffeur.
                </p>

                {/* Verified Vehicle Attributes */}
                <div className="mt-5 space-y-3 border-t border-b border-slate-200 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Chauffeur-Driven Service</h4>
                      <p className="text-xs text-slate-600">Comes with a courteous, polite driver who handles all driving and parking responsibilities.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Spacious Seating</h4>
                      <p className="text-xs text-slate-600">Generous legroom, comfortable passenger seats, and ample luggage space for families and groups.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Comfortable Travel & Air Conditioning</h4>
                      <p className="text-xs text-slate-600">Powerful AC, smooth suspension over speed breakers and uneven road patches.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Clean & Well-Maintained</h4>
                      <p className="text-xs text-slate-600">Regularly washed, sanitized, and inspected before long and short journeys.</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello S K Travels, I want to book your White Mahindra Scorpio for a trip from Arrah."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire Scorpio on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-amber-400 font-bold text-sm transition"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call: 6204671213</span>
                  </a>

                  <a
                    href="#enquiry"
                    className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition border border-slate-300"
                  >
                    <span>Book Trip</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
