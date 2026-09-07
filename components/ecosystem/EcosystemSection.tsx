"use client";

import React from "react";
import Image from "next/image";
import {
  Utensils,
  ShoppingBag,
  Car,
  Hotel,
  Stethoscope,
  Briefcase,
  Building2,
  Wrench,
  MapPin,
  Sliders,
  UserCheck,
  Navigation,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const EcosystemSection = () => {
  const superAppServices = [
    { name: "Food Ordering", icon: Utensils },
    { name: "Grocery Delivery", icon: ShoppingBag },
    { name: "Taxi Booking", icon: Car },
    { name: "Hotels & Stays", icon: Hotel },
    { name: "Doctors & Health", icon: Stethoscope },
    { name: "Jobs & Careers", icon: Briefcase },
    { name: "Real Estate", icon: Building2 },
    { name: "Everyday Services", icon: Wrench },
  ];

  const taxiServices = [
    { name: "Ride Booking", icon: Car },
    { name: "Pickup & Destination", icon: MapPin },
    { name: "Ride Selection", icon: Sliders },
    { name: "Driver Information", icon: UserCheck },
    { name: "Live Ride Tracking", icon: Navigation },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#111827] text-white relative overflow-hidden border-b border-gray-850">
      {/* Background gradients */}
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>Unified Digital Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The UBS Ecosystem
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Whether you want a complete everyday super app or a dedicated taxi booking app,
            UBS connects you to the right experience.
          </p>
        </div>

        {/* Ecosystem Visual Bridge Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: GREEN UBSSuper (5 Cols) */}
          <div className="lg:col-span-5 bg-linear-to-b from-green-950/40 via-gray-900/90 to-gray-900 rounded-[36px] p-8 border-2 border-green-500/40 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-800 mb-6">
                <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-white p-1 shadow-md shrink-0 border border-green-400">
                  <Image src={APP_LINKS.ubssuper.logo} alt="UBSSuper" fill className="object-contain" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                    All-in-One Super App
                  </span>
                  <h3 className="text-2xl font-black text-white">UBSSuper</h3>
                  <p className="text-xs text-gray-400">&ldquo;Everything in One App&rdquo;</p>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-2.5 mb-8">
                {superAppServices.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={srv.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-950/60 border border-gray-850 text-xs font-semibold text-gray-200"
                    >
                      <div className="w-6 h-6 rounded-lg bg-green-500/15 text-green-400 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{srv.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA */}
            <PlayStoreButton
              href={APP_LINKS.ubssuper.playStoreUrl}
              variant="ubssuper"
              size="md"
              label="DOWNLOAD"
              appTitle="UBSSuper App"
              className="w-full"
            />
          </div>

          {/* CENTER: Central Connector (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-6 lg:py-0">
            <div className="flex lg:flex-col items-center gap-3">
              <div className="h-0.5 w-12 lg:w-0.5 lg:h-24 bg-linear-to-r lg:bg-linear-to-b from-green-500 via-white to-yellow-400" />
              <div className="px-4 py-2.5 rounded-2xl bg-gray-950 border border-gray-700 shadow-2xl text-center shrink-0">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-400 block">
                  Shared Core
                </span>
                <span className="text-xs font-black text-white">UBS Ecosystem</span>
              </div>
              <div className="h-0.5 w-12 lg:w-0.5 lg:h-24 bg-linear-to-r lg:bg-linear-to-b from-yellow-400 via-white to-green-500" />
            </div>
          </div>

          {/* RIGHT: YELLOW UBS Super Taxi (5 Cols) */}
          <div className="lg:col-span-5 bg-linear-to-b from-yellow-950/40 via-gray-900/90 to-gray-900 rounded-[36px] p-8 border-2 border-yellow-400/50 shadow-2xl shadow-yellow-500/5 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-gray-800 mb-6">
                <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-yellow-400 p-1 shadow-md shrink-0 border border-yellow-300">
                  <Image src={APP_LINKS.taxi.logo} alt="UBS Super Taxi" fill className="object-contain" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
                    Dedicated Taxi App
                  </span>
                  <h3 className="text-2xl font-black text-white">UBS Super Taxi</h3>
                  <p className="text-xs text-gray-400">&ldquo;Dedicated Ride Booking&rdquo;</p>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-2.5 mb-8">
                {taxiServices.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <div
                      key={srv.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-950/60 border border-gray-850 text-xs font-semibold text-gray-200"
                    >
                      <div className="w-6 h-6 rounded-lg bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{srv.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA */}
            <PlayStoreButton
              href={APP_LINKS.taxi.playStoreUrl}
              variant="taxi"
              size="md"
              label="DOWNLOAD"
              appTitle="UBS Super Taxi"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
