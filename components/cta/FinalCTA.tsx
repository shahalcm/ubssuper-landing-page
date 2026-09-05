"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Shield, CheckCircle } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const FinalCTA = () => {
  return (
    <section id="download" className="py-20 sm:py-32 bg-gray-950 text-white relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute top-0 left-1/4 w-125 h-125 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-125 h-125 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Logos Presentation */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8">
          {/* Green UBSSuper Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-2xl overflow-hidden bg-white p-1.5 shadow-xl shadow-green-600/20 border-2 border-green-500 hover:scale-105 transition-transform">
            <Image
              src={APP_LINKS.ubssuper.logo}
              alt="UBSSuper Green Logo"
              fill
              className="object-contain"
            />
          </div>

          <span className="text-2xl font-light text-gray-600">&</span>

          {/* Yellow UBS Super Taxi Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 relative rounded-2xl overflow-hidden bg-yellow-400 p-1.5 shadow-xl shadow-yellow-500/20 border-2 border-yellow-300 hover:scale-105 transition-transform">
            <Image
              src={APP_LINKS.taxi.logo}
              alt="UBS Super Taxi Yellow Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Everything You Need. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-300 to-yellow-400">
            One App.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Discover a smarter and more convenient way to manage everyday services.
          Download our apps from Google Play and start booking in seconds.
        </p>

        {/* Dual Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
          {/* UBSSuper Download Button */}
          <PlayStoreButton
            href={APP_LINKS.ubssuper.playStoreUrl}
            variant="ubssuper"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBSSuper App"
            className="w-full sm:w-auto text-base"
          />

          {/* UBS Super Taxi Download Button */}
          <PlayStoreButton
            href={APP_LINKS.taxi.playStoreUrl}
            variant="taxi"
            size="lg"
            label="DOWNLOAD"
            appTitle="UBS Super Taxi"
            className="w-full sm:w-auto text-base"
          />
        </div>

        {/* Trust Note */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-400" />
            Official Google Play Distribution
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-yellow-400" />
            Secure & Verified Android Apps
          </span>
        </div>
      </div>
    </section>
  );
};
