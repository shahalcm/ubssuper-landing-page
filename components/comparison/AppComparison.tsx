"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, Car, Store, Bike, Layers } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const AppComparison = () => {
  const apps = [
    {
      ...APP_LINKS.ubssuper,
      tag: "Consumer Demand",
      role: "All-in-One Super App",
      focus: "Everyday consumer services (food, groceries, stays, health & shopping)",
      userBase: "Consumers & individuals",
      keyFeature: "8 integrated service categories in 1 place",
      variant: "ubssuper" as const,
      border: "border-green-500/40 hover:border-green-400",
      accent: "text-green-400",
      pill: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    {
      ...APP_LINKS.taxi,
      tag: "Transportation",
      role: "Dedicated Taxi App",
      focus: "Direct ride requests, live tracking, vehicle classes & driver matching",
      userBase: "Commuters & passengers",
      keyFeature: "Instant map launch & 6 vehicle tiers",
      variant: "taxi" as const,
      border: "border-yellow-400/50 hover:border-yellow-300",
      accent: "text-yellow-400",
      pill: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30",
    },
    {
      ...APP_LINKS.partner,
      tag: "Merchant Supply",
      role: "Business Management App",
      focus: "Incoming orders, stock sync, service catalog & earnings oversight",
      userBase: "Shops, restaurants, hotels, clinics & sellers",
      keyFeature: "Store management & live orders dashboard",
      variant: "partner" as const,
      border: "border-blue-500/40 hover:border-blue-400",
      accent: "text-blue-400",
      pill: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      ...APP_LINKS.delivery,
      tag: "Fulfillment Fleet",
      role: "Delivery Partner App",
      focus: "Delivery requests, turn-by-turn navigation & daily trip payout tracking",
      userBase: "Delivery drivers & couriers",
      keyFeature: "GPS navigation & pickup/drop verification",
      variant: "delivery" as const,
      border: "border-orange-500/40 hover:border-orange-400",
      accent: "text-orange-400",
      pill: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Find the Right App for You
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Whether you want to order everyday essentials, book an instant ride, manage your business, or earn delivering orders — UBS has a tailored application.
          </p>
        </div>

        {/* 4 App Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className={`bg-gray-900/90 rounded-4xl p-6 sm:p-7 border ${app.border} flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5`}
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-gray-800 mb-5">
                  <div className="w-12 h-12 relative rounded-2xl overflow-hidden p-1 shrink-0 bg-white border border-gray-700">
                    <Image src={app.logo} alt={app.name} fill className="object-contain" />
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${app.pill}`}>
                    {app.tag}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">{app.name}</h3>
                <span className={`text-xs font-bold uppercase tracking-wider block mb-4 ${app.accent}`}>
                  {app.role}
                </span>

                <div className="space-y-3 pb-6 text-xs">
                  <div>
                    <span className="text-gray-500 uppercase font-bold text-[9px] block">Primary Focus</span>
                    <span className="text-gray-200 font-medium">{app.focus}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase font-bold text-[9px] block">Target User</span>
                    <span className="text-gray-200 font-medium">{app.userBase}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase font-bold text-[9px] block">Core Capability</span>
                    <span className="text-gray-200 font-medium">{app.keyFeature}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <PlayStoreButton
                  href={app.playStoreUrl}
                  variant={app.variant}
                  size="md"
                  label="DOWNLOAD"
                  appTitle={app.name}
                  className="w-full text-xs font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
