'use client'

import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import SearchIcon from '@mui/icons-material/Search'
import BookOnlineIcon from '@mui/icons-material/BookOnline'

const Work = () => {
  const workInfoData = [
    {
      icon: PersonAddIcon,
      title: "Register",
      text: "Create a free account and verify your details to access personalized listings and offers.",
    },
    {
      icon: SearchIcon,
      title: "Search",
      text: "Filter and browse verified hostels & PGs by location, price, and amenities to find the best matches.",
    },
    {
      icon: BookOnlineIcon,
      title: "Book",
      text: "Securely book your preferred room with instant confirmation and convenient payment options.",
    },
  ]
  
  return (
    <section className="py-16 sm:py-20 lg:py-28 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">How It Works</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">Simple Steps to Your Perfect Stay</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform simplifies finding and managing PG accommodations. Browse verified listings, compare options, and book securely with seamless rent payments and utility bill management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {workInfoData.map((data, index) => {
            const Icon = data.icon
            return (
              <div className="bg-white p-6 sm:p-8 flex flex-col items-center text-center rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100" key={data.title}>
              <div className="w-24 h-24 rounded-full bg-orange-50 mb-6 flex items-center justify-center">
                <Icon className="text-orange-500 w-12 h-12" />
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-white font-bold flex items-center justify-center mb-4 text-sm">{index + 1}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-snug">{data.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{data.text}</p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work
