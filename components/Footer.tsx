'use client'

import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import AnimatedButton from "./AnimatedButton"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 mt-32 pt-20 pb-8 border-t border-gray-200">
      <div className="max-w-[1900px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="w-[120px] block cursor-pointer">
              <Image src="/PgBee.svg" alt="PgBee Logo" width={120} height={55} className="w-[120px] h-auto" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Find your perfect stay with verified PGs, hostels, and rooms near your college.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://twitter.com/pgbee_in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-colors duration-300"
                whileTap={{ opacity: 0.7 }}
              >
                <BsTwitter size={18} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/company/pgbee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-colors duration-300"
                whileTap={{ opacity: 0.7 }}
              >
                <SiLinkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://facebook.com/pgbee.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-colors duration-300"
                whileTap={{ opacity: 0.7 }}
              >
                <FaFacebookF size={18} />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/pgbee.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-colors duration-300"
                whileTap={{ opacity: 0.7 }}
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/#about" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">About Us</Link>
              <Link href="/#work" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">How it Works</Link>
              <Link href="/#contact" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Contact</Link>
              <Link href="/#faq" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">FAQs</Link>
          <a href="https://app.pgbee.in/search" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Search Properties</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Legal</h3>
            <div className="space-y-3">
              <Link href="/terms" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200">Terms & Conditions</Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200">Privacy Policy</Link>
              <Link href="/refund-policy" className="block text-gray-600 hover:text-yellow-500 transition-colors duration-200">Refund Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Get in Touch</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>Have questions? We&apos;re here to help!</p>
              <a href="mailto:pgbee.company@gmail.com" className="block hover:text-yellow-500 transition-colors">pgbee.company@gmail.com</a>
              <AnimatedButton
                text="Contact Us"
                href="/#contact"
                className="inline-block mt-4 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full cursor-pointer shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} PgBee. All rights reserved.</p>
            <p>Made with ❤️ for students</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
