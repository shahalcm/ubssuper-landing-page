"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Download, ExternalLink, Sparkles } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on resize
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
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "UBS Super Taxi", href: "#taxi", highlight: true },
    { name: "About", href: "#about" },
    { name: "Download", href: "#download" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-green-500 rounded-xl p-1"
            aria-label="UBSSuper Home"
          >
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-md shadow-green-600/10 group-hover:scale-105 transition-transform bg-white">
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
                <span className="text-xl font-black tracking-tight text-gray-950 font-sans">
                  UBS<span className="text-[#16A34A]">Super</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold bg-green-50 text-green-700 rounded-md border border-green-200">
                  Super App
                </span>
              </div>
              <span className="text-[11px] text-gray-500 font-medium hidden md:block">
                All-in-One Booking
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-gray-100/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200/60 shadow-inner"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  link.highlight
                    ? "bg-amber-400/20 text-amber-900 hover:bg-amber-400/30 font-semibold"
                    : "text-gray-600 hover:text-gray-950 hover:bg-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Download App */}
          <div className="hidden lg:flex items-center gap-3 relative">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                onBlur={() => setTimeout(() => setIsDownloadOpen(false), 200)}
                aria-expanded={isDownloadOpen}
                className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md shadow-green-600/20 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDownloadOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Download dropdown options */}
              {isDownloadOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Select Your App to Download
                  </div>

                  {/* UBSSuper Option */}
                  <a
                    href={APP_LINKS.ubssuper.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-10 h-10 relative rounded-xl overflow-hidden bg-white shadow-sm shrink-0 border border-green-100">
                      <Image
                        src={APP_LINKS.ubssuper.logo}
                        alt="UBSSuper"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-green-700">
                          UBSSuper
                        </p>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-600" />
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        All-in-One Booking & Services
                      </p>
                    </div>
                  </a>

                  {/* UBS Super Taxi Option */}
                  <a
                    href={APP_LINKS.taxi.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-yellow-50 transition-colors group mt-1"
                  >
                    <div className="w-10 h-10 relative rounded-xl overflow-hidden bg-yellow-400/20 shadow-sm shrink-0 border border-yellow-200">
                      <Image
                        src={APP_LINKS.taxi.logo}
                        alt="UBS Super Taxi"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-gray-900 group-hover:text-yellow-800">
                          UBS Super Taxi
                        </p>
                        <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-yellow-700" />
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        Dedicated Ride Booking App
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 bg-[#16A34A] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get App</span>
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:text-gray-950 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-top-4">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  link.highlight
                    ? "bg-amber-100/70 text-amber-950 font-semibold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100 space-y-2">
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Download on Google Play
              </p>
              <a
                href={APP_LINKS.ubssuper.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-green-50 text-green-900 hover:bg-green-100 font-medium text-sm transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white">
                  <Image
                    src={APP_LINKS.ubssuper.logo}
                    alt="UBSSuper"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Download UBSSuper App</span>
              </a>

              <a
                href={APP_LINKS.taxi.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-yellow-50 text-yellow-950 hover:bg-yellow-100 font-medium text-sm transition-colors"
              >
                <div className="w-7 h-7 relative rounded-lg overflow-hidden bg-white">
                  <Image
                    src={APP_LINKS.taxi.logo}
                    alt="UBS Super Taxi"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Download UBS Super Taxi</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
