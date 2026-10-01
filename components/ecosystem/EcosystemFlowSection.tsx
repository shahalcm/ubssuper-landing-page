"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowDown,
  User,
  Store,
  Bike,
  Car,
  CheckCircle2,
  Sparkles,
  RefreshCw,
  ShoppingBag,
  Zap,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const EcosystemFlowSection = () => {
  const [activeFlow, setActiveFlow] = useState<"delivery" | "taxi">("delivery");

  return (
    <section className="py-24 sm:py-32 bg-gray-950 text-white relative overflow-hidden border-b border-gray-850">
      {/* Background gradients */}
      <div
        className="absolute top-1/3 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gray-900 border border-gray-800 text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Connected Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How the UBS Ecosystem Works
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Four specialized applications seamlessly coordinate to fulfill services, orders, and rides in real time.
          </p>

          {/* Flow Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => setActiveFlow("delivery")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeFlow === "delivery"
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Commerce & Deliveries Flow</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFlow("taxi")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeFlow === "taxi"
                  ? "bg-yellow-400 text-gray-950 shadow-lg shadow-yellow-500/25"
                  : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Dedicated Ride Booking Flow</span>
            </button>
          </div>
        </div>

        {/* FLOW 1: COMMERCE, ORDERS & DELIVERIES */}
        {activeFlow === "delivery" && (
          <div className="bg-linear-to-b from-gray-900/90 via-gray-900/60 to-gray-950 rounded-4xl p-6 sm:p-10 lg:p-12 border border-gray-800 shadow-2xl relative">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-green-400 block mb-1">
                Order & Service Lifecycle
              </span>
              <h3 className="text-2xl font-black text-white">
                Customer ➔ Business ➔ Delivery ➔ Customer
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                How UBSSuper, UBS Partner, and UBS Delivery work in unison to satisfy customer demands.
              </p>
            </div>

            {/* 4 Interactive Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* STEP 1: CUSTOMER / UBSSUPER */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-green-500/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-green-500/20 text-green-400">
                      Step 1 • Order
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white p-0.5 shrink-0 border border-green-400">
                      <Image src={APP_LINKS.ubssuper.logo} alt="UBSSuper" width={32} height={32} className="object-contain" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-green-400" />
                    <h4 className="text-base font-extrabold text-white">CUSTOMER</h4>
                  </div>
                  <span className="text-xs font-bold text-green-400 block mb-2">UBSSuper</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    Customer browses grocery items, food dishes, or marketplace goods and places an order through the all-in-one UBSSuper app.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-green-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Order Dispatched Instantly</span>
                </div>
              </div>

              {/* STEP 2: BUSINESS / UBS PARTNER */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-blue-500/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400">
                      Step 2 • Prepare
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white p-0.5 shrink-0 border border-blue-400">
                      <Image src={APP_LINKS.partner.logo} alt="UBS Partner" width={32} height={32} className="object-contain" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-4 h-4 text-blue-400" />
                    <h4 className="text-base font-extrabold text-white">BUSINESS</h4>
                  </div>
                  <span className="text-xs font-bold text-blue-400 block mb-2">UBS Partner</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    The merchant receives the order on the UBS Partner dashboard, confirms item availability, and prepares it for pickup.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-blue-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Ready for Courier Pickup</span>
                </div>
              </div>

              {/* STEP 3: DELIVERY / UBS DELIVERY */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-orange-500/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400">
                      Step 3 • Transit
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white p-0.5 shrink-0 border border-orange-400">
                      <Image src={APP_LINKS.delivery.logo} alt="UBS Delivery" width={32} height={32} className="object-contain" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Bike className="w-4 h-4 text-orange-400" />
                    <h4 className="text-base font-extrabold text-white">DELIVERY</h4>
                  </div>
                  <span className="text-xs font-bold text-orange-400 block mb-2">UBS Delivery</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    Nearby delivery partner accepts the request on UBS Delivery, navigates to the merchant, collects the parcel, and heads to the customer.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-orange-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Turn-by-turn Navigation</span>
                </div>
              </div>

              {/* STEP 4: CUSTOMER / FULFILLED */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400">
                      Step 4 • Fulfilled
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-base font-extrabold text-white">CUSTOMER</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 block mb-2">Order Completed</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    Customer receives their fresh order at their doorstep. Order status updates in real time with rating and receipt confirmation.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Service Successfully Completed</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FLOW 2: DEDICATED TAXI & RIDE BOOKING */}
        {activeFlow === "taxi" && (
          <div className="bg-linear-to-b from-gray-900/90 via-gray-900/60 to-gray-950 rounded-4xl p-6 sm:p-10 lg:p-12 border border-yellow-400/40 shadow-2xl relative">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-400 block mb-1">
                Dedicated Transportation Lifecycle
              </span>
              <h3 className="text-2xl font-black text-white">
                Customer ➔ Driver / Ride ➔ Customer
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                Fast, direct city rides through UBS Super Taxi.
              </p>
            </div>

            {/* 3 Step Taxi Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* STEP 1: CUSTOMER REQUEST */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-yellow-400/50 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-yellow-400/20 text-yellow-400">
                      Step 1 • Request
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-yellow-400 p-0.5 shrink-0 border border-yellow-300">
                      <Image src={APP_LINKS.taxi.logo} alt="UBS Super Taxi" width={32} height={32} className="object-contain" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    <h4 className="text-base font-extrabold text-white">CUSTOMER</h4>
                  </div>
                  <span className="text-xs font-bold text-yellow-400 block mb-2">UBS Super Taxi</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    Customer opens UBS Super Taxi, inputs their pickup address and destination, and chooses their vehicle class (Bike, Auto, Mini, Sedan, SUV, Luxury).
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-yellow-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Instant Driver Dispatch</span>
                </div>
              </div>

              {/* STEP 2: DRIVER / RIDE TRANSIT */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-yellow-400/50 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-yellow-400/20 text-yellow-400">
                      Step 2 • Transit
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0 border border-yellow-400/30">
                      <Car className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Car className="w-4 h-4 text-yellow-400" />
                    <h4 className="text-base font-extrabold text-white">DRIVER / RIDE</h4>
                  </div>
                  <span className="text-xs font-bold text-yellow-400 block mb-2">Fleet Transport</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    A nearby verified driver accepts the trip, navigates directly to the pickup point, and transports the passenger safely with live GPS route visibility.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-yellow-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Live Route Tracking & ETA</span>
                </div>
              </div>

              {/* STEP 3: SAFE ARRIVAL */}
              <div className="relative rounded-3xl bg-gray-950/80 p-6 border-2 border-emerald-500/40 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400">
                      Step 3 • Completed
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-base font-extrabold text-white">CUSTOMER</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 block mb-2">Safe Arrival</span>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    Customer safely reaches their destination. Upfront fare settlement is completed with transparent billing and driver feedback.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-850 flex items-center text-[10px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  <span>Trip Successfully Completed</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
