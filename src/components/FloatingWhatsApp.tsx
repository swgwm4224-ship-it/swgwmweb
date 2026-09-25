import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = 'Hello SWGWMWEB! I would like to get a quote for a modern website.';

  const handleSend = () => {
    const text = customMsg.trim() || defaultMsg;
    const url = CONTACT_INFO.getWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Expanded Quick Message Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl p-4 text-left space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">SWGWMWEB Direct Desk</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · {CONTACT_INFO.phoneFormatted}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              👋 Have questions or want to discuss your website? Message us directly on WhatsApp or drop us an email:
            </p>

            <textarea
              rows={2}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="e.g. Hi, how much would a restaurant menu website cost?"
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />

            <button
              onClick={handleSend}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Launch WhatsApp Chat ({CONTACT_INFO.phone})</span>
              <Send className="w-3.5 h-3.5" />
            </button>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <a
                href={`tel:${CONTACT_INFO.phoneTel}`}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                <Mail className="w-3 h-3 text-indigo-400" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-200 cursor-pointer active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-slate-950 animate-pulse" />
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">WhatsApp ({CONTACT_INFO.phone})</span>
      </button>
    </div>
  );
};
