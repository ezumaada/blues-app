import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/homepage/Homepage'
import AboutPage from './pages/aboutpage/AboutPage';
import Properties from './pages/properties/Properties';
import ContactUs from './pages/contactus/ContactUs';
import SignIn from './pages/signin/SignIn';
import Details from './pages/details/Details';
import SignUp from './pages/signup/SignUp';
import FAQ from './pages/faq/FAQ';
import SupportPage from './pages/supportpage/SupportPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/support' element={<SupportPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App