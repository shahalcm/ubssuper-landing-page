"use client";

import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>Effortless Flow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Simple. Fast. Convenient.
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Get started in seconds with a seamless three-step experience.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-[#F8FAFC] rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:bg-green-50/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl sm:text-5xl font-black text-green-600/30 font-mono tracking-tighter group-hover:text-green-600 transition-colors">
                  {item.step}
                </span>
                <span className="w-8 h-8 rounded-full bg-white shadow-2xs border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
                  {idx + 1}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-[#16A34A] transition-colors">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
