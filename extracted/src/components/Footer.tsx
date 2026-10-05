import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { DISPLAY_PHONE, OFFICIAL_EMAIL, OFFICIAL_ADDRESS, createWhatsAppUrl } from '../utils/helpers';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg">
                A
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Archon Door</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Kontraktor fabrikasi dan spesialis pemasangan pintu rolling door otomatis heavy duty industri, one sheet, dan aluminium berstandar ISO di Indonesia.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garansi Resmi Mesin Motor Hingga 3 Tahun Penuh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Produk Utama
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Otomatis Industri
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door One Sheet Perforated
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door One Sheet Solid
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Aluminium Anodized
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-amber-400 transition-colors">
                  Rolling Door Polycarbonate Bening
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Menu & Layanan
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#kalkulator" className="hover:text-amber-400 transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-amber-400 transition-colors">
                  Keunggulan Slat & Motor
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-amber-400 transition-colors">
                  Portofolio Proyek Terpasang
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Pertanyaan Sering Diajukan
                </a>
              </li>
              <li>
                <a
                  href={createWhatsAppUrl('Halo Archon, saya membutuhkan tim survey lokasi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Free Survey Lokasi</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Kontak & Workshop
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{OFFICIAL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${DISPLAY_PHONE.replace(/-/g, '')}`} className="hover:text-white font-mono">
                  {DISPLAY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-white">
                  {OFFICIAL_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PT Archon Proteksi Presisi. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Pintu Rolling Door Mutu Tinggi Indonesia</span>
            <span>·</span>
            <span>Siap Pasang di Seluruh Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
