"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#111827] text-white border-b border-gray-850">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Everything you need to know about UBS Super Taxi and UBSSuper.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-yellow-400/60 bg-gray-900 shadow-md shadow-yellow-500/5"
                    : "border-gray-800 bg-gray-900/60 hover:border-gray-700 hover:bg-gray-900"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-inset cursor-pointer"
                >
                  <span
                    className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                      isOpen ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-yellow-400 text-gray-950 rotate-180"
                        : "bg-gray-800 text-gray-400 border border-gray-700"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-gray-800/80 animate-in fade-in duration-200 font-normal"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
