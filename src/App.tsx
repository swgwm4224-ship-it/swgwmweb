/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Showcase } from './components/Showcase';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { RequestForm } from './components/RequestForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { SubmissionSuccessModal } from './components/SubmissionSuccessModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BusinessType, WebsiteType, PortfolioItem } from './types';

export default function App() {
  const [selectedBusinessType, setSelectedBusinessType] = useState<BusinessType>('Restaurant');
  const [selectedWebsiteType, setSelectedWebsiteType] = useState<WebsiteType>('Business Website');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioItem | null>(null);
  const [submissionVoucher, setSubmissionVoucher] = useState<{
    businessName: string;
    businessType: string;
    websiteType: string;
    phone: string;
    features: string[];
    estimatedPrice: number;
    referenceId: string;
  } | null>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShowcase = () => {
    const elem = document.getElementById('showcase');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: BusinessType) => {
    setSelectedBusinessType(cat);
    scrollToContact();
  };

  const handleSelectPricingPlan = (type: WebsiteType) => {
    setSelectedWebsiteType(type);
    scrollToContact();
  };

  const handleCloneStyle = (cat: BusinessType) => {
    setSelectedBusinessType(cat);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Tilt Browser Mockup & Live Previews */}
        <Hero onOpenContact={scrollToContact} onExploreWork={scrollToShowcase} />

        {/* 2. Industry Categories (Who We Build For) */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Interactive Multi-Device Website Showcase */}
        <Showcase onSelectStyle={handleCloneStyle} />

        {/* 4. Complete Feature Capabilities */}
        <Features />

        {/* 5. Benefits & Concrete Value */}
        <Benefits />

        {/* 6. 3-Step Simple Roadmap */}
        <Process onStartProject={scrollToContact} />

        {/* 7. Real Client Case Studies & Deliveries */}
        <Portfolio
          onSelectProject={(proj) => setActiveModalProject(proj)}
          onCloneProjectStyle={handleCloneStyle}
        />

        {/* 8. Transparent Pricing Tiers */}
        <Pricing onSelectPlan={handleSelectPricingPlan} />

        {/* 9. Interactive WhatsApp Quote Builder & Request Form */}
        <RequestForm
          initialBusinessType={selectedBusinessType}
          initialWebsiteType={selectedWebsiteType}
          onSubmittedModal={(voucher) => setSubmissionVoucher(voucher)}
        />

        {/* 10. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 11. Final High-Impact Conversion CTA */}
        <FinalCTA onStartProject={scrollToContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onCloneStyle={handleCloneStyle}
      />

      {/* Submission Success Voucher Modal */}
      <SubmissionSuccessModal
        data={submissionVoucher}
        onClose={() => setSubmissionVoucher(null)}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
