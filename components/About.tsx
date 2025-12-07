'use client'

import React from 'react'

const About = () => {
  return (
    <section className="relative flex items-center justify-between gap-4 mt-80 max-md:mt-20 max-md:flex-col max-md:items-center max-md:justify-center" id="About">
      <div className="absolute -left-36 -z-10 max-md:hidden">
      </div>
      <div className="flex-[0.9] w-full max-md:max-w-[400px]">
      </div>
      <div className="flex-1 flex flex-col justify-center max-md:items-center max-md:mt-16">
        <p className="font-bold text-yellow-400 text-lg max-md:text-center">About</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 max-w-2xl max-md:text-center max-md:max-w-[90%] my-4 leading-tight">
          Access to exclusive Hostels, PGs and rent without fear of misinformation
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl max-md:text-center max-md:max-w-[80%] my-6 max-md:my-4 leading-relaxed">
          we aim to simplify the process of finding student accommodations. Our platform connects students with verified hostels and PGs, providing a seamless experience to search, compare, and book the perfect place to stay.
        </p>
        <div className="mt-8 max-md:mt-6 flex max-md:justify-center max-md:flex-col">
          <button className="h-14 px-7 py-2 bg-yellow-400 hover:bg-yellow-300 border-none rounded-full text-base font-semibold text-black cursor-pointer transition-colors duration-200 flex items-center justify-center">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default About
