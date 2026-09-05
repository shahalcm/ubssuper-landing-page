import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { StatsSection } from "@/components/stats/StatsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SuperFeatureSection } from "@/components/features/SuperFeatureSection";
import { AppShowcase } from "@/components/showcase/AppShowcase";
import { TaxiSection } from "@/components/taxi/TaxiSection";
import { TaxiDownloadCTA } from "@/components/taxi/TaxiDownloadCTA";
import { WhyChooseUs } from "@/components/features/WhyChooseUs";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { MobileAppSection } from "@/components/mobile-section/MobileAppSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust / Statistics Section */}
        <StatsSection />

        {/* 3. Services Section (8 Core Services) */}
        <ServicesSection />

        {/* 4. Dedicated UBSSuper Feature Section (Green Branding) */}
        <SuperFeatureSection />

        {/* 5. 3-Phone Interactive Mobile Showcase */}
        <AppShowcase />

        {/* 6. Dedicated UBS Super Taxi Section (Yellow Branding & Dark Theme) */}
        <TaxiSection />

        {/* 7. Dedicated Taxi Download CTA */}
        <TaxiDownloadCTA />

        {/* 8. Why Choose Us (6 Pillars) */}
        <WhyChooseUs />

        {/* 9. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 10. Mobile App Section ("Your Services. Always With You.") */}
        <MobileAppSection />

        {/* 11. FAQ Accordion (7 Questions) */}
        <FAQSection />

        {/* 12. Final High-Impact Dual CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
