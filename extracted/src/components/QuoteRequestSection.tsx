import React, { useState, useId } from 'react';
import { Send, CheckCircle2, ShieldCheck, PhoneCall, Clock } from 'lucide-react';
import { createWhatsAppUrl, DISPLAY_PHONE } from '../utils/helpers';

export const QuoteRequestSection: React.FC = () => {
  const formNameId = useId();
  const formPhoneId = useId();
  const formCompanyId = useId();
  const formCityId = useId();
  const formProductTypeId = useId();
  const formDimensionsId = useId();
  const formNotesId = useId();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    city: '',
    productType: 'Rolling Door Otomatis Industri',
    dimensions: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+-\s]{8,16}$/.test(formData.phone)) {
      newErrors.phone = 'Nomor WhatsApp tidak valid (contoh: 08123456789)';
    }
    if (!formData.city.trim()) newErrors.city = 'Kota/Lokasi proyek wajib diisi';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `Halo Archon Rolling Door, saya ingin mengajukan Permintaan Penawaran (RFQ) resmi:

👤 Nama: ${formData.name}
🏢 Perusahaan/Proyek: ${formData.company || '-'}
📱 WhatsApp: ${formData.phone}
📍 Lokasi/Kota: ${formData.city}
🚪 Tipe Pintu: ${formData.productType}
📐 Estimasi Dimensi: ${formData.dimensions || 'Perlu diukur di lokasi'}
📝 Catatan Tambahan: ${formData.notes || '-'}

Mohon informasi ketersediaan jadwal survey dan draft penawaran harga. Terima kasih!`;

    window.open(createWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
              Konsultasi & Penawaran Cepat
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Ajukan Penawaran Resmi & Jadwalkan Survey Gratis.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Tim sales engineer kami siap membantu perhitungan teknis, pemilihan spesifikasi slat, serta penyesuaian anggaran proyek Anda.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Respon Dalam 15 Menit</div>
                  <p className="text-xs text-slate-400">Permintaan penawaran langsung ditangani oleh engineer teknis berpengalaman.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Free Survey & Laser Measurement</div>
                  <p className="text-xs text-slate-400">Pengukuran akurat dan inspeksi opening tanpa pungutan biaya di Jabodetabek.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Hotline Konsultasi Langsung</div>
                  <a
                    href={`tel:${DISPLAY_PHONE.replace(/-/g, '')}`}
                    className="text-xs text-amber-400 hover:underline font-mono"
                  >
                    {DISPLAY_PHONE} (Senin - Sabtu 08.00 - 18.00)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Permintaan Penawaran Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Terima kasih, <strong>{formData.name}</strong>. Tim Sales Engineer Archon akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong> dalam waktu kurang dari 15 menit.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendWhatsAppDirect}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Buka Langsung di WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 rounded-xl cursor-pointer"
                    >
                      Kirim Formulir Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    Formulir Permintaan Penawaran (RFQ)
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={formNameId} className="block text-xs font-medium text-slate-300 mb-1">
                        Nama Lengkap <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id={formNameId}
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label htmlFor={formPhoneId} className="block text-xs font-medium text-slate-300 mb-1">
                        Nomor WhatsApp / HP <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id={formPhoneId}
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contoh: 081288990022"
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={formCompanyId} className="block text-xs font-medium text-slate-300 mb-1">
                        Perusahaan / Nama Proyek <span className="text-slate-500">(Opsional)</span>
                      </label>
                      <input
                        id={formCompanyId}
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Contoh: PT Surya Logistik / Ruko Pak Budi"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>

                    <div>
                      <label htmlFor={formCityId} className="block text-xs font-medium text-slate-300 mb-1">
                        Kota / Kawasan Proyek <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id={formCityId}
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Contoh: Cikarang / Jakarta Barat / Karawang"
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.city ? 'border-red-500 focus:ring-red-500' : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                      {errors.city && <span className="text-[11px] text-red-400 mt-1 block">{errors.city}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={formProductTypeId} className="block text-xs font-medium text-slate-300 mb-1">
                        Tipe Produk Pintu
                      </label>
                      <select
                        id={formProductTypeId}
                        value={formData.productType}
                        onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      >
                        <option value="Rolling Door Otomatis Industri">Rolling Door Otomatis Industri Heavy Duty</option>
                        <option value="Rolling Door One Sheet Perforated">Rolling Door One Sheet Perforated (Mall/Ruko)</option>
                        <option value="Rolling Door One Sheet Solid">Rolling Door One Sheet Solid Rapat</option>
                        <option value="Rolling Door Aluminium Premium">Rolling Door Aluminium Anodized</option>
                        <option value="Rolling Door Polycarbonate Bening">Rolling Door Polycarbonate Transparan</option>
                        <option value="Servis / Perbaikan Pintu Macet">Jasa Servis / Perbaikan Pintu Rusak</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={formDimensionsId} className="block text-xs font-medium text-slate-300 mb-1">
                        Perkiraan Dimensi (Lebar x Tinggi)
                      </label>
                      <input
                        id={formDimensionsId}
                        type="text"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        placeholder="Contoh: 5m x 4m (atau belum tahu)"
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={formNotesId} className="block text-xs font-medium text-slate-300 mb-1">
                      Catatan / Kebutuhan Khusus <span className="text-slate-500">(Opsional)</span>
                    </label>
                    <textarea
                      id={formNotesId}
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Contoh: Butuh remote nirkabel 4 buah dan sensor anti-jepit untuk loading dock pabrik."
                      className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Kirim Permintaan Penawaran & Jadwal Survey</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      🔒 Privasi Anda terjamin. Data hanya digunakan untuk pengiriman penawaran resmi.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
