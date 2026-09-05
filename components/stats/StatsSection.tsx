"use client";

import React from "react";
import { STATS } from "@/lib/constants";
import { Layers, Clock, ShieldCheck, Zap } from "lucide-react";

export const StatsSection = () => {
  const icons = [Layers, Clock, ShieldCheck, Zap];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 inline-block px-3 py-1 rounded-full border border-green-200">
            One App. Multiple Possibilities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-gray-200/80 flex items-center justify-center text-green-600 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 font-normal">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
