"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Hotel,
  Car,
  Building2,
  Briefcase,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  color: string;
}

const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Hotel,
  Car,
  Building2,
  Briefcase,
  Wrench,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  iconName,
  badge,
}) => {
  const Icon = iconMap[iconName] || Sparkles;
  const isTaxi = id === "taxi";

  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
        isTaxi
          ? "bg-gray-900 border-yellow-400 shadow-xl shadow-yellow-500/10 ring-2 ring-yellow-400/40 hover:-translate-y-1.5"
          : "bg-gray-900/80 border-gray-800 shadow-md hover:border-green-500/50 hover:bg-gray-850 hover:-translate-y-1"
      }`}
    >
      <div>
        {/* Top bar with Icon and Pill Badge */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
              isTaxi
                ? "bg-[#FACC15] text-gray-950 font-bold shadow-yellow-400/20"
                : "bg-gray-800 text-[#22C55E] border border-gray-700"
            }`}
          >
            <Icon className="w-7 h-7" />
          </div>

          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${
              isTaxi
                ? "bg-yellow-400 text-gray-950 border-yellow-300 shadow-sm"
                : "bg-gray-800 text-gray-300 border-gray-700"
            }`}
          >
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            isTaxi ? "text-yellow-400 group-hover:text-yellow-300" : "text-white group-hover:text-green-400"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Action / Arrow Link */}
      <div className="pt-6 mt-4 border-t border-gray-800/80 flex items-center justify-between">
        {isTaxi ? (
          <Link
            href="#taxi-hero"
            className="text-xs font-black text-yellow-400 hover:text-yellow-300 flex items-center gap-1.5 group/btn"
          >
            <span>Explore Dedicated Taxi App</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-yellow-400" />
          </Link>
        ) : (
          <span className="text-xs font-semibold text-gray-400 group-hover:text-green-400 flex items-center gap-1 transition-colors">
            <span>Available in UBSSuper</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </div>
    </div>
  );
};
