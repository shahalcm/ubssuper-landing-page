"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import {
  Layers,
  Smile,
  Zap,
  ShieldCheck,
  Sparkles,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Smile,
  Zap,
  ShieldCheck,
  Sparkles,
  Smartphone,
};

export const WhyChooseUs = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-green-600" />
            <span>Built For Reliability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Why Choose UBSSuper?
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Crafted to simplify modern everyday life with rapid access to food, rides,
            stays, healthcare, and essential services under one roof.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-green-200 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#16A34A] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#16A34A] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-gray-950 mb-2 group-hover:text-[#16A34A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
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
