'use client'

import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import SearchIcon from '@mui/icons-material/Search'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

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
      text: "Choose the room that suits you, review the details, and complete the booking securely.",
    },
  ]
  
  return (
    <section className="w-full border-y border-gray-200/70 bg-white/45 py-16 sm:py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow mb-3 sm:mb-4">How It Works</span>
          <h2 className="section-title mb-4 sm:mb-6">Simple Steps to Your Perfect Stay</h2>
          <p className="section-description max-w-3xl mx-auto">
            Browse verified listings, compare rooms and prices, then contact or book your preferred stay through PgBee.
          </p>
        </div>
        
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <ScrollStack useWindowScroll itemDistance={72} itemStackDistance={28} stackPosition="18%" scaleEndPosition="8%" baseScale={0.9} itemScale={0.025}>
          {workInfoData.map((data, index) => {
            const Icon = data.icon
            return (
              <ScrollStackItem itemClassName="flex flex-col items-center text-center justify-center" key={data.title}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-100 mb-5 sm:mb-6 flex items-center justify-center">
                <Icon className="text-yellow-600 w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 text-gray-900 font-bold flex items-center justify-center mb-4 text-sm">{index + 1}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 leading-snug">{data.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">{data.text}</p>
              </ScrollStackItem>
            )
          })}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

export default Work
