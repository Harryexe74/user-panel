import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import About from './pages/About/About.jsx';
import GiftPage from './pages/GifPage/GiftPage.jsx';
import ProductDetail from './pages/ProductDetail/productDetail.jsx';
import VendorRegistration from './components/auth/Signup.jsx';
import VendorList from './pages/AllVendor/VendorList.jsx';
import Contact_Page from './pages/Contact/Contact_Page.jsx';
import BlogApp from './pages/blogs/blogapp.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Cart/Checkout.jsx';
import BlogDetail from './pages/blogs/blogcarddetails.jsx';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<GiftPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/BlogApp" element={<BlogApp />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/partners" element={<VendorList />} />
      <Route path="/cart" element={<Cart /> } />
      <Route  path="/product/:id" element={<ProductDetail />} />
      <Route path="/membership" element={<VendorRegistration />} />
      <Route path="/contact" element={<Contact_Page />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default AppRoutes;
