import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/pages/HeroSection'
import OurPartnerAMCs from './components/pages/OurPartnerAMCs'
import Services from './components/pages/Services'
import GoalsSection from './components/pages/GoalsSection'
import FaqSection from './components/FaqSection'
import AppPreviwe from './components/pages/AppPreview'

function App() {
  return (
    <div className='main-scroll bg-black min-h-screen pb-20'>
      <Navbar/>
      <HeroSection/>
      <OurPartnerAMCs/>
      <Services/>
      <GoalsSection/>
      <AppPreviwe/>
      <FaqSection/>
    </div>
  )
}

export default App
