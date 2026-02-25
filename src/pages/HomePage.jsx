import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import OurPartnerAMCs from "../components/landing/OurPartnerAMCs";
import Services from "../components/landing/Services";
import GoalsSection from "../components/landing/GoalsSection";
import AppPreviwe from "../components/landing/AppPreview";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Nivesh One Financial Services | Mutual Fund Distributor</title>
        <meta
          name="description"
          content="Nivesh One Financial Services offers mutual fund investment solutions, financial planning, and wealth management services."
        />
        <meta
          name="keywords"
          content="Mutual Fund, Investment, Financial Planning, SIP, Wealth Management"
        />
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <OurPartnerAMCs />
      <Services />
      <GoalsSection />
      <AppPreviwe />
      <FaqSection />
      <Footer />
    </>
  );
};

export default HomePage;
