import React from 'react';
import iglogo from '../../assets/images/instagram.png';
import fblogo from '../../assets/images/facebook.png';

import xlogo from '../../assets/images/twitter.png';
import linlogo from '../../assets/images/linkedin.png';
import {Link} from 'react-router-dom';



const Footer = () => {
  return (
    <div>
        <div className='bg-[#050521] flex flex-row justify-between px-10'>
            <div>
                <h1 className='text-[#D1D1ED] font-bold text-4xl'>BLUES</h1>
                <div>
                    <div className='flex flex-row gap-2 my-4'>
                    <img src={iglogo} alt="" />
                    <img src={fblogo} alt="" />
                    <img src={xlogo} alt="" />
                    <img src={linlogo} alt="" />
                    </div>
                    <div  className='text-[#D1D1ED]'>Copyright 2023 blues.com</div>
                </div>
            </div>
            <div>
                <ul className='flex flex-col gap-3'>
                    <li className='font-bold'> <Link to='/about'>About us</Link> </li>
                    <li  className='text-[#D1D1ED] font-medium'> <Link to='/about'>About us</Link> </li>
                    <li  className='text-[#D1D1ED] font-medium'>Features</li>
                    <li  className='text-[#D1D1ED]'>News & Blog</li>
                </ul>
            </div>
            <div>
                <ul  className='flex flex-col gap-3'>
                    <li className='font-bold'><Link to='/'>Home</Link></li>
                    <li className='text-[#D1D1ED]'>Rent</li>
                    <li className='text-[#D1D1ED]'>Buy</li>
                    <li className='text-[#D1D1ED]'>Sell</li>
                    <li  className='text-[#D1D1ED]'>Agents</li>
                </ul>
            </div>
            <div>
                <ul  className='flex flex-col gap-3'>
                    <li className='font-bold'>Support</li>
                    <li  className='text-[#D1D1ED]'>FAQs</li>
                    <li  className='text-[#D1D1ED]'>Support Center</li>
                    <li  className='text-[#D1D1ED]'>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul  className='flex flex-col gap-3'>
                    <li className='font-bold'>Support</li>
                    <li  className='text-[#D1D1ED]'>FAQs</li>
                    <li  className='text-[#D1D1ED]'>Support Center</li>
                    <li  className='text-[#D1D1ED]'>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer