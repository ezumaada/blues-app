import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AboutSection from '../../components/aboutsection/AboutSection'
import Vision from '../../components/vision/Vision'
import OurStory from '../../components/ourstory/OurStory'
import OurTeam from '../../components/ourteam/OurTeam'
import Reviews from '../../components/reviews/Reviews'
import Updates from '../../components/updates/Updates'

const AboutPage = () => {
  return (
    <div>
       <Navbar/>
       <AboutSection/>
       
       <Vision/>
       <OurStory/>
       <OurTeam/>
       <Reviews/>
       <Updates/>
       <Footer/> 

    </div>
  )
}

export default AboutPage