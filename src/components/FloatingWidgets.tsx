import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE } from '../utils/helpers';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 shadow-lg flex items-center justify-center transition-all cursor-pointer"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Phone Call Button */}
      <a
        href={`tel:${DISPLAY_PHONE.replace(/-/g, '')}`}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-slate-800 text-slate-200 border border-slate-700 shadow-xl transition-all cursor-pointer text-xs font-semibold"
        aria-label="Telepon Hotline"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Hotline: {DISPLAY_PHONE}</span>
      </a>

      {/* Floating WhatsApp CTA */}
      <a
        href={createWhatsAppUrl('Halo Archon Door, saya ingin konsultasi kebutuhan rolling door & jadwal survey.')}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Chat WhatsApp Sales Engineer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-100 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-slate-950 text-emerald-500" />
        <span className="whitespace-nowrap">Chat WhatsApp Kami</span>
      </a>
    </div>
  );
};
