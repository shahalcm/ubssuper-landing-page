"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Shield } from "lucide-react";
import { APP_LINKS } from "@/lib/constants";

// Clean SVG icons for social networks
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer = () => {
  const servicesList = [
    { name: "Food", href: "#services" },
    { name: "Grocery", href: "#services" },
    { name: "Taxi", href: "#taxi" },
    { name: "Hotels", href: "#services" },
    { name: "Doctor", href: "#services" },
    { name: "Jobs", href: "#services" },
    { name: "Real Estate", href: "#services" },
    { name: "Services", href: "#services" },
  ];

  const companyList = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#about" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-900">
          {/* Column 1: Brand & Tagline (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-2xl overflow-hidden bg-white p-1 shadow-sm">
                <Image
                  src={APP_LINKS.ubssuper.logo}
                  alt="UBSSuper Official Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                UBS<span className="text-[#16A34A]">Super</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              &ldquo;Book food, hotels, taxis & more in one app.&rdquo;
            </p>

            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              UBSSuper brings everyday services together in one powerful, easy-to-use mobile platform.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: "Facebook", icon: FacebookIcon },
                  { name: "Instagram", icon: InstagramIcon },
                  { name: "LinkedIn", icon: LinkedInIcon },
                  { name: "YouTube", icon: YouTubeIcon },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={`${social.name} (Social link)`}
                      className="w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Products (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={APP_LINKS.ubssuper.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors group"
                >
                  <span className="group-hover:text-green-400">UBSSuper</span>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-green-400" />
                </a>
              </li>
              <li>
                <a
                  href={APP_LINKS.taxi.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors group"
                >
                  <span className="group-hover:text-yellow-400">UBS Super Taxi</span>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-yellow-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {servicesList.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Company (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {companyList.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 UBS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>UBSSuper & UBS Super Taxi</span>
            <span>Android Apps on Google Play</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
