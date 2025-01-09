import React from 'react'
// import Navbar from './Navbar'
import BannerBackground from '../Assets/back.png'
import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../Assets/banner.png'
// import { useRef } from 'react'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src = {BannerBackground} width='400' alt=''/>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Perfect Stay, Just a Click Away!
            </h1>
            <p className='primary-text'>
              Find the best PGs, hostels and rooms nearby
            </p>
            <a href="https://wa.me/918848799145" target="_blank" rel="noopener noreferrer">
            <button className='secondary-button'>
              Book Now <FiArrowRight/>
            </button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Home