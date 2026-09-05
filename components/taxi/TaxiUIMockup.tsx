"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Car,
  MapPin,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Sparkles,
  Info,
} from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const TaxiUIMockup = () => {
  const [selectedRide, setSelectedRide] = useState<"economy" | "comfort" | "xl">("comfort");

  const rideOptions = [
    {
      id: "economy" as const,
      name: "Economy",
      eta: "4 mins",
      capacity: "4 Seats",
      fare: "$14.50",
      desc: "Affordable everyday rides",
    },
    {
      id: "comfort" as const,
      name: "Super Taxi Comfort",
      eta: "3 mins",
      capacity: "4 Seats",
      fare: "$18.20",
      desc: "Spacious sedans & top drivers",
      badge: "Popular",
    },
    {
      id: "xl" as const,
      name: "Super Taxi XL",
      eta: "6 mins",
      capacity: "6 Seats",
      fare: "$26.00",
      desc: "Extra room for groups & luggage",
    },
  ];

  return (
    <div className="relative mx-auto max-w-md w-full">
      {/* Decorative Yellow Ambient Glow */}
      <div
        className="absolute -inset-4 bg-linear-to-r from-yellow-500/20 via-amber-400/20 to-yellow-600/10 rounded-[44px] blur-2xl -z-10 animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Visual Mockup Disclaimer Badge */}
      <div className="flex items-center justify-center gap-1.5 mb-3 text-center">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-yellow-300 bg-yellow-950/60 border border-yellow-500/30 px-3 py-1 rounded-full backdrop-blur-md">
          <Info className="w-3 h-3 text-yellow-400" />
          UBS Super Taxi • Interactive Visual Interface Mockup
        </span>
      </div>

      {/* Main Smartphone Shell */}
      <div className="rounded-[40px] border-8 border-gray-800 bg-gray-950 shadow-2xl overflow-hidden ring-1 ring-yellow-500/30">
        {/* Dynamic Island */}
        <div className="pt-2 pb-1 flex justify-center bg-gray-950">
          <div className="w-24 h-3.5 bg-gray-900 rounded-full" />
        </div>

        <div className="p-5 text-white space-y-4">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-gray-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-yellow-400 p-1 shadow-sm">
                <Image
                  src={APP_LINKS.taxi.logo}
                  alt="UBS Super Taxi Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-black text-yellow-400">UBS Super Taxi</span>
                <span className="text-[10px] text-gray-400 block">Fast pickup nearby</span>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-gray-900 px-2.5 py-1 rounded-full border border-gray-800 text-[11px] text-yellow-400 font-bold">
              <Clock className="w-3 h-3" />
              <span>ETA 3 min</span>
            </div>
          </div>

          {/* Route Map Preview Card */}
          <div className="relative rounded-2xl bg-linear-to-br from-gray-900 via-gray-900 to-gray-850 p-4 border border-gray-800 shadow-inner">
            {/* Map styling gridlines */}
            <div className="absolute inset-0 bg-[radial-gradient(#374151_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 rounded-2xl" />

            {/* Route Pins */}
            <div className="relative z-10 space-y-3">
              {/* Pickup Location */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Pickup</p>
                  <p className="text-xs font-semibold text-white truncate">
                    742 Evergreen Terrace, Downtown Plaza
                  </p>
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-4 bg-yellow-400 ml-1.5 rounded-full" />

              {/* Destination */}
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-gray-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-2.5 h-2.5 text-gray-950" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase font-bold text-yellow-400 tracking-wider">Destination</p>
                  <p className="text-xs font-semibold text-white truncate">
                    Grand Central Tech Hub, Terminal 3
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ride Types Options */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 px-1">
              <span>Select Ride Tier</span>
              <span className="text-[11px] text-yellow-400 font-normal">Transparent pricing</span>
            </div>

            {rideOptions.map((ride) => {
              const isSelected = selectedRide === ride.id;
              return (
                <button
                  key={ride.id}
                  type="button"
                  onClick={() => setSelectedRide(ride.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-yellow-400/10 border-yellow-400 shadow-md shadow-yellow-500/10"
                      : "bg-gray-900/90 border-gray-800 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        isSelected
                          ? "bg-yellow-400 text-gray-950 shadow-sm"
                          : "bg-gray-800 text-yellow-400"
                      }`}
                    >
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-white">{ride.name}</span>
                        {ride.badge && (
                          <span className="text-[9px] bg-yellow-400 text-gray-950 font-bold px-1.5 py-0.2 rounded">
                            {ride.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-gray-400">{ride.desc}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-extrabold text-white block">{ride.fare}</span>
                    <span className="text-[10px] text-gray-400">{ride.eta}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Assigned Driver Preview Card */}
          <div className="p-3.5 rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 border border-yellow-400/60 flex items-center justify-center text-yellow-400 font-bold text-sm">
                AM
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white">Alex M. (Driver)</span>
                  <div className="flex items-center gap-0.5 text-[10px] text-yellow-400 font-bold">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    <span>4.95</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400">
                  Toyota Camry • Plate: <span className="text-white font-mono">UB-4092</span>
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-bold">
                Verified
              </span>
            </div>
          </div>

          {/* "Book Ride" CTA inside mockup */}
          <a
            href={APP_LINKS.taxi.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block py-3.5 bg-linear-to-r from-[#FACC15] to-[#EAB308] hover:from-[#EAB308] hover:to-[#CA8A04] text-gray-950 font-black text-center text-sm rounded-2xl shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Confirm & Book Ride Now
          </a>
        </div>
      </div>
    </div>
  );
};
