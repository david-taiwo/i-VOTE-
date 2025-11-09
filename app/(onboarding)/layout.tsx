'use client'

import Image from 'next/image'
import React from 'react'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
      {/* Decorative wavy sides */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-full w-40 text-indigo-200 md:w-56"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M100,0 C70,20 70,80 100,100 L0,100 L0,0 Z" fill="currentColor" />
      </svg>
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-40 text-indigo-300 md:w-56"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,0 C30,20 30,80 0,100 L100,100 L100,0 Z" fill="currentColor" />
      </svg>

      <main className="relative z-10 w-full max-w-xl px-6 py-8 sm:px-8">
        <div className="rounded-[18px] bg-white/90 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur-sm md:p-8">
          <div className="mx-auto mb-6 flex items-center justify-center">
            <Image src="/logo3.png" alt="i-vote" width={80} height={36} className="h-9 w-auto" />
          </div>

          {children}
        </div>
      </main>
    </div>
  )
}