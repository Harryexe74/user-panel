import React, { useEffect } from 'react';
import { FaPlay, FaAngleRight } from 'react-icons/fa'; // Import necessary icons
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

function HomeAbout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <div className="about-area bg-gray relative container ">
      <div className="container px-4 sm:px-8 md:px-16 lg:px-24 py-16"> {/* Adjust margins for sm and md screens */}
        <div className="row flex flex-col md:flex-row justify-center items-center">
          <div className="col-lg-6 thumb" data-aos="fade-right" data-aos-duration="1000">
            <div className="thumb-box mx-6" style={{ width: "100%", maxWidth: "500px" }}> {/* Ensure image is centered */}
              <img
                src="/homeabout.webp"
                alt="Thumb"
                className="w-full sm:w-4/5 md:w-full mx-auto" // Adjust image size and center for sm and md screens
              />
            </div>
          </div>
          <div className="col-lg-6 info" data-aos="fade-left" data-aos-duration="1000">
            <h1 className="mb-4 font-bold text-2xl md:text-3xl lg:text-4xl">
              About My Solar and Electrical Shop
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Welcome to our unique website that is designed and developed by a highly skilled team of electrical professionals with years of experience. Our team comprises healthcare professionals and scientists to provide up-to-date, advice-based information for the benefit of those seeking better health and lifestyles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
