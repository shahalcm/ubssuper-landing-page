"use client";

import React from "react";
import Image from "next/image";
import { Car, Sparkles, MapPin, Shield } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const TaxiDownloadCTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-r from-gray-950 via-gray-900 to-black text-white relative overflow-hidden border-b border-gray-800">
      {/* Yellow accent background glow */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-linear-to-br from-gray-900 via-gray-900 to-gray-850 rounded-4xl p-8 sm:p-12 border border-yellow-500/30 shadow-2xl shadow-yellow-500/5 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left info with Yellow Taxi Logo */}
          <div className="flex items-center gap-5 sm:gap-6 text-center md:text-left flex-col md:flex-row">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-3xl overflow-hidden bg-yellow-400 p-2 shadow-lg shadow-yellow-500/20 border-2 border-yellow-300 shrink-0">
              <Image
                src={APP_LINKS.taxi.logo}
                alt="UBS Super Taxi Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Car className="w-3.5 h-3.5" />
                <span>On-Demand Rides</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Ride?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl mt-1.5 leading-relaxed">
                Download UBS Super Taxi and book your next ride with ease.
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full md:w-auto">
            <PlayStoreButton
              href={APP_LINKS.taxi.playStoreUrl}
              variant="taxi"
              size="lg"
              label="DOWNLOAD UBS SUPER TAXI"
              appTitle="Google Play"
              className="w-full md:w-auto text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
