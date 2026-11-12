import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VehicleShowcase } from './components/VehicleShowcase';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PhotoGallery } from './components/PhotoGallery';
import { ServiceLocations } from './components/ServiceLocations';
import { BookingForm } from './components/BookingForm';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { LightboxModal } from './components/LightboxModal';
import { ZipDownloadModal } from './components/ZipDownloadModal';

export default function App() {
  // Lightbox modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
    alt: string;
  }>({
    isOpen: false,
    src: '',
    title: '',
    alt: ''
  });

  // ZIP download modal state
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);

  const handleOpenLightbox = (src: string, title: string, alt: string) => {
    setLightboxState({
      isOpen: true,
      src,
      title,
      alt
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar onOpenZipModal={() => setIsZipModalOpen(true)} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Section B: Hero Section */}
        <Hero />

        {/* Section C: About S K Travels */}
        <About />

        {/* Section D: Our Vehicle (Mahindra Scorpio) */}
        <VehicleShowcase onSelectPhoto={handleOpenLightbox} />

        {/* Section E: Our Services (8 SEO service cards) */}
        <Services />

        {/* Section F: Why Choose S K Travels */}
        <WhyChooseUs />

        {/* Section G: Photo Gallery with real vehicle pictures */}
        <PhotoGallery onOpenLightbox={handleOpenLightbox} />

        {/* Section H: Service Locations */}
        <ServiceLocations />

        {/* Section I: Customer Enquiry / Booking Form */}
        <BookingForm />

        {/* FAQ Section for Local SEO & Schema */}
        <FAQ />

        {/* Section J: Contact & Google Map */}
        <ContactSection />
      </main>

      {/* Section K: Footer */}
      <Footer onOpenZipModal={() => setIsZipModalOpen(true)} />

      {/* Mobile Sticky Conversion Floating Bar */}
      <FloatingMobileBar />

      {/* Lightbox Modal for Vehicle Photos */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxState.src}
        imageTitle={lightboxState.title}
        imageAlt={lightboxState.alt}
      />

      {/* Download Website ZIP Modal */}
      <ZipDownloadModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
      />
    </div>
  );
}
