"use client";

import React from "react";
import Image from "next/image";
import {
  Car,
  Clock,
  ShieldCheck,
  Zap,
  Sliders,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { TaxiUIMockup } from "./TaxiUIMockup";

export const TaxiSection = () => {
  const taxiFeatures = [
    {
      title: "Easy Ride Booking",
      desc: "Set your location, pick your destination, and request a ride in seconds with minimal taps.",
      icon: Zap,
    },
    {
      title: "Fast Pickup",
      desc: "Smart driver dispatch routes nearby verified vehicles directly to your pickup point.",
      icon: Clock,
    },
    {
      title: "Multiple Ride Options",
      desc: "Choose between budget-friendly Economy, executive Comfort, or spacious Super Taxi XL.",
      icon: Sliders,
    },
    {
      title: "Simple Booking Experience",
      desc: "Clean interface, clear upfront fare estimates, and zero hidden surcharge surprises.",
      icon: Car,
    },
    {
      title: "Safe & Reliable Platform",
      desc: "Rigorous driver vetting, in-app ride verification, and 24/7 dedicated customer assistance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      id="taxi"
      className="py-24 sm:py-32 bg-[#111827] text-white relative overflow-hidden border-t-4 border-[#FACC15]"
    >
      {/* Yellow glowing ambient background */}
      <div
        className="absolute top-1/4 -right-40 w-150 h-150 bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-40 w-125 h-125 bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Brand Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-gray-800">
          <div className="flex items-center gap-4 text-center lg:text-left">
            {/* Strict Yellow Taxi Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-3xl overflow-hidden bg-yellow-400 p-2 shadow-xl shadow-yellow-500/20 border-2 border-yellow-300 shrink-0">
              <Image
                src={APP_LINKS.taxi.logo}
                alt="UBS Super Taxi Yellow Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3" />
                Dedicated Taxi & Ride Platform
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                UBS Super Taxi
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                Fast, reliable transportation whenever you need to travel.
              </p>
            </div>
          </div>

          {/* Quick Play Store CTA */}
          <div className="shrink-0">
            <PlayStoreButton
              href={APP_LINKS.taxi.playStoreUrl}
              variant="taxi"
              size="lg"
              label="GET UBS SUPER TAXI ON"
              appTitle="Google Play"
            />
          </div>
        </div>

        {/* Main Grid: Features & UI Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description & Feature Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <span>UBS Super Taxi</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Your Ride. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 via-yellow-400 to-amber-500">
                Your Way.
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              Book your ride quickly and conveniently with UBS Super Taxi.
              Whether commuting across town or taking an early trip to the airport, our dedicated ride platform ensures safe, transparent, and prompt transport.
            </p>

            {/* 5 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {taxiFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-yellow-400/50 transition-all hover:bg-gray-850 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Prominent Yellow CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <PlayStoreButton
                href={APP_LINKS.taxi.playStoreUrl}
                variant="taxi"
                size="lg"
                label="DOWNLOAD UBS SUPER TAXI"
                appTitle="Google Play"
                className="w-full sm:w-auto text-base"
              />
              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Compatible with Android smartphones</span>
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Taxi UI Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <TaxiUIMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
