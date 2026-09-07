"use client";

import React from "react";
import { TAXI_FEATURES } from "@/lib/constants";
import {
  Zap,
  Sliders,
  MapPin,
  Navigation,
  UserCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Sliders,
  MapPin,
  Navigation,
  UserCheck,
  Smartphone,
};

export const TaxiFeaturesSection = () => {
  return (
    <section
      id="taxi-features"
      className="py-20 sm:py-28 bg-[#0B0F19] text-white border-y border-gray-850 relative overflow-hidden"
    >
      {/* Yellow accent background glow */}
      <div
        className="absolute top-1/2 -left-40 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Ride Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Everything You Need for a Better Ride
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            UBS Super Taxi makes ride booking simple from pickup to destination.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TAXI_FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div
                key={feature.id}
                className="bg-gray-900/90 rounded-3xl p-7 border border-gray-800 hover:border-yellow-400/50 hover:bg-gray-850 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon & Counter */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-gray-950 transition-all duration-300 shadow-xs border border-yellow-400/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
