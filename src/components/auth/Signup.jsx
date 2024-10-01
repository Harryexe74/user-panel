// import React, { useState } from 'react';
// import { FaUpload } from 'react-icons/fa';
// import './Signup.css'
// const VendorRegistration = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     firstName: '',
//     lastName: '',
//     shopName: '',
//     shopAddress: '',
//     vendorImage: null,
//     shopLogo: null,
//     shopBanner: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = () => {
//     // Handle form submission logic
//     console.log(formData);
//   };

//   return (
//     <div className="py-5 container mt-24">
//       <div className="first-el">
//         <section>
//           <div className="container">
//             <div className="create-an-account p-3 p-sm-4">
//               <img
//                 src="https://6valley.6amtech.com/assets/img/media/form-bg.png"
//                 alt=""
//                 className="create-an-accout-bg-img"
//               />
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="text-center">
//                     <h3 className="mb-2 text-capitalize">Vendor Registration</h3>
//                     <p>
//                       Create your own store. Already have store?{' '}
//                       <a
//                         className="text-primary fw-bold"
//                         href="https://6valley.6amtech.com/vendor/auth/login"
//                       >
//                         Login
//                       </a>
//                     </p>
//                     <div className="my-4 text-center">
//                       <img
//                         width="308"
//                         src="https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png"
//                         alt=""
//                         className="dark-support"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-8">
//                   <div className="bg-white p-3 p-sm-4 rounded">
//                     <h4 className="mb-4 text text-capitalize">Create an account</h4>
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <div className="mb-4">
//                           <label htmlFor="email">
//                             Email <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Ex: example@gmail.com"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="mb-4">
//                           <label htmlFor="phone">
//                             Phone <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             placeholder="Enter phone number"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="mb-4">
//                           <label htmlFor="password">Password</label>
//                           <div className="password-toggle rtl">
//                             <input
//                               className="form-control password-check"
//                               name="password"
//                               type="password"
//                               id="password"
//                               placeholder="Minimum 8 characters long"
//                               value={formData.password}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="mb-4">
//                           <label htmlFor="confirmPassword" className="text-capitalize">
//                             Confirm password
//                           </label>
//                           <div className="password-toggle rtl">
//                             <input
//                               className="form-control"
//                               name="confirmPassword"
//                               type="password"
//                               id="confirmPassword"
//                               placeholder="Confirm password"
//                               value={formData.confirmPassword}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="d-flex justify-content-end">
//                           <button
//                             type="button"
//                             className="btn btn--primary proceed-to-next-btn text-capitalize"
//                             onClick={handleSubmit}
//                           >
//                             Proceed to next
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="second-el d--none">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8">
//               <div className="card">
//                 <div className="card-body">
//                   <h3 className="mb-4">Create an account</h3>
//                   <div className="border p-3 p-xl-4 rounded">
//                     <h4 className="mb-3">Vendor information</h4>
//                     <div className="row">
//                       <div className="col-sm-6">
//                         <div className="form-group mb-4">
//                           <label htmlFor="f_name">
//                             First name <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="firstName"
//                             placeholder="Ex: John"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                         <div className="form-group mb-4">
//                           <label htmlFor="l_name">
//                             Last name <span className="text-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             name="lastName"
//                             placeholder="Ex: Doe"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-sm-6">
//                         <div className="d-flex flex-column gap-3 align-items-center">
//                           <div className="upload-file">
//                             <input
//                               type="file"
//                               className="upload-file__input"
//                               name="vendorImage"
//                               accept="image/*"
//                               onChange={handleChange}
//                               required
//                             />
//                             <div className="upload-file__img">
//                               <div className="temp-img-box">
//                                 <div className="d-flex align-items-center flex-column gap-2">
//                                   <FaUpload className="fs-30" />
//                                   <div className="fs-12 text-muted text-capitalize">Upload file</div>
//                                 </div>
//                               </div>
//                               <img
//                                 src={formData.vendorImage ? URL.createObjectURL(formData.vendorImage) : '#'}
//                                 className="dark-support img-fit-contain border"
//                                 alt=""
//                                 hidden={!formData.vendorImage}
//                               />
//                             </div>
//                           </div>
//                           <div className="d-flex flex-column gap-1 upload-img-content text-center">
//                             <h6 className="text-uppercase mb-1 fs-14">Vendor image</h6>
//                             <div className="text-muted text-capitalize fs-12">Image ratio 1:1</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="border p-3 p-xl-4 rounded mt-4">
//                     <h4 className="mb-3 text-capitalize">Shop information</h4>
//                     <div className="form-group mb-4">
//                       <label htmlFor="shopName" className="text-capitalize">
//                         Shop Name <span className="text-danger">*</span>
//                       </label>
//                       <input
//                         className="form-control"
//                         type="text"
//                         id="shopName"
//                         name="shopName"
//                         placeholder="Ex: XYZ store"
//                         value={formData.shopName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>
//                     <div className="form-group mb-4">
//                       <label htmlFor="shopAddress" className="text-capitalize">
//                         Shop address <span className="text-danger">*</span>
//                       </label>
//                       <textarea
//                         className="form-control"
//                         name="shopAddress"
//                         id="shopAddress"
//                         rows="4"
//                         placeholder="Shop address"
//                         value={formData.shopAddress}
//                         onChange={handleChange}
//                         required
//                       ></textarea>
//                     </div>
//                     <div className="border p-3 p-xl-4 rounded mb-4">
//                       <div className="d-flex flex-column gap-3 align-items-center">
//                         <div className="upload-file">
//                           <input
//                             type="file"
//                             className="upload-file__input"
//                             name="shopLogo"
//                             accept="image/*"
//                             onChange={handleChange}
//                             required
//                           />
//                           <div className="upload-file__img">
//                             <div className="temp-img-box">
//                               <div className="d-flex align-items-center flex-column gap-2">
//                                 <FaUpload className="fs-30" />
//                                 <div className="fs-12 text-muted text-capitalize">Upload file</div>
//                               </div>
//                             </div>
//                             <img
//                               src={formData.shopLogo ? URL.createObjectURL(formData.shopLogo) : '#'}
//                               className="dark-support img-fit-contain border"
//                               alt=""
//                               hidden={!formData.shopLogo}
//                             />
//                           </div>
//                         </div>
//                         <div className="d-flex flex-column gap-1 upload-img-content text-center">
//                           <h6 className="text-uppercase mb-1 fs-14">Shop logo</h6>
//                           <div className="text-muted text-capitalize fs-12">Image ratio 1:1</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="border p-3 p-xl-4 rounded">
//                       <div className="d-flex flex-column gap-3 align-items-center">
//                         <div className="upload-file">
//                           <input
//                             type="file"
//                             className="upload-file__input"
//                             name="shopBanner"
//                             accept="image/*"
//                             onChange={handleChange}
//                             required
//                           />
//                           <div className="upload-file__img">
//                             <div className="temp-img-box">
//                               <div className="d-flex align-items-center flex-column gap-2">
//                                 <FaUpload className="fs-30" />
//                                 <div className="fs-12 text-muted text-capitalize">Upload file</div>
//                               </div>
//                             </div>
//                             <img
//                               src={formData.shopBanner ? URL.createObjectURL(formData.shopBanner) : '#'}
//                               className="dark-support img-fit-contain border"
//                               alt=""
//                               hidden={!formData.shopBanner}
//                             />
//                           </div>
//                         </div>
//                         <div className="d-flex flex-column gap-1 upload-img-content text-center">
//                           <h6 className="text-uppercase mb-1 fs-14">Shop banner</h6>
//                           <div className="text-muted text-capitalize fs-12">Image ratio 3:1</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-end mt-3">
//                       <button
//                         type="button"
//                         className="btn btn--primary submitBtn text-capitalize"
//                         onClick={handleSubmit}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <p>
//                       Already have store?{' '}
//                       <a
//                         className="text-primary fw-bold"
//                         href="https://6valley.6amtech.com/vendor/auth/login"
//                       >
//                         Login
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VendorRegistration;


