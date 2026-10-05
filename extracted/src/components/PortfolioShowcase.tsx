import React, { useState } from 'react';
import { PORTFOLIO, PortfolioItem } from '../data/rollingDoorData';
import { MapPin, CheckCircle2, ArrowUpRight, Building2 } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/helpers';

export const PortfolioShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'Pabrik & Gudang', label: 'Pabrik & Gudang' },
    { id: 'Pusat Perbelanjaan', label: 'Pusat Perbelanjaan & Mall' },
    { id: 'Residensial', label: 'Residensial Mewah' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Bukti Kualitas & Referensi Proyek
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Portofolio Pemasangan Rolling Door di Berbagai Fasilitas Terkemuka.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Dipercaya oleh ratusan perusahaan multinasional, kontraktor utama, dan pemilik properti di seluruh Indonesia.
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((c) => {
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 text-xs font-medium text-amber-300 rounded-md flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.category}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-amber-400 font-semibold mb-1">
                    {item.client}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Project Card Specs */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-slate-300">{item.location}</span>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Spesifikasi Daun:</span>
                      <span className="text-white font-medium text-right">{item.specs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimensi Terpasang:</span>
                      <span className="text-white font-mono font-medium">{item.dimension}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Motor Penggerak:</span>
                      <span className="text-amber-300 font-medium text-right">{item.motor}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Pengerjaan Selesai Tepat Waktu
                  </span>
                  <a
                    href={createWhatsAppUrl(`Halo Archon, saya tertarik dengan model rolling door seperti proyek "${item.title}" di ${item.location}. Mohon penawaran untuk proyek saya.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Minta Model Ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
