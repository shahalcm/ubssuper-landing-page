"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Car,
  MapPin,
  Search,
  Clock,
  Star,
  CheckCircle2,
  Navigation,
  Sparkles,
  Smartphone,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const TaxiScreensShowcase = () => {
  const screens = [
    {
      id: "home",
      title: "1. Taxi Home",
      subtitle: "Instant pickup dispatch",
      render: () => (
        <div className="h-full bg-gray-950 text-white flex flex-col p-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 relative rounded-lg overflow-hidden bg-yellow-400 p-0.5 shrink-0">
                <Image src={APP_LINKS.taxi.logo} alt="Logo" fill className="object-contain" />
              </div>
              <span className="text-xs font-black text-yellow-400">UBS Super Taxi</span>
            </div>
            <span className="text-[9px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">
              Online
            </span>
          </div>

          <div className="my-4 p-3 bg-gray-900 rounded-2xl border border-gray-800 flex items-center gap-2">
            <Search className="w-4 h-4 text-yellow-400 shrink-0" />
            <span className="text-xs text-gray-400">Where are you heading?</span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-3 bg-gray-900 rounded-xl border border-yellow-400/30 text-center">
              <Car className="w-6 h-6 mx-auto text-yellow-400 mb-1" />
              <span className="text-xs font-bold text-white block">City Ride</span>
              <span className="text-[9px] text-gray-400">Instant pickup</span>
            </div>
            <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 text-center">
              <Clock className="w-6 h-6 mx-auto text-gray-400 mb-1" />
              <span className="text-xs font-bold text-white block">Reserve</span>
              <span className="text-[9px] text-gray-400">Plan ahead</span>
            </div>
          </div>

          <div className="mt-auto p-3 bg-yellow-400 text-gray-950 rounded-xl text-center text-xs font-black">
            Book Ride
          </div>
        </div>
      ),
    },
    {
      id: "location",
      title: "2. Location Selection",
      subtitle: "Pinpoint accuracy",
      render: () => (
        <div className="h-full bg-gray-950 text-white flex flex-col p-4">
          <div className="text-xs font-bold text-gray-300 pb-2 border-b border-gray-800">
            Set Pickup & Dropoff
          </div>

          <div className="my-3 space-y-2">
            <div className="p-2.5 bg-gray-900 rounded-xl border border-gray-800 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="text-[11px] text-white truncate">Central Plaza, Main Entrance</span>
            </div>
            <div className="w-0.5 h-2 bg-yellow-400 ml-3 rounded-full" />
            <div className="p-2.5 bg-gray-900 rounded-xl border border-yellow-400/40 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span className="text-[11px] text-yellow-300 font-bold truncate">Airport Terminal 2</span>
            </div>
          </div>

          <div className="space-y-1.5 mt-auto">
            <span className="text-[9px] uppercase font-bold text-gray-400 block">Recent Destinations</span>
            <div className="p-2 bg-gray-900/80 rounded-lg border border-gray-800 text-[10px] text-gray-300">
              City Tech Park • 4.5 km
            </div>
            <div className="p-2 bg-gray-900/80 rounded-lg border border-gray-800 text-[10px] text-gray-300">
              Grand Central Metro • 2.1 km
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ride-selection",
      title: "3. Ride Selection",
      subtitle: "Transparent vehicle tiers",
      render: () => (
        <div className="h-full bg-gray-950 text-white flex flex-col p-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <span className="text-xs font-bold text-white">Select Vehicle</span>
            <span className="text-[10px] text-yellow-400">Best Price</span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="p-2.5 bg-yellow-400 text-gray-950 rounded-xl font-bold flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                <div>
                  <div className="text-xs font-black">Sedan</div>
                  <div className="text-[8px] opacity-80">4 seats • 3 min</div>
                </div>
              </div>
              <span className="text-xs font-black">$16.50</span>
            </div>

            <div className="p-2.5 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between text-gray-300">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-semibold">Mini</span>
              </div>
              <span className="text-xs font-bold text-white">$12.00</span>
            </div>

            <div className="p-2.5 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-between text-gray-300">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-semibold">Super XL</span>
              </div>
              <span className="text-xs font-bold text-white">$24.00</span>
            </div>
          </div>

          <div className="p-2.5 bg-yellow-400 text-gray-950 rounded-xl text-center text-xs font-black mt-auto">
            Confirm Selection
          </div>
        </div>
      ),
    },
    {
      id: "tracking",
      title: "4. Driver Tracking",
      subtitle: "Live route progress",
      render: () => (
        <div className="h-full bg-gray-950 text-white flex flex-col p-4">
          <div className="flex items-center justify-between pb-2 border-b border-gray-800">
            <span className="text-xs font-bold text-yellow-400">Driver Approaching</span>
            <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">
              ETA 3 min
            </span>
          </div>

          <div className="p-3 bg-gray-900 rounded-2xl border border-gray-800 my-auto space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-yellow-400 flex items-center justify-center text-yellow-400 font-bold text-xs">
                AM
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white">Alex M.</span>
                  <div className="flex items-center text-[9px] text-yellow-400 font-bold">
                    <Star className="w-2.5 h-2.5 fill-yellow-400" /> 4.95
                  </div>
                </div>
                <span className="text-[9px] text-gray-400">Toyota Camry • UB-4092</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-emerald-950/80 border border-emerald-800 text-emerald-300 rounded-xl text-center text-[10px] font-bold mt-auto">
            Safety PIN: 4820
          </div>
        </div>
      ),
    },
    {
      id: "confirmation",
      title: "5. Booking Confirmed",
      subtitle: "Trip completed safely",
      render: () => (
        <div className="h-full bg-gray-950 text-white flex flex-col p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-yellow-400 text-gray-950 flex items-center justify-center mx-auto my-auto font-black shadow-lg shadow-yellow-400/20">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div className="my-auto space-y-1">
            <h4 className="text-sm font-black text-white">Trip Completed</h4>
            <p className="text-[10px] text-gray-400">Thank you for riding with UBS Super Taxi</p>
            <div className="text-base font-black text-yellow-400 pt-1">$16.50 Paid</div>
          </div>

          <div className="flex justify-center gap-1.5 py-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-xl text-[10px] text-gray-300 mt-auto font-semibold">
            Receipt Sent
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#111827] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile App Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            UBS Super Taxi in Your Pocket
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Explore the clean, intuitive interface designed for Android smartphones.
          </p>
        </div>

        {/* 5 Screen Mockups Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {screens.map((screen, idx) => (
            <div
              key={screen.id}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-3">
                <span className="text-xs font-bold text-yellow-400 block">{screen.title}</span>
                <span className="text-[10px] text-gray-400">{screen.subtitle}</span>
              </div>

              {/* Smartphone Frame */}
              <div className="relative w-56 sm:w-60 h-105 rounded-[36px] border-8 border-gray-800 bg-gray-950 shadow-2xl overflow-hidden ring-1 ring-yellow-400/20 group-hover:ring-yellow-400/50 transition-all">
                {/* Dynamic island */}
                <div className="pt-2 pb-0.5 flex justify-center bg-gray-950">
                  <div className="w-16 h-2.5 bg-gray-900 rounded-full" />
                </div>

                <div className="h-[calc(100%-14px)]">{screen.render()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
