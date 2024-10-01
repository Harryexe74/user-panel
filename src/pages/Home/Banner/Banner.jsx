import React from 'react';
import './Banner.css';
import { FaArrowRight } from 'react-icons/fa';

function Banner() {
  return (
    <div className="bg-gray" style={{ background: "#1ebeb6cf", height: "100vh" }}>
      <div className="banner-area p-6 auto-height fixed-thumb text-default">
        <div className="fixed-shape-left-top">
          <img
            src="https://validthemes.net/site-template/healdi/assets/img/shape/1.png"
            alt="Shape"
          />
        </div>
        <div className="container px-5 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Info Section */}
            <div className="info text-left md:text-left">
              <h2 className="wow fadeInDown text-white font-bold font-serif text-xl sm:text-4xl" data-wow-duration="1s">
                Best Solar Panel With Good Quality
              </h2>
              <p className="wow fadeInLeft text-white text-sm sm:text-base" data-wow-duration="1.5s">
                Select a solar panel for your home that will offer excellent energy efficiency and cost-effectiveness. Choose from a wide range of solar panels designed to suit your specific needs and budget.
              </p>
              <a href="#" className="popup-youtube theme video-play-button relative video-inline">
                <FaArrowRight className="ml-2 animate-bounce-horizontal" />
              </a>
            </div>
            {/* Image Section */}
            <div className="thumb mt-4 md:mt-0 flex justify-center">
              <img
                src="/solar-panels-for-sale.webp"
                alt="Solar Panels"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
