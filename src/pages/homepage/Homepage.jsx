import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Heromain from '../../components/heromain/Heromain';
import Homemain from '../../components/homemain/Homemain';
import AllProperties from '../../components/allproperties/AllProperties';
import Updates from '../../components/updates/Updates';
import Reviews from '../../components/reviews/Reviews';
import Footer from '../../components/footer/Footer';
import AboutSection from '../../components/aboutsection/AboutSection';
import Vision from '../../components/vision/Vision';




const Homepage = () => {
  return (
    <div>
       <Navbar/>
      <Header/>
      <Heromain/>
      <Homemain/>
      <AllProperties/>
      <Reviews/>
      <Updates/>
      
      <Footer/>
    </div>
  )
}

export default Homepage