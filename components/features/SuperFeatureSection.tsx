"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle, Sparkles, Shield, Smartphone, Zap } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const SuperFeatureSection = () => {
  const features = [
    "Multiple services in one app",
    "Easy booking",
    "Smooth user experience",
    "Secure and reliable platform",
    "Time-saving convenience",
    "Designed for everyday needs",
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 -left-48 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Card with Green UBSSuper Branding */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-linear-to-br from-green-500/10 via-emerald-50 to-white p-8 sm:p-10 rounded-[36px] border border-green-200/80 shadow-xl shadow-green-600/5 text-center">
              {/* Green UBSSuper Logo */}
              <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 relative rounded-3xl overflow-hidden bg-white shadow-lg shadow-green-600/15 p-2 border border-green-200 mb-6 transition-transform hover:scale-105 duration-300">
                <Image
                  src={APP_LINKS.ubssuper.logo}
                  alt="UBSSuper Official Green Logo"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>All-in-One Super App</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight mb-2">
                UBSSuper
              </h3>

              <p className="text-sm font-medium text-gray-600 italic mb-6">
                &ldquo;Book food, hotels, taxis & more in one app.&rdquo;
              </p>

              {/* Mini highlights */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-green-200/60 text-left">
                <div className="p-3 bg-white/90 rounded-2xl border border-green-100 shadow-2xs">
                  <span className="text-xs text-gray-500 block">Ecosystem</span>
                  <span className="text-sm font-bold text-gray-900">8+ Services</span>
                </div>
                <div className="p-3 bg-white/90 rounded-2xl border border-green-100 shadow-2xs">
                  <span className="text-xs text-gray-500 block">Availability</span>
                  <span className="text-sm font-bold text-[#16A34A]">24/7 Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Features Checkmarks & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-[#16A34A] text-xs font-bold uppercase tracking-wider">
              <span>Your Everyday World, Connected</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Meet UBSSuper
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              UBSSuper brings multiple services together in one convenient platform,
              helping you save time and manage your daily needs from a single app.
            </p>

            {/* Feature List (Checkmarks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-green-200 hover:bg-green-50/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 text-[#16A34A] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <PlayStoreButton
                href={APP_LINKS.ubssuper.playStoreUrl}
                variant="ubssuper"
                size="lg"
                label="DOWNLOAD UBSSUPER ON"
                appTitle="Google Play"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
