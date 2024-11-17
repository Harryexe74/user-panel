import React, { useEffect } from 'react';
import { FaPlay, FaAngleRight, FaGrin, FaGrimace } from 'react-icons/fa'; // Import necessary icons
// import './src/pages/Home/Enjoy/HomeAbout.css'; // Import your CSS file
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library

function Cctv() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <div className=" bg-gray relative ">
      <div className="container p-4 md:p-12 lg:p-24"> {/* Adjust padding for different screens */}
        <div className="rows flex flex-col md:flex-row items-center ">
          <div
            className="col-lg-2 thumb w-full md:w-1/2 mb-0 sm:mb-0 md:mb-6" // Remove margin-bottom for small screens
            style={{ marginTop: "4%" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="thumb-box" style={{ width: "100%", marginTop: "4%" }}>
              <img
                src="/cctvhome.jpg"
                alt="Thumb"
                className="w-full h-auto sm:h-80 md:h-96 lg:h-auto" // Increase image size for small/medium screens
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
            </div>
          </div>
          <div
            className="col-lg-6 info w-full md:w-1/2 sm:pl-0 md:pl-8 lg:pl-16" // Remove padding-left for small screens
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h5 className="title text-capitalize text-lg md:text-xl lg:text-2xl">
            Enhancing Security and Surveillance
            </h5>
            <p className="text-sm md:text-base lg:text-lg">
            CCTV cameras are essential tools for monitoring and safeguarding homes, businesses, and public spaces. They provide real-time surveillance, deter criminal activities, and ensure peace of mind with advanced features like night vision, motion detection, and remote access.
            </p>
            {/* Optionally, add a link or button here */}
            {/* <Link to="/some-page" className="btn btn-primary">
              Learn More <FaAngleRight />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cctv;
