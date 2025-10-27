'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
  ]

  return (
    // sticky for small & medium (default), static on large screens to preserve existing large-screen layout
    <header className="sticky top-0 z-20 lg:static">
      <nav className="w-full">
        <div className="mx-auto max-w-10xl px-6 md:px-8">
          <div className="flex items-center justify-between gap-6 ">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3 text-white no-underline">
              <Image
                src="/log4.png"
                alt="i-vote logo"
                width={80}
                height={100}
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop / Medium nav:
                - Hidden on small (<md)
                - Visible on md and up (we reduce gap for md, restore larger gap at lg so large screens remain unchanged)
            */}
            <ul className="hidden md:flex flex-1 justify-center items-center md:gap-8 lg:gap-20 text-white/90">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link-animated text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right-side (Login/Register) - show only on large screens (unchanged behavior on large)
                - Hidden on md and below, because:
                  * on md these go into the hamburger drawer
                  * on small they will be in the full-screen overlay
            */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/login"
                className="rounded-full border border-white/40 px-12 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                Log in
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-white px-8 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:shadow-lg transition-shadow"
              >
                Register
              </Link>
            </div>

            {/* Hamburger toggle
                - Visible on md and below (tablets + phones)
                - Hidden on large screens (lg) so large screen layout stays exactly the same
            */}
            <div className="lg:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/90 ring-0 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <svg className={`h-6 w-6 transition-transform ${open ? 'rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative gradient + wave background (unchanged) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
          <div className="h-20 w-full bg-[linear-gradient(90deg,#4f46e5,#6366f1,#60a5fa)]" />
          {/* SVG wave (unchanged) */}
          <svg
            className="w-full h-40 -mt-40"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M-100,120 C160,60 1080,160 1640,80 L1440 120 L0 120 Z" fill="#ffffff" opacity="1" />
          </svg>
        </div>

        {/* MEDIUM SCREEN DRAWER (tablets): appears when open
            - Only visible on md and hidden on lg and below md: 'md:block lg:hidden'
            - Slide-in from right
        */}
        <div
          // hidden on small (<md), visible on md but hidden on lg and up
          className={`hidden md:block lg:hidden fixed top-0 right-0 z-40 h-screen w-72 transform transition-transform duration-300 ease-in-out
            ${open ? 'translate-x-0' : 'translate-x-full'}`}
          aria-hidden={!open}
        >
          {/* backdrop (slightly dark) to the left of drawer, clickable to close */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="relative ml-auto h-full w-72 bg-white/95 p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/log4.png" alt="i-vote logo" width={52} height={60} className="h-12 w-auto" />
                <span className="text-sm font-semibold text-slate-800">i-vote</span>
              </div>
              <button
                aria-label="Close drawer"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link href="/login" className="block rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                Log in
              </Link>
              <Link href="/register" className="block rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* SMALL SCREEN FULL-SCREEN OVERLAY (phones): visible on <md
            - md:hidden -> display only on small screens
            - smooth fade in/out, with centered links/buttons
        */}
        <div
          className={`md:hidden fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300
            ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={!open}
        >
          {/* backdrop */}
          <div
            onClick={() => setOpen(false)}
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          />

          {/* content: centered vertical stack */}
          <div className="relative z-10 mx-6 w-full max-w-md transform-gpu">
            <div className="rounded-2xl bg-white/95 p-8 shadow-lg ring-1 ring-black/10">
              <nav>
                <ul className="flex flex-col items-center gap-6 text-center">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 text-xl font-medium text-slate-800 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3">
                  <Link href="/login" onClick={() => setOpen(false)} className="block rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                    Log in
                  </Link>
                  <Link href="/register" onClick={() => setOpen(false)} className="block rounded-full bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
