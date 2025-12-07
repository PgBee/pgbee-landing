'use client'

import React from "react"
import Image from 'next/image'
import { BsTwitter } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="flex gap-8 my-24 max-md:my-12 max-md:flex-col">
      <div className="flex-1 flex flex-col">
        <div className="max-w-[110px]">
          <Image src="/PgBee.svg" alt="PgBee Logo" width={110} height={50} />
        </div>
        <div className="mt-10 flex gap-5">
          <a href="https://twitter.com/pgbee_in" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-yellow-400 transition-colors duration-200">
            <BsTwitter />
          </a>
          <a href="https://linkedin.com/company/pgbee" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-yellow-400 transition-colors duration-200">
            <SiLinkedin />
          </a>
          <a href="https://facebook.com/pgbee.in" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-yellow-400 transition-colors duration-200">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/pgbe.e?utm_source=ig_web_button_share_sheet&igsh=ejlqYWMzZHFvanc5" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-yellow-400 transition-colors duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-8 max-md:flex-col max-md:justify-start">
        <div className="flex flex-col min-w-[190px]">
          <a href="#About"><span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">About</span></a>
          <a href="#Work"><span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">Working</span></a>
          <a href="#Contact"><span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">Contact</span></a>
        </div>
        <div className="flex flex-col min-w-[190px]">
        </div>
        <div className="flex flex-col min-w-[190px]">
          <a href="/Terms and Conditions.pdf" target="_blank" rel="noopener noreferrer">
            <span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">Terms & Conditions</span>
          </a>
          <a href="/Privacy Policy.pdf" target="_blank" rel="noopener noreferrer">
            <span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">Privacy Policy</span>
          </a>
          <a href="/Refund Policy.pdf" target="_blank" rel="noopener noreferrer">
            <span className="my-1 font-semibold text-gray-700 cursor-pointer hover:text-yellow-400 transition-colors duration-200 transform hover:translate-x-0.5">Refund Policy</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
