import React from 'react';
import storyimg from '../../assets/images/storyimg.png';

const OurStory = () => { 
  return (
    <div>
      <div className="my-10 px-6 sm:px-12 md:px-[6vw] flex flex-col sm:flex-row gap-8 h-auto w-full">
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img className="w-full sm:w-[520px] object-cover" src={storyimg} alt="Our Story" />
        </div>
        
        {/* Text Section */}
        <div className="py-2 w-full sm:w-1/2">
          <h1 className="font-bold mb-6 text-3xl sm:text-4xl text-black">Our Story</h1>
          <p className="text-black text-sm sm:text-base md:text-lg">
            Get access to only the best selected tutors from all over the world. Learn from experienced experts handpicked just for you. Learning is a continuous process. Build a reputable brand by choosing us. Get access to only the best selected tutors from all over the world. Learn from experienced experts handpicked just for you. Learning is a continuous process. Build a reputable brand by choosing us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
