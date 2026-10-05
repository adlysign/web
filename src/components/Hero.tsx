import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Shield, Wrench, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/helpers';

interface HeroProps {
  onOpenBrochure: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrochure }) => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800/80">
      {/* Background architectural image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_rolling_door_modern_1791210629074.jpg"
          alt="Instalasi Pintu Rolling Door Otomatis Industri Modern Archon Door"
          className="w-full h-full object-cover object-center opacity-30 lg:opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Unboxed editorial trust kicker (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Pabrikasi Presisi & Pemasangan Langsung
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300">Garansi Mesin 3 Tahun</span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="text-slate-300 hidden sm:inline">Free Survey Jabodetabek</span>
            </div>

            {/* Dominant Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              Pintu Rolling Door Otomatis Industri & Komersial Berstandar Mutu Tinggi.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Solusi perlindungan fasilitas pergudangan, pabrik manufaktur, pusat perbelanjaan, dan ruko modern. 
              Slat baja galvalum presisi, motor elektrik bersertifikasi internasional dengan sensor anti-jepit, dan tim teknisi berpengalaman langsung tanpa perantara.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#kalkulator"
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 whitespace-nowrap"
              >
                <Calculator className="w-5 h-5 text-slate-950" />
                <span>Hitung Estimasi Biaya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppUrl('Halo Archon Door, saya ingin konsultasi kebutuhan rolling door untuk fasilitas saya. Mohon informasi survey lokasi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Konsultasi Sales Engineer</span>
                <span className="text-xs text-emerald-400 font-mono font-normal">WhatsApp</span>
              </a>
            </div>

            {/* Zero-Pill Unboxed Feature Points */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Baja Galvalum Anti-Karat</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Safety Sensor Anti-Jepit</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Teknisi Internal Siaga 24 Jam</span>
              </div>
            </div>
          </div>

          {/* Quick Snapshot / Focal Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/95 border border-slate-800 rounded-2xl p-6 shadow-2xl relative">
              <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase mb-1">
                Jaminan Kualitas Archon
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Standar Produksi Pabrikasi
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-white">Slat Presisi Mesin Roll-Form</div>
                    <p className="text-xs text-slate-400 mt-0.5">Ketebalan presisi 0.5mm hingga 1.6mm dengan kunci slat windlock tahan badai.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-white">Motor Heavy Duty Shinsei & Somfy</div>
                    <p className="text-xs text-slate-400 mt-0.5">Daya angkat 300kg – 1.500kg dengan thermal protector dan rantai darurat manual.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-amber-400 font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-white">Pemasangan Rapi & Garansi Resmi</div>
                    <p className="text-xs text-slate-400 mt-0.5">SOP safety ketat, pengujian beban, dan garansi tertulis ditandatangani.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Harga Mulai Dari</div>
                  <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">
                    Rp 480.000 <span className="text-xs text-slate-400 font-normal">/ m²</span>
                  </div>
                </div>
                <button
                  onClick={onOpenBrochure}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                >
                  Detail Brosur
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Proof Bar (Adjacent to Claims) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              12+ <span className="text-amber-400 text-2xl font-sans">Tahun</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Pengalaman Fabrikasi & Proyek</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              3.850+ <span className="text-amber-400 text-2xl font-sans">Unit</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Pintu Rolling Door Terpasang</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              100% <span className="text-amber-400 text-2xl font-sans">Resmi</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Garansi Pabrik & Sparepart Ready</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              &lt; 4 <span className="text-amber-400 text-2xl font-sans">Jam</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400">Respon Servis Darurat Jabodetabek</div>
          </div>
        </div>
      </div>
    </section>
  );
};
