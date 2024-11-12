import React from 'react';
import next from '../../assets/images/icons-next.png';
import img1 from '../../assets/images/aboutimg.png';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="flex flex-col px-8 py-4">
      <div className="flex flex-row gap-6">
        <div className="w-2/5 flex flex-col gap-6">
          <p className="text-[#1818A6]">ABOUT US</p>
          <h1 className="font-bold text-5xl text-black">We are the best among the rest</h1>
          <p className="text-black">
            We are your No.1 stop for impeccable deals such as lands, houses, rents, lease and everything real estate. Affilestate is built to help you solve all your real estate problems from getting reasonable prices for your properties to buying affordable and secured properties.
          </p>
          <Link to="/properties" className="flex flex-row items-center text-2xl bg-[#1818A6] text-white w-[240px] py-[12px] px-[16px] gap-4">
            <div>Find Property</div>
            <img src={next} alt="Next" />
          </Link>
        </div>
        <div>
          <img className="w-[800px] object-cover" src={img1} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
