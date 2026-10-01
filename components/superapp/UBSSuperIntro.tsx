"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Layers,
  Car,
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Truck,
  Stethoscope,
  Store,
  Tv,
  CheckCircle2,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";
import { HeroPhoneMockup } from "@/components/hero/HeroPhoneMockup";

export const UBSSuperIntro = () => {
  const categories = [
    { emoji: "🚕", name: "Taxi", desc: "Fast rides & transport", icon: Car },
    { emoji: "🛒", name: "Grocery", desc: "Fresh pantry essentials", icon: ShoppingBag },
    { emoji: "🍔", name: "Food", desc: "Hot meals & dining", icon: UtensilsCrossed },
    { emoji: "🏨", name: "Hotels", desc: "Stays & room booking", icon: Hotel },
    { emoji: "🚚", name: "Logistics", desc: "Parcel & cargo freight", icon: Truck },
    { emoji: "👨‍⚕️", name: "Doctors", desc: "Appointments & clinics", icon: Stethoscope },
    { emoji: "🛍️", name: "Marketplace", desc: "Retail products & goods", icon: Store },
    { emoji: "🔌", name: "Appliances", desc: "Home electronics & care", icon: Tv },
  ];

  return (
    <section
      id="ubssuper"
      className="py-24 sm:py-32 bg-linear-to-b from-[#111827] via-gray-950 to-[#0A1610] text-white relative overflow-hidden border-t-2 border-green-500/30 border-b border-gray-850"
    >
      {/* Green ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-140 h-140 bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & 8 Categories (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Customer / Consumer Super App</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-12 relative rounded-2xl overflow-hidden bg-white p-1 border-2 border-green-500 shadow-md">
                <Image
                  src={APP_LINKS.ubssuper.logo}
                  alt="UBSSuper Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black text-white">
                UBS<span className="text-[#16A34A]">Super</span>
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Everything You Need.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-300 to-green-500">
                One Super App.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              UBSSuper is the main customer-facing Super App. Book food, hotels, taxis, daily groceries, logistics, medical care, and shop marketplace items from a single, unified interface.
            </p>

            {/* 8 Categories Grid */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-extrabold text-green-400 block mb-3 text-left">
                8 Integrated Consumer Services
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="p-3 rounded-2xl bg-gray-900/80 border border-gray-800 hover:border-green-500/40 hover:bg-gray-850 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-lg">{cat.emoji}</span>
                      <div className="w-6 h-6 rounded-lg bg-green-500/15 text-green-400 flex items-center justify-center">
                        <cat.icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{cat.name}</span>
                      <span className="text-[10px] text-gray-400 leading-tight block">{cat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <PlayStoreButton
                href={APP_LINKS.ubssuper.playStoreUrl}
                variant="ubssuper"
                size="lg"
                label="DOWNLOAD"
                appTitle="UBSSuper"
                className="w-full sm:w-auto text-base"
              />

              <Link
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gray-900 hover:bg-gray-850 text-white font-bold border border-gray-700 transition-all hover:border-green-500/50"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-green-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <HeroPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
