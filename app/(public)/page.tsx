import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <section className="relative min-h-[85vh] bg-white flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
          
          {/* TEXT COL */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative z-10 space-y-6 text-center lg:text-left">
            <h1 className="max-w-100vw tracking-tight leading-tight flex justify-center lg:justify-start items-center flex-wrap gap-2">
              {/* Replace text with logo */}
              <span className="inline-block align-middle">
                <Image
                  src="/logo3.png"
                  alt="iVOTE logo"
                  width={200}
                  height={700}
                  className="h-[50px] md:h-[58px] lg:h-[72px] w-auto object-contain"
                />
              </span> {' '}
              <span className="text-[40px] md:text-[48px] lg:text-[52px] font-bold text-slate-700">
                Online Voting
              </span>{' '}
              <span className="relative inline-block text-[40px] md:text-[48px] lg:text-[52px] font-bold text-slate-700 lg:-mr-8">
                System
              </span>
            </h1>

            <p className="max-w-100vw text-[15px] md:text-base text-center lg:text-left leading-relaxed text-slate-600">
              Let’s make voting and elections easy and secure for you. This is{' '}
              {/* <span className="text-slate-500/70 lg:relative lg:-right-2">
                This is
              </span>{' '} */}
              designed to ensure a secured voting session with transparency and trust.
            </p>

            <div className="pt-2">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white font-semibold shadow-md hover:shadow-lg transition">
                Register as a Voter
              </button>
            </div>
          </div>

          {/* IMAGE COL */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative lg:-ml-16 z-0">
            <Image
              src="/heroImg1.png"
              alt="Online Voting System Illustration"
              width={640}
              height={480}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
