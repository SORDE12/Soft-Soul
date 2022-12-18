import React from 'react'
import NavbarAll from '../Components/Navbar/BottomNav'
import Navbar1 from '../Components/Navbar1/Navbar1'
import Service from '../Components/Service'
import UpperDiv from '../Components/UpperDiv'
import Data from '../Components/Data'
import Logo from '../Components/Logo'
import Growing from '../Components/Growing'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar1/>
      <div style={{marginTop:"75px"}}>
      <NavbarAll/>
      <UpperDiv/>
      <Service/>
      <Data/>
      <Logo/>
      <Growing/>
      <Footer/>
      </div>
      
      
    </div>
  )
}

export default Home