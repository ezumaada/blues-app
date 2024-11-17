import React from 'react';
import next from '../../assets/images/icons-next.png';
import img1 from '../../assets/images/aboutimg.png';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="flex flex-col px-4 py-6 md:px-8 md:py-10 lg:px-16 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section: Text and Link */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <p className="text-[#1818A6] text-lg">ABOUT US</p>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-black">We are the best among the rest</h1>
          <p className="text-black text-base md:text-lg">
            We are your No.1 stop for impeccable deals such as lands, houses, rents, lease, and everything real estate. Affilestate is built to help you solve all your real estate problems from getting reasonable prices for your properties to buying affordable and secured properties.
          </p>
          <Link 
            to="/properties" 
            className="flex items-center text-xl md:text-2xl bg-[#1818A6] text-white w-full sm:w-[240px] py-3 px-4 gap-4 rounded-md hover:bg-[#0f1c7e] transition duration-300"
          >
            <div>Find Property</div>
            <img src={next} alt="Next" className="w-6 h-6" />
          </Link>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-3/5">
          <img className="w-full h-auto object-cover rounded-md" src={img1} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
