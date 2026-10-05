import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { CostCalculator, QuoteSummaryData } from './components/CostCalculator';
import { FeaturesBento } from './components/FeaturesBento';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProcessSection } from './components/ProcessSection';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { QuoteRequestSection } from './components/QuoteRequestSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { SpecSheetModal } from './components/SpecSheetModal';
import { QuotationPrintModal } from './components/QuotationPrintModal';

export default function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState<boolean>(false);
  const [quoteSummaryForModal, setQuoteSummaryForModal] = useState<QuoteSummaryData | null>(null);

  const handleSelectProductForCalculator = (productName: string) => {
    const el = document.getElementById('kalkulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* 24/7 Hotline Bar */}
      <TopBar />

      {/* Main Sticky Header */}
      <Navbar onOpenBrochure={() => setIsBrochureOpen(true)} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBrochure={() => setIsBrochureOpen(true)} />

        {/* Product Catalog & Technical Options */}
        <ProductCatalog onSelectProductForCalculator={handleSelectProductForCalculator} />

        {/* Interactive Cost & Price Estimator Calculator */}
        <CostCalculator
          onOpenQuotationPreview={(data) => setQuoteSummaryForModal(data)}
        />

        {/* Bento Grid: 6 Pillars of Engineering Quality */}
        <FeaturesBento />

        {/* Reference Portfolio & Case Studies */}
        <PortfolioShowcase />

        {/* 4-Step Professional Installation Process */}
        <ProcessSection />

        {/* Engineering Comparison Matrix */}
        <ComparisonMatrix />

        {/* Lead Capture RFQ & Free Survey Request */}
        <QuoteRequestSection />

        {/* Coverage & Service Area */}
        <ServiceAreaSection />

        {/* Comprehensive FAQ Section */}
        <FaqSection />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingWidgets />

      {/* Digital Brochure Modal */}
      <SpecSheetModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Quotation Print & Share Modal */}
      <QuotationPrintModal
        quoteData={quoteSummaryForModal}
        onClose={() => setQuoteSummaryForModal(null)}
      />
    </div>
  );
}
