"use client";

import React from "react";
import Image from "next/image";
import {
  Utensils,
  ShoppingBag,
  Car,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Navigation,
  Sparkles,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const AppShowcase = () => {
  return (
    <section className="py-20 sm:py-32 bg-linear-to-b from-[#F8FAFC] via-white to-gray-50 overflow-hidden relative">
      {/* Background accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-250 h-125 bg-linear-to-r from-green-300/10 via-yellow-200/10 to-emerald-300/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>Interactive Mobile Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Designed for Speed & Simplicity
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Experience how seamlessly UBSSuper and UBS Super Taxi perform on your Android phone.
          </p>
        </div>

        {/* 3 Smartphone Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* PHONE 1: UBSSuper Home Screen */}
          <div className="flex flex-col items-center animate-float-slow">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-green-700 bg-green-100/70 px-3 py-1 rounded-full border border-green-200">
                01 • UBSSuper Home
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">Super App Hub</h3>
            </div>

            <div className="relative w-70 sm:w-75 h-135 rounded-[40px] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-800">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-gray-900 rounded-full z-20" />

              <div className="h-full bg-white text-gray-900 flex flex-col pt-6 px-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white border border-green-200">
                      <Image
                        src={APP_LINKS.ubssuper.logo}
                        alt="UBSSuper"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-extrabold text-gray-900">UBSSuper</span>
                  </div>
                  <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold">
                    Active
                  </span>
                </div>

                {/* Hero card */}
                <div className="my-3 p-3 bg-linear-to-br from-green-600 to-emerald-700 text-white rounded-2xl shadow-sm">
                  <span className="text-[9px] uppercase tracking-wider font-bold opacity-80">
                    Welcome
                  </span>
                  <p className="text-xs font-bold mt-0.5">8 Everyday Services In 1 App</p>
                  <p className="text-[10px] text-green-100 mt-1">Food • Rides • Stays • Doctors</p>
                </div>

                {/* Quick grid */}
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-semibold text-gray-700 my-auto">
                  <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
                    <ShoppingBag className="w-5 h-5 mx-auto text-emerald-600 mb-1" />
                    Grocery
                  </div>
                  <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                    <Utensils className="w-5 h-5 mx-auto text-amber-600 mb-1" />
                    Food
                  </div>
                  <div className="bg-yellow-50 p-2.5 rounded-xl border border-yellow-200 font-bold">
                    <Car className="w-5 h-5 mx-auto text-gray-950 mb-1" />
                    Taxi
                  </div>
                </div>

                {/* Recent Status */}
                <div className="mt-3 p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] text-gray-600 font-medium">
                    All services online and available 24/7
                  </span>
                </div>

                {/* Bottom mini bar */}
                <div className="mt-auto py-2.5 border-t border-gray-100 flex justify-around text-[9px] text-gray-400">
                  <span className="text-green-600 font-bold">Home</span>
                  <span>Orders</span>
                  <span>Profile</span>
                </div>
              </div>
            </div>
          </div>

          {/* PHONE 2: Food / Grocery Screen (Elevated center) */}
          <div className="flex flex-col items-center md:-translate-y-4 animate-float-reverse">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
                02 • Food & Groceries
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">Fresh Ordering</h3>
            </div>

            <div className="relative w-70 sm:w-75 h-140 rounded-[40px] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-2 ring-green-500/20">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-gray-900 rounded-full z-20" />

              <div className="h-full bg-white text-gray-900 flex flex-col pt-6 px-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="text-xs font-extrabold text-gray-900">Nearby Stores & Food</span>
                  <span className="text-[10px] text-gray-500">20-30 min</span>
                </div>

                {/* Food Item Card 1 */}
                <div className="mt-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">Gourmet Meal Combo</p>
                    <p className="text-[10px] text-gray-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.9 • Best Seller
                    </p>
                    <p className="text-xs font-bold text-green-600 mt-0.5">Quick Delivery</p>
                  </div>
                </div>

                {/* Grocery Item Card 2 */}
                <div className="mt-2.5 p-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">Organic Grocery Basket</p>
                    <p className="text-[10px] text-gray-500">Fresh daily essentials</p>
                    <p className="text-xs font-bold text-green-600 mt-0.5">In Stock</p>
                  </div>
                </div>

                {/* Status Card */}
                <div className="mt-auto mb-3 p-3 bg-green-500 text-white rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider font-bold">
                        Fast Fulfillment
                      </span>
                      <p className="text-xs font-bold">1 Tap Checkout</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom mini bar */}
                <div className="py-2.5 border-t border-gray-100 flex justify-around text-[9px] text-gray-400">
                  <span>Browse</span>
                  <span className="text-orange-600 font-bold">Cart (2)</span>
                  <span>Track</span>
                </div>
              </div>
            </div>
          </div>

          {/* PHONE 3: Taxi / Booking Screen */}
          <div className="flex flex-col items-center animate-float-slow">
            <div className="text-center mb-4">
              <span className="text-xs font-bold text-yellow-900 bg-yellow-300/80 px-3 py-1 rounded-full border border-yellow-400">
                03 • Taxi & Booking
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">UBS Super Taxi</h3>
            </div>

            <div className="relative w-70 sm:w-75 h-135 rounded-[40px] border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden ring-1 ring-gray-800">
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-gray-900 rounded-full z-20" />

              <div className="h-full bg-gray-900 text-white flex flex-col pt-6 px-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-yellow-400 p-0.5">
                      <Image
                        src={APP_LINKS.taxi.logo}
                        alt="UBS Super Taxi"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-yellow-400">UBS Super Taxi</span>
                  </div>
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">
                    Nearby
                  </span>
                </div>

                {/* Route Mockup */}
                <div className="my-3 p-3 bg-gray-800/80 rounded-2xl border border-gray-700/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-gray-300 text-[11px] truncate">Current Pickup Location</span>
                  </div>
                  <div className="w-0.5 h-3 bg-gray-600 ml-0.5" />
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="w-3 h-3 text-yellow-400" />
                    <span className="text-white text-[11px] font-semibold truncate">
                      Airport Terminal 2
                    </span>
                  </div>
                </div>

                {/* Vehicle Selection Preview */}
                <div className="p-3 bg-gray-800 rounded-2xl border border-yellow-400/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-yellow-400 text-gray-950 flex items-center justify-center font-bold">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Super Taxi Comfort</p>
                      <p className="text-[10px] text-gray-400">ETA 3 mins • 4 Seats</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-yellow-400">Ready</span>
                </div>

                {/* Book Action Mockup */}
                <div className="mt-auto mb-3">
                  <div className="w-full py-2.5 bg-yellow-400 text-gray-950 text-xs font-extrabold rounded-xl text-center shadow-lg shadow-yellow-500/10">
                    Confirm Ride
                  </div>
                </div>

                {/* Bottom mini bar */}
                <div className="py-2.5 border-t border-gray-800 flex justify-around text-[9px] text-gray-400">
                  <span className="text-yellow-400 font-bold">Ride</span>
                  <span>Safety</span>
                  <span>History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
