import React from 'react';
import './Contact_UsHero.css'
const Contact_UsHero = () => {
  return (
    <section className="custom-page-header position-relative overflow-hidden ptb-120 bg-custom">
      <div className="container">
        <div className="rows" >
          <div className="col-lg-8 col-md-12">
            <h1 className="custom-display-5 fw-bold text-center mt-10">Contact Us </h1>
            {/* <p className="custom-display-5 text-center mt-4">Join Our Smart 100 Club  </p> */}
            <p className="custom-lead text-center mt-4">
            At our Solar, CCTV, and Electronics store, we are committed to providing top-quality products and exceptional service.
             Whether you need help choosing the right solar solution, setting up a CCTV system, or exploring our electronics range
             , our expert team is here to assist you. Feel free to reach out with any questions, product inquiries, or support needs
             . We look forward to hearing from you!
                {/* Become a member of our Smart 100 Club and get exclusive discounts on your next purchase. Sign up now and join the ranks of our best-selling pharmacies and healthcare providers. */}
              
 </p> </div>
        </div>
        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-custom-light right-5"></div>
      </div>
    </section>
  );
};

export default Contact_UsHero;
