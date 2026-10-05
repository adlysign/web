import React from 'react';
import { Phone, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { DISPLAY_PHONE, createWhatsAppUrl } from '../utils/helpers';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Hotline Servis 24 Jam Siaga</span>
          </div>
          <span className="hidden md:inline text-slate-700" aria-hidden="true">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Respon Cepat & Survey Lokasi Gratis Jabodetabek</span>
          </div>
          <span className="hidden md:inline text-slate-700" aria-hidden="true">|</span>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Garansi Resmi Mesin s/d 3 Tahun</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${DISPLAY_PHONE.replace(/-/g, '')}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-slate-200">{DISPLAY_PHONE}</span>
          </a>
          <span className="text-slate-700" aria-hidden="true">·</span>
          <a
            href={createWhatsAppUrl('Halo Archon Rolling Door, saya ingin konsultasi kebutuhan rolling door untuk proyek saya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <span>Chat WhatsApp</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
