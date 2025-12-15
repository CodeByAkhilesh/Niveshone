import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/pages/HeroSection'
import OurPartnerAMCs from './components/pages/OurPartnerAMCs'
import Services from './components/pages/Services'
import StartsipSection from './components/pages/StartsipSection'

function App() {
  return (
    <div className='main-scroll bg-black min-h-screen pb-20'>
      <Navbar/>
      <HeroSection/>
      <OurPartnerAMCs/>
      <Services/>
      <StartsipSection/>
    </div>
  )
}

export default App
