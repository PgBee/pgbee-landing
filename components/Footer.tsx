'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import AnimatedButton from './AnimatedButton';

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-8">
      <div className="mx-auto max-w-[1900px] px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="block w-[120px] cursor-pointer">
              <Image
                src="/PgBee.svg"
                alt="PgBee Logo"
                width={120}
                height={55}
                className="h-auto w-[120px]"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              Find your perfect stay with verified PGs, hostels, and rooms near your college.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://twitter.com/pgbee_in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors duration-300 hover:bg-yellow-400 hover:text-white"
                whileTap={{ opacity: 0.7 }}
              >
                <BsTwitter size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/pgbee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors duration-300 hover:bg-yellow-400 hover:text-white"
                whileTap={{ opacity: 0.7 }}
              >
                <SiLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://facebook.com/pgbee.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors duration-300 hover:bg-yellow-400 hover:text-white"
                whileTap={{ opacity: 0.7 }}
              >
                <FaFacebookF size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/pgbee.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors duration-300 hover:bg-yellow-400 hover:text-white"
                whileTap={{ opacity: 0.7 }}
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-gray-800">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/#about"
                className="block text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-yellow-500"
              >
                About Us
              </Link>
              <Link
                href="/#work"
                className="block text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-yellow-500"
              >
                How it Works
              </Link>
              <Link
                href="/#contact"
                className="block text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-yellow-500"
              >
                Contact
              </Link>
              <Link
                href="/#faq"
                className="block text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-yellow-500"
              >
                FAQs
              </Link>
              <a
                href="https://app.pgbee.in/search"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-yellow-500"
              >
                Search Properties
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-gray-800">Legal</h3>
            <div className="space-y-3">
              <Link
                href="/terms"
                className="block text-gray-600 transition-colors duration-200 hover:text-yellow-500"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-600 transition-colors duration-200 hover:text-yellow-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="block text-gray-600 transition-colors duration-200 hover:text-yellow-500"
              >
                Refund Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-gray-800">Get in Touch</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Have questions? We&apos;re here to help!</p>
              <a
                href="mailto:pgbee.company@gmail.com"
                className="block transition-colors hover:text-yellow-500"
              >
                pgbee.company@gmail.com
              </a>
              <AnimatedButton
                text="Contact Us"
                href="/#contact"
                className="mt-4 inline-block cursor-pointer rounded-full bg-yellow-400 px-6 py-2.5 font-semibold text-black shadow-md hover:bg-yellow-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
            <p>&copy; {new Date().getFullYear()} PgBee. All rights reserved.</p>
            <p>Made with ❤️ for students</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
