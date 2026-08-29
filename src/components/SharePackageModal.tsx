import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  MessageCircle, 
  Share2, 
  Link 
} from 'lucide-react';
import { TravelPackage } from '../types';
import { formatPackageShareText, copyToClipboard } from '../utils/helpers';

interface SharePackageModalProps {
  pkg: TravelPackage | null;
  onClose: () => void;
}

export const SharePackageModal: React.FC<SharePackageModalProps> = ({
  pkg,
  onClose,
}) => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!pkg) return null;

  const shareText = formatPackageShareText(pkg);
  const currentUrl = window.location.href.split('#')[0] + `#package-card-${pkg.id}`;

  const handleCopyText = async () => {
    const success = await copyToClipboard(shareText);
    if (success) {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(currentUrl);
    if (success) {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDirectWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + '\n\n🔗 View Online: ' + currentUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="share-package-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative my-6 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-serif leading-tight">
                Share Package
              </h3>
              <p className="text-xs text-slate-500">
                Send package summary to WhatsApp or family
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          {/* Quick Action Share Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleDirectWhatsAppShare}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Share WhatsApp</span>
            </button>

            <button
              onClick={handleCopyText}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 hover:bg-blue-200 transition-all cursor-pointer"
            >
              {copiedText ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-blue-900" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>
          </div>

          {/* Formatted Text Box for Quick Review */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider font-mono">
                Message Preview
              </span>
              <span className="text-[11px] text-slate-400">Ready for WhatsApp</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-sans text-xs text-slate-800 space-y-2 select-all max-h-56 overflow-y-auto leading-relaxed whitespace-pre-line">
              {shareText}
            </div>
          </div>

          {/* Copy Direct Link */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0 bg-slate-100 px-3 py-2 rounded-lg text-xs text-slate-600 truncate font-mono">
              {currentUrl}
            </div>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 cursor-pointer shrink-0"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Link className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
