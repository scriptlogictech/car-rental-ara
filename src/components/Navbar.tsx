import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Car, Download, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenZipModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenZipModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Vehicle', href: '#vehicle' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'Enquiry', href: '#enquiry' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Old Police Line, Arrah, Bhojpur, Bihar
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline text-slate-300">
              Chauffeur-Driven White Mahindra Scorpio Rental
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="hover:text-amber-400 font-semibold transition-colors flex items-center gap-1 text-white"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenZipModal}
              className="text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded transition flex items-center gap-1 shadow-sm"
              title="Download website package as ZIP file"
            >
              <Download className="w-3 h-3" />
              <span>Get ZIP File</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-md border-b border-slate-200 py-2.5'
            : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-950 flex items-center gap-1.5">
                <span>S K TRAVELS</span>
                <span className="text-xs uppercase bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded border border-amber-300">
                  ARRAH
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Car Rental & Taxi Service • Bhojpur, Bihar
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-900 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-amber-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick CTA Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs sm:text-sm font-bold transition shadow-md border border-blue-900"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Call: 6204671213</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold"
              aria-label="Call S K Travels"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-950 text-amber-400 font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call 6204671213</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="flex flex-col space-y-1 divide-y divide-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-2 text-slate-800 font-medium hover:text-blue-950 hover:bg-slate-50 rounded text-sm transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenZipModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Website ZIP File</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
