import React from 'react';
import teampic1 from '../../assets/images/tpic5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



const OurTeam = () => {
    const Cards =({ image, name, twitter, facebook, instagram }) => {
        return (
            <div>
                <div>
                    <img className='w-[470px] h-[505px] object-cover' src={image} alt="" />
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-75 flex        flex-col items-center justify-center transition-opacity duration-300">
                        <h3 className="text-white text-xl mb-2">John Jude</h3>
                        <div className="flex space-x-4">
                             {twitter && <a href={twitter} className="text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>}
                             {facebook && <a href={facebook} className="text-white"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>}
                             {instagram && <a href={instagram} className="text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <div>
       <div>
        <div className='text-center'>
            <h1 className='text-black font-bold text-3xl'>Our Team</h1>
            <p className='text-black'>Our team comprises of professionals from different branches and specializations</p>
        </div>
        <div >
            <div className='flex my-5 mx-[5vw] gap-5'>
                 <Cards image={teampic1}/>
                 <Cards image={teampic1}/>
                 <Cards image={teampic1}/>
            </div>
            <div className='flex my-5 mx-[5vw] gap-5'>
                <Cards image={teampic1}/>
                <Cards image={teampic1}/>
                <Cards image={teampic1}/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default OurTeam