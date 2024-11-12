import React from 'react';
import search from '../../assets/images/iconsearch.png';
import downline from '../../assets/images/downline.png';

const SearchSection = () => {
  return (
    <div>
        <div className='flex items-center gap-9 px-[10vw] my-6'>
            <div className='border-2 border-solid border-grey flex pl-3'>
                <input placeholder='Search' type="text" />
                <img src={search} alt="" />
            </div>
            <div className='border-2 border-solid border-grey flex pl-3'>
                <input placeholder='Location' type="text" />
                <img src={downline} alt="downline" />
            </div>
            <div className='border-2 border-solid border-grey flex pl-3'>
                <input placeholder='Price Range' type="text" />
                <img src={downline} alt="downline" />
            </div>
            <div className='border-2 border-solid border-grey flex pl-3'>
                <input placeholder='Property Type' type="text" />
                <img src={downline} alt="downline" />
            </div>

        </div>
    </div>
  )
}

export default SearchSection