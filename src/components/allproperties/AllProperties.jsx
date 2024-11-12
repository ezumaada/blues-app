import React from 'react';
import flat1 from '../../assets/images/flat1.png';
import flat2 from '../../assets/images/flat2.png';
import flat3 from '../../assets/images/flat3.png';
import next from '../../assets/images/icons-next.png';
import { Link } from 'react-router-dom';

const AllProperties = () => {
    
    const Cardss =(props) =>{
        return(
            <div>
                <div >
                <img src={props.img} alt="" />
                </div>
                <div className='bg-[#D1D1ED]'> 
                <div><p className='pl-7 text-[#696969]'>sale</p></div>
                <div className=' gap-8 justify-center items-center flex flex-row px-3'>
                    <div>
                     
                    <h6 className='text-black font-bold text-l'>{props.title}</h6>
                    <p className='text-black font-bold text-base'>{props.text}</p>
                    <p className='text-[#696969]'>Joan Properties</p>
                    </div>
                    <div className='flex flex-col gap-2 items-end'>
                       <div ><h6  className='text-[#1818A6] text-xl'>N 300,000</h6></div>
                       <div>
                        <Link to='/details'><button className='bg-[#1818A6] px-3 py-2'>View Details</button></Link>
                       </div>

                    </div>
                </div></div>
                
            </div>
        )
    }
  return (
    <div>
        <div className='items-center p-6 flex flex-col justify-center gap-6 '>
            <h1 className='text-[#1818A6]'>Featured PROPERTIES</h1>
            <div className='flex flex-row gap-5 items-center'>
                <Cardss img={flat1} title="2 Bedroom flat apartment" text="Lekki - Ajah axis"/>
                <Cardss img={flat2} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
                <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
            </div>
            <div>
                <button className='bg-[#1818A6] flex px-6 py-3'> <Link to="/properties" >View all Properties</Link> <img src={next} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default AllProperties