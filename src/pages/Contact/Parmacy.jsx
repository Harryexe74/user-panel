
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Contact/ContactForm.css';
import { Link } from 'react-router-dom';

const Pharmacy = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/contact/create', formData); // Replace with your backend URL
          if (response.status === 201) {
            toast.success('Message submitted successfully. We will contact you soon!');
            setFormData({
              firstName: '',
              lastName: '',
              phone: '',
              email: '',
              message: ''
            });
          }
        } catch (error) {
          toast.error('There was an error submitting your message. Please try again.');
        }
      };
    
      return (
        <section className="contact-us-form pt-10 mb-10 container" style={{marginTop:"4rem"}}>
          <div className="container p-10">

            <div className="row justify-content-lg-between container align-items-center flex flex-row-reverse">
              <div className="col-lg-6 col-md-8 mt-5">
                <form className="register-form container" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="mb-1">
                        First name <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="firstName"
                          required
                          placeholder="First name"
                          aria-label="First name"
                          className="form-control"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="lastName" className="mb-1">
                        Last name
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="lastName"
                          placeholder="Last name"
                          aria-label="Last name"
                          className="form-control"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="phone" className="mb-1">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          id="phone"
                          required
                          placeholder="Phone"
                          aria-label="Phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="email" className="mb-1">
                        Email<span className="text-danger">*</span>
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="Email"
                          aria-label="Email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="mb-1">
                        Ask your Question
                      </label>
                      <div className="input-group mb-3">
                        <textarea
                          id="message"
                          placeholder="Message"
                          aria-label="Message"
                          className="form-control"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn  d-block w-100 bg-[#1EBEB6] text-white" style={{border:"none"}}>
                        Get in Touch
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5 col-md-10">
                {/* <div className="contact-us-img">
                  <img
                    src="/doctor.jpeg"
                    alt="contact us"
                    className="img-fluid"
                  />
                </div> */}
                <h1 className='font-bold mb-3 ' style={{fontSize:"2rem", fontFamily:"Poppins"}}>
                Consult a Professional
                </h1>
                <p>
                How often is it that you sometimes need advice, reassurance and information about a condition? Of that you might be suffering from a wish to know more about.
Visiting a hospital or GP or making an appointment is often not practical two-time consuming are too far to travel.
Through these links you can conveniently get access to professional advice and ask question from the convenience of your home. Try our services and benefits from high highly skilled professionals 
that can provide guidance and Support when you need it the most.
                </p>
                <Link to='https://www.medicineshoppe.ca/'>
                <button className='bg-red-600 text-white btn mt-3 flex justify-end ' style={{margin:"0 auto", textAlign:"center"}}>
                  Link To Prescriptions
                </button>
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      );
}

export default Pharmacy