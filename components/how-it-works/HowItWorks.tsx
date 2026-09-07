"use client";

import React from "react";
import { UNIVERSAL_STEPS } from "@/lib/constants";
import { Sparkles } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#111827] text-white border-b border-gray-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Universal Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Simple. Fast. Convenient.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Whether booking a taxi or ordering daily essentials, the UBS experience is seamless.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {UNIVERSAL_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-gray-900/90 rounded-3xl p-7 border border-gray-800 hover:border-yellow-400/50 hover:bg-gray-850 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-mono text-yellow-400/30 group-hover:text-yellow-400 transition-colors">
                    {item.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-bold text-gray-300">
                    {idx + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
