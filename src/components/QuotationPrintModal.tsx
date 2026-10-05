import React from 'react';
import { X, Printer, Send, ShieldCheck, Building2 } from 'lucide-react';
import { QuoteSummaryData } from './CostCalculator';
import { formatIDR, createWhatsAppUrl, DISPLAY_PHONE, OFFICIAL_ADDRESS } from '../utils/helpers';

interface QuotationPrintModalProps {
  quoteData: QuoteSummaryData | null;
  onClose: () => void;
}

export const QuotationPrintModal: React.FC<QuotationPrintModalProps> = ({ quoteData, onClose }) => {
  if (!quoteData) return null;

  const quoteNumber = `EST-ARC-${Date.now().toString().slice(-6)}`;
  const today = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date());

  const handlePrint = () => {
    window.print();
  };

  const handleSendToWhatsApp = () => {
    const text = `Halo Archon Rolling Door, saya ingin mengajukan survey berdasarkan No. Estimasi ${quoteNumber}:
- Dimensi: ${quoteData.width}m x ${quoteData.height}m (${quoteData.area} m²)
- Material: ${quoteData.material.name}
- Motor: ${quoteData.motor.name}
- Total Estimasi: ${formatIDR(quoteData.totalCost)}

Mohon konfirmasi jadwal kunjungan tim survey ke lokasi saya. Terima kasih!`;

    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Pratinjau Lembar Estimasi Biaya
            </h3>
            <p className="text-xs text-slate-400">
              Dokumen acuan harga resmi siap cetak / simpan
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 bg-slate-900">
          {/* Printable Letterhead */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-bold text-base">
                  A
                </span>
                <span className="text-xl font-bold tracking-tight text-white">Archon Rolling Door</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                PT Archon Proteksi Presisi · Spesialis Pintu Rolling Door Otomatis Industri
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {OFFICIAL_ADDRESS} · Telp/WA: {DISPLAY_PHONE}
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1 text-xs">
              <div className="text-slate-400">No. Estimasi:</div>
              <div className="font-mono font-bold text-amber-400 text-sm">{quoteNumber}</div>
              <div className="text-slate-400 text-[11px]">{today}</div>
            </div>
          </div>

          {/* Project Dimension Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Lebar Opening</span>
              <span className="font-bold text-white font-mono">{quoteData.width} Meter</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Tinggi Opening</span>
              <span className="font-bold text-white font-mono">{quoteData.height} Meter</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Luas Efektif</span>
              <span className="font-bold text-amber-400 font-mono">{quoteData.area} m²</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Masa Berlaku</span>
              <span className="font-semibold text-emerald-400">14 Hari Kerja</span>
            </div>
          </div>

          {/* Line Item Table */}
          <div className="border border-slate-800 rounded-xl overflow-hidden text-xs bg-slate-950">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/80 text-slate-300 border-b border-slate-800">
                  <th className="p-3 font-semibold">Uraian Pekerjaan / Material</th>
                  <th className="p-3 font-semibold text-center">Vol</th>
                  <th className="p-3 font-semibold text-right">Harga Satuan</th>
                  <th className="p-3 font-semibold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="p-3">
                    <div className="font-semibold text-white">{quoteData.material.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Termasuk rel pemandu samping, as pipa pembungkus, spring balancing, dan bottom seal karet
                    </div>
                  </td>
                  <td className="p-3 text-center font-mono">{quoteData.area} m²</td>
                  <td className="p-3 text-right font-mono text-slate-300">{formatIDR(quoteData.material.basePriceM2)}</td>
                  <td className="p-3 text-right font-mono font-semibold text-white">{formatIDR(quoteData.materialCost)}</td>
                </tr>

                <tr>
                  <td className="p-3">
                    <div className="font-semibold text-white">{quoteData.motor.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {quoteData.motor.description} · {quoteData.motor.warranty}
                    </div>
                  </td>
                  <td className="p-3 text-center font-mono">1 Set</td>
                  <td className="p-3 text-right font-mono text-slate-300">{formatIDR(quoteData.motor.price)}</td>
                  <td className="p-3 text-right font-mono font-semibold text-white">{formatIDR(quoteData.motorCost)}</td>
                </tr>

                {quoteData.addons.map((addon) => (
                  <tr key={addon.id}>
                    <td className="p-3">
                      <div className="font-semibold text-white">{addon.name}</div>
                    </td>
                    <td className="p-3 text-center font-mono">1 Pkt</td>
                    <td className="p-3 text-right font-mono text-slate-300">{formatIDR(addon.price)}</td>
                    <td className="p-3 text-right font-mono font-semibold text-white">{formatIDR(addon.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Grand Total Box */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Total Estimasi Anggaran (Terpasang)</span>
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Termasuk Jasa Pasang Standar & Garansi Resmi
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-amber-400 font-mono tabular-nums">
                {formatIDR(quoteData.totalCost)}
              </span>
            </div>
          </div>

          {/* Notes */}
          <div className="text-[11px] text-slate-400 space-y-1">
            <p><strong>Catatan Penting:</strong></p>
            <p>1. Penawaran ini merupakan simulasi online. Biaya final akan disahkan setelah inspeksi kondisi opening dan struktur kolom oleh tim teknisi kami secara gratis.</p>
            <p>2. Tersedia faktur pajak resmi (PPN) untuk kebutuhan perusahaan / tender proyek.</p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-lg cursor-pointer"
          >
            Tutup
          </button>

          <button
            onClick={handleSendToWhatsApp}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-400/20"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>Kirim Rincian Ini ke WhatsApp Konsultan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
