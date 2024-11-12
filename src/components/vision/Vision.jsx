import React from 'react';
import vimg from'../../assets/images/vimg.png';

const Vision = () => {
  return (
    <div>
        <div className='flex flex-row gap-[10rem] items-center px-[7vw]'>
            <div className='w-2/5'>
                <h1 className='text-black text-5xl font-bold my-4'>Our Vision</h1>
                <p className='text-black'>Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us.Get access to only the best selected tutors from all over the world. Learn from experienced experts hand picked just for you . Learning is a continuous process. Build a reputable brand by choosing us</p>
            </div>
            <div  className='w-3/5 '>
                <div className='bg-[#1818A6] relative top-[15rem] right-[70px] w-[7rem]'>
                    <h1>John Jude Felix</h1>
                    <p>CEO-Blue</p>
                </div>
                <img className='w-[520px]' src={vimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Vision