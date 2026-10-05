import React, { useState } from 'react';
import { FAQS } from '../data/rollingDoorData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/helpers';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Pertanyaan Umum (FAQ)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Informasi Praktis Seputar Rolling Door & Layanan Kami.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Temukan jawaban langsung untuk pertanyaan seputar biaya, garansi, proses survey, dan pengoperasian darurat.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-900/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">
              Punya Pertanyaan Teknis Lainnya?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Konsultasikan langsung dengan tim engineer kami tanpa komitmen apapun.
            </p>
          </div>
          <a
            href={createWhatsAppUrl('Halo Archon Rolling Door, saya ingin bertanya lebih lanjut tentang spesifikasi rolling door.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
