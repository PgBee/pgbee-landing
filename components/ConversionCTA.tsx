'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedButton from './AnimatedButton'

const ConversionCTA = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const leftX = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? 0 : -150])
  const rightX = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? 0 : 150])
  const leftY = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? -100 : 0])
  const rightY = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? 100 : 0])
  const leftRotate = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? -2 : -4])
  const rightRotate = useTransform(scrollYProgress, [0.35, 0.78], [0, isMobile ? 2 : 4])

  return (
  <motion.section
    ref={sectionRef}
    className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={{
      hidden: { opacity: 0, y: 70, scale: 0.96 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 },
      },
    }}
  >
    <motion.div className="ticket-cta mx-auto grid max-w-7xl lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        className="ticket-main rounded-3xl bg-gray-900 p-7 sm:p-10 lg:rounded-r-none lg:p-14"
        style={{ x: leftX, y: leftY, rotate: leftRotate }}
        variants={{ hidden: { opacity: 0, x: -35 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span className="ticket-corner-hole ticket-corner-hole-tl" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-tr" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-bl" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-br" aria-hidden="true" />
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">Your next move</p>
        <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Make the search for your stay simpler.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">Browse the app, compare the details that matter, and choose a room that fits your plans.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <AnimatedButton
            text="Find a Stay"
            href="https://app.pgbee.in/search"
            target="_blank"
            className="w-full rounded-full bg-white px-7 py-3.5 font-bold text-gray-900 border border-white/30 hover:bg-yellow-300 sm:w-auto"
          />
          <AnimatedButton
            text="List Your Property"
            href="https://owners.pgbee.in"
            target="_blank"
            className="w-full rounded-full border border-white/30 bg-transparent px-7 py-3.5 font-bold text-white hover:bg-white/10 sm:w-auto"
          />
        </div>
      </motion.div>

      <motion.div
        className="ticket-owner rounded-3xl border-t border-white/10 bg-yellow-400 p-7 sm:p-10 lg:rounded-l-none lg:border-l lg:border-t-0 lg:p-14"
        style={{ x: rightX, y: rightY, rotate: rightRotate }}
        variants={{ hidden: { opacity: 0, x: 35 }, visible: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span className="ticket-corner-hole ticket-corner-hole-tl" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-tr" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-bl" aria-hidden="true" />
        <span className="ticket-corner-hole ticket-corner-hole-br" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900/60">Need help?</p>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-gray-900">Talk to the PgBee team.</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-900/65">Questions about a listing, booking, or getting started as an owner?</p>
        <a href="mailto:pgbee.company@gmail.com" className="mt-6 inline-block border-b-2 border-gray-900 pb-1 font-bold text-gray-900 hover:border-transparent">pgbee.company@gmail.com</a>
      </motion.div>
    </motion.div>
  </motion.section>
  )
}

export default ConversionCTA
