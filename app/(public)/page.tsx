import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { FaUserCheck, FaCheckCircle, FaChartBar } from 'react-icons/fa'

const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="relative lg:min-h-[85vh] bg-white flex items-center">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50 -z-10" /> */}

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-[#483ef7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-0">
          
          {/* TEXT COL */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative z-10 space-y-6 text-center lg:text-left">
            <h1 className="max-w-full tracking-tight leading-tight flex justify-center lg:justify-start items-center flex-wrap gap-2">
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
              <span className="text-[40px] md:text-[48px] lg:text-[52px] font-bold">
                Online Voting
              </span>{' '}
              <span className="relative inline-block text-[40px] md:text-[48px] lg:text-[52px] font-bold lg:-mr-8">
                System
              </span>
            </h1>

            <p className="max-w-full text-[15px] md:text-base text-center lg:text-left leading-relaxed ">
              Let’s make voting and elections easy and secure for you. This is{' '}
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

      {/* How It Works Section */}
      <section className='flex flex-col items-center justify-center text-[#483ef7]'>
        <div aria-label="Three step process" className="w-full flex ">
          <div className="w-full">
            <div 
              className="relative bg-[#180ddb] h-auto md:h-[27vh] py-8 md:py-0 shadow-[inset_0_2px_0_rgba(0,0,0,0.06)]"
            >
              {/* Mobile/Tablet layout wrapper */}
              {/* <div className="h-full max-w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:items-center gap-0 md:gap-8"> */}
              <div className="h-full max-w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-0 md:gap-8">
                {/* LEFT: Step 1 card */}
                <div
                  className="w-full sm:w-80 md:shrink-0 md:rounded-t-2xl md:w-[300px] translate-y-[-30%] md:translate-y-[-5%] rounded-t-2xl  h-auto md:h-[30vh] bg-[#c6ddf5] "
                >
                  <div className=" rounded-2xl md:rounded-t-xl p-5 sm:p-6 md:p-3.5 md:pt-13 md:px-6 text-center md:text-left">
                    <div className='mb-3.5'>
                      <div className="text-xs font-medium uppercase tracking-wide">
                        Step 1
                      </div>
                      <h3 className="font-semibold text-lg sm:text-2sm leading-snug">
                        SIGN UP
                      </h3>
                      <p className="text-xs ">
                        Create an account on this system to vote
                      </p>
                    </div>

                    {/* CTA button */}
                    <div className="mt-3 sm:mt-2 text-center">
                      <Link
                        href="#"
                        className="inline-block text-[.7rem] font-semibold px-4 py-1 rounded-full bg-white border border-[#180ddb] text- shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1209b0] focus:ring-offset-2"
                        aria-label="Register as a Voter"
                      >
                        Register as a Voter
                      </Link>
                    </div>
                  </div>
                </div>

                {/* MIDDLE and RIGHT: Steps 2 & 3 */}
                <div className="w-full md:ml-20 flex flex-col sm:flex-row gap-8 sm:gap-8 md:gap-8 lg:py-10 sm:items-center md:flex-row flex-1">
                  {/* Step 2 */}
                  <div className="text-center md:text-left flex-1">
                    <div className="text-xs font-medium uppercase tracking-wide text-white/75">
                      Step 2
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-2sm leading-snug">
                      VOTE
                    </h3>
                    <p className="text-white/90 text-sm leading-tight">
                      Vote for your preferred candidate
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center md:text-left md:ml-auto flex-1">
                    <div className="text-xs font-medium uppercase tracking-wide text-white/75">
                      Step 3
                    </div>
                    <h3 className="text-white font-semibold text-lg sm:text-2sm leading-snug">
                      VIEW ELECTION RESULTS
                    </h3>
                    <p className="text-white/90 text-sm leading-tight">
                      View election results of various candidates
                    </p>
                  </div>
                </div>
              </div>

              {/* <div
                className="absolute bottom-0 left-0 h-1.5 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]"
                aria-hidden="true"
              /> */}
            </div>
          </div>
        </div>

        <div className='bg-[#c6ddf5] w-full flex items-center justify-center h-auto md:h-45'>
          <div className='w-full mx-auto px-3 md:px-8 lg:px-12 py-6 '>
            <h3 className='text-xl md:text-2xl font-semibold text-center'>
              Make your decision-making process more modern, safe, and efficient with iVOTE
            </h3>
            <p className='mt-0 text-center px-7 md:px-20 lg:px-60'>
              Upgrade from manual ballot counting to an online election system without jeopardizing the integrity of your vote
            </p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className='relative md:max-h-[70vh] bg-white flex overflow-hidden text-[#483ef7]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-5 md:pb-20'>
          <h2 className='text-2xl md:text-3xl font-semibold text-center'>
            Our Features
          </h2>
          <p className='text-center px-7 md:px-20 lg:px-60'>
            We provide an online voting system that exceed expectations, from secure polling software to the management of complex virtual voting events.
          </p>
          <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Feature 1 */}
            <div className='bg-white md:p-6 rounded-lg  flex flex-col items-center text-center'>
              <Image src="/feat1.png" alt="Secure Voting Icon" width={200} height={200} />
              <h3 className='text-lg font-semibold'>
                Secure Voting
              </h3>
              <p className='mt-1 px-10 text-sm'>
                In just few cliks, you can vote your preferred candidates.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='bg-white md:p-6 rounded-lg flex flex-col items-center text-center'>
              <Image src="/feat2.png" alt="Real-time Results Icon" width={200} height={200} />
              <h3 className='text-lg font-semibold'>
                Real-time Results
              </h3>
              <p className='mt-2 px-10 text-sm'>
                View real time voting results and scores of each candidates.
              </p>
            </div>
            {/* Feature 3 */}
            <div className='bg-white md:p-6 rounded-lg flex flex-col items-center text-center'>
              <Image src="/feat1.png" alt="User-friendly Interface Icon" width={200} height={200} />
              <h3 className='text-lg font-semibold'>
                User-friendly Interface
              </h3>
              <p className='mt-2 px-10 text-sm'>
                Our intuitive design makes it easy for anyone to vote, regardless of their tech-savviness.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
