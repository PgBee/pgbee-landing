'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedButton from './AnimatedButton';

const Home = () => {
  return (
    <section
      className="hero-shell relative z-0 -mt-20 flex w-full items-center justify-center overflow-hidden"
      id="Home"
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 pt-24 pb-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Content */}
          <motion.div
            className="order-2 space-y-6 px-0 sm:space-y-8 sm:px-2 lg:order-1 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="display-title max-w-4xl text-gray-900">
                Your next
                <span className="block">
                  place to live<span className="text-white">.</span>
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-gray-900/70 sm:text-lg lg:text-xl">
                Compare verified PGs, hostels and rooms near your college and choose a stay with
                confidence.
              </p>
            </div>

            <div className="flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:flex-nowrap">
              <AnimatedButton
                text="Find a Stay"
                href="https://app.pgbee.co.in/search"
                className="w-full cursor-pointer rounded-full bg-white px-7 py-3.5 text-base font-bold text-black shadow-none hover:bg-gray-100 sm:w-auto sm:min-w-[170px] sm:px-8 sm:py-4 sm:text-lg"
                icon={
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                }
              />
              <AnimatedButton
                text="List Your Property"
                href="https://owners.pgbee.co.in"
                target="_blank"
                className="w-full cursor-pointer rounded-full border border-gray-900/35 bg-transparent px-7 py-3.5 text-base font-bold text-gray-900 transition-opacity hover:bg-gray-900 hover:text-white sm:w-auto sm:min-w-[190px] sm:px-8 sm:py-4 sm:text-lg"
              />
            </div>

            <div className="editorial-rule max-w-xl" />
            {/* Product benefits */}
            <div className="grid grid-cols-2 gap-4 pt-4 sm:gap-6 sm:pt-8 lg:gap-8">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-gray-900 sm:text-4xl">
                  <span>Verified</span>
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-gray-500 uppercase sm:text-sm">
                  Property information
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-gray-900 sm:text-4xl">
                  <span>Easy</span>
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wider text-gray-500 uppercase sm:text-sm">
                  Search and compare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative order-1 flex justify-center px-4 sm:px-6 lg:order-2 lg:px-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px]">
              {/* Quiet background shapes keep the focus on the product image. */}
              <div className="absolute -top-4 -right-4 hidden h-48 w-48 bg-yellow-200 opacity-20 blur-3xl [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)] sm:block sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
              <div className="absolute -bottom-4 -left-4 hidden h-40 w-40 bg-yellow-300 opacity-20 blur-3xl [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0_50%)] sm:block sm:h-56 sm:w-56 lg:h-64 lg:w-64" />

              <div className="relative z-10 w-full">
                <Image
                  src="/hero-image.png"
                  width={500}
                  height={500}
                  alt="PgBee App Interface"
                  className="h-auto w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
