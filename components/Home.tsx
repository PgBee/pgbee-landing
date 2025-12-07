'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <section className='w-full' id='Home'>
      <div className='relative flex pt-12 gap-8 md:flex-col-reverse md:items-center md:justify-center animate-fade-up'>
        <motion.div
          className='absolute -top-[100px] -right-[170px] -z-10 max-w-[700px] max-md:hidden'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Image src="/back.png" width={400} height={400} alt='Banner Background' />
        </motion.div>

        <motion.div
          className="flex-1 max-w-[500px] w-full max-md:max-w-[400px] animate-fade-up"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        >
          <Image src="/banner.png" width={500} height={500} alt="Banner" />
        </motion.div>

        <motion.div
          className='flex-1 flex flex-col justify-center items-start max-md:w-full max-md:justify-center max-md:items-center max-md:mt-16'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        >
          <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-700 max-w-2xl max-md:text-center max-md:max-w-[90%] leading-tight'>
            Your Perfect Stay, Just a Click Away!
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl max-md:text-center max-md:max-w-[80%] my-6 max-md:my-4 leading-relaxed'>
            Find the best PGs, hostels and rooms nearby
          </p>

          <div className='flex gap-2.5 max-md:flex-col max-md:gap-2.5 max-md:mb-16 max-md:w-full'>
            <button 
              className='h-14 w-44 max-md:w-52 max-md:min-w-0 bg-yellow-400 hover:bg-yellow-300 border-none rounded-full text-base font-semibold text-black cursor-pointer transition-colors duration-200 flex items-center justify-center'
              onClick={() => window.location.href = "https://app.pgbee.in"}
            >
              Search Now
            </button>
          </div>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  )
}

export default Home
