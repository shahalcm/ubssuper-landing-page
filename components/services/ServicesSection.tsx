"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "./ServiceCard";
import { Layers } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-100/70 border border-green-200 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Unified Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Everything You Need, In One Place
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From everyday essentials to travel, healthcare and opportunities,
            UBSSuper brings essential services together.
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              iconName={service.icon}
              badge={service.badge}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
