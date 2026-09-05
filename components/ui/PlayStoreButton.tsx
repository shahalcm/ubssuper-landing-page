import React from "react";

interface PlayStoreButtonProps {
  href: string;
  variant?: "ubssuper" | "taxi" | "dark" | "outline-green" | "outline-yellow";
  size?: "md" | "lg";
  className?: string;
  label?: string;
  appTitle?: string;
}

export const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({
  href,
  variant = "ubssuper",
  size = "md",
  className = "",
  label = "GET IT ON",
  appTitle = "Google Play",
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "ubssuper":
        return "bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg shadow-green-600/25 border border-green-500/20";
      case "taxi":
        return "bg-[#FACC15] hover:bg-[#EAB308] text-[#111827] shadow-lg shadow-yellow-500/20 font-semibold border border-yellow-400";
      case "dark":
        return "bg-[#111827] hover:bg-[#1F2937] text-white shadow-lg shadow-black/20 border border-gray-800";
      case "outline-green":
        return "bg-white hover:bg-green-50 text-[#16A34A] border-2 border-[#16A34A] shadow-sm";
      case "outline-yellow":
        return "bg-[#1F2937] hover:bg-[#374151] text-[#FACC15] border-2 border-[#FACC15] shadow-sm";
      default:
        return "bg-[#16A34A] hover:bg-[#15803D] text-white";
    }
  };

  const getSizeStyles = () => {
    if (size === "lg") {
      return "px-6 py-3.5 text-base rounded-2xl gap-3.5";
    }
    return "px-5 py-2.5 text-sm rounded-xl gap-3";
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} ${appTitle} on Google Play Store`}
      className={`group inline-flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 ${getVariantStyles()} ${getSizeStyles()} ${className}`}
    >
      {/* Official Google Play vector icon */}
      <svg
        className={size === "lg" ? "w-6 h-6 shrink-0" : "w-5 h-5 shrink-0"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3.609 1.814C3.398 2.038 3.273 2.378 3.273 2.827v18.346c0 .449.125.789.336 1.013l.056.054 10.28-10.28v-.24L3.665 1.76l-.056.054z"
          fill="#00E676"
        />
        <path
          d="M17.37 15.385l-3.425-3.425v-.24l3.425-3.425.078.045 4.053 2.303c1.157.657 1.157 1.731 0 2.389l-4.053 2.308-.078.045z"
          fill="#FFD600"
        />
        <path
          d="M13.945 11.96L3.609 22.296c.38.403 1.012.453 1.728.046l12.11-6.885-3.502-3.497z"
          fill="#FF3D00"
        />
        <path
          d="M13.945 12.04l3.502-3.497L5.337 1.658C4.621 1.251 3.989 1.301 3.609 1.704l10.336 10.336z"
          fill="#00B0FF"
        />
      </svg>

      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] tracking-wider uppercase font-medium opacity-80 mb-0.5">
          {label}
        </span>
        <span className="font-bold tracking-tight font-sans">
          {appTitle}
        </span>
      </div>
    </a>
  );
};
