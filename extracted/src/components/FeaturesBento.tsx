import React from 'react';
import { ShieldCheck, Cpu, Wrench, Clock, Award, Hammer, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/helpers';

export const FeaturesBento: React.FC = () => {
  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Standar Mutu & Keandalan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Enam Alasan Mengapa Kontraktor & Pemilik Fasilitas Memilih Archon Door.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Kami mengutamakan keselamatan operasional, daya tahan material jangka panjang, dan respon purna jual terpercaya demi melindungi investasi fasilitas Anda.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 (Large - Col Span 2) */}
          <div className="md:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">01. Rekayasa Material</span>
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Slat Baja Galvalum Anti-Karat & Aluminium Alloy 6063 T5
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Bukan plat tipis daur ulang. Slat Archon diproduksi dengan bahan baku galvalum berdensitas tinggi dengan ketebalan riil 0.5mm hingga 1.6mm. Lapisan zinc-aluminium melindungi dari oksidasi karat hingga puluhan tahun, bahkan pada iklim lembap dan pesisir laut.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-white font-semibold">Toleransi Presisi 0.05mm</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Slat interlocking rapi tanpa celah kebisingan</div>
                </div>
                <div>
                  <div className="text-white font-semibold">Sistem Windlock Kuat</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Mencegah slat copot saat diterpa badai & angin kencang</div>
                </div>
                <div>
                  <div className="text-white font-semibold">Sertifikasi SNI Teruji</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Lolos uji tarik, lentur, dan korosi semprot garam</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">02. Sistem Penggerak</span>
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <Cpu className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Motor Elektrik Standar Dunia: Shinsei Seiki & Somfy
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Kami hanya memasang motor asli bersertifikat CE/ISO dengan kapasitas angkat 300kg hingga 1.500kg. Dilengkapi sistem proteksi panas (thermal switch) yang mencegah korsleting atau motor terbakar.
              </p>
            </div>
            <div className="text-xs text-amber-300 font-medium pt-2 border-t border-slate-800">
              Garansi Penggantian Unit Mesin Resmi s/d 3 Tahun
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">03. Keamanan Tingkat Tinggi</span>
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Photocell Safety Sensor Anti-Jepit Otomatis
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Menghilangkan risiko kecelakaan kerja di area loading dock. Sensor inframerah mendeteksi kendaraan, forklift, atau orang yang melintas di bawah pintu, secara instan menghentikan laju turun dan kembali naik (auto-reverse).
              </p>
            </div>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
              Standar Keselamatan Kerja K3 Kemnaker RI
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">04. Fabrikasi Mandiri</span>
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <Hammer className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Langsung dari Pabrik (Bukan Perantara / Subkon)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Archon memiliki fasilitas workshop fabrikasi sendiri dengan mesin roll-forming presisi tinggi. Harga langsung tangan pertama tanpa perantara, dengan lead time pengerjaan jauh lebih singkat dan terpantau.
              </p>
            </div>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
              Kualitas dan Waktu Pengerjaan Terkendali Penuh
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400">05. Teknisi Spesialis</span>
                <span className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400">
                  <Wrench className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Instalasi Rapi Oleh Tim Berpengalaman 10+ Tahun
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Setiap instalasi dikerjakan oleh teknisi internal berpengalaman yang menguasai leveling laser, balancing spring per, dan setting limit switch presisi untuk mencegah aus dini pada rel atau slat.
              </p>
            </div>
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
              Hasil Pemasangan Kokoh, Rapi, & Lulus Uji Beban
            </div>
          </div>
        </div>

        {/* Emergency Service Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Pintu Rolling Door Anda Macet atau Rusak Darurat?</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">Siaga 24 Jam</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Tim servis darurat kami siap meluncur ke lokasi ruko, gudang, atau pabrik Anda di area Jabodetabek.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppUrl('Halo Archon, saya membutuhkan tim teknisi servis darurat untuk rolling door yang bermasalah. Lokasi:')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-2 whitespace-nowrap shadow-md shadow-amber-400/20 shrink-0 cursor-pointer"
          >
            <span>Panggil Teknisi Servis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
