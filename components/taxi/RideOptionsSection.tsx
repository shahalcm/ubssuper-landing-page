"use client";

import React from "react";
import Link from "next/link";
import {
  Bike,
  Compass,
  Car,
  CarFront,
  Truck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import { RIDE_OPTIONS, APP_LINKS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Bike,
  Compass,
  Car,
  CarFront,
  Truck,
  Sparkles,
};

export const RideOptionsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white border-y border-gray-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Car className="w-3.5 h-3.5" />
            <span>Vehicle Tiers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Choose the Ride That Fits You
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Whether traveling solo on a quick hop or heading to the airport with family,
            UBS Super Taxi provides flexible ride options suited for your journey.
          </p>
        </div>

        {/* 6 Ride Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RIDE_OPTIONS.map((ride) => {
            const Icon = iconMap[ride.icon] || Car;
            return (
              <div
                key={ride.id}
                className="bg-gray-900/90 rounded-3xl p-7 border border-gray-800 hover:border-yellow-400/50 hover:bg-gray-850 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-gray-950 transition-all duration-300 shadow-xs border border-yellow-400/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-gray-800 text-yellow-400 border border-gray-700">
                      {ride.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-yellow-400 transition-colors">
                    {ride.name}
                  </h3>
                  <p className="text-xs font-semibold text-yellow-300/80 mb-3">
                    {ride.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal mb-6">
                    {ride.description}
                  </p>
                </div>

                {/* Capacity & Action */}
                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-300 font-semibold">
                    <Users className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{ride.capacity}</span>
                  </div>

                  <a
                    href={APP_LINKS.taxi.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 hover:text-yellow-300 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Book on App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
