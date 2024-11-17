import React from 'react';
import vimg from '../../assets/images/vimg.png';

const Vision = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-10 sm:gap-[10rem] items-center px-6 sm:px-[7vw]'>
        {/* Left Section */}
        <div className='w-full sm:w-2/5'>
          <h1 className='text-black text-3xl sm:text-5xl font-bold my-4 text-center sm:text-left'>
            Our Vision
          </h1>
          <p className='text-black text-base sm:text-lg leading-relaxed text-center sm:text-left'>
            Get access to only the best selected tutors from all over the world. Learn from experienced experts hand-picked just for you. Learning is a continuous process. Build a reputable brand by choosing us.
            {/* Truncated for brevity, feel free to expand */}
          </p>
        </div>

        {/* Right Section */}
        <div className='w-full sm:w-3/5 flex justify-center sm:justify-end relative mt-6 sm:mt-0'>
          <div className='bg-[#1818A6] p-4 absolute top-[-4rem] sm:top-[15rem] sm:right-[70px] text-center text-white'>
            <h1 className='font-semibold'>John Jude Felix</h1>
            <p className='text-sm'>CEO-Blue</p>
          </div>
          <img className='w-full sm:w-[520px] object-contain' src={vimg} alt="Vision Image" />
        </div>
      </div>
    </div>
  );
}

export default Vision;
