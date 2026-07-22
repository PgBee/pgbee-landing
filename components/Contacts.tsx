'use client'

import React, { FormEvent, useState } from "react"

const Contact = () => {
  const email = 'pgbee.company@gmail.com'
  const [visitorEmail, setVisitorEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent('PgBee enquiry')
    const body = encodeURIComponent(`Please contact me at: ${visitorEmail}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 w-full bg-[#fafafa] relative z-10">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-eyebrow mb-3 sm:mb-4">Get In Touch</span>
          <h2 className="section-title mb-3 sm:mb-4">
            Have Questions In Mind?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">Let us help you find your perfect stay</p>
        </div>
        
        <div className="bg-white max-w-2xl mx-auto shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input 
              type="email" 
              required
              aria-label="Your email address"
              value={visitorEmail}
              onChange={(event) => setVisitorEmail(event.target.value)}
              placeholder="yourmail@gmail.com"
              className="w-full sm:flex-1 h-12 sm:h-14 border border-gray-200 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 rounded-full px-5 sm:px-6 text-sm sm:text-base text-gray-700 transition-all duration-200"
            />
            <button type="submit" className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-yellow-400 hover:bg-yellow-300 rounded-full text-sm sm:text-base font-bold text-black cursor-pointer transition-all duration-300 hover:shadow-lg no-underline flex items-center justify-center">Send Enquiry</button>
          </form>
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-4">Or reach us directly at</p>
          <a href={`mailto:${email}`} className="text-sm sm:text-base font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-200">{email}</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
