'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
  return (
    <section className='w-full flex items-center justify-center py-8 sm:py-12 lg:py-0' id='Home'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center'>
          {/* Content */}
          <motion.div
            className='order-2 lg:order-1 px-4 sm:px-6 lg:px-0 space-y-6 sm:space-y-8'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='space-y-4 sm:space-y-6'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-[1.1] sm:leading-tight'>
                Your Perfect Stay,
                <span className='block text-yellow-500 mt-2'>Just a Click Away!</span>
              </h1>
              <p className='text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl'>
                Find the best PGs, hostels and rooms nearby with verified listings and instant booking
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
              <button 
                className='w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'
                onClick={() => window.location.href = "https://app.pgbee.in"}
              >
                Search Now →
              </button>
              <button 
                className='w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold text-base sm:text-lg rounded-full border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300'
                onClick={() => document.getElementById('About')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-8'>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-3xl font-bold text-gray-900'>30+</p>
                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Verified Properties</p>
              </div>
              <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-3xl font-bold text-gray-900'>100+</p>
                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Happy Students</p>
              </div>
              {/* <div className='text-center lg:text-left'>
                <p className='text-2xl sm:text-3xl font-bold text-gray-900'>50+</p>
                <p className='text-xs sm:text-sm text-gray-600 mt-1'>Cities</p>
              </div> */}
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
              {/* Decorative elements - hidden on mobile */}
              <div className='hidden sm:block absolute -top-4 -right-4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse'></div>
              <div className='hidden sm:block absolute -bottom-4 -left-4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
              
              <div className='relative z-10 w-full'>
                <Image 
                  src="/banner.png" 
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
