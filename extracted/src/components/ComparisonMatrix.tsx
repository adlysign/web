import React from 'react';
import { Check, X, Shield, Volume2, Maximize, Zap } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Tingkat Kebisingan Operasional',
      icon: Volume2,
      industry: 'Hening (< 50 dB) dengan nylon lining',
      onesheet: 'Sangat Senyap (seamless sheet)',
      aluminium: 'Sangat Senyap (presisi)',
      conventional: 'Bising / Berderit nyaring',
    },
    {
      feature: 'Lebar Bentang Maksimal',
      icon: Maximize,
      industry: 'Hingga 12.0 Meter (Windlock)',
      onesheet: 'Maksimal 4.5 Meter',
      aluminium: 'Maksimal 6.0 Meter',
      conventional: 'Terbatas (rawan melengkung)',
    },
    {
      feature: 'Ketahanan Karat & Oksidasi',
      icon: Shield,
      industry: 'Sangat Tinggi (Galvalum Zinc-Alum)',
      onesheet: 'Tinggi (Galvalum Oven Finish)',
      aluminium: '100% Bebas Karat Seumur Hidup',
      conventional: 'Rentan Karat (Besi biasa)',
    },
    {
      feature: 'Sistem Penggerak & Otomasi',
      icon: Zap,
      industry: 'Motor Industri Shinsei/Somfy + Remote',
      onesheet: 'Manual Per Tarik / Tubular Motor',
      aluminium: 'Motorized Otomatis / Smart Remote',
      conventional: 'Manual berat, per sering anjlok',
    },
    {
      feature: 'Sistem Keamanan Anti-Jepit (Safety Sensor)',
      icon: Shield,
      industry: 'Tersedia (Auto-Reverse Inframerah)',
      onesheet: 'Opsional (pada tipe motorized)',
      aluminium: 'Tersedia',
      conventional: 'Tidak ada (rawan benturan)',
    },
    {
      feature: 'Garansi Resmi Mesin & Struktur',
      icon: Shield,
      industry: 'Garansi 3 Tahun',
      onesheet: 'Garansi 1-2 Tahun',
      aluminium: 'Garansi 3 Tahun',
      conventional: 'Tidak bergaransi / lepas toko',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Perbandingan Teknis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Matriks Perbandingan: Temukan Tipe Rolling Door yang Tepat.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Perbandingan objektif antara lini produk premium Archon melawan pintu rolling door konvensional di pasaran.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-950">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider min-w-[220px]">
                  Parameter Fitur
                </th>
                <th className="py-4 px-6 text-xs font-bold text-amber-400 uppercase tracking-wider min-w-[200px] bg-amber-400/5">
                  Archon Industri Otomatis
                </th>
                <th className="py-4 px-6 text-xs font-bold text-white uppercase tracking-wider min-w-[190px]">
                  Archon One Sheet
                </th>
                <th className="py-4 px-6 text-xs font-bold text-white uppercase tracking-wider min-w-[190px]">
                  Archon Aluminium
                </th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider min-w-[190px]">
                  Rolling Door Konvensional
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {comparisonData.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white flex items-center gap-2">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{row.feature}</span>
                    </td>
                    <td className="py-4 px-6 font-medium text-amber-300 bg-amber-400/5">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.industry}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.onesheet}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.aluminium}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-red-500/70 shrink-0" />
                        <span>{row.conventional}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
