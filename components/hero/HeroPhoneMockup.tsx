"use client";

import React from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Utensils,
  ShoppingBag,
  Car,
  Hotel,
  Stethoscope,
  Building2,
  Briefcase,
  Wrench,
  CheckCircle2,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const HeroPhoneMockup = () => {
  return (
    <div className="relative mx-auto max-w-85 sm:max-w-95 lg:max-w-100">
      {/* Ambient background glow */}
      <div
        className="absolute -inset-4 bg-linear-to-tr from-green-500/20 via-emerald-400/20 to-yellow-400/20 rounded-[50px] blur-2xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Floating Card 1: Food Delivered (Top Left) */}
      <div className="absolute -top-6 -left-6 sm:-left-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-100 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
          <Utensils className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-gray-900">Food Delivered</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
          </div>
          <span className="text-[10px] text-gray-500">Fast & fresh to your door</span>
        </div>
      </div>

      {/* Floating Card 2: Ride Booked (Top Right) */}
      <div className="absolute top-12 -right-4 sm:-right-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-yellow-200/80 items-center gap-3 animate-float-reverse hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center shrink-0 font-bold">
          <Car className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-gray-900">Ride Booked</span>
            <span className="text-[9px] bg-yellow-100 text-yellow-800 font-bold px-1.5 py-0.2 rounded">
              Taxi
            </span>
          </div>
          <span className="text-[10px] text-gray-500">Driver arriving in 3 mins</span>
        </div>
      </div>

      {/* Floating Card 3: Hotel Reserved (Middle Left) */}
      <div className="absolute top-1/2 -left-8 sm:-left-14 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-100 items-center gap-3 animate-float-reverse hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
          <Hotel className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-gray-900">Hotel Reserved</span>
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          </div>
          <span className="text-[10px] text-gray-500">Best rate guaranteed</span>
        </div>
      </div>

      {/* Floating Card 4: Doctor Appointment (Bottom Right) */}
      <div className="absolute bottom-20 -right-6 sm:-right-12 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-100 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <Stethoscope className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-gray-900 block">Doctor Appointment</span>
          <span className="text-[10px] text-gray-500">Confirmed with specialist</span>
        </div>
      </div>

      {/* Floating Card 5: Groceries Delivered (Bottom Left) */}
      <div className="absolute -bottom-4 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-gray-100 items-center gap-3 animate-float-slow hidden sm:flex">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold text-gray-900 block">Groceries Delivered</span>
          <span className="text-[10px] text-gray-500">Daily essentials checked</span>
        </div>
      </div>

      {/* SMARTPHONE FRAME */}
      <div className="relative mx-auto rounded-[46px] border-10 border-gray-900 bg-gray-900 shadow-2xl shadow-gray-950/30 overflow-hidden ring-1 ring-gray-800">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4 bg-gray-900 rounded-full z-30 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gray-950/80 mr-3"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-blue-950/60"></div>
        </div>

        {/* Phone Screen Container */}
        <div className="bg-[#F8FAFC] text-gray-900 h-160 sm:h-170 overflow-y-auto no-scrollbar flex flex-col pt-7">
          {/* Top Bar inside app */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-white shadow-sm border border-green-200">
                <Image
                  src={APP_LINKS.ubssuper.logo}
                  alt="UBSSuper"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-xs font-black text-gray-950 flex items-center gap-1">
                  UBS<span className="text-[#16A34A]">Super</span>
                </span>
                <span className="text-[10px] text-gray-500 flex items-center gap-0.5">
                  <MapPin className="w-2.5 h-2.5 text-[#16A34A]" /> Current Location
                </span>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
              U
            </div>
          </div>

          {/* Search Input Mockup */}
          <div className="px-5 mb-3">
            <div className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-2xl border border-gray-200/80 shadow-xs">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-400">Search food, groceries, rides...</span>
            </div>
          </div>

          {/* Super Promo Banner */}
          <div className="px-5 mb-4">
            <div className="rounded-2xl p-4 bg-linear-to-br from-[#16A34A] to-[#15803D] text-white shadow-md shadow-green-700/20 relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full mb-1.5">
                  <Sparkles className="w-2.5 h-2.5" /> All In One App
                </span>
                <h4 className="text-sm font-bold leading-snug">
                  Book food, hotels, taxis & more in one place.
                </h4>
                <p className="text-[10px] text-green-100 mt-1">
                  Fast booking & 24/7 convenience
                </p>
              </div>
              <div className="absolute -right-4 -bottom-6 w-24 h-24 rounded-full bg-white/10 blur-sm pointer-events-none" />
            </div>
          </div>

          {/* Services Grid (All 8 main services) */}
          <div className="px-5 mb-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold text-gray-900 tracking-tight">
                Our Services
              </span>
              <span className="text-[10px] text-green-600 font-medium">8 Services</span>
            </div>

            <div className="grid grid-cols-4 gap-2.5">
              {[
                { name: "Grocery", icon: ShoppingBag, bg: "bg-emerald-50 text-emerald-600 border-emerald-200" },
                { name: "Food", icon: Utensils, bg: "bg-amber-50 text-amber-600 border-amber-200" },
                { name: "Taxi", icon: Car, bg: "bg-yellow-100 text-gray-900 border-yellow-300 font-bold" },
                { name: "Hotels", icon: Hotel, bg: "bg-indigo-50 text-indigo-600 border-indigo-200" },
                { name: "Doctor", icon: Stethoscope, bg: "bg-blue-50 text-blue-600 border-blue-200" },
                { name: "Real Estate", icon: Building2, bg: "bg-teal-50 text-teal-600 border-teal-200" },
                { name: "Jobs", icon: Briefcase, bg: "bg-purple-50 text-purple-600 border-purple-200" },
                { name: "Services", icon: Wrench, bg: "bg-rose-50 text-rose-600 border-rose-200" },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-1 bg-white p-2 rounded-xl border border-gray-100 shadow-xs hover:scale-105 transition-transform"
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.bg}`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Booking Highlight: UBS Super Taxi */}
          <div className="px-5 mb-4">
            <div className="bg-gray-900 text-white p-3 rounded-2xl shadow-sm flex items-center justify-between border border-gray-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 relative rounded-lg overflow-hidden bg-yellow-400 p-1">
                  <Image
                    src={APP_LINKS.taxi.logo}
                    alt="UBS Super Taxi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-yellow-400">UBS Super Taxi</div>
                  <div className="text-[9px] text-gray-300">Fast ride booking in seconds</div>
                </div>
              </div>
              <span className="text-[10px] font-bold bg-yellow-400 text-gray-950 px-2.5 py-1 rounded-full">
                Book Ride
              </span>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="mt-auto bg-white border-t border-gray-200/80 px-6 py-2.5 flex items-center justify-between">
            <div className="flex flex-col items-center text-[#16A34A]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mb-0.5"></div>
              <span className="text-[9px] font-bold">Home</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <Clock className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px]">Activity</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 mb-0.5" />
              <span className="text-[9px]">Services</span>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <div className="w-3.5 h-3.5 rounded-full border border-gray-400 mb-0.5" />
              <span className="text-[9px]">Account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
