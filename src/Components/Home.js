import React from 'react';
import { motion } from 'framer-motion';
import BannerBackground from '../Assets/back.png';
import BannerImage from '../Assets/banner.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const handleOwnerClick = () => {
    toast('Hurray! You have won ₹100 cashback', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      progress: undefined,
      style: { backgroundColor: '#fff200', color: '#000' }
    });
  };

  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <motion.div
          className='home-bannerImage-container'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <img src={BannerBackground} width='400' alt='Banner Background' />
        </motion.div>

        <motion.div
          className="home-image-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        >
          <img src={BannerImage} alt="Banner" />
        </motion.div>

        <motion.div
          className='home-text-section'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        >
<div className="flex flex-col items-center text-center px-4 sm:px-0 ">
  <h1 className="primary-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 ">
    Your Perfect Stay, Just a Click Away!
  </h1>

  <p className="primary-text text-base sm:text-lg text-gray-600 mb-6">
    Find the best PGs, hostels and rooms nearby
  </p>

  {/* Responsive Buttons */}
  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
    <button 
      className="secondary-button"
      onClick={() => window.location.href = "https://app.pgbee.in"}
    >
      Search Now
    </button>

    <button 
      onClick={handleOwnerClick}
      className="secondary-button2"
    >
      Referral Code : PGB100
    </button>
  </div>
</div>

        </motion.div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Home;
