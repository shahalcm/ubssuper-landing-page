"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { HeroFourPhonesMockup } from "./HeroFourPhonesMockup";

export const HeroEcosystem = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-gray-950 via-gray-900 to-[#111827] text-white"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-250 h-120 bg-linear-to-r from-green-500/10 via-yellow-500/10 to-blue-500/10 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Text Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 lg:mb-16">
          {/* Top Brand Pill with Official UBSSuper Logo */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-900/90 border border-green-500/40 shadow-lg text-xs font-bold text-green-400">
            <div className="w-5 h-5 relative rounded-md overflow-hidden bg-white p-0.5 shrink-0">
              <Image
                src={APP_LINKS.ubssuper.logo}
                alt="UBSSuper Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              One UBS Ecosystem • Four Connected Apps
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            One Ecosystem.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#22C55E] via-[#FACC15] to-[#3B82F6]">
              Four Powerful Apps.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
            UBS connects customers, businesses, drivers and delivery partners through a growing digital ecosystem.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Primary CTA: Explore Our Apps */}
            <Link
              href="#apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white hover:bg-gray-100 text-gray-950 font-black shadow-xl transition-all hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <span>Explore Our Apps</span>
              <ArrowRight className="w-4 h-4 text-gray-950" />
            </Link>

            {/* Secondary CTA: Download UBSSuper */}
            <PlayStoreButton
              href={APP_LINKS.ubssuper.playStoreUrl}
              variant="ubssuper"
              size="lg"
              label="DOWNLOAD"
              appTitle="UBSSuper"
              className="w-full sm:w-auto text-base"
            />
          </div>

          {/* Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
              <span>Consumer Super App</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>Dedicated Ride Booking</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Business Merchant Portal</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Delivery Fleet Network</span>
            </div>
          </div>
        </div>

        {/* Hero Visual: Four Smartphone Mockups */}
        <div className="mt-8">
          <HeroFourPhonesMockup />
        </div>
      </div>
    </section>
  );
};
