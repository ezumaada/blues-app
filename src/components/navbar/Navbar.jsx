import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/images/burger-icon.png';
 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Navbar for small screens */}
      <div className="flex justify-between items-center p-4 md:hidden">
        {/* Logo */}
        <Link to='/' className='text-[#1818A6] text-4xl leading-4'>BLUES</Link>

        {/* Hamburger icon */}
        <button onClick={toggleSidebar} className="text-black" aria-label="Toggle menu">
          <img src={hamburger} alt="Hamburger Icon" className="h-8" />
        </button>
      </div>

      {/* Full Navbar for medium and large screens */}
      <div className='hidden md:flex items-center justify-between px-10 py-2'>
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
        <div className='flex gap-6'>
          <Link to="/signin">
            <button className='border-solid text-black border-2 border-blue-600 hover:bg-cyan-600 px-3 py-2 bg-white'>
              Sign in
            </button>
          </Link>
          <Link to='/signup'>
            <button className='border-solid border-2 border-blue-600 hover:bg-cyan-600 px-3 py-2 bg-[#1818A6]'>
              Sign up
            </button>
          </Link>
        </div>
      </div>

      {/* Sidebar for small screens (opens on click) */}
      {isOpen && (
        <>
          {/* Overlay for blur effect */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-[30%]`}
          >
            <button
              className="p-2 text-black" 
              onClick={toggleSidebar} 
              aria-label="Close sidebar"
            >
              Close
            </button>
            <div>
              <ul className="p-4">
                <li className='text-black text-center py-2 shadow-md'><Link to="/">Home</Link></li>
                <li className='text-black text-center py-2  shadow-md'><Link to="/about">About</Link></li>
                <li className='text-black text-center py-2 shadow-md'><Link to="/properties">Properties</Link></li>
                <li className='text-black text-center py-2 shadow-md'><Link to="/contact">Contact Us</Link></li>
              </ul>
              <div>
                <ul className='fixed bottom-0 px-2'>
                  <li className='text-black text-center py-2 shadow-md'><Link to="/signin">Sign In</Link></li>
                  <li className='text-black text-center py-2 shadow-md'><Link to="/signup">Sign Up</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
