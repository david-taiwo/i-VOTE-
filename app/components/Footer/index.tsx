'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative text-white lg:max-h-[300px] overflow-hidden">
      {/* Top Wave Divider (mirrors navbar but inverted) */}
      <div className="absolute -top-px left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24 z-20"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,120 1080,-20 1440,60 L1440,0 L0,0 Z"
            fill="#ffffff"
            opacity="1"
          />
        </svg>
      </div>

      {/* Main Footer Background */}
      <div className="relative bg-[linear-gradient(90deg,#1209b0,#4f46e5,#6366f1)] pt-15 pb-5 md:pt-20 md:pb-5">
        <div className="max-w-full mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-5 md:gap-3 text-center lg:text-left">
          
          {/* Logo + Social Section */}
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Image
                src="/log6.png"
                alt="i-vote logo"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm text-white/80 mb-6">© Copyright 2023</p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="#"
                className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2.5 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </Link>
            </div>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center lg:justify-items-start">
              {/* Product Section */}
              <div>
                <h4 className="text-base font-semibold mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Website
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h4 className="text-base font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div>
                <h4 className="text-base font-semibold mb-3">Contact Us</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>Address: Dagupan City, Pangasinan</li>
                  <li>
                    Email:{' '}
                    <Link
                      href="mailto:ivote@email.com"
                      className="hover:text-white transition-colors"
                    >
                      ivote@email.com
                    </Link>
                  </li>
                  <li>
                    Phone No.:{' '}
                    <span className="hover:text-white transition-colors">
                      +63 912 345 6789
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </div>

        {/* Bottom Fading Edge (for depth) */}
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </footer>
  )
}
