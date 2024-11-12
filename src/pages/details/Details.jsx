import React,  { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import flat2 from '../../assets/images/flat2.png';
import locate from '../../assets/images/locate.png';
import call from '../../assets/images/call-icon.png';
import flat6 from '../../assets/images/flat6.png';
import flat4 from '../../assets/images/flat4.png';
import flat7 from '../../assets/images/flat7.png';
import flat11 from '../../assets/images/flat11.png';
import { Link } from 'react-router-dom';
import flat9 from '../../assets/images/flat9.png';
import flat3 from '../../assets/images/flat3.png';

const Details = () => {
    const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
        <Navbar/>
        <div>
            <div >
                <img className='w-[100vw] h-[550px] my-4' src={flat2} alt="image of flat" />
            </div>
            <div className='my-6 mx-[3vw] flex justify-between'>
                <div className='w-3/6 '>
                    <div className='flex gap-4'>
                        <div><h1 className='text-black font-bold text-4xl'>3 Bedroom Apartment</h1></div>
                        <div><button className='bg-[#D1D1ED] px-3 py-2 text-[#1818A6]'>For Sale</button>
                        </div>                     
                    </div>
                    <div>
                        <p className='text-black my-2'>Description: A 3 bedroom fully furnished apartment for sale. Located in the heart of Lagos Island , the hub of business</p>
                        <p>Posted by Afriglobal estates</p>
                    </div>
                    <div className='flex gap-2 my-4'>
                        <div><img src={locate} alt="" /></div>
                        <div><p className='text-[#1818A6] font-medium'>Lekki, Ajah</p></div>
                    </div>
                                     

                </div>
                <div className='flex flex-col gap-5 '>
                    <div className='text-black font-bold text-2xl'>N 300,000.00</div>
                    <Link to='/contact'><button className='text-white flex px-3 py-2 bg-[#1818A6]'> <img src={call} alt="phone icon" />Contact Agent</button></Link>
                </div>
            </div>
            <div className='flex justify-start pl-6 my-5 gap-4 h-[40px]'>
                        <button className='text-[#1818A6] bg-[#D1D1ED] w-[156px] text-sm border-[#1818A6]'>I  found this useful</button>
                        <button className='bg-[#1818A6] h-[40px] text-[#D1D1ED] text-sm px-3 py-2'>This is within my budget</button>
                        <button  className='text-[#1818A6] bg-[#D1D1ED] text-sm px-3 py-2 border-2 border-[#1818A6]'>This is beyond my budget</button>
                        <button onClick={handleClick} className='text-[#1818A6] bg-[#D1D1ED] text-sm px-3 py-2 border-2 border-[#1818A6]'>I love this location</button>
                        {clicked && <p className="mt-4 text-2xl text-black">Thank you</p>}
            </div>

        </div>
        <div>
            <h2>Other images of the apartment</h2>
            <div className='flex justify-between  overflow-x-scroll whitespace-nowrap gap-6'>
                <img src={flat4} alt="" />
                <img src={flat6} alt="" />
                <img src={flat7} alt="" />
                <img src={flat11} alt="" />
                <img src={flat3} alt="" />
                <img src={flat9} alt="" />
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Details