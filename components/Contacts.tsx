'use client'

import React from "react"

const Contact = () => {
  const email = 'pgbee.company@gmail.com'

  return (
    <section className="flex items-center justify-center flex-col my-24 max-md:my-12" id="Contact">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 max-w-2xl max-md:text-center max-md:max-w-[90%] leading-tight">Have Question In Mind?</h1>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 max-w-2xl max-md:text-center max-md:max-w-[90%] leading-tight">Let Us Help You</h1>
      <div className="bg-white max-w-2xl max-md:max-w-full w-full mt-12 max-md:mt-8 flex items-center p-4 rounded-full max-md:flex-col max-md:items-center max-md:rounded-2xl">
        <input 
          type="text" 
          placeholder="yourmail@gmail.com"
          className="flex-1 h-full border-none outline-none text-2xl max-md:text-base p-2 max-md:p-4 max-md:mb-3 max-md:text-center"
        />
        <a 
          href={`mailto:${email}`} 
          className="h-14 w-44 max-md:w-52 px-1 py-0 bg-yellow-400 hover:bg-yellow-300 border-none rounded-full text-base font-semibold text-black cursor-pointer transition-colors duration-200 no-underline flex items-center justify-center"
        >
          Submit
        </a>
      </div>
    </section>
  )
}

export default Contact
