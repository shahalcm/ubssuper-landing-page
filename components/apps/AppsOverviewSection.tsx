"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { FOUR_APPS, APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const AppsOverviewSection = () => {
  return (
    <section id="apps" className="py-24 sm:py-32 bg-[#0B0F19] text-white border-b border-gray-850 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-0 left-1/3 w-120 h-120 bg-green-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-120 h-120 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connected Platform</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            One Ecosystem. Four Apps.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Each app is designed for a different part of the UBS platform.
          </p>
        </div>

        {/* Four Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {FOUR_APPS.map((app) => {
            const isGreen = app.brandColor === "green";
            const isYellow = app.brandColor === "yellow";
            const isBlue = app.brandColor === "blue";
            const isOrange = app.brandColor === "orange";

            return (
              <div
                key={app.id}
                className={`relative rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border shadow-2xl ${
                  isGreen
                    ? "bg-linear-to-b from-green-950/40 via-gray-900/90 to-gray-950 border-green-500/40 hover:border-green-400 shadow-green-950/20"
                    : isYellow
                    ? "bg-linear-to-b from-yellow-950/40 via-gray-900/90 to-gray-950 border-yellow-400/50 hover:border-yellow-300 shadow-yellow-950/20"
                    : isBlue
                    ? "bg-linear-to-b from-blue-950/40 via-gray-900/90 to-gray-950 border-blue-500/40 hover:border-blue-400 shadow-blue-950/20"
                    : "bg-linear-to-b from-orange-950/40 via-gray-900/90 to-gray-950 border-orange-500/40 hover:border-orange-400 shadow-orange-950/20"
                }`}
              >
                <div>
                  {/* Top Bar with Official Logo and Role Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-14 h-14 relative rounded-2xl overflow-hidden p-1 shadow-lg shrink-0 border ${
                        isGreen
                          ? "bg-white border-green-400"
                          : isYellow
                          ? "bg-yellow-400 border-yellow-300"
                          : "bg-white border-gray-700"
                      }`}
                    >
                      <Image
                        src={app.logo}
                        alt={`${app.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full border ${app.badgeColor}`}
                    >
                      {app.badge}
                    </span>
                  </div>

                  {/* App Name & Card Subtitle */}
                  <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                    {app.name}
                  </h3>

                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                      isGreen
                        ? "text-green-400"
                        : isYellow
                        ? "text-yellow-400"
                        : isBlue
                        ? "text-blue-400"
                        : "text-orange-400"
                    }`}
                  >
                    &ldquo;{app.cardSubtitle}&rdquo;
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal mb-6 min-h-[48px]">
                    {app.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-gray-800">
                    <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">
                      Core Features
                    </span>
                    {app.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-200 font-medium"
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                            isGreen
                              ? "bg-green-500/20 text-green-400"
                              : isYellow
                              ? "bg-yellow-400/20 text-yellow-400"
                              : isBlue
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <PlayStoreButton
                    href={app.playStoreUrl}
                    variant={app.buttonVariant}
                    size="md"
                    label="DOWNLOAD"
                    appTitle={app.name}
                    className="w-full text-xs font-bold"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
