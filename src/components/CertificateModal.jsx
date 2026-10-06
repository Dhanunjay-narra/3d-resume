import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Copy,
  Check,
  Award,
} from 'lucide-react';

export const CertificateModal = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#faf8f5] border border-[#d9c5a7] rounded-2xl overflow-hidden shadow-2xl text-stone-900"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 border-b border-[#e8dec8] bg-[#f4eee5]/70">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#b84a1b]" />
              <h3 className="font-bold text-sm md:text-base text-stone-900">
                {certificate.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image View */}
          <div className="p-4 bg-stone-900 flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-stone-800 shadow-inner bg-stone-950">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Certificate Details */}
          <div className="p-5 space-y-4 bg-[#faf8f5]">
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              {certificate.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-[#e2d8c3]">
                <span className="block text-[10px] text-stone-400 uppercase font-mono">Issuer</span>
                <span className="font-semibold text-stone-800">{certificate.issuer}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#e2d8c3]">
                <span className="block text-[10px] text-stone-400 uppercase font-mono">Issued Date</span>
                <span className="font-semibold text-stone-800 flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#b84a1b]" /> {certificate.date}
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 p-2.5 rounded-lg bg-white border border-[#e2d8c3] flex items-center justify-between">
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-stone-400 uppercase font-mono">Credential ID</span>
                  <span className="font-mono text-xs font-semibold text-[#b84a1b] truncate block">{certificate.credentialId}</span>
                </div>
                <button
                  onClick={handleCopyId}
                  className="p-1.5 rounded-md hover:bg-stone-100 text-stone-400 hover:text-stone-900 transition-colors cursor-pointer flex-shrink-0"
                  title="Copy ID"
                >
                  {copied ? <Check className="w-4 h-4 text-[#2c6e49]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-xs font-medium text-stone-700 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b84a1b] hover:bg-[#a0451e] text-white font-bold text-xs shadow-md transition-transform hover:scale-[1.02]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Verify Credential Online</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
