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
  color,
}) => {
  const Icon = iconMap[iconName] || Sparkles;
  const isTaxi = id === "taxi";

  return (
    <div
      className={`group relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
        isTaxi
          ? "bg-linear-to-b from-yellow-50/50 via-white to-amber-50/20 border-yellow-200/80 shadow-md shadow-yellow-500/5 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/10"
          : "bg-white border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-green-200"
      } hover:-translate-y-1`}
    >
      <div>
        {/* Top bar with Icon and Pill Badge */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs ${
              isTaxi
                ? "bg-[#FACC15] text-gray-950 font-bold shadow-yellow-300/50"
                : "bg-green-50 text-[#16A34A] border border-green-100"
            }`}
          >
            <Icon className="w-7 h-7" />
          </div>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              isTaxi
                ? "bg-yellow-100/80 text-yellow-900 border-yellow-300"
                : "bg-gray-50 text-gray-600 border-gray-100"
            }`}
          >
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-950 mb-2 group-hover:text-[#16A34A] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>

      {/* Action / Arrow Link */}
      <div className="pt-6 mt-4 border-t border-gray-100/80 flex items-center justify-between">
        {isTaxi ? (
          <Link
            href="#taxi"
            className="text-xs font-bold text-yellow-800 hover:text-yellow-900 flex items-center gap-1 group/btn"
          >
            <span>Explore UBS Super Taxi</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <span className="text-xs font-semibold text-gray-500 group-hover:text-[#16A34A] flex items-center gap-1 transition-colors">
            <span>Available in UBSSuper</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </div>
    </div>
  );
};
