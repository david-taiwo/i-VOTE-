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
    <header className="relative z-20">
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

            {/* Desktop nav */}
              <ul className="flex-1 flex justify-center items-center gap-20 text-white/90">
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
            {/* <div className="hidden md:flex md:items-center md:gap-8 md:flex-1">
            </div> */}
              <div className="flex items-center gap-8">
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

            {/* Mobile toggle */}
            <div className="md:hidden">
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

        {/* Decorative gradient + wave background */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
          <div className="h-20 w-full bg-[linear-gradient(90deg,#4f46e5,#6366f1,#60a5fa)]" />
          {/* SVG wave */}
          <svg
            className="w-full h-40 -mt-40"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path d="M-5,110 C560,90 1800,140 2640,120 L1440 120 L0 120 Z" fill="#ffffff" opacity="1" /> */}
            <path d="M-100,120 C160,60 1080,160 1640,80 L1440 120 L0 120 Z" fill="#ffffff" opacity="1" />

          </svg>
        </div>

        {/* MOBILE MENU (slides down) */}
        <div
          className={`md:hidden absolute left-0 right-0 top-[84px] transform origin-top transition-all duration-300 ${
            open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="mx-4 rounded-2xl bg-white/95 p-4 shadow-lg shadow-black/10 ring-1 ring-black/5">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-3">
              <Link href="/login" className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                Log in
              </Link>
              <Link href="/register" className="flex-1 rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
