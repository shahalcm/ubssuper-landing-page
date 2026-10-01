"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Navigation,
  Compass,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Bike,
  Package,
  BellRing,
  DollarSign,
  TrendingUp,
  Truck,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const DeliveryPhoneMockup = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={`relative mx-auto ${compact ? "max-w-72 sm:max-w-80" : "max-w-85 sm:max-w-95 lg:max-w-100"}`}>
      {/* Ambient Orange Glow */}
      <div
        className="absolute -inset-4 bg-linear-to-tr from-orange-600/25 via-amber-500/20 to-red-500/15 rounded-[50px] blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Floating Card 1: New Delivery Request */}
      <div className="absolute -top-5 -right-4 sm:-right-8 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-orange-500/40 items-center gap-2.5 animate-float-slow hidden sm:flex">
        <div className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
          <Package className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-white">Delivery Request</span>
            <span className="text-[8px] bg-orange-500 text-white font-bold px-1 rounded">
              Near You
            </span>
          </div>
          <span className="text-[10px] text-gray-400">Pickup: Greenwood Bistro • 1.2 km</span>
        </div>
      </div>

      {/* Floating Card 2: Live Navigation */}
      <div className="absolute top-1/2 -left-4 sm:-left-8 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-orange-500/40 items-center gap-2.5 animate-float-reverse hidden sm:flex">
        <div className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0">
          <Compass className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Turn Right in 200m</span>
          <span className="text-[10px] text-orange-300">Live Turn-by-Turn GPS</span>
        </div>
      </div>

      {/* PHONE FRAME */}
      <div className="relative mx-auto rounded-[44px] border-9 border-gray-800 bg-gray-950 shadow-2xl shadow-black/80 overflow-hidden ring-2 ring-orange-500/30">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-gray-900 rounded-full z-30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-950 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-950/80" />
        </div>

        {/* Screen Container */}
        <div className="bg-gray-950 text-white h-150 sm:h-165 overflow-y-auto no-scrollbar flex flex-col pt-6">
          {/* Delivery App Header */}
          <div className="px-4 pt-2 pb-3 flex items-center justify-between border-b border-gray-850">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-white p-0.5 shadow-sm border border-orange-400/40">
                <Image
                  src={APP_LINKS.delivery.logo}
                  alt="UBS Delivery"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-white">UBS Delivery</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">Courier ID: #UB-D904</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/40 flex items-center justify-center font-bold text-xs">
              4.9★
            </div>
          </div>

          {/* Active Delivery Status Card */}
          <div className="px-4 my-2.5">
            <div className="p-3 rounded-2xl bg-linear-to-r from-orange-950/60 to-gray-900 border border-orange-500/40 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase font-extrabold text-orange-400 tracking-wider flex items-center gap-1">
                  <Navigation className="w-3 h-3 text-orange-400 animate-pulse" /> Active Trip #8291
                </span>
                <span className="text-[10px] bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded-full border border-orange-500/30">
                  ETA 6 mins
                </span>
              </div>

              {/* Route line visual */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500 border-2 border-white shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] text-gray-400 uppercase font-semibold block">Pickup</span>
                    <span className="text-xs font-bold text-white truncate block">
                      Greenwood Bistro (Order Ready)
                    </span>
                  </div>
                </div>

                <div className="w-0.5 h-3 bg-orange-400/60 ml-1.25" />

                <div className="flex items-start gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-white shrink-0 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] text-emerald-400 uppercase font-semibold block">Drop-Off</span>
                    <span className="text-xs font-bold text-white truncate block">
                      Grand Heights Apt 5B, 9th Blvd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Simulation & Navigation Guidance */}
          <div className="px-4 mb-3">
            <div className="relative rounded-2xl bg-gray-900 border border-gray-800 p-3 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] bg-size-[14px_14px] opacity-25 rounded-2xl" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Turn right onto Oakway Ave</span>
                    <span className="text-[10px] text-orange-400">In 180 meters • Fastest Route</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 bg-gray-800 px-2 py-1 rounded-lg">
                  GPS Live
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Partner Stats / Daily Summary */}
          <div className="px-4 mb-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-center">
                <span className="text-[8px] uppercase font-bold text-gray-400 block">Deliveries</span>
                <span className="text-xs font-extrabold text-white">12 completed</span>
              </div>
              <div className="p-2 rounded-xl bg-gray-900 border border-orange-500/30 text-center bg-orange-950/20">
                <span className="text-[8px] uppercase font-bold text-orange-300 block">Earnings</span>
                <span className="text-xs font-extrabold text-orange-400">Daily Payout</span>
              </div>
              <div className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-center">
                <span className="text-[8px] uppercase font-bold text-gray-400 block">On-Time</span>
                <span className="text-xs font-extrabold text-emerald-400">99.2%</span>
              </div>
            </div>
          </div>

          {/* Action Button: Confirm Delivery Milestone */}
          <div className="px-4 mt-auto mb-3">
            <a
              href={APP_LINKS.delivery.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-extrabold text-center text-xs rounded-xl shadow-lg shadow-orange-500/20 transition-transform active:scale-98"
            >
              Swipe to Confirm Delivery
            </a>
          </div>

          {/* Bottom App Navigation */}
          <div className="bg-gray-900 border-t border-gray-800 px-4 py-2 flex items-center justify-between text-gray-400">
            <div className="flex flex-col items-center text-orange-400">
              <Navigation className="w-3.5 h-3.5" />
              <span className="text-[8px] font-bold">Trips</span>
            </div>
            <div className="flex flex-col items-center">
              <Compass className="w-3.5 h-3.5" />
              <span className="text-[8px]">Routes</span>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="text-[8px]">Earnings</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-3.5 h-3.5" />
              <span className="text-[8px]">Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
