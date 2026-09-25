import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-white group"
          >
            <span className="font-display font-extrabold tracking-tight text-2xl text-white">
              SWGWM<span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">WEB</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions with Phone and Email */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors hover:bg-slate-800/60 rounded-lg"
              title={CONTACT_INFO.email}
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden lg:inline">{CONTACT_INFO.email}</span>
              <span className="lg:hidden">Email</span>
            </a>
            <a
              href={CONTACT_INFO.getWhatsAppUrl('Hello SWGWMWEB! I am interested in building a modern website.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors hover:bg-slate-800/60 rounded-lg"
              title={`Call / WhatsApp: ${CONTACT_INFO.phoneFormatted}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-lg shadow-sm shadow-indigo-600/30 transition-all duration-150 cursor-pointer whitespace-nowrap"
            >
              <span>Get Your Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 px-3 bg-[#131b2e] border border-slate-800 rounded-2xl shadow-xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href={CONTACT_INFO.getWhatsAppUrl('Hello SWGWMWEB! I am interested in building a modern website.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {CONTACT_INFO.phoneFormatted}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-indigo-300 bg-indigo-950/40 border border-indigo-800/50 rounded-lg"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                <span>Get Your Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
