"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, Car, Layers } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const AppComparison = () => {
  const comparisonRows = [
    {
      feature: "Primary Focus",
      ubssuper: "All-in-One Everyday Services",
      taxi: "Dedicated Taxi & Ride Booking",
    },
    {
      feature: "Target Audience",
      ubssuper: "Users seeking food, grocery, hotel, doctor & ride services",
      taxi: "Users primarily looking for fast city rides & transport",
    },
    {
      feature: "Ride Booking",
      ubssuper: "Integrated within services tab",
      taxi: "Instant launch to ride screen & map",
    },
    {
      feature: "Vehicle Selection",
      ubssuper: "Standard booking",
      taxi: "Complete vehicle class customization",
    },
    {
      feature: "Additional Services",
      ubssuper: "Food, Groceries, Stays, Healthcare, Real Estate, Jobs",
      taxi: "Focused transportation suite",
    },
    {
      feature: "Google Play Release",
      ubssuper: "Official Android app",
      taxi: "Official Android app",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white border-b border-gray-850">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Choose the Experience You Need
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Understand which app best matches your lifestyle and immediate needs.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: UBSSuper */}
          <div className="bg-gray-900/90 rounded-4xl p-8 border border-green-500/30 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-800">
                <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-white p-1 shrink-0 border border-green-400">
                  <Image src={APP_LINKS.ubssuper.logo} alt="UBSSuper Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">UBSSuper</h3>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                    All-in-One Super App
                  </span>
                </div>
              </div>

              <div className="py-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  For users who want access to multiple everyday services — food, groceries, rides, hotel stays, healthcare, real estate, and jobs in one place.
                </p>
              </div>

              <div className="space-y-3 pb-8">
                {comparisonRows.map((row) => (
                  <div key={row.feature} className="text-xs border-b border-gray-850 pb-2.5">
                    <span className="text-gray-500 block">{row.feature}</span>
                    <span className="text-gray-200 font-medium">{row.ubssuper}</span>
                  </div>
                ))}
              </div>
            </div>

            <PlayStoreButton
              href={APP_LINKS.ubssuper.playStoreUrl}
              variant="ubssuper"
              size="lg"
              label="DOWNLOAD"
              appTitle="UBSSuper App"
              className="w-full text-sm"
            />
          </div>

          {/* Card 2: UBS Super Taxi */}
          <div className="bg-gray-900/90 rounded-4xl p-8 border-2 border-yellow-400/60 flex flex-col justify-between shadow-xl shadow-yellow-500/5 ring-1 ring-yellow-400/30">
            <div>
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-800">
                <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-yellow-400 p-1 shrink-0 border border-yellow-300">
                  <Image src={APP_LINKS.taxi.logo} alt="UBS Super Taxi Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">UBS Super Taxi</h3>
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                    Dedicated Taxi App
                  </span>
                </div>
              </div>

              <div className="py-6">
                <p className="text-sm text-gray-300 leading-relaxed">
                  For users primarily looking for taxi and ride booking with direct launch to the map, fast driver matching, and custom vehicle tiers.
                </p>
              </div>

              <div className="space-y-3 pb-8">
                {comparisonRows.map((row) => (
                  <div key={row.feature} className="text-xs border-b border-gray-850 pb-2.5">
                    <span className="text-gray-500 block">{row.feature}</span>
                    <span className="text-yellow-200 font-medium">{row.taxi}</span>
                  </div>
                ))}
              </div>
            </div>

            <PlayStoreButton
              href={APP_LINKS.taxi.playStoreUrl}
              variant="taxi"
              size="lg"
              label="DOWNLOAD"
              appTitle="UBS Super Taxi"
              className="w-full text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
