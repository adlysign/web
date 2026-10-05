import React, { useState, useId } from 'react';
import { MATERIAL_SPECS, MOTOR_OPTIONS } from '../data/rollingDoorData';
import { formatIDR, createWhatsAppUrl } from '../utils/helpers';
import { Calculator, Send, AlertTriangle, ShieldCheck, Printer, CheckCircle } from 'lucide-react';

interface CostCalculatorProps {
  initialProductHint?: string;
  onOpenQuotationPreview: (quoteData: QuoteSummaryData) => void;
}

export interface QuoteSummaryData {
  width: number;
  height: number;
  area: number;
  material: typeof MATERIAL_SPECS[0];
  motor: typeof MOTOR_OPTIONS[0];
  addons: { id: string; name: string; price: number }[];
  materialCost: number;
  motorCost: number;
  addonsCost: number;
  totalCost: number;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onOpenQuotationPreview }) => {
  const widthInputId = useId();
  const heightInputId = useId();
  const [width, setWidth] = useState<number>(3.5);
  const [height, setHeight] = useState<number>(3.0);
  const [selectedMaterialId, setSelectedMaterialId] = useState<string>('onesheet_perforated');
  const [selectedMotorId, setSelectedMotorId] = useState<string>('motor_std');

  // Add-on checkboxes
  const [includeRemote, setIncludeRemote] = useState<boolean>(true);
  const [includeSafetySensor, setIncludeSafetySensor] = useState<boolean>(true);
  const [includeUps, setIncludeUps] = useState<boolean>(false);

  const selectedMaterial = MATERIAL_SPECS.find((m) => m.id === selectedMaterialId) || MATERIAL_SPECS[0];
  const selectedMotor = MOTOR_OPTIONS.find((m) => m.id === selectedMotorId) || MOTOR_OPTIONS[0];

  const area = Math.round(width * height * 100) / 100;
  const effectiveArea = Math.max(area, selectedMaterial.minArea);

  const materialCost = Math.round(effectiveArea * selectedMaterial.basePriceM2);
  const motorCost = selectedMotor.price;

  const addonsList: { id: string; name: string; price: number }[] = [];
  if (includeRemote && selectedMotor.id !== 'manual') {
    addonsList.push({ id: 'remote', name: 'Extra Wireless Remote (2 Pcs)', price: 350000 });
  }
  if (includeSafetySensor && selectedMotor.id !== 'manual') {
    addonsList.push({ id: 'sensor', name: 'Safety Photocell Sensor Anti-Jepit', price: 950000 });
  }
  if (includeUps && selectedMotor.id !== 'manual') {
    addonsList.push({ id: 'ups', name: 'Baterai Cadangan UPS Operasi Darurat', price: 2800000 });
  }

  const addonsCost = addonsList.reduce((acc, curr) => acc + curr.price, 0);
  const totalCost = materialCost + motorCost + addonsCost;

  // Engineering Warnings
  const needsWindlock = width >= 5.0;
  const needsMotorWarning = area >= 18 && selectedMotor.id === 'manual';
  const smallCapacityWarning = area >= 25 && selectedMotor.id === 'motor_std';

  const handleSendToWhatsApp = () => {
    const message = `Halo Archon Rolling Door, saya telah menghitung estimasi biaya rolling door di website dengan rincian berikut:

📐 Dimensi: Lebar ${width}m x Tinggi ${height}m (Luas: ${area} m²)
🛠️ Material Slat: ${selectedMaterial.name}
⚙️ Sistem Penggerak: ${selectedMotor.name}
🔌 Aksesoris Tambahan: ${addonsList.length > 0 ? addonsList.map(a => a.name).join(', ') : 'Tidak ada'}

💰 Estimasi Total Biaya: ${formatIDR(totalCost)}

Mohon dijadwalkan survey lokasi gratis untuk memastikan ukuran opening dan konfirmasi jadwal pemasangan. Terima kasih!`;

    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleOpenPrintPreview = () => {
    onOpenQuotationPreview({
      width,
      height,
      area,
      material: selectedMaterial,
      motor: selectedMotor,
      addons: addonsList,
      materialCost,
      motorCost,
      addonsCost,
      totalCost,
    });
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Kalkulator Transparan & Cepat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Simulasi & Estimasi Biaya Pemasangan Rolling Door Bergaransi.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Dapatkan estimasi biaya transparan dalam hitungan detik berdasarkan dimensi opening, material daun pintu, dan kapasitas motor penggerak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8">
            {/* Step 1: Dimensions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">1</span>
                  Tentukan Dimensi Opening (Meter)
                </label>
                <span className="text-xs font-mono text-amber-400 tabular-nums">
                  Luas: <strong className="text-white text-sm">{area}</strong> m²
                  {area < selectedMaterial.minArea && (
                    <span className="text-slate-400 text-[10px] ml-1">(min charge {selectedMaterial.minArea}m²)</span>
                  )}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <label htmlFor={widthInputId} className="text-slate-400 font-medium">Lebar Opening</label>
                    <span className="text-white font-mono font-bold tabular-nums">{width} m</span>
                  </div>
                  <input
                    id={widthInputId}
                    type="range"
                    min="1.5"
                    max="12.0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>1.5 m (Ruko kecil)</span>
                    <span>6.0 m</span>
                    <span>12.0 m (Hangar)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <label htmlFor={heightInputId} className="text-slate-400 font-medium">Tinggi Opening</label>
                    <span className="text-white font-mono font-bold tabular-nums">{height} m</span>
                  </div>
                  <input
                    id={heightInputId}
                    type="range"
                    min="2.0"
                    max="8.0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(parseFloat(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                    <span>2.0 m (Standar)</span>
                    <span>4.5 m (Loading Dock)</span>
                    <span>8.0 m (Tinggi)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Material Selection */}
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">2</span>
                Pilih Material & Ketebalan Slat
              </label>

              <div className="space-y-2.5">
                {MATERIAL_SPECS.map((mat) => {
                  const isSelected = selectedMaterialId === mat.id;
                  return (
                    <div
                      key={mat.id}
                      onClick={() => setSelectedMaterialId(mat.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400/80 ring-1 ring-amber-400/50'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-amber-400 bg-amber-400' : 'border-slate-600'}`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                          </div>
                          <span className="font-semibold text-white text-sm">{mat.name}</span>
                        </div>
                        <p className="text-xs text-slate-400 pl-6">{mat.recommendedFor}</p>
                      </div>

                      <div className="text-right pl-6 sm:pl-0">
                        <span className="font-mono text-sm font-bold text-amber-300 tabular-nums">
                          {formatIDR(mat.basePriceM2)}
                        </span>
                        <span className="text-[10px] text-slate-400 block">per m² terpasang</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Operating Mechanism */}
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-4">
                <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center">3</span>
                Sistem Penggerak (Manual / Motor Elektrik)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MOTOR_OPTIONS.map((m) => {
                  const isSelected = selectedMotorId === m.id;
                  return (
                    <div
                      key={m.id}
                      onClick={() => setSelectedMotorId(m.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400/80 ring-1 ring-amber-400/50'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-xs">{m.name}</span>
                          <span className="text-[10px] text-amber-400 font-mono">{m.warranty}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug">{m.description}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400 text-[10px]">{m.capacity}</span>
                        <span className="font-mono font-bold text-white tabular-nums">
                          {m.price === 0 ? 'Termasuk Slat' : `+ ${formatIDR(m.price)}`}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            {selectedMotor.id !== 'manual' && (
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Fitur Tambahan & Keamanan Sensor (Opsional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
                    <input
                      type="checkbox"
                      checked={includeSafetySensor}
                      onChange={(e) => setIncludeSafetySensor(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-medium text-white block">Sensor Anti-Jepit</span>
                      <span className="text-amber-400 font-mono text-[10px] tabular-nums">+ Rp 950.000</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
                    <input
                      type="checkbox"
                      checked={includeRemote}
                      onChange={(e) => setIncludeRemote(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-medium text-white block">Extra Wireless Remote</span>
                      <span className="text-amber-400 font-mono text-[10px] tabular-nums">+ Rp 350.000</span>
                    </div>
                  </label>

                  <label className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs">
                    <input
                      type="checkbox"
                      checked={includeUps}
                      onChange={(e) => setIncludeUps(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-500"
                    />
                    <div>
                      <span className="font-medium text-white block">Baterai Cadangan UPS</span>
                      <span className="text-amber-400 font-mono text-[10px] tabular-nums">+ Rp 2.800.000</span>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Result / Summary Column (Sticky on Desktop) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-bold text-white">Rincian Estimasi Biaya</h3>
                </div>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Garansi Resmi
                </span>
              </div>

              {/* Engineering Warnings if applicable */}
              {needsWindlock && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Bentang lebar &ge; 5 meter direkomendasikan menggunakan sistem <strong>Windlock Anti-Lepas</strong> untuk ketahanan terhadap tekanan angin.
                  </span>
                </div>
              )}

              {needsMotorWarning && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-300 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>
                    Pintu dengan luas &ge; 18 m² terlalu berat untuk ditarik manual setiap hari. Sangat disarankan memilih sistem motor elektrik otomatis.
                  </span>
                </div>
              )}

              {smallCapacityWarning && (
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Untuk luas di atas 25 m², disarankan motor heavy duty Shinsei Seiki 1000kg demi keawetan umur operasional mesin jangka panjang.
                  </span>
                </div>
              )}

              {/* Specification Specs List */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Dimensi Terhitung:</span>
                  <span className="font-mono font-medium text-white">{width}m (L) x {height}m (T) = {area} m²</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Material Slat:</span>
                  <span className="font-medium text-white text-right max-w-[200px] truncate">{selectedMaterial.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Sistem Penggerak:</span>
                  <span className="font-medium text-white text-right max-w-[200px] truncate">{selectedMotor.name}</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Daun Pintu & Rangka ({effectiveArea} m²):</span>
                  <span className="font-mono font-medium text-white tabular-nums">{formatIDR(materialCost)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span className="text-slate-400">Sistem Motor & Kontrol:</span>
                  <span className="font-mono font-medium text-white tabular-nums">{formatIDR(motorCost)}</span>
                </div>
                {addonsCost > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Aksesoris Tambahan:</span>
                    <span className="font-mono font-medium text-white tabular-nums">{formatIDR(addonsCost)}</span>
                  </div>
                )}
              </div>

              {/* Total Card */}
              <div className="pt-4 border-t border-slate-800 bg-slate-900/80 -mx-6 -mb-6 p-6 rounded-b-2xl space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Perkiraan Biaya Total</span>
                    <span className="text-xs text-emerald-400 font-medium">Sudah Termasuk Pemasangan Standar</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                      {formatIDR(totalCost)}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full py-3.5 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Kirim Spesifikasi ke WhatsApp Konsultan</span>
                  </button>

                  <button
                    onClick={handleOpenPrintPreview}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-400" />
                    <span>Cetak / Unduh Format Penawaran PDF</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  *Harga di atas adalah estimasi acuan. Biaya akhir akan dikonfirmasi resmi setelah survey lokasi dan pengecekan struktur dudukan opening secara gratis.
                </p>
              </div>
            </div>

            {/* Zero-Pill Trust Points */}
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Survey lokasi & pengukuran laser gratis untuk Jabodetabek</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Semua material diproduksi dengan sertifikasi SNI & ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
