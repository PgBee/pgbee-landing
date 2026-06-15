'use client'

import React from "react"

const Contact = () => {
  const email = 'pgbee.company@gmail.com'

  return (
    <section className="py-16 sm:py-20 lg:py-28 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Have Questions In Mind?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">Let us help you find your perfect stay</p>
        </div>
        
        <div className="bg-white max-w-2xl mx-auto shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input 
              type="email" 
              placeholder="yourmail@gmail.com"
              className="w-full sm:flex-1 h-12 sm:h-14 border border-gray-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 rounded-full px-5 sm:px-6 text-sm sm:text-base text-gray-700 transition-all duration-200"
            />
            <a 
              href={`mailto:${email}`} 
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 rounded-full text-sm sm:text-base font-bold text-black cursor-pointer transition-all duration-300 hover:shadow-lg no-underline flex items-center justify-center hover:-translate-y-0.5"
            >
              Submit →
            </a>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">Or reach us directly at</p>
          <a href={`mailto:${email}`} className="text-sm sm:text-base font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-200">{email}</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
