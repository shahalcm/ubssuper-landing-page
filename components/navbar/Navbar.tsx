"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Download, Car, ExternalLink, Sparkles } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "UBS Super Taxi", href: "#taxi-hero", highlight: true },
    { name: "UBSSuper", href: "#ubssuper" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#taxi-features" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/85 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-gray-800/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left: UBSSuper Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-2xl p-1"
            aria-label="UBSSuper and UBS Super Taxi Home"
          >
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-green-500/10 group-hover:scale-105 transition-transform bg-white border border-green-500/20">
              <Image
                src={APP_LINKS.ubssuper.logo}
                alt="UBSSuper Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-sans">
                  UBS<span className="text-[#16A34A]">Super</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-yellow-400 text-gray-950 rounded-full">
                  Taxi Inside
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium hidden sm:block">
                Ecosystem & Dedicated Rides
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-800 shadow-inner"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  link.highlight
                    ? "bg-yellow-400 text-gray-950 shadow-sm shadow-yellow-400/20 hover:bg-yellow-300"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Download Taxi App */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={APP_LINKS.taxi.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-gray-950 text-sm font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <Car className="w-4 h-4" />
              <span>Download Taxi App</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={APP_LINKS.taxi.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FACC15] text-gray-950 text-xs font-black px-3.5 py-2 rounded-full shadow-sm"
            >
              <Car className="w-3.5 h-3.5" />
              <span>Get Taxi</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-850 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/95 backdrop-blur-2xl border-b border-gray-800 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  link.highlight
                    ? "bg-yellow-400 text-gray-950 font-bold"
                    : "text-gray-200 hover:bg-gray-850"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-800 space-y-2">
              <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Google Play Downloads
              </p>
              <a
                href={APP_LINKS.taxi.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-yellow-400 text-gray-950 font-black text-sm transition-transform active:scale-95 shadow-md"
              >
                <div className="w-8 h-8 relative rounded-xl overflow-hidden bg-gray-950 p-1 shrink-0">
                  <Image
                    src={APP_LINKS.taxi.logo}
                    alt="UBS Super Taxi"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Download UBS Super Taxi App</span>
              </a>

              <a
                href={APP_LINKS.ubssuper.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-green-950/60 border border-green-800/60 text-green-300 font-semibold text-sm hover:bg-green-900/60 transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <Image
                    src={APP_LINKS.ubssuper.logo}
                    alt="UBSSuper"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Download UBSSuper App</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
