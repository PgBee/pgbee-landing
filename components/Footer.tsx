'use client'

import React from "react"
import Image from 'next/image'
import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 mt-32 pt-20 pb-8">
      <div className="max-w-[1900px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="w-[120px]">
              <Image src="/PgBee.svg" alt="PgBee Logo" width={120} height={55} />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Find your perfect stay with verified PGs, hostels, and rooms. Trusted by thousands of students.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/pgbee_in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1">
                <BsTwitter size={18} />
              </a>
              <a href="https://linkedin.com/company/pgbee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1">
                <SiLinkedin size={18} />
              </a>
              <a href="https://facebook.com/pgbee.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1">
                <FaFacebookF size={18} />
              </a>
              <a href="https://www.instagram.com/pgbe.e" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-white hover:bg-yellow-400 transition-all duration-300 hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Quick Links</h3>
            <div className="space-y-3">
              <a href="#About" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">About Us</a>
              <a href="#Work" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">How it Works</a>
              <a href="#Contact" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Contact</a>
              <a href="https://app.pgbee.in" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Search Properties</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Legal</h3>
            <div className="space-y-3">
              <a href="/Terms and Conditions.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Terms & Conditions</a>
              <a href="/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Privacy Policy</a>
              <a href="/Refund Policy.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-yellow-500 hover:translate-x-1 transition-all duration-200">Refund Policy</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 text-lg mb-5">Get in Touch</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>Have questions? We're here to help!</p>
              <a href="#Contact" className="inline-block mt-4 px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg">Contact Us</a>
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
