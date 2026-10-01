"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  Navigation,
  Compass,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Package,
  Clock,
  DollarSign,
  Shield,
  UtensilsCrossed,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";
import { APP_LINKS, DELIVERY_CAPABILITIES } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { DeliveryPhoneMockup } from "@/components/hero/DeliveryPhoneMockup";

export const DeliverySection = () => {
  const useCases = [
    { title: "Food Delivery", desc: "Swift restaurant-to-customer hot meal transit", icon: UtensilsCrossed },
    { title: "Grocery Delivery", desc: "Supermarket bags, dairy, and farm essentials", icon: ShoppingBag },
    { title: "Marketplace Delivery", desc: "Parcel and retail package door deliveries", icon: Store },
    { title: "Local Express Delivery", desc: "On-demand intra-city point-to-point courier", icon: Bike },
    { title: "Business Deliveries", desc: "Scheduled commercial and store inventory drops", icon: Truck },
    { title: "Logistics Support", desc: "Last-mile fulfillment for freight and larger orders", icon: Package },
  ];

  return (
    <section
      id="delivery"
      className="py-24 sm:py-32 bg-linear-to-b from-[#111827] via-gray-950 to-[#170E08] text-white relative overflow-hidden border-t-2 border-orange-500/30 border-b border-gray-850"
    >
      {/* Orange glowing ambient background */}
      <div
        className="absolute top-1/3 right-10 w-140 h-140 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Brand Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-10 border-b border-gray-800">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-18 h-18 sm:w-20 sm:h-20 relative rounded-3xl overflow-hidden bg-white p-1.5 shadow-xl shadow-orange-500/20 border-2 border-orange-400 shrink-0">
              <Image
                src={APP_LINKS.delivery.logo}
                alt="UBS Delivery Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-1.5">
                <Bike className="w-3.5 h-3.5" />
                Delivery Partner & Courier Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                UBS Delivery
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                &ldquo;Deliver. Earn. Grow.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Play Store CTA */}
          <div className="shrink-0">
            <PlayStoreButton
              href={APP_LINKS.delivery.playStoreUrl}
              variant="delivery"
              size="lg"
              label="GET UBS DELIVERY ON"
              appTitle="Google Play"
            />
          </div>
        </div>

        {/* Main Grid: Copy & Smartphone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Headlines & Delivery Capabilities (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <span>Delivery Partner App</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
              Powering Every <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-amber-300 to-red-400">
                Delivery.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-orange-100 font-medium">
              UBS Delivery connects delivery partners with orders across the UBS ecosystem.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Serve as the essential fulfillment backbone linking local businesses with customers. Receive live delivery requests, navigate to verified pickup points and customer drop addresses, track order milestones, and monitor daily earnings.
            </p>

            {/* Core Driver Capabilities Grid */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-orange-400 block mb-3 text-left">
                Driver & Courier Capabilities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {DELIVERY_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-3.5 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-orange-500/40 hover:bg-gray-850 transition-all flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-white block mb-1">
                      {cap.title}
                    </span>
                    <span className="text-[11px] text-gray-400 leading-relaxed block">
                      {cap.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <PlayStoreButton
                href={APP_LINKS.delivery.playStoreUrl}
                variant="delivery"
                size="lg"
                label="DOWNLOAD"
                appTitle="UBS Delivery"
                className="w-full sm:w-auto text-base"
              />

              <span className="text-xs text-gray-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Available for Delivery Partners on Google Play</span>
              </span>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup showing Driver UI (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <DeliveryPhoneMockup />
          </div>
        </div>

        {/* Delivery Use Cases Grid */}
        <div className="pt-12 border-t border-gray-850">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
              Fulfillment Across the Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
              One Driver App. Multiple Delivery Opportunities.
            </h3>
            <p className="text-xs text-gray-400 mt-2">
              From fresh lunchtime restaurant meals to afternoon grocery bags and e-commerce parcels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc) => {
              const IconComp = uc.icon;
              return (
                <div
                  key={uc.title}
                  className="p-5 rounded-3xl bg-gray-900/80 border border-gray-800 hover:border-orange-500/50 hover:bg-gray-850 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                      {uc.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-normal">
                      {uc.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-850 flex items-center text-[10px] text-orange-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    <span>Real-time GPS Routing</span>
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
