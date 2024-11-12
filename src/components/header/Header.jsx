import React from 'react';
import next from '../../assets/images/icons-next.png';
import building1 from '../../assets/images/headerpic1.png';
import building2 from '../../assets/images/headerpic2.png';
import building3 from '../../assets/images/headerpic3.png';
import { Link } from 'react-router-dom';

const Header = () => {

    const Cards =(props) =>{
        return(
            <div className='flex flex-col  gap-4 w-[120px] items-center '>
                <div className=' items-center  text-[48px] h-[60px] font-bold'>
                    <h3 className='text-black'>{props.title}</h3>
                </div>
                <div className='font-medium text-base'>
                    <p className='text-black'>{props.text}</p>
                </div>
            </div>
        )
    }
  return (
    <div className=' flex flex-row h-[598px] mt-8 px-8'>
        <div className='w-2/5  flex flex-col gap-8'>
            <div>
            <div>
                <p  className='text-[#1818A6]'>YOUR ALL-IN-ONE STOP</p>
            </div>
            <div className='mt-6'>
                <h1 className='text-black text-5xl'>Buy <span className='text-[#1818A6]'>. </span> Sell <span className='text-[#1818A6]'>.</span> Rent <span className='text-[#1818A6]'>. </span></h1>
            </div>
            <div className='mt-6'>
                <p className='text-xl text-black'>Finding the perfect home or property is now easier than ever with Blues. We are your one-stop platform that connects home renters, buyers, sellers, agents, and service providers, creating a cohesive and efficient real estate ecosystem. Whether you're looking to rent, buy, sell, or invest, we've got you covered!</p>
            </div>
            </div>
            <div className='cursor-pointer flex flex-row text-2xl items-center bg-[#1818A6] w-[240px] py-[12px] px-[16px] gap-4'>
               <div> <p> <Link to="/properties">Find Property </Link> </p></div>
                <div> <img src={next} alt="" /></div>
            </div>
            <div className='flex flex-row py-[4px] gap-4 justify-between hover:justify-center w-[398px]  '>
                <Cards  title="300+" text="Properties"/>
                <Cards title="21k+" text="Satisfied Customers"/>
                <Cards title="50+" text="Agents"/>
            </div>

        </div>
        <div className=' gap-4 flex flex-row w-[894px] h-[598px]'>
            <div>
                <img className='h-[598px] w-[512px] ' src={building1} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <img className='w-[358px] h-[323px]' src={building2} alt="" />
                <img className='w-[358px] h-[251px]' src={building3} alt="" />
            </div>
    
        </div>
    </div>
  )
}

export default Header