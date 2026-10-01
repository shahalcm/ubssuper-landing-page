"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, CheckCircle2 } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const FinalCTA = () => {
  const logos = [
    {
      name: "UBSSuper",
      logo: APP_LINKS.ubssuper.logo,
      border: "border-green-400 shadow-green-500/20 bg-white",
      pill: "bg-green-500/20 text-green-400",
      role: "Customer Super App",
    },
    {
      name: "UBS Super Taxi",
      logo: APP_LINKS.taxi.logo,
      border: "border-yellow-300 shadow-yellow-500/20 bg-yellow-400",
      pill: "bg-yellow-400/20 text-yellow-400",
      role: "Dedicated Taxi App",
    },
    {
      name: "UBS Partner",
      logo: APP_LINKS.partner.logo,
      border: "border-blue-400 shadow-blue-500/20 bg-white",
      pill: "bg-blue-500/20 text-blue-400",
      role: "Business & Merchant App",
    },
    {
      name: "UBS Delivery",
      logo: APP_LINKS.delivery.logo,
      border: "border-orange-400 shadow-orange-500/20 bg-white",
      pill: "bg-orange-500/20 text-orange-400",
      role: "Delivery Partner App",
    },
  ];

  return (
    <section id="download" className="py-24 sm:py-32 bg-gray-950 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 left-1/4 w-125 h-125 bg-green-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* All Four Logos Presentation */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          {logos.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 group transition-transform hover:scale-105 duration-200"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 relative rounded-2xl overflow-hidden p-1.5 shadow-xl border-2 ${item.border}`}
              >
                <Image
                  src={item.logo}
                  alt={`${item.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${item.pill}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Welcome to the <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-yellow-400 to-blue-400">
            UBS Ecosystem.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          One connected platform for customers, businesses, taxi partners and delivery partners.
        </p>

        {/* Four Download Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* 1. UBSSuper */}
          <PlayStoreButton
            href={APP_LINKS.ubssuper.playStoreUrl}
            variant="ubssuper"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBSSuper"
            className="w-full text-sm font-bold"
          />

          {/* 2. UBS Super Taxi */}
          <PlayStoreButton
            href={APP_LINKS.taxi.playStoreUrl}
            variant="taxi"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBS Super Taxi"
            className="w-full text-sm font-bold"
          />

          {/* 3. UBS Partner */}
          <PlayStoreButton
            href={APP_LINKS.partner.playStoreUrl}
            variant="partner"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBS Partner"
            className="w-full text-sm font-bold"
          />

          {/* 4. UBS Delivery */}
          <PlayStoreButton
            href={APP_LINKS.delivery.playStoreUrl}
            variant="delivery"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBS Delivery"
            className="w-full text-sm font-bold"
          />
        </div>

        {/* Trust Note */}
        <div className="mt-14 pt-8 border-t border-gray-850 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            Official Google Play Store Listings
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-yellow-400" />
            Verified Android Applications
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-400" />
            Seamless Cross-App Connectivity
          </span>
        </div>
      </div>
    </section>
  );
};
