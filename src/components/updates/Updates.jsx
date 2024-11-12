import React from 'react'

const Updates = () => {
  return (
    <div>
        <div className='flex flex-col my-10 items-center '>
        <div>
            <div><h1 className='text-black flex justify-center pb-6 font-bold text-3xl'>Get More Updates</h1></div>
            <div className='flex flex-col items-center'>
                <p className='text-black'>Want to be one of the first few to get updated about our new property listings and discounts? </p>
                 <p className='text-black pb-6'>Subscribe to our email list today.</p>
            </div>
        </div>
        <div className='flex flex-row justify-between h-[64px]'>
            <input className='border-solid w-[450px] px-4 border-2 border-black' type="text" placeholder="Input email address" />
            <button className='text-white px-5 py-2 bg-[#1818A6]'>Subscribe</button>
        </div>

    </div>
    </div>
  )
}

export default Updates