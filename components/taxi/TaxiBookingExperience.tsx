"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Search,
  Car,
  CheckCircle2,
  Navigation,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { TAXI_BOOKING_STEPS, APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const TaxiBookingExperience = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#111827] text-white relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/3 right-1/4 w-125 h-125 bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>Interactive Booking Interface</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            From Pickup to Destination
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Follow the 4 simple stages of requesting a ride on UBS Super Taxi.
          </p>
        </div>

        {/* 2-Column Grid: Steps Navigator on Left (7 cols), Phone UI Mockup on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Interactive Steps */}
          <div className="lg:col-span-7 space-y-4">
            {TAXI_BOOKING_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-6 rounded-3xl border transition-all duration-300 flex items-start gap-5 cursor-pointer ${
                    isActive
                      ? "bg-gray-900 border-yellow-400 shadow-xl shadow-yellow-500/5 ring-1 ring-yellow-400/40"
                      : "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:bg-gray-900/80 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mono font-black text-lg shrink-0 transition-colors ${
                      isActive
                        ? "bg-yellow-400 text-gray-950 shadow-md shadow-yellow-400/30"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          isActive ? "text-yellow-400" : "text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                        {step.badge}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 flex items-center justify-between text-xs text-gray-400 px-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Tap any step to see live mockup preview
              </span>
              <span className="font-mono text-yellow-400 font-bold">
                Step 0{activeStepIndex + 1} of 04
              </span>
            </div>
          </div>

          {/* Right Column: Phone Screen Synced to Active Step */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-85 sm:max-w-95">
              <div className="rounded-[44px] border-10 border-gray-800 bg-gray-950 shadow-2xl shadow-black/80 overflow-hidden ring-2 ring-yellow-400/30">
                {/* Dynamic Island */}
                <div className="pt-2.5 pb-1 flex justify-center bg-gray-950">
                  <div className="w-24 h-3.5 bg-gray-900 rounded-full" />
                </div>

                <div className="p-5 text-white h-140 flex flex-col justify-between">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-yellow-400 p-0.5 shrink-0">
                        <Image
                          src={APP_LINKS.taxi.logo}
                          alt="UBS Super Taxi"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-black text-yellow-400">UBS Super Taxi</span>
                    </div>
                    <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">
                      STEP {TAXI_BOOKING_STEPS[activeStepIndex].step}
                    </span>
                  </div>

                  {/* Dynamic Step Content based on activeStepIndex */}
                  {activeStepIndex === 0 && (
                    <div className="space-y-4 my-auto animate-in fade-in duration-200">
                      <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800">
                        <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
                          Current Location
                        </span>
                        <div className="flex items-center gap-2 text-sm font-bold text-white">
                          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>742 Evergreen Terrace, Downtown</span>
                        </div>
                      </div>
                      <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Pickup location confirmed via GPS</span>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 1 && (
                    <div className="space-y-3 my-auto animate-in fade-in duration-200">
                      <div className="flex items-center gap-2 bg-gray-900 px-3.5 py-3 rounded-2xl border border-yellow-400/60 shadow-sm">
                        <Search className="w-4 h-4 text-yellow-400 shrink-0" />
                        <span className="text-xs font-semibold text-white">Airport Terminal 2</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                          <span className="text-gray-200">Grand Central Station</span>
                          <span className="text-[10px] text-gray-500">4.2 km</span>
                        </div>
                        <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                          <span className="text-gray-200">City Tech Park</span>
                          <span className="text-[10px] text-gray-500">6.8 km</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 2 && (
                    <div className="space-y-2.5 my-auto animate-in fade-in duration-200">
                      <div className="p-3 rounded-xl bg-yellow-400 text-gray-950 font-bold flex items-center justify-between shadow-md">
                        <div className="flex items-center gap-2">
                          <Car className="w-5 h-5" />
                          <div>
                            <div className="text-xs font-black">Super Sedan</div>
                            <div className="text-[9px] opacity-80">4 seats • Top comfort</div>
                          </div>
                        </div>
                        <span className="text-sm font-black">$16.50</span>
                      </div>
                      <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-between text-gray-300">
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs font-semibold">Mini Compact</span>
                        </div>
                        <span className="text-xs font-bold text-white">$12.00</span>
                      </div>
                    </div>
                  )}

                  {activeStepIndex === 3 && (
                    <div className="space-y-3.5 my-auto animate-in fade-in duration-200 text-center">
                      <div className="w-14 h-14 rounded-full bg-yellow-400 text-gray-950 flex items-center justify-center mx-auto font-black shadow-lg shadow-yellow-400/20">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">Ride Booked!</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Driver Alex M. arriving in 3 mins</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-[11px] text-yellow-400 font-semibold">
                        Vehicle: Toyota Camry • UB-4092
                      </div>
                    </div>
                  )}

                  {/* Play Store CTA inside Mockup */}
                  <a
                    href={APP_LINKS.taxi.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3 bg-[#FACC15] hover:bg-[#EAB308] text-gray-950 font-black text-center text-xs rounded-xl shadow-lg shadow-yellow-500/20"
                  >
                    Download UBS Super Taxi on Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
