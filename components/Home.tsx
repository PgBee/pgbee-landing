'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedButton from './AnimatedButton'

const Home = () => {
  return (
    <section className='hero-shell w-full flex items-center justify-center overflow-hidden' id='Home'>
      <div className='w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20'>
        <div className='flex items-center justify-between gap-4 mb-10 text-[10px] sm:text-xs font-bold tracking-[0.24em] text-gray-900/60 uppercase'>
          <span>Student living / 2026</span>
          <span className='hidden sm:block'>Find. Compare. Move in.</span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
          {/* Content */}
          <motion.div
            className='order-2 lg:order-1 px-0 sm:px-2 lg:px-0 space-y-6 sm:space-y-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className='space-y-4 sm:space-y-6'>
              <h1 className='display-title text-gray-900 max-w-4xl'>
                Your next
                <span className='block'>place to live<span className='text-white'>.</span></span>
              </h1>
              <p className='text-base sm:text-lg lg:text-xl text-gray-900/70 leading-relaxed max-w-xl'>
                Compare verified PGs, hostels and rooms near your college and choose a stay with confidence.
              </p>
            </div>

            <div className='flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:flex-nowrap'>
              <AnimatedButton
                text="Find a Stay"
                href="https://app.pgbee.in/search"
                className="w-full sm:w-auto sm:min-w-[170px] px-7 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-black font-bold text-base sm:text-lg rounded-full shadow-none cursor-pointer"
                icon={
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                }
              />
              <AnimatedButton
                text="List Your Property"
                href="https://owners.pgbee.in"
                target="_blank"
                className="w-full sm:w-auto sm:min-w-[190px] px-7 sm:px-8 py-3.5 sm:py-4 border border-gray-900/35 bg-transparent hover:bg-gray-900 hover:text-white text-gray-900 font-bold text-base sm:text-lg rounded-full cursor-pointer transition-opacity"
              />
            </div>

            <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold tracking-[0.18em] text-gray-900/55 uppercase'>
              <span>PGs</span>
              <span className='h-1 w-1 rounded-full bg-gray-900/40' aria-hidden='true' />
              <span>Hostels</span>
              <span className='h-1 w-1 rounded-full bg-gray-900/40' aria-hidden='true' />
              <span>Rooms</span>
            </div>

            <div className='editorial-rule max-w-xl' />
            {/* Product benefits */}
            <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-8'>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-4xl font-black text-gray-900'>
                  <span>Verified</span>
                </p>
                <p className='text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider'>Property information</p>
              </div>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-4xl font-black text-gray-900'>
                  <span>Easy</span>
                </p>
                <p className='text-xs sm:text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider'>Search and compare</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className='order-1 lg:order-2 flex justify-center relative px-4 sm:px-6 lg:px-0'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px]'>
              {/* Quiet background shapes keep the focus on the product image. */}
              <div
                className='hidden sm:block absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-yellow-200 opacity-20 blur-3xl [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)]'
              />
              <div
                className='hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-yellow-300 opacity-20 blur-3xl [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)]'
              />
              
                <div
                className='relative z-10 w-full'
              >
                <Image 
                  src="/hero-image.png" 
                  width={500} 
                  height={500} 
                  alt="PgBee App Interface" 
                  className='w-full h-auto drop-shadow-2xl'
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
