import React from 'react';
import flat1 from '../../assets/images/flat1.png';
import flat2 from '../../assets/images/flat2.png';
import flat3 from '../../assets/images/flat3.png';
import next from '../../assets/images/icons-next.png';
import { Link } from 'react-router-dom';

const AllProperties = () => {
  const Cardss = (props) => {
    return (
      <div className="bg-white shadow-lg rounded-md overflow-hidden">
        <div>
          <img className="w-full object-cover h-48 md:h-64" src={props.img} alt="" />
        </div>
        <div className="bg-[#D1D1ED] p-4">
          <p className="text-[#696969] text-sm">Sale</p>
          <div className="flex justify-between items-center">
            <div>
              <h6 className="text-black font-bold text-lg">{props.title}</h6>
              <p className="text-black text-base">{props.text}</p>
              <p className="text-[#696969] text-sm">Joan Properties</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <h6 className="text-[#1818A6] text-xl">N 300,000</h6>
              <Link to="/details">
                <button className="bg-[#1818A6] text-white px-3 py-2 rounded-md text-sm hover:bg-[#0f1c7e] transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-8 md:px-8 md:py-12">
      <div className="text-center mb-8">
        <h1 className="text-[#1818A6] text-2xl md:text-3xl font-semibold">Featured PROPERTIES</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cardss img={flat1} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
        <Cardss img={flat2} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
        <Cardss img={flat3} title="2 Bedroom flat apartment" text="Lekki - Ajah axis" />
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#1818A6] flex items-center text-white px-6 py-3 rounded-md hover:bg-[#0f1c7e] transition duration-300">
          <Link to="/properties" className="text-sm">View all Properties</Link>
          <img className="w-5 h-5 ml-3" src={next} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default AllProperties;
