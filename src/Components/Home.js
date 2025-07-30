import React from 'react';
import BannerBackground from '../Assets/back.png';
import BannerImage from '../Assets/banner.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const handleOwnerClick = () => {
    toast('Currently only in owner mobile app !', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "",
      style: { backgroundColor: '#fff200', color: '#000' } 
    });
  };

  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} width='400' alt='Banner Background' />
        </div>

        <div className="home-image-section">
          <img src={BannerImage} alt="Banner" />
        </div>

        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Your Perfect Stay, Just a Click Away!
          </h1>
          <p className='primary-text'>
            Find the best PGs, hostels and rooms nearby
          </p>

          <div className='align'>
            <button 
              className='secondary-button'
              onClick={handleOwnerClick}
            >
              Owner
            </button>

            <button 
              onClick={() => window.location.href = "https://app.pgbee.in"} 
              className='secondary-button2'
            >
              Student
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Home;
