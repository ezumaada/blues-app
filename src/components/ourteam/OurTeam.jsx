import React from 'react';
import teampic1 from '../../assets/images/tpic5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const OurTeam = () => {
  const Cards = ({ image, name, twitter, facebook, instagram }) => {
    return (
      <div className="relative group">
        <div>
          <img className='w-full h-[350px] object-cover' src={image} alt={name} />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col items-center justify-center transition-opacity duration-300">
            <h3 className="text-white text-xl mb-2">{name || 'John Jude'}</h3>
            <div className="flex space-x-4">
              {twitter && <a href={twitter} className="text-white"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>}
              {facebook && <a href={facebook} className="text-white"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>}
              {instagram && <a href={instagram} className="text-white"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-10">
        <h1 className='text-black font-bold text-3xl'>Our Team</h1>
        <p className='text-black'>Our team comprises of professionals from different branches and specializations</p>
      </div>
      
      {/* Grid layout for team members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-[5vw]">
        <Cards image={teampic1} name="John Jude" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
        <Cards image={teampic1} name="Sarah Lee" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
        <Cards image={teampic1} name="Mark Smith" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
        <Cards image={teampic1} name="Rachel Adams" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
        <Cards image={teampic1} name="David Johnson" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
        <Cards image={teampic1} name="Emily Clark" twitter="https://twitter.com" facebook="https://facebook.com" instagram="https://instagram.com" />
      </div>
    </div>
  );
}

export default OurTeam;
