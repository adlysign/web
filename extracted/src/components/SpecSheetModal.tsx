import React from 'react';
import { X, Download, Printer, CheckCircle, ShieldCheck, FileText } from 'lucide-react';
import { PRODUCTS, MATERIAL_SPECS } from '../data/rollingDoorData';
import { formatIDR, createWhatsAppUrl } from '../utils/helpers';

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecSheetModal: React.FC<SpecSheetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Brosur & Lembar Spesifikasi Teknis Archon Door
              </h3>
              <p className="text-xs text-slate-400">
                Dokumen resmi panduan teknis material slat, motor elektrik, dan toleransi beban
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Cetak Dokumen"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Cetak</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              aria-label="Tutup Brosur"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs text-slate-300">
          {/* Company Brief */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                PT Archon Proteksi Presisi
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                Standar Fabrikasi Pintu Pengaman Industri & Komersial
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Kawasan Industri & Pergudangan Modern Blok C8 No. 12, Jakarta Barat | Telp: 0812-8899-0022
              </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold text-xs">ISO 9001:2015 Compliant</span>
            </div>
          </div>

          {/* Slat Material Specifications Table */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              1. Tabel Spesifikasi Material Slat & Rekomendasi Bentang
            </h4>
            <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-400">
                    <th className="p-3 font-semibold">Tipe Material</th>
                    <th className="p-3 font-semibold">Ketebalan</th>
                    <th className="p-3 font-semibold">Ketahanan Angin</th>
                    <th className="p-3 font-semibold">Aplikasi Standar</th>
                    <th className="p-3 font-semibold text-right">Acuan Harga/m²</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {MATERIAL_SPECS.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-900/40">
                      <td className="p-3 font-semibold text-white">{m.name}</td>
                      <td className="p-3 text-slate-300 font-mono">{m.name.match(/\((.*?)\)/)?.[1] || '-'}</td>
                      <td className="p-3 text-slate-300">{m.windResistance}</td>
                      <td className="p-3 text-slate-400">{m.recommendedFor}</td>
                      <td className="p-3 font-mono font-bold text-amber-400 text-right">{formatIDR(m.basePriceM2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Motors & Operating Systems */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              2. Sistem Penggerak Elektrik & Mekanikal
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-bold text-amber-400">Shinsei Seiki Japan Standard (1000kg - 1500kg)</span>
                <p className="text-slate-300">
                  Dikhususkan untuk beban berat dan pintu gudang logistik dengan frekuensi buka tutup tinggi. Dilengkapi brake shoe elektromagnetik tahan aus dan manual chain hoist.
                </p>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Garansi Resmi Penggantian Mesin 3 Tahun</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                <span className="text-xs font-bold text-amber-400">Somfy Tubular Motor & Automatic 600kg</span>
                <p className="text-slate-300">
                  Sangat cocok untuk ruko, butik mall, dan residensial. Dimensi motor tersembunyi rapi di dalam poros as pipa atau box cover compact dengan tingkat kebisingan ultra-rendah.
                </p>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Garansi Resmi 2 Tahun + 2 Wireless Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Standard Installation Scope */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              3. Lingkup Pekerjaan & Ketentuan Garansi
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Harga penawaran mencakup: Perakitan daun pintu, rel pemandu samping (guide rail), as pipa tengah, motor penggerak, push button switch, dan testing beban.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Garansi resmi berlaku untuk cacat manufaktur mesin motor, kerusakan gear, dan kekencangan per balancing selama periode berlaku.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Survey lokasi gratis berlaku untuk seluruh area Jabodetabek dan kawasan industri terkait.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-400 text-xs text-center sm:text-left">
            Butuh file PDF formal lengkap untuk pengajuan procurement perusahaan?
          </span>
          <a
            href={createWhatsAppUrl('Halo Archon, saya membutuhkan PDF Brosur dan Surat Dukungan Proyek / Spesifikasi Teknis resmi.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Minta PDF Resmi via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
