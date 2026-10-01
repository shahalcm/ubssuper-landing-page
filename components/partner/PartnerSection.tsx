"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Hotel,
  Car,
  Truck,
  Stethoscope,
  Tv,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  Layers,
  CalendarCheck,
  Users,
  BadgePercent,
} from "lucide-react";
import { APP_LINKS, PARTNER_CATEGORIES, PARTNER_CAPABILITIES } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { PartnerPhoneMockup } from "@/components/hero/PartnerPhoneMockup";

export const PartnerSection = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    Restaurants: UtensilsCrossed,
    "Grocery Stores": ShoppingBag,
    Hotels: Hotel,
    "Taxi Operators": Car,
    "Logistics Providers": Truck,
    "Doctors / Clinics": Stethoscope,
    "Marketplace Sellers": Store,
    "Appliance Stores": Tv,
  };

  return (
    <section
      id="partner"
      className="py-24 sm:py-32 bg-linear-to-b from-[#0B0F19] via-gray-950 to-[#0B1220] text-white relative overflow-hidden border-t-2 border-blue-500/30 border-b border-gray-850"
    >
      {/* Blue glowing ambient background */}
      <div
        className="absolute top-1/3 left-10 w-140 h-140 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Brand Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-10 border-b border-gray-800">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-18 h-18 sm:w-20 sm:h-20 relative rounded-3xl overflow-hidden bg-white p-1.5 shadow-xl shadow-blue-500/20 border-2 border-blue-400 shrink-0">
              <Image
                src={APP_LINKS.partner.logo}
                alt="UBS Partner Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Store className="w-3.5 h-3.5" />
                Business & Merchant Ecosystem
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                UBS Partner
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                &ldquo;Manage. Grow. Connect.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Play Store CTA */}
          <div className="shrink-0">
            <PlayStoreButton
              href={APP_LINKS.partner.playStoreUrl}
              variant="partner"
              size="lg"
              label="GET UBS PARTNER ON"
              appTitle="Google Play"
            />
          </div>
        </div>

        {/* Main Grid: Copy & Smartphone Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Headlines & Features (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Business Management App</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Grow Your Business <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-cyan-400">
                With UBS.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-blue-100 font-medium">
              Connect your business to the UBS ecosystem.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              UBS Partner is the dedicated business application used by merchants and service providers connected to the UBS platform. Manage incoming orders, inventory, services, customer requests, and business earnings from a unified command center.
            </p>

            {/* Conceptual Dashboard Elements Grid */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-blue-400 block mb-3 text-left">
                Business Management Capabilities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {PARTNER_CAPABILITIES.map((cap) => {
                  return (
                    <div
                      key={cap.title}
                      className="p-3.5 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-blue-500/40 hover:bg-gray-850 transition-all flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-white block mb-1">
                        {cap.title}
                      </span>
                      <span className="text-[11px] text-gray-400 leading-relaxed block">
                        {cap.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <PlayStoreButton
                href={APP_LINKS.partner.playStoreUrl}
                variant="partner"
                size="lg"
                label="DOWNLOAD"
                appTitle="UBS Partner"
                className="w-full sm:w-auto text-base"
              />

              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Free Merchant Download on Google Play</span>
              </span>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup showing Partner Dashboard (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <PartnerPhoneMockup />
          </div>
        </div>

        {/* 8 Partner Categories Grid */}
        <div className="pt-12 border-t border-gray-850">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
              Partner Categories
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
              Built for Every Type of Service & Merchant
            </h3>
            <p className="text-xs text-gray-400 mt-2">
              Whether running a bustling restaurant, a neighborhood grocery store, or a medical clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNER_CATEGORIES.map((cat) => {
              const IconComp = categoryIcons[cat.title] || Store;
              return (
                <div
                  key={cat.title}
                  className="p-5 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-850 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-850 flex items-center text-[10px] text-blue-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    <span>Integrated Partner Tools</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
