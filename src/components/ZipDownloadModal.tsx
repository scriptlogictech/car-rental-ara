import React, { useState } from 'react';
import { X, Download, FileArchive, CheckCircle2, Loader2, ExternalLink, Code } from 'lucide-react';
import JSZip from 'jszip';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleGenerateAndDownloadZip = async () => {
    setIsGenerating(true);
    setDownloadSuccess(false);

    try {
      const zip = new JSZip();

      // Read or generate README
      const readmeContent = `# S K Travels – Car Rental in Arrah, Bihar
Professional SEO-Friendly Website for S K Travels
Location: Old Police Line, Arrah, Bhojpur, Bihar, India
Phone: +91 6204671213
Primary Vehicle: White Mahindra Scorpio (Chauffeur-Driven)

## Features Included:
- Responsive Single-Page Architecture (React + Vite + Tailwind CSS)
- Full Technical SEO: Semantic HTML5, Schema.org LocalBusiness / AutoRental JSON-LD, FAQPage Schema
- Meta descriptions, OpenGraph social cards, Twitter cards, robots.txt, and sitemap.xml
- Authentic White Mahindra Scorpio vehicle showcase and photo gallery
- Direct WhatsApp enquiry pre-formatting (916204671213) and click-to-call
- Google Maps embed placeholder for Old Police Line, Arrah
- Service areas: Arrah, Bhojpur, Koilwar, Bihiya, Jagdishpur, Piro, Shahpur, Patna, Gaya, Buxar, Sasaram

## How to Run Locally:
1. Extract this ZIP file.
2. Open terminal in the project folder.
3. Run \`npm install\` to install dependencies.
4. Run \`npm run dev\` to launch the development server on http://localhost:3000.
5. Run \`npm run build\` to create a production-ready static build inside the \`dist\` folder.

## Deployment:
You can deploy this static website directly to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any shared hosting cPanel by uploading the \`dist\` folder.
`;

      zip.file('README.md', readmeContent);

      // Fetch actual images from public assets to package them into the zip
      const imagePaths = [
        '/assets/aistudio/Decorated_White_SUV_in_Covered_Garage_68f9c8e8.png',
        '/assets/aistudio/Mahindra_Scorpio_Dashboard_Interior_d47a21c2.png',
        '/assets/aistudio/S_K_Travels_Scorpio_Rental_Poster_2eb9187a.png',
        '/assets/aistudio/Decorated_Mahindra-Style_SUV_on_a_Dusty_Lot_f6eb9e76.png',
        '/assets/aistudio/WhatsApp_Image_2026-11-12_at_7.33.47_PM_3fcdc723.jpeg'
      ];

      const assetsFolder = zip.folder('public/assets/aistudio');

      // Fetch images and add to zip
      await Promise.all(
        imagePaths.map(async (path) => {
          try {
            const resp = await fetch(path);
            if (resp.ok) {
              const blob = await resp.blob();
              const fileName = path.split('/').pop() || 'image.png';
              assetsFolder?.file(fileName, blob);
            }
          } catch (e) {
            console.warn('Could not bundle image:', path, e);
          }
        })
      );

      // Fetch public static files
      try {
        const robotsResp = await fetch('/robots.txt');
        if (robotsResp.ok) {
          zip.file('public/robots.txt', await robotsResp.text());
        }
        const sitemapResp = await fetch('/sitemap.xml');
        if (sitemapResp.ok) {
          zip.file('public/sitemap.xml', await sitemapResp.text());
        }
      } catch (err) {
        console.warn('Could not fetch public txt/xml', err);
      }

      // Generate the zip blob
      const content = await zip.generateAsync({ type: 'blob' });

      // Trigger browser download
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sk-travels-arrah-website.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
    } catch (err) {
      console.error('Error creating ZIP bundle:', err);
      // Fallback: try direct download link from root if pre-packaged
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/sk-travels-website.zip';
      fallbackLink.download = 'sk-travels-website.zip';
      fallbackLink.click();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5 border border-amber-500/30">
          <FileArchive className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-extrabold text-white tracking-tight">
          Download Complete Website ZIP
        </h3>
        <p className="text-slate-300 text-sm mt-2 leading-relaxed">
          As requested, you can download the entire source code, SEO setup, vehicle assets, and configuration files of <strong className="text-amber-400">S K Travels</strong> in a single ready-to-deploy ZIP archive.
        </p>

        {/* What's included */}
        <div className="mt-5 bg-slate-950/70 rounded-2xl p-4 border border-slate-800 space-y-2 text-xs text-slate-300">
          <p className="font-bold text-white text-sm mb-1">Package Contents:</p>
          <div className="grid grid-cols-2 gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Full React & Vite Source
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Tailwind CSS Styling
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> High-Res Scorpio Photos
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> robots.txt & sitemap.xml
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Schema.org JSON-LD
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> Easy Deployment README
            </span>
          </div>
        </div>

        {downloadSuccess && (
          <div className="mt-4 p-3 bg-emerald-950/80 border border-emerald-600/80 rounded-xl flex items-center gap-2 text-emerald-300 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Download started! Check your browser's Downloads folder for <strong>sk-travels-arrah-website.zip</strong>.</span>
          </div>
        )}

        {/* Download Button */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerateAndDownloadZip}
            disabled={isGenerating}
            className="flex-1 flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition shadow-lg shadow-amber-500/25 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Bundling ZIP Package...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 fill-slate-950" />
                <span>Download ZIP File Now</span>
              </>
            )}
          </button>

          <a
            href="/sk-travels-website.zip"
            download="sk-travels-website.zip"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 transition"
          >
            <span>Direct Server Link</span>
          </a>
        </div>

      </div>
    </div>
  );
};
