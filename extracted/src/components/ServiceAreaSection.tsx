import React from 'react';
import { MapPin, Truck, CheckCircle } from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  const primaryAreas = [
    { city: 'DKI Jakarta', note: 'Jakarta Barat, Timur, Selatan, Pusat, Utara' },
    { city: 'Tangerang Raya', note: 'Kota Tangerang, Tangsel, BSD, Balaraja' },
    { city: 'Bekasi & Cikarang', note: 'Kawasan MM2100, Jababeka, GIIC, EJIP' },
    { city: 'Karawang & Purwakarta', note: 'Kawasan KIIC, Suryacipta, KIM' },
    { city: 'Depok & Bogor', note: 'Sentul Industrial, Cibinong, Gunung Putri' },
    { city: 'Bandung Raya', note: 'Cimahi, Padalarang, Gedebage' },
    { city: 'Jawa Tengah & Timur', note: 'Semarang, Solo, Surabaya, Sidoarjo' },
    { city: 'Seluruh Indonesia', note: 'Pengiriman Paket Fabrikasi Lengkap + Panduan' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Jangkauan Layanan & Pengiriman
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Siap Melayani Pemasangan & Pengiriman ke Seluruh Pelosok Nusantara.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Fasilitas workshop sentral kami siap mengirimkan tim instalasi untuk area Jawa-Bali, serta menyediakan paket modular knock-down siap rakit untuk luar pulau.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-1.5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className="text-sm font-bold text-white">{area.city}</h3>
              </div>
              <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                {area.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span>Armada Pick-up & Truk Khusus Logistik Pintu Panjang</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Packing Palet Kayu Aman Anti-Penyok untuk Ekspedisi Luar Pulau</span>
          </div>
        </div>
      </div>
    </section>
  );
};
