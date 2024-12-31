import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/back.png'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src = {BannerBackground} width='400' alt=''/>
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Accommodation in one tap
            </h1>
            <p className='primary-text'>
              Find the best PGs, hostels and rooms nearby
            </p>
          </div>
        </div>
    </div>
  )
}

export default Home