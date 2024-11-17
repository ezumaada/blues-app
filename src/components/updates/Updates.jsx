import React from 'react';

const Updates = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16"> {/* Padding adjustments for different screen sizes */}
      <div className="flex flex-col my-10 items-center">
        <div>
          <div>
            <h1 className="text-black flex justify-center pb-6 font-bold text-3xl sm:text-4xl md:text-5xl">
              Get More Updates
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-black text-center sm:text-lg md:text-xl">
              Want to be one of the first few to get updated about our new property listings and discounts?
            </p>
            <p className="text-black pb-6 text-center sm:text-lg md:text-xl">
              Subscribe to our email list today.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-auto h-[64px]">
          <input
            className="border-solid w-full sm:w-[450px] px-4 border-2 border-black py-2 mb-4 sm:mb-0"
            type="text"
            placeholder="Input email address"
          />
          <button className="text-white px-5 py-2 bg-[#1818A6] w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updates;
