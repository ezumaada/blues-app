import React from 'react';
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className= 'flex items-center  justify-between px-10 py-2'	>
        <div>
            <Link to='/' className='text-[#1818A6] text-4xl leading-4'>BLUES</Link>
        </div>
        <div>
            <ul className='flex text-black justify-evenly gap-11 py-3'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/properties">Our Properties</Link>
                <Link to="/contact">Contact Us</Link>
            </ul>
        </div>
        <div className=' flex gap-6 '>
            <Link to="/signin">
            <button className='border-solid text-black border-2 border-blue-600 hover:bg-cyan-600 px-3 py-2 bg-white-500'>Sign in</button></Link>
            <button className='border-solid border-2 border-blue-600 hover:bg-cyan-600 px-3 py-2 bg-[#1818A6] '>Sign up</button>
        </div>
     </div>
  )
}

export default Navbar