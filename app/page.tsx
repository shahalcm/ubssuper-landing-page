import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroEcosystem } from "@/components/hero/HeroEcosystem";
import { AppsOverviewSection } from "@/components/apps/AppsOverviewSection";
import { EcosystemFlowSection } from "@/components/ecosystem/EcosystemFlowSection";
import { EcosystemSection } from "@/components/ecosystem/EcosystemSection";
import { UBSSuperIntro } from "@/components/superapp/UBSSuperIntro";
import { ServicesSection } from "@/components/services/ServicesSection";
import { TaxiSection } from "@/components/taxi/TaxiSection";
import { RideOptionsSection } from "@/components/taxi/RideOptionsSection";
import { TaxiScreensShowcase } from "@/components/taxi/TaxiScreensShowcase";
import { PartnerSection } from "@/components/partner/PartnerSection";
import { DeliverySection } from "@/components/delivery/DeliverySection";
import { AppComparison } from "@/components/comparison/AppComparison";
import { SplitDownloadCTA } from "@/components/cta/SplitDownloadCTA";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen bg-[#111827] text-white">
      {/* 1. Premium Sticky Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Main Ecosystem Hero: "One Ecosystem. Four Powerful Apps." */}
        <HeroEcosystem />

        {/* 3. Apps Section: "One Ecosystem. Four Apps." (4 Premium Cards) */}
        <AppsOverviewSection />

        {/* 4. Ecosystem Flow: "How the UBS Ecosystem Works" */}
        <EcosystemFlowSection />

        {/* 5. Business Ecosystem Architecture: "Connected Experiences. One Ecosystem." */}
        <EcosystemSection />

        {/* 6. UBSSuper Dedicated Section: "Everything You Need. One Super App." */}
        <UBSSuperIntro />

        {/* 7. UBSSuper Services Grid (8 Services: Taxi, Grocery, Food, Hotels, Logistics, Doctors, Marketplace, Appliances) */}
        <ServicesSection />

        {/* 8. UBS Super Taxi Dedicated Section: "Your Ride. Your Way." */}
        <TaxiSection />

        {/* 9. Ride Types (Bike, Auto, Mini, Sedan, SUV, Luxury) */}
        <RideOptionsSection />

        {/* 10. Taxi App Screens Showcase (Smartphone Mockups) */}
        <TaxiScreensShowcase />

        {/* 11. UBS Partner Dedicated Section: "Grow Your Business With UBS" (8 Categories & Dashboard Mockup) */}
        <PartnerSection />

        {/* 12. UBS Delivery Dedicated Section: "Powering Every Delivery" (Driver & Courier UI Mockup) */}
        <DeliverySection />

        {/* 13. App Comparison (UBSSuper vs UBS Super Taxi vs UBS Partner vs UBS Delivery) */}
        <AppComparison />

        {/* 14. App Download Section ("Choose the UBS App You Need" - 4 Large Download Cards) */}
        <SplitDownloadCTA />

        {/* 15. FAQ Accordion */}
        <FAQSection />

        {/* 16. Final CTA ("Welcome to the UBS Ecosystem" - 4 Logos & 4 Download Buttons) */}
        <FinalCTA />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
