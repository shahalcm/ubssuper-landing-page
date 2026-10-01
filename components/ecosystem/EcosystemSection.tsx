"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  Store,
  Bike,
  Car,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Shield,
  Smartphone,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const EcosystemSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#111827] text-white relative overflow-hidden border-b border-gray-850">
      {/* Background gradients */}
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-120 h-120 bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-120 h-120 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-yellow-400" />
            <span>Platform Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Connected Experiences. One Ecosystem.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            A cohesive digital network where customers, merchants, drivers, and delivery partners interact without friction.
          </p>
        </div>

        {/* ECOSYSTEM ARCHITECTURE VISUAL DIAGRAM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* LEFT: Multi-Tier Commerce & Services Loop (7 Cols) */}
          <div className="lg:col-span-7 bg-linear-to-b from-gray-900/90 via-gray-900/80 to-gray-950 rounded-4xl p-6 sm:p-10 border border-gray-800 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-800 mb-8">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-green-400 block mb-1">
                    Multi-Stakeholder Commerce Loop
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    Commerce & Fulfillment Stream
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  Tri-Party Sync
                </span>
              </div>

              {/* Connected Vertical / Horizontal Stepper */}
              <div className="space-y-4">
                {/* 1. CUSTOMERS / UBSSUPER */}
                <div className="p-4 rounded-2xl bg-gray-950/80 border border-green-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white p-1 shrink-0 border border-green-400 shadow-sm">
                      <Image src={APP_LINKS.ubssuper.logo} alt="UBSSuper" fill className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-green-400">1. Customers</span>
                        <span className="text-[10px] text-gray-400">Demand Layer</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">UBSSuper Consumer App</h4>
                      <p className="text-[11px] text-gray-300">Food, groceries, hotels, logistics, doctors & appliances</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-lg shrink-0 hidden sm:block">
                    Places Request
                  </span>
                </div>

                {/* Arrow Connector Down */}
                <div className="flex justify-center -my-1">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. BUSINESSES / UBS PARTNER */}
                <div className="p-4 rounded-2xl bg-gray-950/80 border border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white p-1 shrink-0 border border-blue-400 shadow-sm">
                      <Image src={APP_LINKS.partner.logo} alt="UBS Partner" fill className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-blue-400">2. Businesses</span>
                        <span className="text-[10px] text-gray-400">Supply Layer</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">UBS Partner Merchant App</h4>
                      <p className="text-[11px] text-gray-300">Restaurants, supermarkets, hotels, clinics & sellers</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-lg shrink-0 hidden sm:block">
                    Prepares Order
                  </span>
                </div>

                {/* Arrow Connector Down */}
                <div className="flex justify-center -my-1">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* 3. DELIVERY PARTNERS / UBS DELIVERY */}
                <div className="p-4 rounded-2xl bg-gray-950/80 border border-orange-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white p-1 shrink-0 border border-orange-400 shadow-sm">
                      <Image src={APP_LINKS.delivery.logo} alt="UBS Delivery" fill className="object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-orange-400">3. Delivery Partners</span>
                        <span className="text-[10px] text-gray-400">Logistics Layer</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">UBS Delivery Courier App</h4>
                      <p className="text-[11px] text-gray-300">Live navigation, route routing, and doorstep handover</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-lg shrink-0 hidden sm:block">
                    Fulfills Transit
                  </span>
                </div>

                {/* Arrow Connector Down */}
                <div className="flex justify-center -my-1">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                {/* 4. CUSTOMERS / ORDER COMPLETED */}
                <div className="p-4 rounded-2xl bg-gray-950/80 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-emerald-400">4. Customers</span>
                        <span className="text-[10px] text-gray-400">Completion</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">Order / Service Completed</h4>
                      <p className="text-[11px] text-gray-300">Delivered on time, verified payment, feedback recorded</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg shrink-0 hidden sm:block">
                    Delivered
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dedicated Transportation Stream (UBS Super Taxi) (5 Cols) */}
          <div className="lg:col-span-5 bg-linear-to-b from-gray-900/90 via-gray-900/80 to-gray-950 rounded-4xl p-6 sm:p-10 border-2 border-yellow-400/40 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-800 mb-8">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-400 block mb-1">
                    Dedicated Transportation Stream
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    UBS Super Taxi
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">
                  Direct Dispatch
                </span>
              </div>

              {/* Taxi Dedicated Flow */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-gray-950/80 border border-yellow-400/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-yellow-400 p-1 shrink-0 border border-yellow-300 shadow-sm">
                      <Image src={APP_LINKS.taxi.logo} alt="UBS Super Taxi" fill className="object-contain" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-yellow-400 block">Passenger Request</span>
                      <h4 className="text-sm font-bold text-white">Customer App</h4>
                      <p className="text-[11px] text-gray-300">Pickup, destination & vehicle selection</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-yellow-400 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-950/80 border border-yellow-400/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 border border-yellow-400/30">
                      <Car className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-yellow-400 block">Driver & Vehicle Dispatch</span>
                      <h4 className="text-sm font-bold text-white">Fleet Network</h4>
                      <p className="text-[11px] text-gray-300">Bike, Auto, Mini, Sedan, SUV, Luxury</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-yellow-400 shadow-sm">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-950/80 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-emerald-400 block">Safe Passenger Arrival</span>
                      <h4 className="text-sm font-bold text-white">Trip Completed</h4>
                      <p className="text-[11px] text-gray-300">Live navigation, upfront fare & feedback</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800">
              <PlayStoreButton
                href={APP_LINKS.taxi.playStoreUrl}
                variant="taxi"
                size="md"
                label="DOWNLOAD"
                appTitle="UBS Super Taxi"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
