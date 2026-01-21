import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import OurPartnerAMCs from "../components/landing/OurPartnerAMCs";
import Services from "../components/landing/Services";
import GoalsSection from "../components/landing/GoalsSection";
import AppPreviwe from "../components/landing/AppPreview";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/layout/Footer";

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
  );
};

export default HomePage;
