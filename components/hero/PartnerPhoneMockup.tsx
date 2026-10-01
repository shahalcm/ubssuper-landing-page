"use client";

import React from "react";
import Image from "next/image";
import {
  Store,
  TrendingUp,
  PackageCheck,
  Clock,
  CheckCircle2,
  BellRing,
  LayoutDashboard,
  Layers,
  Users,
  BadgePercent,
  Star,
  DollarSign,
  CalendarCheck,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const PartnerPhoneMockup = ({ compact = false }: { compact?: boolean }) => {
  return (
    <div className={`relative mx-auto ${compact ? "max-w-72 sm:max-w-80" : "max-w-85 sm:max-w-95 lg:max-w-100"}`}>
      {/* Ambient Blue Glow */}
      <div
        className="absolute -inset-4 bg-linear-to-tr from-blue-600/25 via-indigo-500/20 to-cyan-500/15 rounded-[50px] blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Floating Card 1: New Order Alert */}
      <div className="absolute -top-5 -left-4 sm:-left-8 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-blue-500/40 items-center gap-2.5 animate-float-slow hidden sm:flex">
        <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
          <BellRing className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-white">New Order #8302</span>
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
          </div>
          <span className="text-[10px] text-gray-400">Grocery Restock • Ready to prep</span>
        </div>
      </div>

      {/* Floating Card 2: Live Revenue */}
      <div className="absolute top-1/2 -right-4 sm:-right-8 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-2.5 shadow-2xl border border-blue-500/40 items-center gap-2.5 animate-float-reverse hidden sm:flex">
        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] text-gray-400 block">Today&apos;s Store Revenue</span>
          <span className="text-xs font-extrabold text-blue-300">Live Partner Analytics</span>
        </div>
      </div>

      {/* PHONE FRAME */}
      <div className="relative mx-auto rounded-[44px] border-9 border-gray-800 bg-gray-950 shadow-2xl shadow-black/80 overflow-hidden ring-2 ring-blue-500/30">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-gray-900 rounded-full z-30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-950 mr-2" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
        </div>

        {/* Screen Container */}
        <div className="bg-gray-950 text-white h-150 sm:h-165 overflow-y-auto no-scrollbar flex flex-col pt-6">
          {/* Partner App Header */}
          <div className="px-4 pt-2 pb-3 flex items-center justify-between border-b border-gray-850">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-white p-0.5 shadow-sm border border-blue-400/40">
                <Image
                  src={APP_LINKS.partner.logo}
                  alt="UBS Partner"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-white">UBS Partner</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    Store Open
                  </span>
                </div>
                <span className="text-[10px] text-gray-400">Greenwood Bistro & Market</span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold text-xs">
              GB
            </div>
          </div>

          {/* Quick Business Metrics */}
          <div className="px-4 py-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                <span className="text-[9px] uppercase font-bold text-gray-400 block">Orders</span>
                <span className="text-sm font-extrabold text-white">28</span>
                <span className="text-[8px] text-blue-400 block">4 active now</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-900 border border-blue-500/30 bg-blue-950/20">
                <span className="text-[9px] uppercase font-bold text-blue-300 block">Earnings</span>
                <span className="text-sm font-extrabold text-blue-400">Today</span>
                <span className="text-[8px] text-gray-400 block">Fulfillments</span>
              </div>
              <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800">
                <span className="text-[9px] uppercase font-bold text-gray-400 block">Rating</span>
                <span className="text-sm font-extrabold text-amber-400 flex items-center gap-0.5">
                  4.9 <Star className="w-2.5 h-2.5 fill-amber-400" />
                </span>
                <span className="text-[8px] text-gray-400 block">Verified pro</span>
              </div>
            </div>
          </div>

          {/* Active Orders List */}
          <div className="px-4 mb-3 space-y-2 flex-1">
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400">
              <span>Live Partner Orders</span>
              <span className="text-blue-400 text-[10px]">Real-time Dispatch</span>
            </div>

            {/* Order Item 1 */}
            <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <PackageCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">#UBS-8291</span>
                    <span className="text-[8px] bg-emerald-500/20 text-emerald-400 font-bold px-1 rounded">
                      Ready
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400">2x Meal combo • Delivery assigned</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400">Courier Near</span>
            </div>

            {/* Order Item 2 */}
            <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">#UBS-8294</span>
                    <span className="text-[8px] bg-amber-500/20 text-amber-400 font-bold px-1 rounded">
                      Prep
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400">Farm Fresh Basket • 8 min left</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-blue-400">In Kitchen</span>
            </div>

            {/* Order Item 3 */}
            <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Store className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">#UBS-8302</span>
                    <span className="text-[8px] bg-blue-500 text-white font-bold px-1 rounded animate-pulse">
                      New
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-300">Grocery Pantry Restock</span>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-md">
                Accept
              </span>
            </div>
          </div>

          {/* Quick Management Shortcuts */}
          <div className="px-4 mb-3">
            <div className="grid grid-cols-4 gap-1.5 text-center">
              <div className="p-1.5 bg-gray-900 rounded-lg border border-gray-850">
                <Layers className="w-3.5 h-3.5 mx-auto text-blue-400 mb-0.5" />
                <span className="text-[8px] text-gray-300 block">Catalog</span>
              </div>
              <div className="p-1.5 bg-gray-900 rounded-lg border border-gray-850">
                <CalendarCheck className="w-3.5 h-3.5 mx-auto text-blue-400 mb-0.5" />
                <span className="text-[8px] text-gray-300 block">Bookings</span>
              </div>
              <div className="p-1.5 bg-gray-900 rounded-lg border border-gray-850">
                <BadgePercent className="w-3.5 h-3.5 mx-auto text-blue-400 mb-0.5" />
                <span className="text-[8px] text-gray-300 block">Payouts</span>
              </div>
              <div className="p-1.5 bg-gray-900 rounded-lg border border-gray-850">
                <Users className="w-3.5 h-3.5 mx-auto text-blue-400 mb-0.5" />
                <span className="text-[8px] text-gray-300 block">Customers</span>
              </div>
            </div>
          </div>

          {/* Bottom App Navigation */}
          <div className="mt-auto bg-gray-900 border-t border-gray-800 px-4 py-2.5 flex items-center justify-between text-gray-400">
            <div className="flex flex-col items-center text-blue-400">
              <LayoutDashboard className="w-4 h-4" />
              <span className="text-[8px] font-bold">Dashboard</span>
            </div>
            <div className="flex flex-col items-center">
              <PackageCheck className="w-4 h-4" />
              <span className="text-[8px]">Orders</span>
            </div>
            <div className="flex flex-col items-center">
              <Store className="w-4 h-4" />
              <span className="text-[8px]">Store</span>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[8px]">Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
