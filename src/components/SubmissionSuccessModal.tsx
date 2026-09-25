import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, X, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface SubmissionSuccessModalProps {
  data: {
    businessName: string;
    businessType: string;
    websiteType: string;
    phone: string;
    features: string[];
    estimatedPrice: number;
    referenceId: string;
  } | null;
  onClose: () => void;
}

export const SubmissionSuccessModal: React.FC<SubmissionSuccessModalProps> = ({
  data,
  onClose,
}) => {
  if (!data) return null;

  const handleOpenWhatsApp = () => {
    const text = `Hello SWGWMWEB! 👋 I just submitted my website request for "${data.businessName}" (Ref: ${data.referenceId}). Please let me know the next steps!`;
    const url = CONTACT_INFO.getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenEmail = () => {
    const subject = `Website Project Brief Submitted [${data.referenceId}] - ${data.businessName}`;
    const body = `Hello SWGWMWEB Team,

I have submitted my website project request.

Reference ID: ${data.referenceId}
Business Name: ${data.businessName}
Industry: ${data.businessType}
Website Format: ${data.websiteType}
Phone: ${data.phone || 'Not provided'}
Estimated Budget: $${data.estimatedPrice}

Please reply with the project proposal and staging timeline.`;
    const url = CONTACT_INFO.getMailtoUrl(subject, body);
    window.location.href = url;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0f172a] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Success header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Project Request Received!
            </h3>
            <p className="text-xs text-slate-300">
              Your inquiry has been logged. Our design engineering team is reviewing your requirements.
            </p>
          </div>

          {/* Voucher Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5 font-mono text-xs text-slate-300">
            <div className="flex justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
              <span>PROJECT REF:</span>
              <span className="text-indigo-400 font-bold">{data.referenceId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Business:</span>
              <span className="text-white font-sans font-semibold">{data.businessName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Industry:</span>
              <span className="text-white">{data.businessType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Format:</span>
              <span className="text-white">{data.websiteType}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-slate-800 font-bold">
              <span className="text-slate-200">Estimated Investment:</span>
              <span className="text-emerald-400 text-sm">₹{data.estimatedPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2.5">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp ({CONTACT_INFO.phone}) →</span>
            </button>

            <button
              onClick={handleOpenEmail}
              className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/60 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Email to {CONTACT_INFO.email}</span>
            </button>

            <button
              onClick={onClose}
              className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Done & Return to Website
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct helpline: {CONTACT_INFO.phoneFormatted}</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
