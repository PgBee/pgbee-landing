'use client'

import React from 'react'
import AnimatedButton from './AnimatedButton'

const About = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow mb-3 sm:mb-4">About PgBee</span>
          <h2 className="section-title mb-4 sm:mb-6 px-4">
            Access to Verified Hostels & PGs<br className="hidden sm:block" />Without Fear of Misinformation
          </h2>
          <p className="section-description max-w-3xl mx-auto px-4">
            We simplify the process of finding student accommodations. Our platform connects students with verified hostels and PGs, providing a seamless experience to search, compare, and book the perfect place to stay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="surface-card p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Verified Properties</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Review property details, amenities, pricing, and availability in one place.</p>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Choose with clarity</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Compare rooms and choose the option that fits your plans.</p>
          </div>

          <div className="surface-card p-6 sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Built for students</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Find stays near your college and make a confident next step.</p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col gap-5 rounded-2xl bg-gray-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">For property owners</p>
            <h3 className="text-xl font-bold text-white sm:text-2xl">Bring your rooms to the right students.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">List your property, manage availability, and connect with students looking for a stay.</p>
          </div>
          <AnimatedButton
            text="List Your Property"
            href="https://owners.pgbee.in"
            target="_blank"
            className="w-full shrink-0 rounded-full bg-yellow-400 px-6 py-3 font-bold text-gray-900 shadow-md hover:bg-yellow-300 sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default About
