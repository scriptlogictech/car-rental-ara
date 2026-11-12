import React, { useEffect } from 'react';
import { X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageAlt: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageAlt
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/90 text-white">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">{imageTitle}</h3>
            <p className="text-xs text-amber-400">White Mahindra Scorpio • S K Travels Arrah</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-black/60">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {/* Bottom Actions */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <span>📍 Old Police Line, Arrah, Bhojpur, Bihar</span>
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 6204671213</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
