'use client';

import React from 'react';
import AnimatedButton from './AnimatedButton';

const About = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <span className="section-eyebrow mb-3 sm:mb-4">About PgBee</span>
          <h2 className="section-title mb-4 px-4 sm:mb-6">
            Access to Verified Hostels & PGs
            <br className="hidden sm:block" />
            Without Fear of Misinformation
          </h2>
          <p className="section-description mx-auto max-w-3xl px-4">
            We simplify the process of finding student accommodations. Our platform connects
            students with verified hostels and PGs, providing a seamless experience to search,
            compare, and book the perfect place to stay.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div className="surface-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 sm:mb-6 sm:h-14 sm:w-14">
              <svg
                className="h-6 w-6 text-yellow-600 sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl">
              Verified Properties
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Review property details, amenities, pricing, and availability in one place.
            </p>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 sm:mb-6 sm:h-14 sm:w-14">
              <svg
                className="h-6 w-6 text-yellow-600 sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl">
              Choose with clarity
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Compare rooms and choose the option that fits your plans.
            </p>
          </div>

          <div className="surface-card p-6 sm:col-span-2 sm:p-8 lg:col-span-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 sm:mb-6 sm:h-14 sm:w-14">
              <svg
                className="h-6 w-6 text-yellow-600 sm:h-7 sm:w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800 sm:mb-3 sm:text-xl">
              Built for students
            </h3>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Find stays near your college and make a confident next step.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-gray-900 p-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.18em] text-yellow-400 uppercase">
              For property owners
            </p>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Bring your rooms to the right students.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
              List your property, manage availability, and connect with students looking for a stay.
            </p>
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
  );
};

export default About;
