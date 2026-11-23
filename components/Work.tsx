'use client';

import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const Work = () => {
  const workInfoData = [
    {
      icon: PersonAddIcon,
      title: 'Register',
      text: 'Create a free account and verify your details to access personalized listings and offers.',
    },
    {
      icon: SearchIcon,
      title: 'Search',
      text: 'Filter and browse verified hostels & PGs by location, price, and amenities to find the best matches.',
    },
    {
      icon: BookOnlineIcon,
      title: 'Book',
      text: 'Choose the room that suits you, review the details, and complete the booking securely.',
    },
  ];

  return (
    <section className="w-full border-y border-gray-200/70 bg-white/45 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <span className="section-eyebrow mb-3 sm:mb-4">How It Works</span>
          <h2 className="section-title mb-4 sm:mb-6">Simple Steps to Your Perfect Stay</h2>
          <p className="section-description mx-auto max-w-3xl">
            Browse verified listings, compare rooms and prices, then contact or book your preferred
            stay through PgBee.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
          <ScrollStack
            useWindowScroll
            itemDistance={72}
            itemStackDistance={28}
            stackPosition="18%"
            scaleEndPosition="8%"
            baseScale={0.9}
            itemScale={0.025}
          >
            {workInfoData.map((data, index) => {
              const Icon = data.icon;
              return (
                <ScrollStackItem
                  itemClassName="flex flex-col items-center text-center justify-center"
                  key={data.title}
                >
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 sm:mb-6 sm:h-24 sm:w-24">
                    <Icon className="h-10 w-10 text-yellow-600 sm:h-12 sm:w-12" />
                  </div>
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-gray-900">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-lg leading-snug font-bold text-gray-800 sm:text-xl">
                    {data.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                    {data.text}
                  </p>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default Work;
