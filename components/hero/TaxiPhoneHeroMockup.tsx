"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Car,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Navigation,
  Sparkles,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const TaxiPhoneHeroMockup = () => {
  const [selectedTier, setSelectedTier] = useState<"mini" | "sedan" | "suv">("sedan");

  return (
    <div className="relative mx-auto max-w-85 sm:max-w-95 lg:max-w-100">
      {/* Yellow / Amber Ambient Glow */}
      <div
        className="absolute -inset-4 bg-linear-to-tr from-yellow-500/25 via-amber-400/20 to-yellow-600/10 rounded-[50px] blur-3xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Floating Card 1: Driver Found (Top Left) */}
      <div className="absolute -top-6 -left-4 sm:-left-12 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-yellow-400/40 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center shrink-0 font-bold">
          <UserCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white">Driver Found</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <span className="text-[10px] text-gray-400">Toyota Camry • Alex M.</span>
        </div>
      </div>

      {/* Floating Card 2: 5 min away (Top Right) */}
      <div className="absolute top-10 -right-4 sm:-right-10 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-yellow-400/40 items-center gap-3 animate-float-reverse hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 font-bold border border-yellow-400/30">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-yellow-400 block">5 min away</span>
          <span className="text-[10px] text-gray-400">Pickup vehicle arriving</span>
        </div>
      </div>

      {/* Floating Card 3: Ride Confirmed (Middle Left) */}
      <div className="absolute top-1/2 -left-6 sm:-left-14 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-emerald-500/40 items-center gap-3 animate-float-reverse hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Ride Confirmed</span>
          <span className="text-[10px] text-gray-400">Safe trip guaranteed</span>
        </div>
      </div>

      {/* Floating Card 4: Estimated Fare (Bottom Right) */}
      <div className="absolute bottom-24 -right-6 sm:-right-12 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-yellow-400/40 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center shrink-0 font-bold">
          <span className="text-sm font-black">$</span>
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Estimated Fare</span>
          <span className="text-[10px] text-yellow-400 font-semibold">Transparent pricing</span>
        </div>
      </div>

      {/* Floating Card 5: Your ride is on the way (Bottom Left) */}
      <div className="absolute -bottom-4 -left-4 sm:-left-8 z-20 bg-gray-900/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-gray-700 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center shrink-0">
          <Navigation className="w-5 h-5 text-gray-950" />
        </div>
        <div>
          <span className="text-xs font-bold text-white block">Your ride is on the way</span>
          <span className="text-[10px] text-gray-400">Live navigation tracking</span>
        </div>
      </div>

      {/* PHONE FRAME */}
      <div className="relative mx-auto rounded-[46px] border-10 border-gray-800 bg-gray-950 shadow-2xl shadow-black/80 overflow-hidden ring-2 ring-yellow-400/30">
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-gray-900 rounded-full z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gray-950 mr-3" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-950/60" />
        </div>

        {/* Phone Screen Container */}
        <div className="bg-gray-950 text-white h-160 sm:h-170 overflow-y-auto no-scrollbar flex flex-col pt-7">
          {/* Top Bar with Yellow Taxi Logo */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between border-b border-gray-850">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-yellow-400 p-1 shadow-sm">
                <Image
                  src={APP_LINKS.taxi.logo}
                  alt="UBS Super Taxi"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-black text-yellow-400 flex items-center gap-1">
                  UBS Super Taxi
                </span>
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5">
                  <MapPin className="w-2.5 h-2.5 text-yellow-400" /> City Center Pickup
                </span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 flex items-center justify-center font-bold text-xs">
              UB
            </div>
          </div>

          {/* Interactive Map Visual with Route Line */}
          <div className="px-5 my-3">
            <div className="relative rounded-2xl bg-linear-to-br from-gray-900 via-gray-900 to-gray-850 p-4 border border-gray-800 shadow-inner overflow-hidden">
              {/* Map grid pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 rounded-2xl" />

              <div className="relative z-10 space-y-2.5">
                {/* Pickup Marker */}
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] uppercase font-bold text-gray-400 block">Pickup</span>
                    <span className="text-xs font-semibold text-white truncate block">
                      Central Boulevard, Tower 4
                    </span>
                  </div>
                </div>

                {/* Vertical Route Line */}
                <div className="w-0.5 h-4 bg-yellow-400 ml-1.5 rounded-full" />

                {/* Destination Marker */}
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-gray-950 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] uppercase font-bold text-yellow-400 block">Destination</span>
                    <span className="text-xs font-semibold text-white truncate block">
                      Airport Terminal 2 • Departures
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ride Selection Tiers */}
          <div className="px-5 mb-3 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400">
              <span>Select Ride Option</span>
              <span className="text-yellow-400">ETA 3-5 min</span>
            </div>

            {[
              { id: "mini" as const, name: "Mini", fare: "$12.00", cap: "4 seats", icon: Car },
              { id: "sedan" as const, name: "Sedan Comfort", fare: "$16.50", cap: "4 seats", icon: Car, popular: true },
              { id: "suv" as const, name: "Super SUV", fare: "$24.00", cap: "6 seats", icon: Car },
            ].map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-yellow-400/15 border-yellow-400 shadow-sm"
                      : "bg-gray-900/90 border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                        isSelected ? "bg-yellow-400 text-gray-950" : "bg-gray-800 text-yellow-400"
                      }`}
                    >
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">{tier.name}</span>
                        {tier.popular && (
                          <span className="text-[8px] bg-yellow-400 text-gray-950 font-black px-1.5 py-0.2 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400">{tier.cap}</span>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-white">{tier.fare}</span>
                </button>
              );
            })}
          </div>

          {/* Assigned Driver Preview Card */}
          <div className="px-5 mb-3">
            <div className="p-3 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-yellow-400 flex items-center justify-center text-yellow-400 font-bold text-xs">
                  AM
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white">Alex M.</span>
                    <div className="flex items-center text-[10px] text-yellow-400 font-bold">
                      <Star className="w-2.5 h-2.5 fill-yellow-400" />
                      <span>4.95</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-400">Camry • Plate: UB-4092</span>
                </div>
              </div>
              <span className="text-[10px] text-yellow-400 font-extrabold bg-yellow-400/15 border border-yellow-400/30 px-2 py-0.5 rounded-full">
                ETA 3 min
              </span>
            </div>
          </div>

          {/* "Book Ride" Button Mockup */}
          <div className="px-5 mt-auto mb-4">
            <a
              href={APP_LINKS.taxi.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3 bg-[#FACC15] hover:bg-[#EAB308] text-gray-950 font-black text-center text-xs rounded-xl shadow-lg shadow-yellow-500/20 transition-transform active:scale-98"
            >
              Book Ride Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
