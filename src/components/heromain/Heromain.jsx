import React from 'react';
import image3 from '../../assets/images/header2pic.png';
import blue from '../../assets/images/bluebutton.png';

const Heromain = () => {
  const Card = (props) => {
    return (
      <div className="flex flex-row gap-2 items-center">
        <div>
          <img src={props.img} alt="" />
        </div>
        <div>
          <p className="text-black">{props.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row mt-10 px-4 sm:px-8">
        {/* Left Section: Image */}
        <div className="w-full sm:w-3/6">
          <img className="w-full object-cover" src={image3} alt="" />
        </div>

        {/* Right Section: Text and Cards */}
        <div className="w-full sm:w-3/6 pl-0 sm:pl-10 flex flex-col gap-10 justify-evenly">
          <div className="border-solid border-4 py-4 justify-center border-black h-auto sm:h-[464px]">
            <div>
              <p className="font-bold text-3xl sm:text-5xl text-black">
                We offer only quality housing solutions
              </p>
            </div>
            <div>
              <p className="mt-5 text-lg sm:text-xl font-medium text-black">
                Experience a refreshing and stress-free real estate journey by
                joining the Blues community. Whether you're a first-time
                homebuyer or an experienced investor, our platform is designed to
                cater to all your needs, fostering a sense of trust, reliability,
                and convenience.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Column of Cards */}
              <div className="flex flex-col gap-4">
                <Card img={blue} text="Extensive Property Listings" />
                <Card img={blue} text="Trusted Real Estate Agents" />
                <Card img={blue} text="Seamless Rental Process" />
                <Card img={blue} text="Expert Selling Assistance" />
              </div>

              {/* Right Column of Cards */}
              <div className="flex flex-col gap-4">
                <Card img={blue} text="Exclusive Buyers Benefits" />
                <Card img={blue} text="Quality Service Providers" />
                <Card img={blue} text="Ethical Practices" />
                <Card img={blue} text="Transparent and Secure Transactions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heromain;
