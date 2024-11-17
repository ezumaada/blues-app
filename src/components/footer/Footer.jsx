import React from 'react';
import iglogo from '../../assets/images/instagram.png';
import fblogo from '../../assets/images/facebook.png';
import xlogo from '../../assets/images/twitter.png';
import linlogo from '../../assets/images/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#050521] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12">
          
          {/* Left Section: Logo and Social Media */}
          <div className="flex flex-col items-start text-white">
            <h1 className="text-[#D1D1ED] font-bold text-4xl mb-4">BLUES</h1>
            <div className="flex gap-4 mb-4">
              <img src={iglogo} alt="Instagram" className="w-6 h-6"/>
              <img src={fblogo} alt="Facebook" className="w-6 h-6"/>
              <img src={xlogo} alt="Twitter" className="w-6 h-6"/>
              <img src={linlogo} alt="LinkedIn" className="w-6 h-6"/>
            </div>
            <div className="text-[#D1D1ED]">Copyright 2023 blues.com</div>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-white">
            <ul className="flex flex-col gap-3">
              <li className="font-bold"><Link to="/about">About us</Link></li>
              <li className="font-medium"><Link to="/about">Features</Link></li>
              <li className="font-medium"><Link to="/blog">News & Blog</Link></li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold"><Link to="/">Home</Link></li>
              <li className="font-medium"><Link to="/rent">Rent</Link></li>
              <li className="font-medium"><Link to="/buy">Buy</Link></li>
              <li className="font-medium"><Link to="/sell">Sell</Link></li>
              <li className="font-medium"><Link to="/agents">Agents</Link></li>
            </ul>
          </div>

          {/* Right Section: Support Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-white">
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Support</li>
              <li className="font-medium"><Link to="/faq">FAQs</Link></li>
              <li className="font-medium"><Link to="/support">Support Center</Link></li>
              <li className="font-medium"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="font-bold">Additional Links</li>
              <li className="font-medium"><Link to="/privacy">Privacy Policy</Link></li>
              <li className="font-medium"><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