import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import './Signup.css';

const VendorRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    shopName: '',
    shopAddress: '',
    vendorImage: null,
    shopLogo: null,
    shopBanner: null,
  });

  const [currentStep, setCurrentStep] = useState(1); // State to manage the current form step

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleProceed = () => {
    // Move to the next form step
    setCurrentStep(2);
  };

  const handleSubmit = () => {
    // Handle final form submission logic
    console.log(formData);
  };

  return (
    <div className="py-5 container mt-24">
      {currentStep === 1 && (
        <div className="first-el">
          <section>
            <div className="container">
              <div className="create-an-account p-3 p-sm-4">
                <img
                  src="https://6valley.6amtech.com/assets/img/media/form-bg.png"
                  alt=""
                  className="create-an-accout-bg-img"
                />
                <div className="row flex justify-center items-center">
                  <div className="col-lg-4">
                    <div className="text-center">
                      <h3 className="mb-2 text-capitalize">Join our growing family of health stores</h3>
                      <p>
                        Create your own store. Already have store?{' '}
                        <a
                          className="text-primary fw-bold"
                          href="https://6valley.6amtech.com/vendor/auth/login"
                        >
                          Login
                        </a>
                      </p>
                      <div className="my-4 text-center">
                        <img
                          width="308"
                          // src="https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png"
                          src="/doctor.jpeg"
                          alt=""
                          className="dark-support"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="bg-white p-3 p-sm-4 rounded">
                      <h4 className="mb-4 text text-capitalize">Create an account</h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="email">
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Ex: example@gmail.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="phone">
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter phone number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <div className="password-toggle rtl">
                              <input
                                className="form-control password-check"
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Minimum 8 characters long"
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-4">
                            <label htmlFor="confirmPassword" className="text-capitalize">
                              Confirm password
                            </label>
                            <div className="password-toggle rtl">
                              <input
                                className="form-control"
                                name="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="d-flex justify-content-end">
                            <button
                              type="button"
                              className="btn  proceed-to-next-btn text-capitalize bg-[#1EBEB6] text-white"
                              onClick={handleProceed}
                            >
                              Proceed to next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {currentStep === 2 && (
        <div className="second-el">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <h3 className="mb-4">Create an account</h3>
                    <div className="border p-3 p-xl-4 rounded">
                      <h4 className="mb-3">Vendor information</h4>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group mb-4">
                            <label htmlFor="f_name">
                              First name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="firstName"
                              placeholder="Ex: John"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group mb-4">
                            <label htmlFor="l_name">
                              Last name <span className="text-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              placeholder="Ex: Doe"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex flex-column gap-3 align-items-center">
                            <div className="upload-file">
                              <input
                                type="file"
                                className="upload-file__input"
                                name="vendorImage"
                                accept="image/*"
                                onChange={handleChange}
                                required
                              />
                              <div className="upload-file__img">
                                <div className="temp-img-box">
                                  <div className="d-flex align-items-center flex-column gap-2">
                                    <FaUpload className="fs-30" />
                                    <div className="fs-12 text-muted text-capitalize">Upload file</div>
                                  </div>
                                </div>
                                <img
                                  src={formData.vendorImage ? URL.createObjectURL(formData.vendorImage) : '#'}
                                  className="dark-support img-fit-contain border"
                                  alt=""
                                  hidden={!formData.vendorImage}
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column gap-1 upload-img-content text-center">
                              <h6 className="text-uppercase mb-1 fs-14">Vendor image</h6>
                              <div className="text-muted text-capitalize fs-12">Image ratio 1:1</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border p-3 p-xl-4 rounded mt-4">
                      <h4 className="mb-3 text-capitalize">Shop information</h4>
                      <div className="form-group mb-4">
                        <label htmlFor="shopName" className="text-capitalize">
                          Shop Name <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="shopName"
                          name="shopName"
                          placeholder="Ex: XYZ store"
                          value={formData.shopName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="shopAddress" className="text-capitalize">
                          Shop address <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          name="shopAddress"
                          id="shopAddress"
                          rows="2"
                          placeholder="Ex: Address"
                          value={formData.shopAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label className="text-capitalize">Shop Logo</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file__input"
                            name="shopLogo"
                            accept="image/*"
                            onChange={handleChange}
                          />
                          <label className="custom-file__label" htmlFor="shopLogo">
                            {formData.shopLogo ? formData.shopLogo.name : 'Choose file'}
                          </label>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <label className="text-capitalize">Shop banner</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file__input"
                            name="shopBanner"
                            accept="image/*"
                            onChange={handleChange}
                          />
                          <label className="custom-file__label" htmlFor="shopBanner">
                            {formData.shopBanner ? formData.shopBanner.name : 'Choose file'}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn--primary text-capitalize"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorRegistration;
