"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Car, Store, Bike, Layers, ExternalLink, ArrowRight } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { HeroPhoneMockup } from "./HeroPhoneMockup";
import { TaxiPhoneHeroMockup } from "./TaxiPhoneHeroMockup";
import { PartnerPhoneMockup } from "./PartnerPhoneMockup";
import { DeliveryPhoneMockup } from "./DeliveryPhoneMockup";

export const HeroFourPhonesMockup = () => {
  const [activeTab, setActiveTab] = useState<"all" | "ubssuper" | "taxi" | "partner" | "delivery">("all");
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  return (
    <div className="relative w-full mx-auto">
      {/* Interactive Tabs to toggle view */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === "all"
              ? "bg-white text-gray-950 shadow-lg shadow-white/10 scale-105"
              : "bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>All 4 Apps</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("ubssuper")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === "ubssuper"
              ? "bg-[#16A34A] text-white shadow-lg shadow-green-500/25 scale-105 border border-green-400/40"
              : "bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span>UBSSuper</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("taxi")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === "taxi"
              ? "bg-[#FACC15] text-gray-950 shadow-lg shadow-yellow-500/25 scale-105 border border-yellow-300"
              : "bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#EAB308]" />
          <span>Super Taxi</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("partner")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === "partner"
              ? "bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 scale-105 border border-blue-400/40"
              : "bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
          <span>UBS Partner</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("delivery")}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
            activeTab === "delivery"
              ? "bg-[#EA580C] text-white shadow-lg shadow-orange-500/25 scale-105 border border-orange-400/40"
              : "bg-gray-900/90 text-gray-400 hover:text-white border border-gray-800"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-[#F97316]" />
          <span>UBS Delivery</span>
        </button>
      </div>

      {/* VIEW: All 4 Phones Arranged in Premium Composition */}
      {activeTab === "all" && (
        <div className="relative">
          {/* Ambient Glows */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-linear-to-r from-green-500/15 via-yellow-500/15 to-blue-500/15 rounded-full blur-[140px] pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* 4 Phones Grid (Responsive 2x2 on tablet/desktop, horizontal scroll on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-start justify-center">
            {/* Phone 1: UBSSuper (Green) */}
            <div
              onMouseEnter={() => setHoveredApp("ubssuper")}
              onMouseLeave={() => setHoveredApp(null)}
              className="relative group transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              {/* App Badge Pill */}
              <div className="mb-3 px-3 py-1 rounded-full bg-green-950/80 border border-green-500/40 text-green-400 text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>1. UBSSuper • Customer</span>
              </div>
              <div className="w-full max-w-[280px]">
                <HeroPhoneMockup />
              </div>
            </div>

            {/* Phone 2: UBS Super Taxi (Yellow) */}
            <div
              onMouseEnter={() => setHoveredApp("taxi")}
              onMouseLeave={() => setHoveredApp(null)}
              className="relative group transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center lg:mt-6"
            >
              {/* App Badge Pill */}
              <div className="mb-3 px-3 py-1 rounded-full bg-yellow-950/80 border border-yellow-400/40 text-yellow-400 text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span>2. Super Taxi • Rides</span>
              </div>
              <div className="w-full max-w-[280px]">
                <TaxiPhoneHeroMockup />
              </div>
            </div>

            {/* Phone 3: UBS Partner (Blue) */}
            <div
              onMouseEnter={() => setHoveredApp("partner")}
              onMouseLeave={() => setHoveredApp(null)}
              className="relative group transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              {/* App Badge Pill */}
              <div className="mb-3 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/40 text-blue-400 text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>3. UBS Partner • Business</span>
              </div>
              <div className="w-full max-w-[280px]">
                <PartnerPhoneMockup compact />
              </div>
            </div>

            {/* Phone 4: UBS Delivery (Orange) */}
            <div
              onMouseEnter={() => setHoveredApp("delivery")}
              onMouseLeave={() => setHoveredApp(null)}
              className="relative group transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center lg:mt-6"
            >
              {/* App Badge Pill */}
              <div className="mb-3 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/40 text-orange-400 text-[11px] font-extrabold flex items-center gap-1.5 shadow-md">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span>4. UBS Delivery • Courier</span>
              </div>
              <div className="w-full max-w-[280px]">
                <DeliveryPhoneMockup compact />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW: Single Phone Focus */}
      {activeTab === "ubssuper" && (
        <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-200">
          <HeroPhoneMockup />
        </div>
      )}

      {activeTab === "taxi" && (
        <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-200">
          <TaxiPhoneHeroMockup />
        </div>
      )}

      {activeTab === "partner" && (
        <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-200">
          <PartnerPhoneMockup />
        </div>
      )}

      {activeTab === "delivery" && (
        <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-200">
          <DeliveryPhoneMockup />
        </div>
      )}
    </div>
  );
};
