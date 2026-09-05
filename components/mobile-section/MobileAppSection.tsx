"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2, Shield, Smartphone } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { HeroPhoneMockup } from "@/components/hero/HeroPhoneMockup";

export const MobileAppSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-linear-to-b from-white via-green-50/20 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-green-900 via-emerald-950 to-gray-950 rounded-[40px] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl shadow-green-950/20 border border-green-800/40">
          {/* Subtle glowing orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-green-500/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & Play Store Button (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Your Services. Always With You.
              </h2>

              <p className="text-base sm:text-lg text-green-100 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Download UBSSuper and access your everyday services from your phone.
                Whether you need food, a ride, daily groceries, or medical bookings, it is all right in your pocket.
              </p>

              {/* Quick checklist */}
              <div className="space-y-2.5 pt-2 max-w-md mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5 text-sm text-green-100">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Instant access to 8 core service categories</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-green-100">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Real-time status updates and order tracking</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-green-100">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Optimized performance for Android phones</span>
                </div>
              </div>

              {/* Exact CTA: "Get UBSSuper on Google Play" */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <PlayStoreButton
                  href={APP_LINKS.ubssuper.playStoreUrl}
                  variant="ubssuper"
                  size="lg"
                  label="GET UBSSUPER ON"
                  appTitle="Google Play"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Right Column: Phone Mockup / Visual (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px]">
                <div className="rounded-[40px] border-8 border-gray-800 bg-gray-900 shadow-2xl p-4 text-white">
                  {/* Phone screen preview */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white p-0.5">
                        <Image
                          src={APP_LINKS.ubssuper.logo}
                          alt="UBSSuper Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-bold text-white">UBSSuper</span>
                    </div>
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold">
                      Available Now
                    </span>
                  </div>

                  <div className="py-8 text-center space-y-3">
                    <div className="w-16 h-16 relative mx-auto rounded-2xl overflow-hidden bg-white shadow-md p-1">
                      <Image
                        src={APP_LINKS.ubssuper.logo}
                        alt="UBSSuper Official Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-base font-bold">UBSSuper for Android</h4>
                    <p className="text-xs text-gray-400 max-w-50 mx-auto">
                      Get the all-in-one super app on the Google Play Store today.
                    </p>
                  </div>

                  <a
                    href={APP_LINKS.ubssuper.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3 bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold text-center rounded-xl transition-colors shadow-md shadow-green-700/30"
                  >
                    Get UBSSuper on Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
