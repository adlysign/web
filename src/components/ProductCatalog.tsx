import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/rollingDoorData';
import { formatIDR, createWhatsAppUrl } from '../utils/helpers';
import { ArrowUpRight, Check, ShieldCheck, Ruler, Cpu } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForCalculator: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForCalculator }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'industry', label: 'Industri Heavy Duty' },
    { id: 'onesheet', label: 'One Sheet Ruko & Mall' },
    { id: 'aluminium', label: 'Aluminium Premium' },
    { id: 'special', label: 'Polycarbonate Transparan' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="produk" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Katalog & Spesifikasi Mutu
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Pilihan Tipe Pintu Rolling Door Sesuai Standar Kebutuhan Bangunan Anda.
            </h2>
          </div>

          {/* Interactive Filter Segmented Control (Valid functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900/90 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group"
            >
              {/* Image Container with Fallback */}
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Quiet unboxed top label */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3 py-1 text-xs font-medium text-amber-300 rounded-md">
                  {product.badgeTitle}
                </div>

                <div className="absolute bottom-3 right-3 text-right">
                  <span className="text-[10px] text-slate-400 block">Mulai dari</span>
                  <span className="text-base font-bold text-white font-mono tabular-nums bg-slate-950/90 px-2 py-0.5 rounded border border-slate-800">
                    {formatIDR(product.startingPriceM2)} <span className="text-xs font-normal text-slate-400">/ m²</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Technical Quick Specs */}
                <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Ruler className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-400">Slat:</span>
                    <span className="font-medium text-white truncate">{product.slatThickness}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Cpu className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-400">Penggerak:</span>
                    <span className="font-medium text-white truncate">{product.operationType}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-slate-400">Dimensi Max:</span>
                    <span className="font-medium text-white truncate">{product.maxDimension}</span>
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-1.5 pt-2">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProductModal(product)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer text-center"
                  >
                    Detail Lengkap
                  </button>
                  <button
                    onClick={() => onSelectProductForCalculator(product.name)}
                    className="py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                    title="Hitung di Kalkulator Biaya"
                  >
                    <span>Estimasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {selectedProductModal.badgeTitle}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProductModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
                aria-label="Tutup modal"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-800">
              <img
                src={selectedProductModal.image}
                alt={selectedProductModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedProductModal.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Material & Ketebalan Slat:</span>
                <span className="font-semibold text-white">{selectedProductModal.slatThickness}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Dimensi Maksimal Rekomendasi:</span>
                <span className="font-semibold text-white">{selectedProductModal.maxDimension}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block mb-0.5">Sistem Operasi / Motor:</span>
                <span className="font-semibold text-white">{selectedProductModal.operationType}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Fitur Keamanan & Performa
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedProductModal.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Aplikasi Rekomendasi
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {selectedProductModal.idealFor.map((app, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-slate-800 border border-slate-700/60 rounded-md">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Mulai Dari (Material)</div>
                <div className="text-xl font-bold text-amber-400 font-mono tabular-nums">
                  {formatIDR(selectedProductModal.startingPriceM2)} <span className="text-xs text-slate-400 font-normal">/ m²</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const name = selectedProductModal.name;
                    setSelectedProductModal(null);
                    onSelectProductForCalculator(name);
                  }}
                  className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
                >
                  Hitung di Kalkulator
                </button>
                <a
                  href={createWhatsAppUrl(`Halo Archon Door, saya tertarik dengan spesifikasi ${selectedProductModal.name}. Bisakah tim mengirimkan penawaran harga & jadwal survey?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Chat Sales via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
