


// import React from 'react';
// import './Testimonial.css'; // Import your CSS file here

// const Testimonial = () => {
//   return (
//     <section className="testimonial-container">
//       <div className="testimonial-content">
//         <section className="testimonial-wrapper">
//           <div className="testimonial-text">
//             <div className="testimonial-quote">
//               "At Pharmacy, we believe that every business can create deep connections with its customers to fulfill their potential.”
//             </div>
//             <div className="testimonial-author">
//               <span className="author-name">Armand Thiberge</span>
//               <span className="author-title">Founder & CEO</span>
//             </div>
//           </div>
//           <div className="testimonial-image-wrapper">
//             <img
//               alt="testimonial"
//               src="/ceo.png"
//               className="testimonial-image"
//             />
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;



import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import './Testimonial.css'; // Import your CSS file here

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Animation should happen every time the element scrolls into view
    });
  }, []);

  return (
    <section className="testimonial-container" data-aos="fade-up" data-aos-duration="1200">
      <div className="testimonial-content">
        <section className="testimonial-wrapper">
          <div
            className="testimonial-text"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="testimonial-quote">
              {/* "At Pharmacy, we believe that every business can create deep connections with its customers to fulfill their potential.” */}
              One Stop Shop 

            </div>
            <div className="testimonial-author">
              <span className="author-name" data-aos="zoom-in" data-aos-duration="1200">
              Here’s a description of the facilities and services related to solar panels,
               CCTV systems, and electronics.
              </span>
              <span className="author-title" data-aos="zoom-in" data-aos-duration="1400">
                {/* Founder & CEO */}
              </span>
            </div>
          </div>
          <div
            className="testimonial-image-wrapper"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              alt="testimonial"
              src="/ceo-solar.jpeg"
              className="testimonial-image"
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
