"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const UBSSuperIntro = () => {
  const highlights = [
    "Grocery Shopping & Essentials",
    "Quick Food Delivery",
    "Integrated Taxi Booking",
    "Hotel Reservations",
    "Doctor & Medical Appointments",
    "Real Estate & Job Opportunities",
  ];

  return (
    <section
      id="ubssuper"
      className="py-24 sm:py-32 bg-linear-to-b from-[#111827] via-gray-950 to-[#0B1510] text-white relative overflow-hidden border-t-2 border-green-500/30"
    >
      {/* Green ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-125 h-125 bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Green UBSSuper Brand Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-linear-to-br from-green-950/80 via-gray-900 to-gray-950 p-8 sm:p-10 rounded-[36px] border border-green-500/30 shadow-2xl shadow-green-950/40 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* GREEN LOGO strictly for UBSSuper */}
              <div className="mx-auto w-28 h-28 sm:w-32 sm:h-32 relative rounded-3xl overflow-hidden bg-white shadow-xl shadow-green-600/20 p-2 border-2 border-green-500/40 mb-6 transition-transform hover:scale-105 duration-300">
                <Image
                  src={APP_LINKS.ubssuper.logo}
                  alt="UBSSuper Official Green Logo"
                  fill
                  priority
                  className="object-contain p-2"
                />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>All-in-One Super App</span>
              </div>

              <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                UBSSuper
              </h3>

              <p className="text-sm font-medium text-green-200/90 italic mb-6">
                &ldquo;Book food, hotels, taxis & more in one app.&rdquo;
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800 text-left">
                <div className="p-3 bg-gray-900/90 rounded-2xl border border-gray-800">
                  <span className="text-xs text-gray-400 block">Services</span>
                  <span className="text-sm font-bold text-white">8 in One</span>
                </div>
                <div className="p-3 bg-gray-900/90 rounded-2xl border border-gray-800">
                  <span className="text-xs text-gray-400 block">Convenience</span>
                  <span className="text-sm font-bold text-green-400">24/7 Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Highlights & Dual CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>More Than Just a Ride</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Meet UBSSuper — <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-300 to-green-500">
                Your All-in-One Super App.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              UBSSuper brings everyday services together in one convenient platform.
              From daily grocery orders and warm restaurant meals to hotel reservations, health consultations, jobs, and rides — manage all your daily needs in a single place.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-900/60 border border-gray-800 text-sm font-semibold text-gray-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-100 text-gray-950 font-bold shadow-lg transition-all"
              >
                <span>Explore UBSSuper</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <PlayStoreButton
                href={APP_LINKS.ubssuper.playStoreUrl}
                variant="ubssuper"
                size="lg"
                label="DOWNLOAD"
                appTitle="UBSSuper App"
                className="w-full sm:w-auto text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
