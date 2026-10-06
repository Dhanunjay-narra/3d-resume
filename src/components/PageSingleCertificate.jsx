import { useState, forwardRef } from 'react';
import {
  Calendar,
  ShieldCheck,
  ZoomIn,
  Check,
  Copy,
} from 'lucide-react';

export const PageSingleCertificate = forwardRef((props, ref) => {
  const { cert, onSelectCert, style, className } = props;
  const [copied, setCopied] = useState(false);

  const handleCopyId = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(cert.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLeftPage = parseInt(cert.pageNumber) % 2 !== 0;

  return (
    <div
      ref={ref}
      style={style}
      className={`page page-inner relative w-full h-full bg-[#faf8f5] text-stone-800 p-4 sm:p-5 md:p-6 flex flex-col justify-between overflow-y-auto overflow-x-hidden select-text ${
        isLeftPage
          ? 'border-r border-[#ebe5da]'
          : 'border-l border-[#ebe5da]'
      } ${className || ''}`}
    >
      {/* Margin Guide for left pages */}
      {isLeftPage && (
        <div className="absolute top-0 bottom-0 left-5 md:left-7 w-[2px] bg-rose-400/20 pointer-events-none" />
      )}
      <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

      {/* Page Header */}
      <div className={`relative z-10 ${isLeftPage ? 'pl-4 sm:pl-5' : 'pr-4 sm:pr-5'}`}>
        <div className="flex items-center justify-between border-b border-[#e8dec8] pb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#a0522d]">
            <span className="w-2 h-2 rounded-full bg-[#c45520] opacity-80" />
            <span>CERTIFICATE</span>
          </div>
          <span className="text-xs font-mono text-stone-400">
            PAGE {cert.pageNumber}
          </span>
        </div>
      </div>

      {/* Main Certificate Showcase - Vertically Centered with Equal Top & Bottom Space */}
      <div className={`relative z-10 flex-1 flex flex-col justify-center my-auto py-2 space-y-3 ${isLeftPage ? 'pl-4 sm:pl-5' : 'pr-4 sm:pr-5'}`}>
        {/* Certificate Image Card - Large & Prominent in Soft Warm Frame */}
        <div
          onClick={() => onSelectCert(cert)}
          className="group relative w-full bg-stone-900 rounded-xl overflow-hidden border-2 border-[#d9c5a7] shadow-md hover:border-[#b84a1b] transition-all cursor-pointer"
        >
          <div className="relative aspect-[16/11] max-h-[260px] sm:max-h-[300px] md:max-h-[340px] w-full flex items-center justify-center bg-stone-950 overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-white">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#dfc7a7] text-stone-950 font-bold text-xs shadow-md">
                <ZoomIn className="w-3.5 h-3.5" /> Click for Full View
              </span>
            </div>
          </div>

          <div className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-stone-900/90 text-[#a3e635] text-[9px] font-mono border border-lime-500/30 shadow-sm backdrop-blur-xs">
            <ShieldCheck className="w-2.5 h-2.5 text-[#a3e635]" />
            <span>Verified</span>
          </div>
        </div>

        {/* Certificate Title & Authority */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#fbf4eb] text-[#8c5720] border border-[#ecdcc8]">
              {cert.orgBadge}
            </span>
          </div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-stone-900 leading-snug">
            {cert.title}
          </h3>
          <p className="text-xs text-stone-600">
            Authority: <span className="text-[#a0522d] font-semibold">{cert.issuer}</span>
          </p>
        </div>

        {/* Key Certificate Metadata (Date & Credential ID in Pastel Cards) */}
        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#e2d8c3] shadow-xs">
            <span className="block text-[8.5px] text-stone-400 uppercase font-mono">
              Date / Period
            </span>
            <span className="font-semibold text-stone-800 flex items-center gap-1 text-[10px] sm:text-[11px] mt-0.5 truncate">
              <Calendar className="w-3 h-3 text-[#b84a1b] flex-shrink-0" />
              <span className="truncate">{cert.date}</span>
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#e2d8c3] shadow-xs flex items-center justify-between">
            <div className="overflow-hidden">
              <span className="block text-[8.5px] text-stone-400 uppercase font-mono">
                Credential ID
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#b84a1b] truncate block">
                {cert.credentialId}
              </span>
            </div>
            <button
              onClick={handleCopyId}
              className="p-1 rounded-md hover:bg-stone-100 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer flex-shrink-0"
              title="Copy ID"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#2c6e49]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div
        className={`relative z-10 pt-2 flex items-center justify-between border-t border-[#e8dec8] text-[10px] text-stone-500 font-mono ${
          isLeftPage ? 'pl-4 sm:pl-5' : 'pr-4 sm:pr-5'
        }`}
      >
        <span>Verified Credential</span>
        <span className="text-stone-400">Narra Dhanunjay Portfolio</span>
      </div>
    </div>
  );
});

PageSingleCertificate.displayName = 'PageSingleCertificate';
