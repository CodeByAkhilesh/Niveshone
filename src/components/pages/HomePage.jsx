import React from 'react'
import Navbar from '../Navbar'
import HeroSection from './HeroSection'
import OurPartnerAMCs from './OurPartnerAMCs'
import Services from './Services'
import GoalsSection from './GoalsSection'
import AppPreviwe from './AppPreview'
import FaqSection from '../FaqSection'
import Footer from '../Footer'

const HomePage = () => {
  return (
    <div>
       <Navbar />
      <HeroSection />
      <OurPartnerAMCs />
      <Services />
      <GoalsSection />
      <AppPreviwe />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default HomePage
