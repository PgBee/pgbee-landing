'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const PlayStore = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll position of the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth progress to avoid scroll jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Parallax animation for the phone mockup
  // Moves up as we scroll down, emerging from the curved bottom border
  const phoneY = useTransform(smoothProgress, [0, 0.7], [130, -25]);
  const phoneRotate = useTransform(smoothProgress, [0, 0.7], [-8, 2]);
  const phoneScale = useTransform(smoothProgress, [0, 0.7], [0.95, 1.05]);

  // Parallax for decorative background shapes
  const decorY1 = useTransform(smoothProgress, [0, 1], [-60, 60]);
  const decorY2 = useTransform(smoothProgress, [0, 1], [80, -80]);
  const decorScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.15, 0.9]);

  // Parallax for a floating bee indicator in background
  const beeY = useTransform(smoothProgress, [0, 1], [100, -100]);
  const beeX = useTransform(smoothProgress, [0, 1], [-20, 60]);

  return (
    <section ref={sectionRef} style={{ position: 'relative' }} className="w-full overflow-hidden">
      {/* Top curve */}
      <div className="relative z-10 -mb-1">
        <svg
          className="block h-[40px] w-full sm:h-[60px] lg:h-[80px]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="#FFE536" />
        </svg>
      </div>

      {/* Yellow body - overflow visible allows phone to hang down into the curves */}
      <div className="relative z-0 w-full bg-yellow-400 pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36">
        {/* Floating parallax decorative background circles */}
        <motion.div
          style={{ y: decorY1 }}
          className="pointer-events-none absolute top-12 left-10 hidden h-24 w-24 rounded-full bg-yellow-300/40 blur-md md:block"
        />
        <motion.div
          style={{ y: decorY2, scale: decorScale }}
          className="pointer-events-none absolute bottom-24 left-1/4 h-32 w-32 rounded-full bg-yellow-300/30 blur-lg"
        />
        <motion.div
          style={{ y: beeY, x: beeX }}
          className="pointer-events-none absolute top-1/3 right-1/3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 blur-sm"
        >
          {/* Stylized bee wings effect / icon background */}
          <svg className="h-8 w-8 text-yellow-900/15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a4 4 0 0 0-4 4c0 .88.29 1.7.77 2.36l-2.13 2.13c-.39-.12-.8-.19-1.23-.19a4 4 0 1 0 3.32 6.24l2.13-2.13c.66.48 1.48.77 2.36.77a4 4 0 0 0 4-4c0-.88-.29-1.7-.77-2.36l2.13-2.13c.39.12.8.19 1.23.19a4 4 0 1 0-3.32-6.24l-2.13 2.13A3.94 3.94 0 0 0 12 2zm-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5-1c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
          </svg>
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {/* Left Column: Text Content */}
            <motion.div
              className="space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* <div className="inline-flex items-center gap-2 bg-yellow-300/40 rounded-full px-4 py-1.5">
                <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <span className="text-sm font-semibold text-gray-900">Now Available</span>
              </div> */}

              <h2 className="text-3xl leading-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                We are on
                <br className="sm:hidden" /> Google Play Store
              </h2>

              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-800/80 sm:text-lg lg:mx-0">
                Download the PgBee app now and find verified PGs, hostels, and rooms near your
                college — all in one place.
              </p>

              <div className="pt-2">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=in.pgbee.student"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3 text-white shadow-md transition-colors duration-300 hover:bg-gray-800 sm:rounded-2xl sm:px-8 sm:py-3.5"
                  whileTap={{ opacity: 0.82 }}
                >
                  <svg
                    className="h-8 w-8 flex-shrink-0 sm:h-10 sm:w-10"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zM14.499 12.693l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <span className="block text-[10px] leading-none text-gray-300 sm:text-xs">
                      GET IT ON
                    </span>
                    <span className="text-base leading-tight font-bold sm:text-lg">
                      Google Play
                    </span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column: Clipped Hero Image (Phone Mockup) */}
            <div className="relative z-0 flex h-[320px] w-full justify-center sm:h-[400px] lg:h-[430px] lg:justify-end">
              <motion.div
                style={{ y: phoneY, rotate: phoneRotate, scale: phoneScale }}
                className="absolute top-0 z-0 w-full max-w-[280px] origin-bottom sm:max-w-[320px] lg:max-w-[340px]"
              >
                <Image
                  src="/hero-image.png"
                  width={340}
                  height={500}
                  alt="PgBee App Interface Mockup"
                  className="pointer-events-none h-auto w-full rounded-[2rem] object-cover object-top drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom curve SVG absolutely positioned inside the body to clip overflowing phone */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-full translate-y-[2px]">
          <svg
            className="block h-[40px] w-full sm:h-[60px] lg:h-[80px]"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="#fafafa" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PlayStore;
