"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Layers, Car, Store, Bike, Sparkles } from "lucide-react";
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
    { name: "Apps", href: "#apps" },
    { name: "UBSSuper", href: "#ubssuper" },
    { name: "Super Taxi", href: "#super-taxi" },
    { name: "Partner", href: "#partner" },
    { name: "Delivery", href: "#delivery" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/90 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-gray-800/80 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left: UBSSuper Official Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-green-400 rounded-2xl p-1"
            aria-label="UBSSuper Ecosystem Home"
          >
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-green-500/10 group-hover:scale-105 transition-transform bg-white border border-green-500/20">
              <Image
                src={APP_LINKS.ubssuper.logo}
                alt="UBSSuper Official Logo"
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
                <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                  4 Apps
                </span>
              </div>
              <span className="text-[11px] text-gray-400 font-medium hidden sm:block">
                Connected UBS Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-gray-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-800 shadow-inner"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/80 transition-all duration-150"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Explore Apps CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#apps"
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-extrabold px-5 py-2.5 rounded-full shadow-lg shadow-green-600/20 transition-all hover:shadow-green-600/35 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <Sparkles className="w-4 h-4 text-green-200" />
              <span>Explore Apps</span>
            </Link>
          </div>

          {/* Mobile Actions & Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="#apps"
              className="inline-flex items-center gap-1.5 bg-[#16A34A] text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-sm"
            >
              <span>Explore Apps</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-gray-850 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
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
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-2xl border-b border-gray-800 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-200 hover:bg-gray-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-800 space-y-2">
              <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Google Play Downloads (4 Apps)
              </p>

              {/* 1. UBSSuper */}
              <a
                href={APP_LINKS.ubssuper.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-green-950/60 border border-green-700/60 text-green-300 font-semibold text-sm hover:bg-green-900/60 transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <Image
                    src={APP_LINKS.ubssuper.logo}
                    alt="UBSSuper"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-bold text-white">UBSSuper</span>
                  <span className="block text-[10px] text-green-300/80">Customer Super App</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-green-400" />
              </a>

              {/* 2. UBS Super Taxi */}
              <a
                href={APP_LINKS.taxi.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-yellow-950/60 border border-yellow-700/60 text-yellow-300 font-semibold text-sm hover:bg-yellow-900/60 transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-yellow-400 p-0.5 shrink-0">
                  <Image
                    src={APP_LINKS.taxi.logo}
                    alt="UBS Super Taxi"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-bold text-white">UBS Super Taxi</span>
                  <span className="block text-[10px] text-yellow-300/80">Dedicated Taxi App</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
              </a>

              {/* 3. UBS Partner */}
              <a
                href={APP_LINKS.partner.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-blue-950/60 border border-blue-700/60 text-blue-300 font-semibold text-sm hover:bg-blue-900/60 transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <Image
                    src={APP_LINKS.partner.logo}
                    alt="UBS Partner"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-bold text-white">UBS Partner</span>
                  <span className="block text-[10px] text-blue-300/80">Business & Merchant App</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </a>

              {/* 4. UBS Delivery */}
              <a
                href={APP_LINKS.delivery.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-orange-950/60 border border-orange-700/60 text-orange-300 font-semibold text-sm hover:bg-orange-900/60 transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white p-0.5 shrink-0">
                  <Image
                    src={APP_LINKS.delivery.logo}
                    alt="UBS Delivery"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-bold text-white">UBS Delivery</span>
                  <span className="block text-[10px] text-orange-300/80">Delivery Partner App</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
