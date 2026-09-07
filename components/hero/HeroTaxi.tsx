"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, CheckCircle2, Car } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { TaxiPhoneHeroMockup } from "./TaxiPhoneHeroMockup";

export const HeroTaxi = () => {
  return (
    <section
      id="taxi-hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-gray-950 via-gray-900 to-[#111827] text-white"
    >
      {/* Yellow glowing ambient background shapes */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-200 h-100 bg-linear-to-r from-yellow-500/15 via-amber-400/10 to-yellow-600/5 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Top Brand Pill with Yellow Taxi Logo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-900/90 border border-yellow-400/40 shadow-lg text-xs font-bold text-yellow-400">
              <div className="w-5 h-5 relative rounded-md overflow-hidden bg-yellow-400 p-0.5 shrink-0">
                <Image
                  src={APP_LINKS.taxi.logo}
                  alt="UBS Super Taxi Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Fast, Simple & Reliable Rides
              </span>
            </div>

            {/* Main Headline: "Your Ride. Your Way." */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              Your Ride.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FACC15] via-[#FDE047] to-[#EAB308]">
                Your Way.
              </span>
            </h1>

            {/* Large Supporting Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-yellow-100/90 font-medium max-w-2xl mx-auto lg:mx-0 leading-snug">
              Book your ride quickly and conveniently with UBS Super Taxi.
            </p>

            {/* Additional Text */}
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Simple booking, convenient ride options and a smooth experience — all from one powerful taxi app.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary: Download UBS Super Taxi */}
              <PlayStoreButton
                href={APP_LINKS.taxi.playStoreUrl}
                variant="taxi"
                size="lg"
                label="DOWNLOAD"
                appTitle="UBS Super Taxi"
                className="w-full sm:w-auto text-base"
              />

              {/* Secondary: Explore Taxi Features */}
              <Link
                href="#taxi-features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white font-bold border border-gray-700 shadow-md transition-all hover:border-yellow-400/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <span>Explore Taxi Features</span>
                <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Trust / Contextual Indicators */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Dedicated Ride App</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Multiple Ride Classes</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-900/80 px-3 py-1.5 rounded-xl border border-gray-800 text-gray-300">
                <Shield className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Google Play Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Taxi Phone Mockup with Floating UI Cards (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <TaxiPhoneHeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
