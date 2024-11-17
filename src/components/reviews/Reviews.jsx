import React from 'react';
import rev from '../../assets/images/dreadsrev.png';

const Reviews = () => {
  const Cards = (props) => {
    return (
      <div className="border-2 border-solid border-black px-4 py-6 my-6 max-w-xs sm:max-w-md mx-auto">
        <p className="text-black font-semibold mb-4">
          This is the platform you need if you ever want to venture into the real estate business. Thanks to Blues for helping me in the process of selling my property.
        </p>
        <div className="flex flex-row gap-3 items-center">
          <div>
            <img className="w-[45px] h-[45px] rounded-full" src={props.img} alt="review-picture" />
          </div>
          <div>
            <h2 className="text-black font-medium">Jude Henry</h2>
            <p className="text-black text-sm">Lekki Phase 2</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[url('../reviewbg.png')] bg-cover bg-center mt-5 w-full h-[auto] py-10">
      <div className="text-center mb-8">
        <h2 className="text-black font-bold text-2xl">Let Our Reviews do the Talking</h2>
        <p className="text-black font-normal text-base">See what our clients are saying about us</p>
      </div>

      {/* Flexbox for mobile, responsive grid for larger screens */}
      <div className="flex flex-col sm:flex-row  sm:justify-between px-4 sm:px-10 gap-6 sm:gap-8 items-center mx-auto sm:w-full">
        <Cards img={rev} />
        <Cards img={rev} />
      </div>
    </div>
  );
};

export default Reviews;
