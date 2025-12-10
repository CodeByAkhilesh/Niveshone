import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/pages/HeroSection'
import OurPartnerAMCs from './components/pages/OutPartnerAMCs'

function App() {
  return (
    <div className='main-scroll bg-black min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <OurPartnerAMCs/>
    </div>
  )
}

export default App
