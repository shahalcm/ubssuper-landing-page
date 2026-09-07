"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Car, Layers, CheckCircle2 } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const SplitDownloadCTA = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0F19] text-white border-b border-gray-850 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
            Download Now
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Two Apps. One Powerful Ecosystem.
          </h2>
        </div>

        {/* 2 Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SPLIT: Green UBSSuper */}
          <div className="relative rounded-[36px] bg-linear-to-br from-green-950/70 via-gray-900 to-gray-950 p-8 sm:p-12 border-2 border-green-500/40 shadow-2xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-20 h-20 relative rounded-3xl overflow-hidden bg-white p-2 shadow-lg shadow-green-500/20 border-2 border-green-400 mb-6 shrink-0">
                <Image src={APP_LINKS.ubssuper.logo} alt="UBSSuper Logo" fill className="object-contain" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-green-400 block mb-1">
                All-in-One Super App
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Everything You Need.
                <br />
                <span className="text-green-400">One Super App.</span>
              </h3>

              <p className="text-sm text-gray-300 mb-8 max-w-md font-normal leading-relaxed">
                Access food, groceries, rides, hotel reservations, doctor bookings, real estate, and job opportunities from a single unified app.
              </p>
            </div>

            <PlayStoreButton
              href={APP_LINKS.ubssuper.playStoreUrl}
              variant="ubssuper"
              size="lg"
              label="DOWNLOAD"
              appTitle="UBSSuper"
              className="w-full sm:w-auto text-base"
            />
          </div>

          {/* RIGHT SPLIT: Yellow UBS Super Taxi */}
          <div className="relative rounded-[36px] bg-linear-to-br from-yellow-950/70 via-gray-900 to-gray-950 p-8 sm:p-12 border-2 border-yellow-400/50 shadow-2xl shadow-yellow-500/10 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-20 h-20 relative rounded-3xl overflow-hidden bg-yellow-400 p-2 shadow-lg shadow-yellow-500/20 border-2 border-yellow-300 mb-6 shrink-0">
                <Image src={APP_LINKS.taxi.logo} alt="UBS Super Taxi Logo" fill className="object-contain" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 block mb-1">
                Dedicated Taxi & Ride App
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                Your Ride.
                <br />
                <span className="text-yellow-400">Your Way.</span>
              </h3>

              <p className="text-sm text-gray-300 mb-8 max-w-md font-normal leading-relaxed">
                Experience prompt pickups, clear upfront fares, vehicle tiers from Bike to Luxury, and real-time live navigation tracking.
              </p>
            </div>

            <PlayStoreButton
              href={APP_LINKS.taxi.playStoreUrl}
              variant="taxi"
              size="lg"
              label="DOWNLOAD"
              appTitle="UBS Super Taxi"
              className="w-full sm:w-auto text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
