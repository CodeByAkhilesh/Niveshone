import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/pages/HeroSection'
import OurPartnerAMCs from './components/pages/OurPartnerAMCs'
import Services from './components/pages/Services'

function App() {
  return (
    <div className='main-scroll bg-black min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <OurPartnerAMCs/>
      <Services/>
    </div>
  )
}

export default App
