import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white p-4 fixed w-full z-50 bg-teal-500 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold flex-shrink-0">
          <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
            <img src="/newlogo.png" alt="Logo" className="w-12 h-12 logo-rotate" />
            <span className="hidden md:inline text-2xl font-extrabold custom-font text-nowrap">M-TECH-STORE</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <li>
            <Link to="/" className="relative group text-nowrap hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Home
              <span className="absolute left-0  bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group text-nowrap hover:text-yellow-300 transition duration-300 text-lg font-medium">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/gifts" className="relative group text-nowrap hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Products
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/BlogApp" className="relative group text-nowrap hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Blogs
              <span className="absolute left-0 bottom-0 w-full  text-nowrap h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group text-nowrap hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 header-nav-buttons">
          <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <Link
            to="/login"
            className="bg-gray-700 text-white text-nowrap px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
          >
            Login
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
          <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
            <FaShoppingCart className="text-2xl" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ height: 'auto', zIndex: 50 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-12">
          <li>
            <Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/BlogApp" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              BLOGS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
