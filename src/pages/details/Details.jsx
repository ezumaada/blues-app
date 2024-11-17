import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import flat2 from '../../assets/images/flat2.png';
import locate from '../../assets/images/locate.png';
import call from '../../assets/images/call-icon.png';
import flat6 from '../../assets/images/flat6.png';
import flat4 from '../../assets/images/flat4.png';
import flat7 from '../../assets/images/flat7.png';
import flat11 from '../../assets/images/flat11.png';
import { Link } from 'react-router-dom';
import flat9 from '../../assets/images/flat9.png';
import flat3 from '../../assets/images/flat3.png';

const Details = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <Navbar />
      <div>
        {/* Main Image */}
        <div>
          <img className="w-full h-[550px] my-4 object-cover" src={flat2} alt="image of flat" />
        </div>

        {/* Property Info */}
        <div className="my-6 mx-4 md:mx-8 flex flex-col md:flex-row justify-between gap-6">
          <div className="w-full md:w-3/6">
            {/* Title and Button */}
            <div className="flex justify-between items-center">
              <h1 className="text-black font-bold text-3xl md:text-4xl">3 Bedroom Apartment</h1>
              <button className="bg-[#D1D1ED] px-3 py-2 text-[#1818A6] text-sm md:text-base">For Sale</button>
            </div>
            
            {/* Description */}
            <div>
              <p className="text-black my-2 text-sm md:text-base">Description: A 3 bedroom fully furnished apartment for sale. Located in the heart of Lagos Island, the hub of business.</p>
              <p className="text-sm md:text-base">Posted by Afriglobal estates</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 my-4">
              <img src={locate} alt="location icon" className="w-5 h-5" />
              <p className="text-[#1818A6] font-medium text-sm md:text-base">Lekki, Ajah</p>
            </div>
          </div>

          {/* Price and Contact */}
          <div className="flex flex-col items-center gap-5">
            <div className="text-black font-bold text-xl md:text-2xl">N 300,000.00</div>
            <Link to="/contact">
              <button className="text-white flex items-center px-4 py-2 bg-[#1818A6] rounded-md">
                <img src={call} alt="phone icon" className="w-5 h-5 mr-2" />
                Contact Agent
              </button>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start pl-6 my-5 gap-4 h-[40px] flex-wrap">
          <button className="text-[#1818A6] bg-[#D1D1ED] w-[156px] text-sm md:text-base border-[#1818A6] rounded-md py-2">
            I found this useful
          </button>
          <button className="bg-[#1818A6] h-[40px] text-[#D1D1ED] text-sm md:text-base px-4 py-2 rounded-md">
            This is within my budget
          </button>
          <button className="text-[#1818A6] bg-[#D1D1ED] text-sm md:text-base px-4 py-2 border-2 border-[#1818A6] rounded-md">
            This is beyond my budget
          </button>
          <button onClick={handleClick} className="text-[#1818A6] bg-[#D1D1ED] text-sm md:text-base px-4 py-2 border-2 border-[#1818A6] rounded-md">
            I love this location
          </button>
          {clicked && <p className="mt-4 text-2xl text-black">Thank you</p>}
        </div>

        {/* Other Images */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black my-6">Other images of the apartment</h2>
          <div className="flex overflow-x-scroll whitespace-nowrap gap-6">
            <img src={flat4} alt="flat image 1" className="w-64 md:w-72" />
            <img src={flat6} alt="flat image 2" className="w-64 md:w-72" />
            <img src={flat7} alt="flat image 3" className="w-64 md:w-72" />
            <img src={flat11} alt="flat image 4" className="w-64 md:w-72" />
            <img src={flat3} alt="flat image 5" className="w-64 md:w-72" />
            <img src={flat9} alt="flat image 6" className="w-64 md:w-72" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
