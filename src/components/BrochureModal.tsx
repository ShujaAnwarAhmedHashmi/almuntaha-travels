import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  MessageCircle, 
  Sparkles, 
  Image as ImageIcon, 
  Loader2, 
  CheckCircle2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw 
} from 'lucide-react';
import html2canvas from 'html2canvas';
import { TravelPackage } from '../types';
import { generatePackageBrochureDataUrl, downloadPackageJPEG } from '../utils/jpegBrochureGenerator';
import { getHajjWhatsAppUrl, getUmrahWhatsAppUrl } from '../utils/helpers';
import { InternationalHajjFlyer } from './InternationalHajjFlyer';

interface BrochureModalProps {
  pkg: TravelPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  pkg,
  isOpen,
  onClose,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const isInternationalHajj = pkg?.id === 'intl-hajj-2027-economy-c';

  useEffect(() => {
    if (!isOpen || !pkg) {
      setImageUrl(null);
      setIsGenerating(true);
      setIsDownloaded(false);
      setZoomLevel(1);
      return;
    }

    let isMounted = true;
    setZoomLevel(1);
    setIsDownloaded(false);

    if (isInternationalHajj) {
      setIsGenerating(false);
      return;
    }

    if (pkg.flyerImage) {
      setImageUrl(pkg.flyerImage);
      setIsGenerating(false);
      return;
    }

    setIsGenerating(true);
    generatePackageBrochureDataUrl(pkg)
      .then((url) => {
        if (isMounted) {
          setImageUrl(url);
          setIsGenerating(false);
        }
      })
      .catch((err) => {
        console.error('Failed to generate image brochure:', err);
        if (isMounted) {
          setIsGenerating(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, pkg, isInternationalHajj]);

  if (!isOpen || !pkg) return null;

  const whatsAppUrl = pkg.type === 'hajj'
    ? getHajjWhatsAppUrl(pkg)
    : getUmrahWhatsAppUrl(pkg);

  const handleDownload = async () => {
    if (!pkg) return;

    if (isInternationalHajj) {
      const flyerElement = document.getElementById('international-hajj-flyer-render');
      if (flyerElement) {
        try {
          const canvas = await html2canvas(flyerElement, {
            scale: 2.5,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          });
          const link = document.createElement('a');
          link.download = `Al-Muntaha-Hajj-2027-Official-Flyer.jpg`;
          link.href = canvas.toDataURL('image/jpeg', 0.95);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setIsDownloaded(true);
          setTimeout(() => setIsDownloaded(false), 4000);
          return;
        } catch (err) {
          console.error('html2canvas export error:', err);
        }
      }
    }

    if (pkg.flyerImage) {
      try {
        const response = await fetch(pkg.flyerImage);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `Al-Muntaha-${pkg.name.replace(/[^a-zA-Z0-9]/g, '-')}-Official-Flyer.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 4000);
        return;
      } catch {
        await downloadPackageJPEG(pkg);
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 4000);
        return;
      }
    }

    await downloadPackageJPEG(pkg);
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 4000);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.25));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <div
      id="brochure-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 lg:p-6"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-700 overflow-hidden relative max-h-[96vh] flex flex-col text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 px-4 sm:px-6 py-3.5 border-b border-slate-700/80 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <ImageIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  Official Visual Flyer
                </span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-semibold border border-amber-400/30">
                  Full HD Quality
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold font-serif text-white truncate">
                {pkg.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Zoom Controls Bar */}
            <div className="flex items-center bg-slate-800/90 border border-slate-700 rounded-lg p-0.5 text-xs text-slate-300">
              <button
                onClick={handleZoomIn}
                title="Zoom In (+)"
                className="p-1.5 hover:text-white hover:bg-slate-700 rounded cursor-pointer transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                title="Zoom Out (-)"
                className="p-1.5 hover:text-white hover:bg-slate-700 rounded cursor-pointer transition-colors"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="px-2 py-1 hover:text-white hover:bg-slate-700 rounded text-[11px] font-mono cursor-pointer transition-colors"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
            </div>

            {/* Quick Download Header Button */}
            <button
              onClick={handleDownload}
              id="btn-header-download-jpeg"
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all inline-flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
            >
              {isDownloaded ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-950" />
                  <span className="hidden sm:inline">Download JPEG</span>
                  <span className="sm:hidden">Save</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Brochure"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: High Resolution Flyer Rendering */}
        <div className="p-3 sm:p-5 overflow-auto flex-1 flex flex-col items-center justify-start bg-slate-950/90 min-h-[420px] max-h-[75vh]">
          {isInternationalHajj ? (
            <div 
              className="w-full flex flex-col items-center select-none py-2 transition-transform duration-200 ease-out origin-top"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <InternationalHajjFlyer />
              <div className="mt-4 flex items-center gap-3 text-[11px] text-slate-400">
                <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                  ✨ Official Package Flyer • Al Muntaha Travels & Tours
                </span>
              </div>
            </div>
          ) : isGenerating ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3 text-slate-400">
              <Loader2 className="w-9 h-9 animate-spin text-amber-400" />
              <span className="text-xs sm:text-sm font-medium">Generating High-Resolution Package Flyer...</span>
            </div>
          ) : imageUrl ? (
            <div className="relative group max-w-full flex flex-col items-center select-none py-2">
              <div 
                className="overflow-auto rounded-xl max-w-full flex items-center justify-center cursor-zoom-in transition-transform duration-200 ease-out"
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'top center',
                }}
              >
                <img
                  src={imageUrl}
                  alt={`${pkg.name} Visual Brochure Flyer`}
                  referrerPolicy="no-referrer"
                  className="rounded-xl shadow-2xl border border-slate-700 max-h-[70vh] w-auto object-contain max-w-full hover:border-amber-400/50"
                />
              </div>
              <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400">
                <span className="bg-slate-800/80 px-2 py-1 rounded border border-slate-700 flex items-center gap-1">
                  🔍 Zoom: {Math.round(zoomLevel * 100)}%
                </span>
                <span className="hidden sm:inline text-amber-400/90 font-medium">
                  Official Al Muntaha Travels & Tours Package Flyer
                </span>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center text-slate-400 text-sm">
              Failed to load flyer image preview. Please click download below.
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-slate-800 shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-400 text-center sm:text-left flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Official flyer with verified room pricing, hotel distances & contact helpline.</span>
            </div>

            <div className="w-full sm:w-auto flex items-center gap-2.5">
              {/* Download JPEG Image Button */}
              <button
                onClick={handleDownload}
                id="btn-footer-download-jpeg"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20 min-h-[44px] cursor-pointer"
              >
                {isDownloaded ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-slate-950" />
                    <span>Saved to Device!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>Download Official Image (JPEG)</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Share Button */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20 shrink-0" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
