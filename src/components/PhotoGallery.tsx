import React, { useState } from 'react';
import { Maximize2, Tag, Check, Camera } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/websiteData';

interface PhotoGalleryProps {
  onOpenLightbox: (src: string, title: string, alt: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Exterior', 'Interior', 'Weddings & Events', 'Branding'];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 mb-3 border border-blue-200">
            <Camera className="w-3.5 h-3.5 text-blue-800" />
            <span>Actual Vehicle Photographs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            S K Travels Photo Gallery
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            View real photographs of our White Mahindra Scorpio including front exterior, side profile, dashboard, and clean interior cabin.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-blue-950 text-amber-400 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => onOpenLightbox(image.src, image.title, image.alt)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="450"
                />
                
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 bg-white/90 text-blue-950 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5 text-blue-950" />
                  </span>
                </div>

                <div className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-xs text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                  {image.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-blue-950 text-base group-hover:text-amber-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    {image.caption}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <Check className="w-3.5 h-3.5" />
                    Verified Photo
                  </span>
                  <span className="text-blue-900 font-bold group-hover:underline">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Photography */}
        <p className="text-center text-xs text-slate-500 mt-8">
          All images display the authentic vehicle and official materials of S K Travels, Old Police Line, Arrah, Bihar.
        </p>

      </div>
    </section>
  );
};
