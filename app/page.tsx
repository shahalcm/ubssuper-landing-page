import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { HeroTaxi } from "@/components/hero/HeroTaxi";
import { TaxiFeaturesSection } from "@/components/taxi/TaxiFeaturesSection";
import { TaxiBookingExperience } from "@/components/taxi/TaxiBookingExperience";
import { RideOptionsSection } from "@/components/taxi/RideOptionsSection";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { TaxiScreensShowcase } from "@/components/taxi/TaxiScreensShowcase";
import { WhySuperTaxi } from "@/components/taxi/WhySuperTaxi";
import { TaxiDownloadCTA } from "@/components/taxi/TaxiDownloadCTA";
import { UBSSuperIntro } from "@/components/superapp/UBSSuperIntro";
import { ServicesSection } from "@/components/services/ServicesSection";
import { EcosystemSection } from "@/components/ecosystem/EcosystemSection";
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
        {/* 2. Main Taxi Hero (Taxi First!) */}
        <HeroTaxi />

        {/* 3. Taxi App Features */}
        <TaxiFeaturesSection />

        {/* 4. Taxi Booking Experience (Interactive 4 Steps) */}
        <TaxiBookingExperience />

        {/* 5. Ride Types (Bike, Auto, Mini, Sedan, SUV, Luxury) */}
        <RideOptionsSection />

        {/* 6. Universal / Taxi How It Works */}
        <HowItWorks />

        {/* 7. Taxi App Screens Showcase (5 Smartphone Mockups) */}
        <TaxiScreensShowcase />

        {/* 8. Why UBS Super Taxi (Dark Premium Cards) */}
        <WhySuperTaxi />

        {/* 9. Taxi Download CTA Banner ("Ready to Ride?") */}
        <TaxiDownloadCTA />

        {/* 10. UBSSuper Super App Introduction ("More Than Just a Ride") */}
        <UBSSuperIntro />

        {/* 11. UBSSuper Services (8 Services Grid with Taxi Highlighted) */}
        <ServicesSection />

        {/* 12. Combined UBS Ecosystem Section (Green UBSSuper + Yellow Taxi) */}
        <EcosystemSection />

        {/* 13. App Comparison (UBSSuper vs UBS Super Taxi) */}
        <AppComparison />

        {/* 14. Final Download Section (Split CTA: UBSSuper & UBS Super Taxi) */}
        <SplitDownloadCTA />

        {/* 15. FAQ Accordion (7 Questions) */}
        <FAQSection />

        {/* 16. Final CTA ("Your Everyday Services. One UBS Ecosystem.") */}
        <FinalCTA />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
