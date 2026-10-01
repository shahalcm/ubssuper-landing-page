"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";
import { PlayStoreButton } from "@/components/ui/PlayStoreButton";

export const SplitDownloadCTA = () => {
  const cards = [
    {
      ...APP_LINKS.ubssuper,
      subTitle: "All-in-One Super App",
      desc: "Order food, groceries, rides, hotel stays, logistics, doctor appointments, marketplace products and appliances in one place.",
      cardBorder: "border-green-500/40 hover:border-green-400",
      bgGradient: "from-green-950/60 via-gray-900 to-gray-950",
      accentText: "text-green-400",
      btnVariant: "ubssuper" as const,
      logoBg: "bg-white border-green-400",
      glowBg: "bg-green-500/10",
      tagline: "Book food, hotels, taxis & more in one app.",
    },
    {
      ...APP_LINKS.taxi,
      subTitle: "Dedicated Taxi App",
      desc: "Fast, simple & reliable ride booking with multiple vehicle choices from Bike to Luxury, upfront fares, and live route navigation.",
      cardBorder: "border-yellow-400/50 hover:border-yellow-300",
      bgGradient: "from-yellow-950/60 via-gray-900 to-gray-950",
      accentText: "text-yellow-400",
      btnVariant: "taxi" as const,
      logoBg: "bg-yellow-400 border-yellow-300",
      glowBg: "bg-yellow-500/10",
      tagline: "Your Ride. Your Way.",
    },
    {
      ...APP_LINKS.partner,
      subTitle: "Business & Merchant App",
      desc: "Accept customer orders, manage product inventory and services, track appointments, and monitor store earnings seamlessly.",
      cardBorder: "border-blue-500/40 hover:border-blue-400",
      bgGradient: "from-blue-950/60 via-gray-900 to-gray-950",
      accentText: "text-blue-400",
      btnVariant: "partner" as const,
      logoBg: "bg-white border-blue-400",
      glowBg: "bg-blue-500/10",
      tagline: "Manage. Grow. Connect.",
    },
    {
      ...APP_LINKS.delivery,
      subTitle: "Delivery Partner App",
      desc: "Manage on-demand food, grocery, and marketplace delivery requests with live turn-by-turn navigation and transparent daily payouts.",
      cardBorder: "border-orange-500/40 hover:border-orange-400",
      bgGradient: "from-orange-950/60 via-gray-900 to-gray-950",
      accentText: "text-orange-400",
      btnVariant: "delivery" as const,
      logoBg: "bg-white border-orange-400",
      glowBg: "bg-orange-500/10",
      tagline: "Powering Every Delivery.",
    },
  ];

  return (
    <section id="download-apps" className="py-24 sm:py-32 bg-[#0B0F19] text-white border-b border-gray-850 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-125 h-125 bg-green-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-125 h-125 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3.5 py-1 rounded-full">
            Google Play Downloads
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Choose the UBS App You Need
          </h2>
          <p className="text-base text-gray-300">
            One connected platform for customers, businesses, taxi partners and delivery partners.
          </p>
        </div>

        {/* Four Large Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {cards.map((c) => (
            <div
              key={c.id}
              className={`relative rounded-[36px] bg-linear-to-b ${c.bgGradient} p-7 sm:p-8 border-2 ${c.cardBorder} shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`absolute top-0 right-0 w-36 h-36 ${c.glowBg} rounded-full blur-2xl pointer-events-none`} />

              <div>
                {/* Official App Logo */}
                <div className={`w-18 h-18 sm:w-20 sm:h-20 relative rounded-3xl overflow-hidden ${c.logoBg} p-1.5 shadow-lg border-2 mb-6 shrink-0`}>
                  <Image src={c.logo} alt={`${c.name} Logo`} fill className="object-contain" />
                </div>

                <span className={`text-xs font-black uppercase tracking-wider block mb-1 ${c.accentText}`}>
                  {c.subTitle}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-2">
                  {c.name}
                </h3>

                <p className="text-xs italic text-gray-400 mb-4">
                  &ldquo;{c.tagline}&rdquo;
                </p>

                <p className="text-xs text-gray-300 mb-6 font-normal leading-relaxed min-h-[54px]">
                  {c.desc}
                </p>
              </div>

              {/* Verified Play Store Button */}
              <div className="pt-4 border-t border-gray-800">
                <PlayStoreButton
                  href={c.playStoreUrl}
                  variant={c.btnVariant}
                  size="lg"
                  label="DOWNLOAD"
                  appTitle={c.name}
                  className="w-full text-sm font-bold"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
