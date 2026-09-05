"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, CheckCircle } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { HeroPhoneMockup } from "./HeroPhoneMockup";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-linear-to-b from-green-50/40 via-white to-[#F8FAFC]"
    >
      {/* Subtle background decorative shapes */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-200 h-100 bg-linear-to-r from-green-400/10 via-emerald-300/10 to-yellow-300/10 blur-3xl pointer-events-none -z-10 rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-green-200/80 shadow-xs text-xs font-semibold text-green-900">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-green-600" />
                Book food, hotels, taxis & more in one app.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-950 tracking-tight leading-[1.08]">
              Everything You Need.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#16A34A] via-[#22C55E] to-[#15803D]">
                One Super App.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              UBSSuper brings everyday services together in one powerful and easy-to-use app.
              From food and groceries to travel, healthcare, jobs and property services — everything is just a tap away.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary: Download UBSSuper Google Play */}
              <PlayStoreButton
                href={APP_LINKS.ubssuper.playStoreUrl}
                variant="ubssuper"
                size="lg"
                label="GET UBSSUPER ON"
                appTitle="Google Play"
                className="w-full sm:w-auto"
              />

              {/* Secondary: Explore Services button */}
              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-semibold border border-gray-200 shadow-sm transition-all hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Dual Product Trust Badges */}
            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1.5 font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>UBSSuper All-in-One</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-2xs">
                <CheckCircle className="w-4 h-4 text-yellow-600" />
                <span>UBS Super Taxi Ride Booking</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium text-gray-700 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-2xs">
                <Shield className="w-4 h-4 text-gray-700" />
                <span>Official Google Play Releases</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <HeroPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
