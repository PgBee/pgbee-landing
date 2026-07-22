'use client'

import React from 'react'

const questions = [
  {
    question: 'What can I find on PgBee?',
    answer: 'You can browse PGs, hostels and rooms, compare pricing and amenities, and review available room or bed details before choosing a stay.',
  },
  {
    question: 'Are the properties verified?',
    answer: 'PgBee works with property owners and publishes listing details provided through the platform. Always review the listing and contact support if something looks inaccurate.',
  },
  {
    question: 'Can I choose a room or bed?',
    answer: 'When the property has room and bed inventory available, you can view the available options and select the one that suits you.',
  },
  {
    question: 'How do I get help?',
    answer: 'Email pgbee.company@gmail.com with your registered email address and a short description of your question. Our team will help you with the next steps.',
  },
]

const FAQ = () => (
  <section id="faq" className="py-16 sm:py-20 lg:py-28 w-full">
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 sm:mb-14">
        <span className="section-eyebrow mb-3 sm:mb-4">FAQs</span>
        <h2 className="section-title mb-4">Questions before you search?</h2>
        <p className="section-description">Here are a few things students commonly want to know.</p>
      </div>

      <div className="space-y-3">
        {questions.map((item) => (
          <details key={item.question} className="surface-card group px-5 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-bold text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              {item.question}
              <span className="text-2xl text-yellow-500 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="pb-5 pr-8 text-sm sm:text-base leading-relaxed text-gray-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQ
