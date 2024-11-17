import React from 'react';
import Image1 from '../../assets/images/search.png';
import Image2 from '../../assets/images/eyepic.png';
import Image3 from '../../assets/images/dollarbag.png';
import Image4 from '../../assets/images/consultimg.png';
import Image5 from '../../assets/images/transactionimg.png';
import Image6 from '../../assets/images/custsupport.png';

const Homemain = () => {
  const Thing = (props) => {
    return (
      <div className='flex flex-col gap-4 items-start border-solid border-2 border-indigo-600 p-6'>
        <div>
          <img className='w-[60px] h-[60px]' src={props.img} alt="" />
        </div>
        <div>
          <h3 className='text-black font-bold'>{props.title}</h3>
          <p className='text-black'>{props.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='p-6'>
      {/* First Row: Horizontal Layout */}
      <div className='flex flex-col sm:flex-row gap-6 justify-between w-full sm:max-w-screen-xl mx-auto'>
        <Thing 
          img={Image1} 
          title="Property Search" 
          text="Browse through our extensive database of property listings to find homes, apartments, commercial spaces, or investment properties that match your criteria." 
        />
        <Thing 
          img={Image2} 
          title="In-Person Property Viewings" 
          text="Arrange and attend in-person property viewings with our real estate agents to see the shortlisted properties in person and assess them firsthand." 
        />
        <Thing 
          img={Image3} 
          title="Property Valuation" 
          text="Receive professional property valuation services to understand the market value of your property." 
        />
      </div>

      {/* Second Row: Horizontal Layout */}
      <div className='flex flex-col sm:flex-row gap-6 justify-between w-full sm:max-w-screen-xl mx-auto mt-6'>
        <Thing 
          img={Image4} 
          title="Buyer Consultations" 
          text="Schedule consultations with our real estate agents to discuss home buying preferences, budget, and specific requirements." 
        />
        <Thing 
          img={Image5} 
          title="Transaction Management" 
          text="Throughout the buying or selling process, manage the documents, agreements, and communications related to your transactions on our secure platform." 
        />
        <Thing 
          img={Image6} 
          title="Customer Support" 
          text="Reach out to our dedicated customer support team for any queries, assistance, or technical support." 
        />
      </div>
    </div>
  );
};

export default Homemain;
