import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/back.png'
import { FiArrowRight } from 'react-icons/fi'
import BannerImage from '../Assets/banner.png'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src = {BannerBackground} width='400' alt=''/>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Accommodation in one tap
            </h1>
            <p className='primary-text'>
              Find the best PGs, hostels and rooms nearby
            </p>
            <button className='secondary-button'>
              Book Now <FiArrowRight/>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home