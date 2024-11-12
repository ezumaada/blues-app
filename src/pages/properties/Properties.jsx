import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SearchSection from '../../components/searchsection/SearchSection';
import flat1 from '../../assets/images/flat1.png';
import flat2 from '../../assets/images/flat2.png';
import flat3 from '../../assets/images/flat3.png';
import flat4 from '../../assets/images/flat4.png';
import flat5 from '../../assets/images/flat5.png';
import flat6 from '../../assets/images/flat6.png';
import flat7 from '../../assets/images/flat7.png';
import flat8 from '../../assets/images/flat8.png';
import flat9 from '../../assets/images/flat9.png';
import flat10 from '../../assets/images/flat10.png';
import flat11 from '../../assets/images/flat11.png';
import flat12 from '../../assets/images/flat12.png';
import { Link } from 'react-router-dom';


const Properties = () => {
  const Cardss =(props) =>{
    return(
        <div>
            <div >
            <img src={props.img} alt="" />
            </div>
            <div className='bg-[#D1D1ED]'>
            <div><p className='pl-3 text-[#696969]'>sale</p></div>
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
        <Navbar/>
        <SearchSection/>
        <div className='px-5'>
          <div>
            <h2 className='text-black font-bold text-2xl'>Best Selling Properties</h2>
            <div className='flex flex-nowrap my-5  overflow-x-scroll whitespace-nowrap gap-7 items-center'>
              <Cardss img={flat1} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat2} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat4} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat5} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat6} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
            </div>
          </div>
          <div>
          <h2 className='text-black font-bold text-2xl'>For Rent</h2>
            <div className='flex flex-nowrap my-5  overflow-x-scroll whitespace-nowrap gap-7 items-center'>
              <Cardss img={flat4} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat5} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat6} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat2} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat1} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
            </div>
          </div>
          <div>
          <h2 className='text-black font-bold text-2xl'>For Sale</h2>
            <div className='flex flex-nowrap my-5  overflow-x-scroll whitespace-nowrap gap-7 items-center'>
              <Cardss img={flat7} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat8} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat9} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat10} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat12} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
            </div>
          </div>
          <div>
            <h2 className='text-black font-bold text-2xl'>Best Selling Properties</h2>
            <div className='flex flex-nowrap my-5  overflow-x-scroll whitespace-nowrap gap-7 items-center'>
              <Cardss img={flat11} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat12} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat4} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat2} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
              <Cardss img={flat9} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
            </div>
          </div>
        </div>
        
        
        <Footer/>
    </div>
  )
}

export default Properties