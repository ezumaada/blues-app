import React from 'react';
import next from '../../assets/images/icons-next.png';
import building1 from '../../assets/images/headerpic1.png';
import building2 from '../../assets/images/headerpic2.png';
import building3 from '../../assets/images/headerpic3.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const Cards = (props) => {
        return (
            <div className='flex flex-col gap-4 items-center'>
                <div className='text-[48px] font-bold'>
                    <h3 className='text-black'>{props.title}</h3>
                </div>
                <div className='font-medium text-base'>
                    <p className='text-black'>{props.text}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col-reverse sm:flex-row sm:h-[598px] mt-8 px-4 sm:px-8'>
            {/* Left Section: Text and Buttons */}
            <div className='sm:w-2/5 flex flex-col gap-8'>
                <div>
                    <p className='text-[#1818A6]'>YOUR ALL-IN-ONE STOP</p>
                </div>
                <div className='mt-6'>
                    <h1 className='text-black text-4xl sm:text-5xl'>
                        Buy <span className='text-[#1818A6]'>. </span>
                        Sell <span className='text-[#1818A6]'>.</span> 
                        Rent <span className='text-[#1818A6]'>. </span>
                    </h1>
                </div>
                <div className='mt-6'>
                    <p className='text-xl text-black'>
                        Finding the perfect home or property is now easier than ever with Blues. We are your one-stop platform that connects home renters, buyers, sellers, agents, and service providers, creating a cohesive and efficient real estate ecosystem. Whether you're looking to rent, buy, sell, or invest, we've got you covered!
                    </p>
                </div>
                <div className='cursor-pointer flex flex-row text-2xl items-center bg-[#1818A6] w-[240px] py-[12px] px-[16px] gap-4 mt-6'>
                    <p><Link to="/properties">Find Property</Link></p>
                    <img src={next} alt="Next" />
                </div>
                <div className='flex flex-row py-[4px] gap-4 justify-between hover:justify-center w-full mt-6 sm:w-[398px]'>
                    <Cards title="300+" text="Properties" />
                    <Cards title="21k+" text="Satisfied Customers" />
                    <Cards title="50+" text="Agents" />
                </div>
            </div>

            {/* Right Section: Images */}
            <div className='sm:w-[60%] flex flex-col sm:flex-row gap-4 sm:gap-5'>
                <div className='sm:w-[512px]'>
                    <img className='w-full h-full object-cover' src={building1} alt="Building 1" />
                </div>
                <div className='md:flex flex-col gap-5 hidden'>
                    <img className='w-full h-[323px] object-cover' src={building2} alt="Building 2" />
                    <img className='w-full h-[251px] object-cover' src={building3} alt="Building 3" />
                </div>
            </div>
        </div>
    );
}

export default Header;
