'use client'

import Image from 'next/image'
import React from 'react'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      {/* Panel */}
      <div className="relative w-full max-w-4xl rounded-[26px] shadow-2xl ring-1 ring-black/5 overflow-hidden">
        {/* Decorative waves (single SVG so both sides align perfectly) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Background */}
          <rect x="0" y="0" width="1200" height="800" fill="#ffffff" />

          {/* LEFT STACK (outer -> inner) */}
          <path
            d="M0,0 L180,0 C130,120 120,280 160,400 C200,520 150,680 100,800 L0,800 Z"
            fill="#2b2d70" /* dark indigo */
            opacity="0.95"
          />
          <path
            d="M0,0 L140,0 C105,130 95,280 130,400 C165,520 125,680 85,800 L0,800 Z"
            fill="#4657d7"
            opacity="0.65"
          />
          <path
            d="M0,0 L110,0 C90,140 80,290 110,400 C140,510 110,680 70,800 L0,800 Z"
            fill="#8aa0ff"
            opacity="0.45"
          />

          {/* RIGHT STACK (mirror outer -> inner) */}
          <path
            d="M1200,0 L1020,0 C1070,120 1080,280 1040,400 C1000,520 1050,680 1100,800 L1200,800 Z"
            fill="#4657d7"
            opacity="0.75"
          />
          <path
            d="M1200,0 L1060,0 C1095,130 1105,280 1070,400 C1035,520 1075,680 1115,800 L1200,800 Z"
            fill="#8aa0ff"
            opacity="0.55"
          />
          <path
            d="M1200,0 L1085,0 C1105,140 1115,290 1085,400 C1055,510 1085,680 1125,800 L1200,800 Z"
            fill="#c7d3ff"
            opacity="0.6"
          />

          {/* WHITE CENTER with wavy inner edges (sits above side bands) */}
          <path
            d="
              M220,40
              C260,110 260,170 220,240
              L220,560
              C260,630 260,690 220,760
              L980,760
              C940,690 940,630 980,560
              L980,240
              C940,170 940,110 980,40
              Z"
            fill="#ffffff"
          />

          {/* Subtle inner stroke to match Figma crisp edge */}
          <path
            d="
              M220,40
              C260,110 260,170 220,240
              L220,560
              C260,630 260,690 220,760
              L980,760
              C940,690 940,630 980,560
              L980,240
              C940,170 940,110 980,40
              Z"
            fill="none"
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="2"
          />
        </svg>

        {/* Content region aligned to white center */}
        <div className="relative z-10 grid place-items-center px-6 sm:px-10 py-0">
          <div className="w-full max-w-md">
            <div className="mb-6 flex items-center justify-center">
              <Image
                src="/logo3.png"
                alt="iVOTE"
                width={80}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </div>

            {children}
          </div>

          {/* Callout shadow for depth like Figma */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-[26px]" />
        </div>
      </div>
    </div>
  )
}
