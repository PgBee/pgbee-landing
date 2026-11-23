'use client';

import type { FormEvent } from 'react';
import React, { useState } from 'react';

const Contact = () => {
  const email = 'pgbee.company@gmail.com';
  const [visitorEmail, setVisitorEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent('PgBee enquiry');
    const body = encodeURIComponent(`Please contact me at: ${visitorEmail}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative z-10 w-full bg-[#fafafa] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <span className="section-eyebrow mb-3 sm:mb-4">Get In Touch</span>
          <h2 className="section-title mb-3 sm:mb-4">Have Questions In Mind?</h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Let us help you find your perfect stay
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:p-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <input
              type="email"
              required
              aria-label="Your email address"
              value={visitorEmail}
              onChange={(event) => setVisitorEmail(event.target.value)}
              placeholder="yourmail@gmail.com"
              className="h-12 w-full rounded-full border border-gray-200 px-5 text-sm text-gray-700 transition-all duration-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 sm:h-14 sm:flex-1 sm:px-6 sm:text-base"
            />
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center rounded-full bg-yellow-400 px-8 py-3.5 text-sm font-bold text-black no-underline transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg sm:w-auto sm:px-10 sm:py-4 sm:text-base"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <p className="mb-4 text-xs text-gray-500 sm:text-sm">Or reach us directly at</p>
          <a
            href={`mailto:${email}`}
            className="text-sm font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-700 sm:text-base"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
