import React from 'react';
import { MessageSquare, Ruler, Factory, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi & Estimasi Awal',
      description: 'Diskusikan tipe pintu, dimensi estimasi, dan kebutuhan spesifik fasilitas Anda bersama sales engineer kami via WhatsApp atau telepon.',
      icon: MessageSquare,
      badge: 'Respon < 15 Menit',
    },
    {
      number: '02',
      title: 'Free Survey & Pengukuran Laser',
      description: 'Teknisi kami datang ke lokasi Anda membawa sampel fisik material slat, mengukur bukaan opening dengan laser meter, dan memeriksa struktur tiang/dudukan.',
      icon: Ruler,
      badge: 'Gratis Jabodetabek',
    },
    {
      number: '03',
      title: 'Fabrikasi Presisi di Workshop',
      description: 'Proses roll-forming slat baja galvalum / aluminium, perakitan as pipa tengah, per spring balancing, dan pemasangan motor dengan quality control ketat.',
      icon: Factory,
      badge: 'Mesin Berteknologi Tinggi',
    },
    {
      number: '04',
      title: 'Instalasi & Garansi Resmi',
      description: 'Pemasangan rapi di lokasi oleh teknisi bersertifikat K3, pengujian sensor anti-jepit, training pengoperasian darurat, dan serah terima sertifikat garansi.',
      icon: CheckCircle2,
      badge: 'Garansi s/d 3 Tahun',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Alur Kerja Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Empat Langkah Mudah Memasang Rolling Door Impian Anda.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Dari konsultasi pertama hingga serah terima kunci dan garansi, kami memastikan setiap tahap berjalan transparan dan tepat waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-amber-400">
                      {step.number}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] font-medium text-amber-400/90">
                  {step.badge}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
