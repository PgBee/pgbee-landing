import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Access to exclusive Hostels, PGs and rent without fear of misinformation
        </h1>
        <p className="primary-text">
          we aim to simplify the process of finding student accommodations. Our platform connects students with verified hostels and PGs, providing a seamless experience to search, compare, and book the perfect place to stay.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About