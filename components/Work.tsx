'use client'

import React from 'react'
import Image from 'next/image'

const Work = () => {
  const workInfoData = [
    {
      image: "/pick-meals-image.png",
      title: "Seamless Rent and Bill Management",
      text: "Streamlined systems for rent payments and settling utility bills like water and electricity, reducing hassle for both tenants and owners.",
    },
    {
      image: "/choose-image.png",
      title: "Verified Listings with Transparent Details",
      text: "Access thoroughly verified hostels and PGs with detailed descriptions, photos, and ratings, ensuring trust and transparency.",
    },
    {
      image: "/delivery-image.png",
      title: "Effortless Search and Booking",
      text: "Advanced search filters and a user-friendly interface make finding and booking the ideal accommodation quick and easy.",
    },
  ]
  
  return (
    <section className="mt-60 max-md:mt-20">
      <div className="flex justify-center items-center flex-col" id="Work">
        <p className="font-bold text-yellow-400 text-lg max-md:text-center">Working</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 max-w-2xl max-md:text-center max-md:max-w-[90%] my-4 leading-tight">How It Works</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl max-md:text-center max-md:max-w-[80%] my-4 leading-relaxed">
          Our platform simplifies the process of finding and managing PG accommodations for students and owners. Students can browse verified hostels and PGs, compare options based on location, budget, and amenities, and book their stay securely. Additionally, we provide a seamless rent payment system and help settle water, electricity, and other utility bills, minimizing the workload for both students and PG owners. With our streamlined solutions, managing student accommodations has never been easier.
        </p>
      </div>
      <div className="mt-20 max-md:mt-4 flex justify-center items-center flex-wrap animate-fade-up">
        {workInfoData.map((data) => (
          <div className="w-72 min-h-96 bg-white p-8 flex flex-col justify-center items-center text-center rounded-2xl text-gray-600 m-4" key={data.title}>
            <div className="">
              <Image src={data.image} width={200} height={200} alt={data.title} />
            </div>
            <h2 className="my-4 font-bold">{data.title}</h2>
            <p className="flex-1 flex items-center font-semibold text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work
