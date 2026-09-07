"use client";

import React from "react";
import { WHY_SUPER_TAXI } from "@/lib/constants";
import {
  Sparkles,
  Clock,
  Zap,
  Smartphone,
  Eye,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Clock,
  Zap,
  Smartphone,
  Eye,
  ShieldCheck,
};

export const WhySuperTaxi = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white border-t border-gray-850 relative overflow-hidden">
      {/* Background yellow ambient glow */}
      <div
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Why UBS Super Taxi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Built for Everyday Journeys
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            A focused ride experience tailored for daily work commutes, family travel, and prompt city hops.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_SUPER_TAXI.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-gray-900/90 rounded-3xl p-7 border border-gray-800 hover:border-yellow-400/50 hover:bg-gray-850 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-gray-950 transition-all duration-300 shadow-xs border border-yellow-400/20">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
