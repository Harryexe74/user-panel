import React from "react";
import './FooterSlider.css'

const sliderData = [
  {
    id: "style-ZDSA5",
    link: "/about",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/png/about-company.png",
    imgAlt: "About Us",
    title: "About Us",
    description: "Know about our company more.",
  },
  {
    id: "style-8FEOy",
    link: "/contact",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/png/contact-us.png",
    imgAlt: "Contact Us",
    title: "Contact Us",
    description: "We are Here to Help",
  },
  {
    id: "style-m9Ub9",
    link: "",
    imgSrc: "https://6valley.6amtech.com/public/assets/front-end/png/faq.png",
    imgAlt: "FAQ",
    title: "Buy Voucher",
    description: "Get all Answers",
  },
];

const FooterSlider = () => {
  return (
    <div className="text-center p-10">
      <div className="max-w-7xl mx-auto">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:space-x-4 overflow-x-auto justify-center gap-4">
            {sliderData.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="flex-none bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
              >
                <img
                  className="object-contain mb-2"
                  width="36"
                  height="36"
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
                <p className="m-0 text-lg font-semibold">{item.title}</p>
                <small className="d-none d-sm-block text-gray-600">{item.description}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSlider;
