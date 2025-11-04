'use client'
import React from 'react'
import Image from 'next/image'

export default function FAQPage() {
  const faqs = [
    {
      id: 1,
      question: 'How can I be sure that my vote and information are safe on this platform?',
      answer: 'Your vote and personal information are secured on this platform because the system is built on the highest security protocols and standards. It also utilizes the latest encryption technologies to ensure data security and privacy.',
    },
    {
      id: 2,
      question: 'How long does it take for my vote to be counted?',
      answer: 'This is an online voting system that speeds up the ballot counting process and counts votes instantly after they are cast in favor of their preferred candidate.',
    },
    {
      id: 3,
      question: 'How can I receive election date reminders?',
      answer: 'The system will provide reminders about upcoming election dates directly to the user. These reminders can be sent via email and notifications. The system will also provide a calendar view of all upcoming elections.',
    },
  ]

  return (
    <section className="bg-white py-16 px-6 md:px-8 text-[#483ef7]">
      <div className="max-w-6xl mx-auto">
        {/* FAQ Title and Image */}
        <div className="mb-12 max-h-[70vh]">
          <div className="flex flex-col-reverse items-center justify-center gap-2 md:gap-8 mb-8">
            {/* FAQ Title */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h1>
            </div>

            {/* FAQ Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-70 h-70 md:w-200 md:h-70">
                <Image
                  src="/faqImg1.png"
                  alt="FAQ Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map(faq => (
            <div
              key={faq.id}
              className="bg-blue-50 p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-lg md:text-xl font-bold mb-3">
                {faq.id}. {faq.question}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}