import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Calculator, FileText } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/helpers';

interface NavbarProps {
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrochure }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Produk & Tipe', href: '#produk' },
    { label: 'Kalkulator Harga', href: '#kalkulator' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20">
                A
              </span>
              <span className="tracking-tight font-extrabold text-white">Archon Door</span>
            </a>
          </div>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Brosur Teknis</span>
            </button>
            <a
              href="#kalkulator"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-amber-400/20"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Hitung Estimasi</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#kalkulator"
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 rounded-md"
            >
              Kalkulator
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full py-2.5 px-4 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Lihat Brosur & Spesifikasi</span>
            </button>
            <a
              href={createWhatsAppUrl('Halo Archon Rolling Door, saya ingin konsultasi teknis & survey lokasi.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Konsultasi WhatsApp Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
