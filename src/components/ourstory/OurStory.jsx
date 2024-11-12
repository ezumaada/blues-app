import React from 'react';
import storyimg from '../../assets/images/storyimg.png';

const OurStory = () => { 
  return (
    <div>
         <div className='my-10 px-[6vw] flex gap-15 h-[380px] w-[100%]'>
            <div className='w-[50%]'>
                <img className='w-[520px]' src={storyimg} alt="" />
            </div>
            <div className='py-2 w-[50%]'>
                <h1 className='font-bold mb-[30px] text-4xl text-black'>Our Story</h1>
                <p className='text-black'>Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us</p>
            </div>
        </div>
    </div>
  )
}

export default OurStory